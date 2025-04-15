using Rado.Dyntro.Server.Models;

namespace Rado.Dyntro.Server.Models
{
    public class MessageViewModel
    {
        public int Id { get; set; }
        public string? Content { get; set; }
        public DateTime? CreatedAt { get; set; }
        public List<AttachmentViewModel>? Attachments { get; set; }
        public UserViewModel? Sender { get; set; }
        public UserViewModel? Recipient { get; set; }
        public int OrderId { get; set; }
    }
}
