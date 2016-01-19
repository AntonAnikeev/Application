using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalR
{
    [HubName("msg")]
    public class MessageHub : Hub
    {
        public Task Send(dynamic message)
        {
            return Clients.All.SendMessage(message);
        }

        public void Register(long userId)
        {
            Groups.Add(Context.ConnectionId, userId.ToString(CultureInfo.InvariantCulture));

        }

        public Task ToGroup(dynamic id, string message)
        {
            return Clients.Group(id.ToString()).SendMessage(message);
        }
    }

    public class MyHub : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.addMessage(name, message);
        }
    }

}

