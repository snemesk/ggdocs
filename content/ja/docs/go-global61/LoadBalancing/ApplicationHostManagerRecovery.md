---
title: "Application Host Manager Recovery"
linkTitle: ""
weight: 10
type: "docs"
---
The Application Publishing Service can be configured to automatically restart if the service fails. For example, if the Application Publishing Service stops on a Relay Load Balancer, clients are disconnected but sessions continue to run on the Dependent Hosts that were connected to the Relay Load Balancer. These Dependent Hosts will attempt to reconnect to the Relay Load Balancer every 15 seconds. When a Dependent Host reconnects to the Relay Load Balancer, it re-adds its sessions to the Relay Load Balancer and restores any state information associated with the disconnected sessions. Clients are then able to reconnect to their sessions.<br>

By default, clients automatically attempt to reconnect to the Application Host Manager 5 times. In order to provide higher service availability, a failover Application Host Manager can be configured.

### To configure a Failover Application Host Manager 

1. Install the GO-Global Host on a separate computer, on the same network as the Application Host Manager. This computer will be the failover Application Host Manager. All clients and Dependent Hosts (or Farm Managers) must be able to connect to the failover Application Host Manager.If clients connect to the cluster from the internet, the failover Application Host Manager must have a public address.
2. Configure the GO-Global Host to run as an Application Host Manager:<br>
	a. Run the **Admin Console** on the computer.<br>
	b. Click Tools | Host Options.<br>
	c. Click the **Configuration tab.** <br>
	d. Click **Application Host Manager.** <br>
	e. If the primary Application Host Manager is a Relay Load Balancer, click **Relay Load Balancer.** If the primary Application Host Manager is a **Farm Manager,** click Farm Manager.<br>
	f. Click **OK.** <br>
	g. Restart the **Application Publishing Service.** <br>
3. Export the published applications from the primary Application Host Manager and import them into the failover Application HostManager:<br>
	a. On the primary Application Host Manager, run Regedit as administrator.<br>
	b. Select the following registry key:`\HKEY_LOCAL_MACHINE\GraphOn\GO-Global\AppServer`<br>
	c. Click **File | Export…** <br>
	d. Type a name for the file (e.g., Appserver.reg).<br>
	e. Click **Save.** <br>
	f. Copy the file to the failover Application Host Manager.<br> 
    	g. Double-click the file.<br>
	h. Click **Yes** to import the file.<br>
	i. Click **OK.** <br>
4. Configure each Dependent Host so it will connect to the failover Relay Load Balancer when it is unable to connect to the primary Relay Load Balancer:<br>
	a. Run the Admin Console<br>
	b. Click Tools | Host Options.<br>
	c. Click the **Configuration** tab.<br>
	d. Enter the addresses of both Relay Load Balancers in the **Relay Load Balancer address** field, with their fully-qualified domain names. Enter the address of the primary Relay Load Balancer first, followed by a semi-colon, followed by the address of the failover Relay Load Balancer. For example: primary_relay_loadbalancer.graphon.com;failover_relay_load_balancer.graphon.com<br>
	e. Click **OK.** <br>
5. Specify the addresses of both the primary and the failover Relay Load Balancers in the URLs and shortcuts that are used to start the clients:<br>
	a. Provide users that connect via a browser with an HTML page or URL that sets the **host** parameter to the address of the primary relay server, followed by a semicolon, followed by the address of the failover relay server (e.g.,host=primary_relay_load-balancer_address;failover_relay_load_balancer_address).<br>
	b. Provide users that connect via an installed client, with a shortcut that sets the **–h** command line argument equal to the address of the primary relay server, followed by a semi-colon, followed by the address of the failover relay server (e.g., -h primary_relay_load_balancer_address;failover_relay_load_balancer_address).<br>

In this configuration, if the primary Relay Load Balancer fails for any reason, dependent hosts and clients automatically reconnect to the failover server and users are generally reconnected to their sessions within 1-2 minutes of the primary Relay Load Balancer failure. This is illustrated in the diagram below.

![5-10-1](/img/5-10-1.png) 

Similiarly, in a Farm Manager configuration, if the Farm Manager fails for any reason, Farm Hosts and clients automatically reconnect to the failover Farm Manager and users are generally reconnected to their sessions within 1-2 minutes of the Farm Manager failure. This is illustrated in the diagram below.<br>

![5-10-2](/img/5-10-2.png) 
If users’ sessions fail to reconnect automatically, increase the value of the autoreconnect parameter in client URLs, web pages and shortcuts to a number greater than 5 (the default).<br>

When the failover Relay Load Balancer is active (i.e., when Dependent Hosts are connected to the failover Relay Load Balancer, users’ sessions will take longer to start. For this reason, the primary Relay Load Balancer should be re-activated when it comes back online. To re-activate the primary Relay Load Balancer, terminate the aps.exe process on the failover Relay Load Balancer using Task Manager at a time when users are unlikely to be connected to the cluster. When the aps.exe process is terminated on the failover Relay Load Balancer, Dependent Hosts and clients will reconnect to the primary Relay Load Balancer. Then, after the cluster’s Dependent Hosts have reconnected to the primary Relay Load Balancer, restart the Application Publishing Service on the failover Relay Load Balancer.<br>
{{% alert title="参照" color="info" %}}
When the **Application Publishing Service** is stopped or restarted on a Relay Load Balancer via **Services,** GO-Global closes all the sessions that are running on the Relay Load Balancer's dependent hosts. Therefore, if you need to re-activate a primary Relay Load Balancer when there are sessions running on the cluster's dependent hosts, don't restart the Application Publishing Service on the failover Relay Load Balancer via Services; instead, terminate the aps.exe process on the failover Relay Load Balancer using Task Manager, as described above.
{{% /alert %}}
