using AutoMapper;
using Rado.Dyntro.Server.Data.Entities;
using Rado.Dyntro.Server.Models;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, UserViewModel>()
            .ForMember(dest =>dest.Id, opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.FirstName))
            .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.LastName))
            .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email))
            .ForMember(dest => dest.Role, opt => opt.MapFrom(src => src.Role));

        CreateMap<UserViewModel, User>();
    }
}
