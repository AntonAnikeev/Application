using System.Runtime.Serialization;

namespace ApiContracts
{
    [DataContract]
    public class TaskDto
    {
        [DataMember(Name = "id")]
        public string Id { get; set; }

        [DataMember(Name = "content")]
        public string Content { get; set; }
    }
}