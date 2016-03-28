using System.Reflection;
using Autofac;
using Autofac.Integration.WebApi;
using Module = Autofac.Module;

namespace API
{
    public class ApiModule: Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(ThisAssembly).AsImplementedInterfaces();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
        }
         
    }
}
