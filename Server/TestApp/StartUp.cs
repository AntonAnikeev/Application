//  Copyright (C) CompatibL Technologies LLC. All rights reserved.
//  This code contains valuable trade secrets and may be used, copied,
//  stored, or distributed only in accordance with a written license
//  agreement and with the inclusion of this copyright notice. 

using System.Web.Http;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.Owin.Cors;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using Swashbuckle.Application;

namespace TestApp
{
    class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();
            var autofacContainer = new AutofacContainer();

            //Autofac resistration
            app.UseAutofacMiddleware(autofacContainer.Container);

            //SignalR
            app.UseCors(CorsOptions.AllowAll);
            app.MapSignalR();

            //WebApi
            config.MapHttpAttributeRoutes();
            app.UseWebApi(config);

            //Swagger
            config
                .EnableSwagger(c => c.SingleApiVersion("v1", "A title for your API"))
                .EnableSwaggerUi();

            //Static Files 
            var physicalFileSystem = new PhysicalFileSystem(@"build/");
            var options = new FileServerOptions
            {
                EnableDefaultFiles = true,
                FileSystem = physicalFileSystem
            };
            options.StaticFileOptions.FileSystem = physicalFileSystem;
            options.StaticFileOptions.ServeUnknownFileTypes = true;
            options.DefaultFilesOptions.DefaultFileNames = new[]
            {
                "index.html"
            };

            app.UseFileServer(options);
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