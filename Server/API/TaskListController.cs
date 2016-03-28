using System.Web.Http;


namespace API
{
    [RoutePrefix("api/task-lists")]
    public class TaskListController: ApiController
    {
        [Route("")]
        [HttpGet]
        public void GetAllTaskLists()
        {
            
        }
        
    }
}
