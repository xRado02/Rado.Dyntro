using Rado.Dyntro.Server.Featuers.Attachment.ViewModel;
using Rado.Dyntro.Server.Featuers.User.ViewModel;

namespace Rado.Dyntro.Server.Featuers.Message.ViewModel
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
