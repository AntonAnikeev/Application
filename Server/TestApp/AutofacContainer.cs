//  Copyright (C) CompatibL Technologies LLC. All rights reserved.
//  This code contains valuable trade secrets and may be used, copied,
//  stored, or distributed only in accordance with a written license
//  agreement and with the inclusion of this copyright notice. 

using API;
using Autofac;

namespace TestApp
{
    public class AutofacContainer
    {
        public IContainer Container;
         
        public AutofacContainer()
        {
            var builder = new ContainerBuilder();
            builder.RegisterModule<ApiModule>();
            Container = builder.Build();
        }

        public T Resolve<T>()
        {
            return Container.Resolve<T>();
        }

    }
}