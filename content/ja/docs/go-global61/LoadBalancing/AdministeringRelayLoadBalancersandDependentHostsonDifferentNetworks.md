---
title: "Administering Relay Load Balancers and Dependent Hosts on Different Networks
"
linkTitle: ""
weight: 09
type: "docs"
---
When a user starts the Admin Console on a Relay Load Balancer or a dependent host, the Admin Console connects to the Relay Load Balancer and attempts to authenticate the user using Integrated Windows authentication. If the Admin Console is running on a dependent host and the associated Relay Load Balancer is located on a different network, a message such as the following is displayed:<br>

_Failed to log you on to Server8. This computer (Server4) and Server 8 may be located on different networks. Would you like to log onto Server 8 and administer it remotely?_<br>

Clicking **No** will return you to the **All Hosts** node of the Admin Console. Clicking **Yes** will initiate a special remote administration session on the Relay Load Balancer as follows:<br>

1. The Admin Console on the dependent host starts the GO-Global Client.
2. The client connects to the Relay Load Balancer and starts a session. The **Sign In**dialog is displayed to the user.
3. The user signs in, specifying the user name and password of an account that is a member of the Administrators group on the Relay Load Balancer.
4. The Admin Console starts on the Relay Load Balancer. The user can now administer the Relay Load Balancer and all of its dependent hosts.
5. A maximum of two administration sessions can run on the Relay Load Balancer at any given time, regardless of the **Maximum sessions on this host** setting in the Admin Console and regardless of license restrictions.

Dependent hosts inherit their list of published applications, server settings, and user settings from the Relay Load Balancer. Applications must be installed in the same directory on all dependent hosts. Applications do not need to be installed on the Relay Load Balancer. When a GO-Global Host is connected to a Relay Load Balancer all of its server settings are synchronized with those of the Relay Load Balancer. <br>

When any changes are made to the Relay Load Balancer's settings, they are also made to **All Hosts** connected to that Relay Load Balancer. The only settings that are allowed to vary are the maximum number of sessions and the name of the Relay Load Balancer. All other settings in the **Host Options** and **Application Properties** dialogs are grayed out and cannot be modified.<br>

When setting up a Relay Load Balancer, if an application is installed but not published on the Dependent Host, you will need to publish the application on the Relay Load Balancer through the Admin Console. For example, if Adobe Reader 8.0 is installed on the Dependent Host at C:\Program Files\Adobe\Acrobat 8.0\Reader\AcroRd32.exe, open the Admin Console on the Relay Load Balancer and type this path location in the **Location** box in the **Add Application** dialog.<br>

{{% alert title="参照" color="info" %}}
Before publishing an item on a mapped drive, verify that the drive is mapped to the same drive letter and location on the dependent hosts as it is on the Relay Load Balancer.
{{% /alert %}}

# Host Selection

When a client connects to a Relay Load Balancer, the Relay Load Balancer attempts to start a session on the dependent host that has the lowest number of running sessions as a percentage of the maximum number of sessions allowed for the host.<br>

If the session fails to start on the selected host, the Relay Load Balancer successively attempts to start the session on other available hosts until it finds one that can support the session.<br>

If there are no available hosts (i.e., if the number of running sessions on All Hosts equals the maximum number allowed), GO-Global displays a message to the user:<br>
**You are already running as many sessions as you are allowed**.

Otherwise, if the session cannot be started on any of the available hosts, the following message is displayed to the user:<br>
**GO-Global failed to launch the Program Window for your session.**

In a Relay Load Balancer setting, GO-Global checks the maximum sessions settings on the Relay Load Balancer and its dependent hosts. The maximum sessions value on the Relay Load Balancer is the maximum number of sessions that can be run concurrently on all dependent hosts assigned to that Relay Load Balancer.<br>

To modify the **Maximum sessions on this host** setting, open the Admin Console on the host, click Host Options | Session Startup.<br>

# Relay Load Balancer in a DMZ

A Relay Load Balancer in a DMZ can be separated from its dependent application servers by a firewall, with the following requirements:<br>

* The dependent application server must be able to connect to the Relay Load Balancer from behind the firewall. Please note that the reverse is not required. The Relay Load Balancer does not need to be able to connect to the dependent application server.<br>
* The client must be able to connect to the Relay Load Balancer in the DMZ.<br>

When a session starts on a dependent application server, the dependent application server opens a connection to the Relay Load Balancer. When the Relay Load Balancer receives data from the session's clients, it forwards the data to the session over this connection. Similarly, when the Relay Load Balancer receives data from the session over this connection, it forwards the data to the session's clients.<br>

The Relay Load Balancer generally has two network interfaces: one that is accessible from clients outside the DMZ, and one that is accessible from dependent application servers behind the firewall.<br>

The diagram below illustrates the recommended configuration for providing access to hosts on an internal network. The arrows show the direction in which the connections are made. Hosts connect to the Relay Load Balancer, not the other way around. As a result, the internal firewall does not need to allow any connections from the DMZ to the internal network. With this configuration, neither machines on the internet nor machines in the DMZ can connect directly to the hosts on the internal network. It is a highly secure configuration.<br>

![5-9-1](/img/5-9-1.png) 

