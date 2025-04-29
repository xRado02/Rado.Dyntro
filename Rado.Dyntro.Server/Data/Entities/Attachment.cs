using System.ComponentModel.DataAnnotations;

namespace Rado.Dyntro.Server.Data.Entities
{
    public class Attachment
    {
        public int Id { get; set; }
        public string FileName { get; set; } = null!;
        public string FileUrl { get; set; } = null!;      
        public Guid MessageId { get; set; }
        public Message Message { get; set; } = null!;
    }

}
