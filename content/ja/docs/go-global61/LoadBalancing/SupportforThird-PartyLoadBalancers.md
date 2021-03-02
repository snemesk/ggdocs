---
title: "Support for Third-Party Load Balancers"
linkTitle: ""
weight: 07
type: "docs"
---

GO-Global's new Farm Host and Farm Manager roles make it easy for administrators to manage farms of GO-Global Application Hosts that are accessed via third-party load balancers. Using these roles, administrators can manage and shadow sessions running across a farm, and they can configure settings on all Farm Hosts in a farm at once. And when new Farm Hosts join a farm,they automatically inherit the settings of the other hosts in the farm.

In addition, these new roles enable users who connect to GO-Global Hosts via third-party load balancers to disconnect from their sessions from one device, and reconnect to their sessions from a different device. GO-Global automatically reconnects users to their sessions, even when the load balancer fails to connect a user to the host on which the user’s session is running. For example, if a user with a session running on Host A disconnects from the session while at work, goes home, and then reconnects to the session from a home computer, GO-Global will ensure that the user is reconnected to his or her session. If the load balancer routes the user's connection to Host B, Host B will open a connection to Host A and relay the data between the GO-Global AppController and Host A.

### To enable these capabilities:

1. Create a GO-Global Farm Manager:<br>
	a. Install the GO-Global Host on a computer that is **not** connected to the third-party load balancer.<br>
	b. Run the Admin Console and set the Server Role to **Farm Manager.** <br>
	c. Restart the **Application Publishing Service.** <br>
2. On each GO-Global Application Host that is accessible from the load balancer:<br>
	a. Run the Admin Console and set the Server Role to Farm Host.<br>
	b. Enter the address of the Farm Manager configured in step 1 in the **Farm Manager address** field.<br>
	c. Restart the **Application Publishing Service.**<br>

Administrators can provide High Availability for a farm by configuring a failover Farm Manager as follows:

1. Create a failover Farm Manager:<br>
	a. Install the GO-Global Host on another computer that is not connected to the third-party load balancer.<br>
	b. Run the Admin Console and set the Server Role to **Farm Manager.** <br>
	c. Restart the **Application Publishing Service.** <br>
2. On each GO-Global Application Host that is accessible from the load balancer:<br>
	a. Run the Admin Console and append a semicolon and the address of the failover Farm Manager to the address of the primary Farm Manager in the **Farm Manager address** field.<br>
	b. Restart the **Application Publishing Service.** <br>

The new Farm Manager and Farm Host server roles are supported by the same infrastructure and design that has supported the GO-Global Relay Server and Dependent Host roles for many years.Unlike a Relay Server, however, a Farm Manager does not relay data between GO-Global clients and hosts and is, therefore, not subject to the same scalability limits as a Relay Server. A Farm Manager keeps track of all sessions running in a farm, but unless an administrator is shadowing a session, no data from applications running in a session passes through the Farm Manager.

![5-7-1](/img/5-7-1.png)