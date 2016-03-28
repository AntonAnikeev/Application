using System.Collections.Generic;

namespace ApiContracts
{
    public class TaskListDto
    {
        public string Id { get; set; }

        public string  Name { get; set; }

        public int TaskNumber { get; set; }

        public List<TaskDto> Tasks { get; set; }
    }
}
