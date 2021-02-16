---
title: "Load Balancing"
linkTitle: ""
weight: 01
type: "docs"
---

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。負荷分散設定を行いたい場合はkitASP作成の拡張パッケージGGEasyMonitorの項を参照ください。
{{% /alert %}}

Load balancing allows GO-Global sessions to be distributed across multiple hosts. Load balancing is required when the host resource requirements for a deployment exceed the capacity of a single host computer. Load balancing is done automatically and is transparent to the user. GOGlobal can also be used with any third party TCP/IP based load-balancing service.

### Load Balancing Requirements

* A GO-Global Host must be installed on each of the hosts in the cluster.
* For Web deployment, if the load balancer is balancing connections to both the Web server (e.g., port 80) and the GO-Global Host (e.g., port 491), each of the GO-Global Hosts in the Admin Console have a Web server running and the Web server home directory should contain the GO-Global Web files. If the load balancer is only balancing connections to the GO-Global Host, the GO-Global Web files do not need to be located on each GO-Global Host. Web files can be installed on the machine running the Web server.
* If an application saves any user specific settings in the registry (e.g., Microsoft Word), it is strongly recommend that users operate with roaming profiles rather than local profiles.Since there is no way of predicting which server the user will actually be logged onto in a balanced server farm, working with roaming profiles is the only way to ensure that user specific settings are available to the user at all times.

A GO-Global Host can be configured to operate as an independent host, a dependent host, or as a Relay Load Balancer. Please note that a Relay Load Balancer cannot be an application host.

When setting up a load-balanced Relay Load Balancer configuration, GraphOn recommends using a license server. For more information, see the following sections from Chapter 2: [**Configuring GO-Global to use a Central License Server**](/docs/go-globalrc61/configuringthehost/configuringgo-globaltouseacentrallicenseserver/) , [**Three-Server Redundancy**](/docs/go-globalrc61/configuringthehost/redundantlicenseservers/#three-server-redundancy) , and [**License-File List Redundancy.**](/docs/go-globalrc61/configuringthehost/redundantlicenseservers/#license-file-list-redundancy)

## Independent Hosts

Independent hosts are GO-Global Hosts that do not interact with other GO-Global Hosts running on the network. Independent hosts appear in the Admin Console on the first level of the GO-Global Hosts tree view as an independent node. The GO-Global setup program configures GO-Global Hosts to operate as independent hosts. GO-Global clients can connect to independent hosts directly by specifying the name or IP address of the server in the **Connection** dialog or the location box of a Web browser. Clients can also connect to independent hosts through a third party network load balancer that distributes client connections among several servers. However, session reconnect is not supported in the latter configuration and must be disabled.

## GO-Global Hosts

![7-1-1](/img/7-1-1.png) 

## Relay Load Balancers

A Relay Load Balanceris a GO-Global Host that provides centralized control over one or more hosts. Relay Load Balancers maintain client connections and distribute GO-Global sessions across a set of load-balanced application hosts. Relay Load Balancers appear in the Admin Console on the first level of the list of All Hosts as nodes with one or more Dependent Hosts.

### To configure a GO-Global Host to operate as a Relay Load Balancer

1. Select the desired host from the list of **All Hosts.**
2. Click Tools | Host Options.
3. Click the **Configuration**tab.
4. Type the name or IP address of the computer in the **Relay Load Balancer address** box.
5. Click **OK.**
6. A message box is displayed indicating that the change will not take effect until the **GO-Global Application Publishing Service** on the Relay Load Balancer has been restarted. Click **OK.**
7. Stop and restart the **GO-Global Application Publishing Service** from the Services option in the Control Panel.

After configuring a host to run as a Relay Load Balancerwith one or more dependent hosts, GO-Global load-balances client connections and ensures that sessions start successfully. If a session fails to start on the selected host, the Relay Load Balancer selects another host and tries again until it finds one that can support the session.

When setting up a Relay Load Balancer environment, be sure the same **Log Folder** path for the Relay Load Balancerexists on the dependent hosts. Otherwise, the **Sign In** dialog will not appear when users attempt to sign in to GO-Global. Create a log directory on the C: drive of each Relay Load Balancer (e.g.,`C:\Data\APS_LOGS`) or use `C:\Program Files\GraphOn\GO-Global\Log` which already exists on the dependent host.Make sure this same path exists on the dependent host. In addition to changing the **Log Folder** path in the Admin Console, the `\Log\Codes` and `\Log\Templates` directories must be copied to the new location.

{{% alert title="参照" color="info" %}}
When a Relay Load Balanceris selected in the Admin Console, the number of processes running on all dependent hosts is not listed in the Admin Console's status bar.
{{% /alert %}}

A Relay Load Balancerrequires a minimum of 512MB of RAM. For most deployments and for best results, 1GB with a multiprocessor server is recommended. Depending on the number of dependent hosts attached to the Relay Load Balancer, more RAM may be required.

Memory and CPU requirements for the dependent hosts are determined by the applications that are published and the number of users accessing the system. In general, a dependent host can support 12 "heavy" users/500 MHz CPU and 25 "light" users/500 MHz CPU. ("Heavy" is defined as a user running one or more large applications with continuous user interaction. "Light" is defined as a user running one application with intermittent user interaction.)

## Dependent Hosts

A dependent host is a GO-Global Host that is connected to a Relay Load Balancer. GO-Global clients cannot connect directly to dependent hosts. Instead, they connect to the associated Relay Load Balancer, and the Relay Load Balancer selects one of the connected servers to host the session.

### To configure a GO-Global Host to operate as a dependent host

1. Select the desired host from the list of **All Hosts.**
2. Click Tools | Host Options.
3. Click the **Configuration** tab.
4. Click **Application Host.**
5. Click **Dependent Host.**
6. Type the name or IP address of the Relay Load Balancer in **Relay Load Balancer address** edit box.
7. Click **OK.**
8. A message box is displayed indicating that the change will not take effect until the **Application Publishing Service** has been restarted. Click **OK.**
9. Stop and restart the **GO-Global Application Publishing Service** from the Services option in the Control Panel.

When the Application Publishing Service is restarted, the dependent host will appear beneath the Relay Load Balancer in the Admin Console's list of GO-Global Hosts. A dependent host with a yellow x indicates that the host has been "orphaned;" in other words, that its Relay Load Balancer has gone down. If a host's icon has a red X, the administrator does not have administrative rights on the host. If the host's icon has a red X and is grayed out, the host is no longer running the Application Publishing Service or it has been turned off. In either case, the administrator is unable to access that host from the Admin Console.

Users are authenticated on dependent hosts, not on Relay Load Balancers. As a result, dependent hosts can be located on a different network than their associated Relay Load Balancer. For example, dependent hosts can be located behind a firewall on an internal, Active Directory network, and the associated Relay Load Balancer can be located in a demilitarized zone(DMZ)that is outside the firewall. If **Integrated Windows authentication** is used, clients and dependent hosts must be located on the same domain, but the Relay Load Balancer can be located on a different domain.

{{% alert title="参照" color="info" %}}
We recommend installing the same set of applications on each dependent host and using the same installation path.
{{% /alert %}}

![7-1-2](/img/7-1-2.png)

