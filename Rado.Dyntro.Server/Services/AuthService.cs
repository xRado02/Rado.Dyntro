﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace Rado.Dyntro.Server.Services
{
    public class AuthService(AppDbContext context, IConfiguration configuration) : IAuthService
    {
        public async Task<TokenResponseViewModel> LoginAsync(UserAuthViewModel request)
        {
            var user = await context.UsersAuth.FirstOrDefaultAsync(user => user.Email == request.Email);
            if (user is null)
            {
                return null; 
            }
           
            if (new PasswordHasher<UserAuth>().VerifyHashedPassword(user, user.PasswordHash, request.Password) == PasswordVerificationResult.Failed)
            {
                return null;
            }
            else
            {
                TokenResponseViewModel response = await CreateTokenResponse(user);
                return response;
            }
        }

        private async Task<TokenResponseViewModel> CreateTokenResponse(UserAuth? user)
        {
            return new TokenResponseViewModel
            {
                AccesToken = CreateToken(user),
                RefreshToken = await GenerateAndSaveRefreshTokenAsync(user),
            };
        }

        public async Task<UserAuth> RegisterAsync(UserAuthViewModel request)
        {
            if (await context.UsersAuth.AnyAsync(u => u.Email == request.Email))
            {
                return null;
            }

            var user = new UserAuth();
            var hashedPassword = new PasswordHasher<UserAuth>()
             .HashPassword(user, request.Password);

            user.Email = request.Email;
            user.PasswordHash = hashedPassword;

            context.UsersAuth.Add(user);
            await context.SaveChangesAsync();

            return user;
        }

        private string CreateToken(UserAuth user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Role, user.Role),
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(configuration.GetValue<string>("AppSettings:Token")!));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var tokenDescriptor = new JwtSecurityToken(
                issuer: configuration.GetValue<string>("AppSettings:Issuer"),
                audience: configuration.GetValue<string>("AppSettings:Audience"),
                claims: claims,
                expires: DateTime.UtcNow.AddDays(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }

        private string GenerateRefreshToken()
        {
            var randomNumber = new byte[32];
            using var rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);
            return Convert.ToBase64String(randomNumber);
        }

        private async Task<string> GenerateAndSaveRefreshTokenAsync(UserAuth user)
        {
            var refreshToken = GenerateRefreshToken();
            user.RefreshToken = refreshToken;
            user.RefreshTokenExpiryTime = DateTime.UtcNow.AddDays(7);
            await context.SaveChangesAsync();
            return refreshToken;
        }

        private async Task<UserAuth?> ValidateRefreshTokenAsync(Guid userId, string refreshToken)
        {
            var user = await context.UsersAuth.FindAsync(userId);
            if (user is null || user.RefreshToken != refreshToken || user.RefreshTokenExpiryTime <= DateTime.UtcNow)
            {
                return null;
            }
            return user;
        }

        public async Task<TokenResponseViewModel?> RefreshTokenAsync(RefreshTokenRequestViewModel request)
        {
            var user = await ValidateRefreshTokenAsync(request.UserId, request.RefreshToken);
            if(user is null)
            {
                return null;
            }
            return await CreateTokenResponse(user);
        }
    }
}
