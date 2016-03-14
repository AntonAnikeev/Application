//  Copyright (C) CompatibL Technologies LLC. All rights reserved.
//  This code contains valuable trade secrets and may be used, copied,
//  stored, or distributed only in accordance with a written license
//  agreement and with the inclusion of this copyright notice. 

using System.Web.Http;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin.Cors;
using Owin;

namespace TestApp
{
    class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            //SignalR
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();

            //WebApi
            config.MapHttpAttributeRoutes();
            app.UseWebApi(config);
        }
    }

    [HubName("msg")]
    public class MyHub : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.addMessage(name, message);
        }
    }

}