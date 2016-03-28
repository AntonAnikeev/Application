using System.Collections.Generic;
using System.Runtime.Serialization;

namespace ApiContracts
{
    [DataContract]
    public class TaskListDto
    {
        [DataMember(Name = "id")]
        public string Id { get; set; }

        [DataMember(Name = "name")]
        public string  Name { get; set; }

        [DataMember(Name = "taskNumber")]
        public int TaskNumber { get; set; }

        [DataMember(Name = "tasks")]
        public List<TaskDto> Tasks { get; set; }
    }
}
