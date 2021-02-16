---
title: "Load Balancing"
linkTitle: ""
weight: 1
type: "docs"
---

>本項目の設定は推奨設定ではございませんのでご注意ください。負荷分散設定を行いたい場合はkitASP作成の拡張パッケージGGEasyMonitorの項を参照ください。

Load balancing allows GO-Global sessions to be distributed across multiple hosts. Load balancing is required when the host resource requirements for a deployment exceed the capacity of a single host computer. Load balancing is done automatically and is transparent to the user. GOGlobal can also be used with any third party TCP/IP based load-balancing service.

### Load Balancing Requirements

* A GO-Global Host must be installed on each of the hosts in the cluster.
* For Web deployment, if the load balancer is balancing connections to both the Web server (e.g., port 80) and the GO-Global Host (e.g., port 491), each of the GO-Global Hosts in the cluster must have a Web server running and the Web server home directory should contain the GO-Global Web files. If the load balancer is only balancing connections to the GO-Global Host, the GO-Global Web files do not need to be located on each GOGlobal Host. Web files can be installed on the machine running the Web server.
* If an application saves any user specific settings in the registry, (e.g., Corel WordPerfect, Microsoft Word, etc.) we strongly recommend that users operate with roaming profiles rather than local profiles. Since there is no way of predicting which server the user will actually be logged onto in a balanced server farm, working with roaming profiles is the only way to ensure that user specific settings are available to the user at all times.

