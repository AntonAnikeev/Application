using System.Collections.Generic;
using System.Web.Http;
using ApiContracts;


namespace API
{
    [RoutePrefix("api/task-lists")]
    public class TaskListController : ApiController
    {
        [Route("")]
        [HttpGet]
        public List<TaskListDto> GetAllTaskLists()
        {
            return new List<TaskListDto>
            {
                new TaskListDto
                {
                    Id = "first",
                    Name = "FirstList",
                    TaskNumber = 2,
                    Tasks = new List<TaskDto>
                    {
                        new TaskDto
                        {
                            Id = "internal",
                            Content = "Hello World"
                        }
                    }
                }
            };
        }
    }
}
