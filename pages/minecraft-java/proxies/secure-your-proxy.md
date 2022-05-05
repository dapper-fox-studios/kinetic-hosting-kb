## Secure Your Proxy
This is an important step that is missed by a lot of users. By default, proxies are NOT secure and can be bypassed.

Let’s put this into an example.

A normal connection to your server will be as follows: Client –> Proxy –> Server
The client is authenticated on the proxy, the proxy then allows the users into the server.

Most people think this is fine as if the client tries to direct join the server, they’re blocked. However, this is not a full-proof block, and there are also other ways to bypass this.

For example, the server never checks what proxy they’re coming from. So someone could set up their own proxy, to connect to your server, thus bypassing bans or other checks you have on your proxy.

## How To Stop This – Simple
If you’re supporting newer versions of Minecraft (1.13+), then we recommend you use Velocity. It has inbuilt protection to stop people spoofing your proxy. You can find out more information here: https://velocitypowered.com/wiki/users/forwarding/

If you’re using Bungeecord or Waterfall, you have no built-in protection. So you’ll need to use this plugin: https://www.spigotmc.org/resources/bungeeguard.79601/

This will need to install on both your proxy and your server.

## How To Stop This – Hard
Both those protections will stop most attacks and will be fine for most smaller servers. However, if you’re a bigger network, you might be prone to some more sophisticated attacks. For this, the only way to know you’re 100% secure is to set up a firewall. This will block any connections that are not from your proxies IP.

If you’re using a VPS or Dedicated server, then you can head here to find out how to set up a firewall. 

If you’re not, then you’ll need to order a Dedicated IP to both your Proxy and your servers. You can then contact support to set up a firewall for you.