A GO-Global Host can be configured to operate as an independent host, a dependent host, or as a relay server. Please note that a relay server cannot be an application host. When setting up a load-balanced relay server configuration, GraphOn recommends using a license server. For more information, see the following sections from Chapter 2: [**Configuring GOGlobal to use a Central License Server**](https://kitasp-goglobal.gitbook.io/kitasp-documentaion/~/edit/drafts/-L_fpq0Q-h3OMQTw08rI/go-global-5/sbano/raisensu-sbawosurutameno-go-global-no) **,** [**Three-Server Redundancy**](https://kitasp-goglobal.gitbook.io/kitasp-documentaion/~/drafts/-L_fpq0Q-h3OMQTw08rI/primary/go-global-5/sbano/raisensu-sba/sba-3-no), and [**License-File List Redundancy.**](https://kitasp-goglobal.gitbook.io/kitasp-documentaion/go-global-5/sbano/raisensu-sba/raisensu-fuiruno) **​**

## Independent Hosts

Independent hosts are GO-Global Hosts that do not interact with other GO-Global Hosts running on the network. Independent hosts appear in the Cluster Manager on the first level of the GO-Global Hosts tree view as an independent node. The GO-Global setup program configures GO-Global Hosts to operate as independent hosts. GO-Global clients can connect to independent hosts directly by specifying the name or IP address of the server in the **Connection** dialog or the location box of a Web browser. Clients can also connect to independent hosts through a third party network load balancer that distributes client connections among several servers. However, session reconnect is not supported in the latter configuration and must be disabled.

**GO-Global Hosts**

![6-1-1](/image5/6-1-1.png)

## Relay Servers

A relay server is a GO-Global Host that provides centralized control over one or more GO-Global Hosts. Relay servers maintain client connections and distribute GO-Global sessions across a set of load-balanced application hosts. Relay servers appear in the Cluster Manager on the first level of the list of All Hosts as nodes with one or more dependent hosts.

### To configure a GO-Global Host to operate as a relay server

1. Select the desired host from the list of **All Hosts.**
2. Click Tools | Host Options.
3. Click the **General**tab.
4. Type the name or IP address of the computer in the **Relay server** box.
5. Click **OK.**
6. A message box is displayed indicating that the change will not take effect until the **GO-Global Application Publishing Service** on the relay server has been restarted. Click OK.
7. Stop and restart the **GO-Global Application Publishing Service** from the Services option in the Control Panel.

After configuring a host to run as a relay server with one or more dependent hosts, GO-Global load-balances client connections and ensures that sessions start successfully. If a session fails to start on the selected host, the relay server selects another host and tries again until it finds one that can support the session.

>When setting up a relay server environment, be sure the same **Log Folder** path for the relay server exists on the dependent hosts. Otherwise, the **Sign In** dialog will not appear when users attempt to sign in to GO-Global. Create a log directory on the C: drive of each relay server (e.g., C:\Data\APS_LOGS) or use C:\Program Files\GraphOn\GO-Global\Log which already exists on the dependent host.
>
>Make sure this same path exists on the dependent host. In addition to changing the **Log Folder** path in the Cluster Manger, the \Log\Codes and \Log\Templates directories must be copied to the new location.
>
>When a relay server is selected in the Cluster Manager, the number of processes running on all dependent hosts is not listed in the Cluster Manager's status bar.

A relay server requires a minimum of 512 MB of RAM. For most deployments and for best results, 1 GB with a multiprocessor server is recommended. Depending on the number of dependent hosts attached to the relay server, more RAM may be required. Memory and CPU requirements for the dependent hosts are determined by the applications that are published and the number of users accessing the system. In general, a dependent host can support 12 "heavy" users/500 MHz CPU and 25 "light" users/500 MHz CPU. ("Heavy" is defined as a user running one or more large applications with continuous user interaction. "Light" is defined as a user running one application with intermittent user interaction.)

## Dependent Hosts

A dependent host is a GO-Global Host that is connected to a relay server. GO-Global clients cannot connect directly to dependent hosts. Instead, they connect to the associated relay server, and the relay server selects one of the connected servers to host the session.

### To configure a GO-Global Host to operate as a dependent host

1. Select the desired host from the list of **All Hosts.**
2. Click Tools | Host Options.
3. Click the **General** tab.
4. Type the name or IP address of the relay server in **Relay server** edit box.
5. Click **OK.**
6. A message box is displayed indicating that the change will not take effect until the **Application Publishing Service** has been restarted. Click **OK.**
7. Stop and restart the **GO-Global Application Publishing Service** from the Services option in the Control Panel.

When the Application Publishing Service is restarted, the dependent host will appear beneath the relay server in the Cluster Manager's list of GO-Global Hosts. A dependent host with a yellow x indicates that the host has been "orphaned;" in other words, that its relay server has gone down. If a host's icon has a red X, the administrator does not have administrative rights on the host. If the host's icon has a red X and is grayed out, the host is no longer running the Application Publishing Service or it has been turned off. In either case, the administrator is unable to access that host from the Cluster Manager.

Users are authenticated on dependent hosts, not on relay servers. As a result, dependent hosts can be located on a different network than their associated relay server. For example, dependent hosts can be located behind a firewall on an internal, Active Directory network, and the associated relay server can be located in a demilitarized zone (DMZ) that is outside the firewall. If **Integrated Windows authentication** is used, clients and dependent hosts must be located on the same domain, but the relay server can be located on a different domain.

>We recommend installing the same set of applications on each dependent host and using the same installation path.

## Administering Relay Servers and Dependent Hosts on Different Networks

When a user starts the Cluster Manager on a relay server or a dependent host, the Cluster Manager connects to the relay server and attempts to authenticate the user using Integrated Windows authentication. If the Cluster Manager is running on a dependent host and the associated relay server is located on a different network, a message such as the following is displayed:

_Failed to log you on to Server8. This computer (Server4) and Server 8 may be located on different networks. Would you like to log onto Server 8 and administer it remotely?_

Clicking **No**will return you to the **All Hosts** node of the Cluster Manager. Clicking **Yes** will initiate a special remote administration session on the relay server as follows:

1. The Cluster Manager on the dependent host starts the GO-Global Client.
2. The client connects to the relay server and starts a session. The **Sign In**dialog is displayed to the user.
3. The user signs in, specifying the user name and password of an account that is a member of the Administrators group on the relay server.
4. The Cluster Manager starts on the relay server. The user can now administer the relay server and all of its dependent hosts.
5. A maximum of two administration sessions can run on the relay server at any given time, regardless of the **Maximum sessions on this host** setting in the Cluster Manager and regardless of license restrictions.

Dependent hosts inherit their list of published applications, server settings, and user settings from the relay server. Applications must be installed in the same directory on all dependent hosts. Applications do not need to be installed on the relay server. When a GO-Global Host is connected to a relay server all of its server settings are synchronized with those of the relay server. When any changes are made to the relay server's settings, they are also made to **All Hosts** connected to that relay server. The only settings that are allowed to vary are the maximum number of sessions and the name of the relay server. All other settings in the **Host Options** and **Application Properties** dialogs are grayed out and cannot be modified.

When setting up a relay server, if an application is installed but not published on the dependent host, you will need to publish the application on the relay server through the Cluster Manager. For example, if Adobe Reader 7.0 is installed on the dependent host at C:\Program Files\Adobe\Acrobat 7.0\Reader\AcroRd32.exe, open the Cluster Manager on the relay server and type this path location in the **Executable Path** box in the **Add Application** dialog.

>Before publishing an item on a mapped drive, verify that the drive is mapped to the same drive letter and location on the dependent hosts as it is on the relay server.

## Host Selection

When a client connects to a relay server, the relay server attempts to start a session on the dependent host that has the lowest number of running sessions as a percentage of the maximum number of sessions allowed for the host.

If the session fails to start on the selected host, the relay server successively attempts to start the session on other available hosts until it finds one that can support the session. If there are no available hosts (i.e., if the number of running sessions on All Hosts equals the maximum number allowed), the following message is displayed to the user:

![6-1-2](/image5/6-1-2.png)

Otherwise, if the session cannot be started on any of the available hosts, the following message is displayed to the user:

![6-1-3](/image5/6-1-3.png)

In a relay server setting, GO-Global checks the maximum sessions settings on the relay server and its dependent hosts. The maximum sessions value on the relay server is the maximum number of sessions that can be run concurrently on all dependent hosts assigned to that relay server. To modify the Maximum sessions on this host setting, open the Cluster Manager on the host, click Host Options | Session Startup.

## Relay Server Failure Recovery

On Windows hosts, the Application Publishing Service can be configured to automatically restart if the service fails. If a relay server fails, clients are disconnected but sessions continue to run on the GO-Global Hosts that were connected to the relay server. These servers will attempt to reconnect to the relay server every 15 seconds. When a dependent host reconnects to the relay server, it re-adds its sessions to the relay server and restores any state information associated with the disconnected sessions. Clients are then able to sign back in and resume their sessions. Clients do not automatically attempt to reconnect to the relay server.

In order to provide higher service availability, a failover server can be configured for the GOGlobal relay server using the Microsoft Cluster Service. In this configuration, if the relay server fails for any reason, the failover server immediately takes the place of the failed server. Application hosts automatically reconnect to the failover server, and users will generally be able to log on and reconnect to their disconnected sessions within 1-2 minutes of the relay server failure.

### Relay Server in a DMZ

A relay server in a DMZ can be separated from its dependent application servers by a firewall, with the following requirements:

* The dependent application server must be able to connect to the relay server from behind the firewall. Please note that the reverse is not required. The relay server does not need to be able to connect to the dependent application server.
* The client must be able to connect to the relay server in the DMZ.

When a session starts on a dependent application server, the dependent application server opens a connection to the relay server. When the relay server receives data from the session's clients, it forwards the data to the session over this connection. Similarly, when the relay server receives data from the session over this connection, it forwards the data to the session's clients.

The relay server generally has two network interfaces: one that is accessible from clients outside the DMZ, and one that is accessible from dependent application servers behind the firewall.

