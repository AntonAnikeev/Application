using System;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace TestApp
{
    [RoutePrefix("api")]
    public class TestController : ApiController
    {
        [HttpGet]
        [Route("test/")]
        public async Task<string> GetRequest()
        {
            return await Task.Run(() =>
            {
                var startTime = string.Format("Start time: {0}", DateTime.Now);
                Thread.Sleep(5000);
                var endTime = string.Format("End time: {0}", DateTime.Now);
                var name = string.Format(" Thread id: {0}", Thread.CurrentThread.ManagedThreadId);
                return string.Format("Result for test2: {0}; {1}; {2}", startTime, endTime, name);
            });
        }

        [HttpGet]
        [Route("test2/")]
        public string GetRequest2()
        {
            var startTime = string.Format("Start time: {0}", DateTime.Now);
            Thread.Sleep(5000);
            var endTime = string.Format("End time: {0}", DateTime.Now);
            var name = string.Format(" Thread id: {0}", Thread.CurrentThread.ManagedThreadId);
            return string.Format("Result for test2: {0}; {1}; {2}", startTime, endTime, name);

        }

    }
}