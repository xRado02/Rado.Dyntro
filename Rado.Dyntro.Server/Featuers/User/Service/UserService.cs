using Rado.Dyntro.Server.Data.Entities;

public class UserService
{
    private readonly AppDbContext _context;

    public UserService(AppDbContext context)
    {
        _context = context;
    }

    public int GetNextUserId()
    {
        var maxId = _context.Users.Max(u => (int?)u.Id) ?? 0; 
        return maxId + 1;
    }

    public void CreateUser(User user)
    {
        //user.Id = GetNextUserId();
        _context.Users.Add(user);
        _context.SaveChanges();
    }
}
