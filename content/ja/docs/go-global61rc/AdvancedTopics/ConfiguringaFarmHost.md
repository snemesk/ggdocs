---
title: "ファームホストの構成"
linkTitle: ""
weight: 04
type: "docs"
---
ファームホストは、ファームマネージャに接続されているGO-Globalホストです。GO-Globalクライアントは、ファームホストに直接接続します。

### ファームホストを構成する方法

1. Admin Consoleで、 **[Tools | Host Options]** の順にクリックします。
2. **[Configuration]** タブをクリックします。
3. **[Application Host]** をクリックします。
4. **[Farm Host]** をクリックします。
5. **[Farm Manager address field]** フィールドに、Farm ManagerのIPアドレスを入力します。
6. **OK** をクリックします。
7. **GO-Global Application Publishing Service** を再起動します。

![7-4-1](/img/7-4-1.png) 

## License Server Configuration

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

When an independent host is configured to run as a Relay Load Balancer or a dependent host, GO-Global does not automatically make any changes to the host's licensing configuration. For example, if an independent host is configured to use the license server that is installed on the same computer as the host, the host will continue to use the computer's local license server after the host is connected to a Relay Load Balancer. This is the default configuration, but not typically the best licensing configuration. A Relay Load Balancer and its dependent hosts should all be configured to use the same license server(s).

If high-availability is not required, GraphOn recommends configuring the dependent hosts to use the license server on the Relay Load Balancer as a Central License Server. (See [**Configuring GO-Global to use a Central License Server**](/docs/go-globalrc61/configuringthehost/configuringgo-globaltouseacentrallicenseserver/) and ensure that the dependent hosts are able to connect to the license server's port on the Relay Load Balancer.)

If high-availability is required, GraphOn recommends configuring the Relay Load Balancer and its dependent hosts to use a set of [**Three-Server Redundant License Servers.**](/docs/go-globalrc61/configuringthehost/redundantlicenseservers/)

With both of these configurations, the **Licenses** tab on the Admin Console will report the same license information, regardless of which computer is selected.

Prior to version 6.1, GO-Global managed licenses from Dependent Hosts by default. With this configuration, administrators had to configure each Dependent Host to use a central license manager. Beginning with version 6.1, administrators no longer need to do this. GO-Global now manages licenses from the Relay Load Balancer by default. This enables administrators to add and remove Dependent Hosts from the Relay Load Balancer without having to make any licensing configuration changes.

{{% alert title="参照" color="info" %}}
Dependent Hosts that are upgraded to version 6.1 from older versions will continue to manage licenses from the Dependent Host. Administrators can change this after the upgrade by editing the value of the **ManageLicensesFrom** property in the **HostProperties.xml** file from Host to Relay on all the Dependent **Hosts** and the **Relay** Load Balancer.
{{% /alert %}}

## Administering Relay Load Balancers and Dependent Hosts on Different Networks

When a user starts the Admin Console on a Relay Load Balancer or a dependent host, the Admin Console connects to the Relay Load Balancer and attempts to authenticate the user using Integrated Windows authentication. If the Admin Console is running on a dependent host and the associated Relay Load Balancer is located on a different network, a message such as the following is displayed:

_Failed to log you on to Server8. This computer (Server4) and Server 8 may be located on different networks. Would you like to log onto Server 8 and administer it remotely?_

Clicking **No** will return you to the **All Hosts** node of the Admin Console. Clicking **Yes** will initiate a special remote administration session on the Relay Load Balancer as follows:

1. The Admin Console on the dependent host starts the GO-Global Client.
2. The client connects to the Relay Load Balancer and starts a session. The **Sign In**dialog is displayed to the user.
3. The user signs in, specifying the user name and password of an account that is a member of the Administrators group on the Relay Load Balancer.
4. The Admin Console starts on the Relay Load Balancer. The user can now administer the Relay Load Balancer and all of its dependent hosts.
5. A maximum of two administration sessions can run on the Relay Load Balancer at any given time, regardless of the **Maximum sessions on this host** setting in the Admin Console and regardless of license restrictions.

Dependent hosts inherit their list of published applications, server settings, and user settings from the Relay Load Balancer. Applications must be installed in the same directory on all dependent hosts. Applications do not need to be installed on the Relay Load Balancer. When a GO-Global Host is connected to a Relay Load Balancer all of its server settings are synchronized with those of the Relay Load Balancer. 

When any changes are made to the Relay Load Balancer's settings, they are also made to **All Hosts** connected to that Relay Load Balancer. The only settings that are allowed to vary are the maximum number of sessions and the name of the Relay Load Balancer. All other settings in the **Host Options** and **Application Properties** dialogs are grayed out and cannot be modified.

When setting up a Relay Load Balancer, if an application is installed but not published on the dependent host, you will need to publish the application on the Relay Load Balancer through the Admin Console. For example, if Adobe Reader 7.0 is installed on the dependent host at `C:\Program Files\Adobe\Acrobat 8.0\Reader\AcroRd32.exe,` open the Admin Console on the Relay Load Balancer and type this path **location** in the Location box in the **Add Application** dialog.

{{% alert title="参照" color="info" %}}
Before publishing an item on a mapped drive, verify that the drive is mapped to the same drive letter and location on the dependent hosts as it is on the Relay Load Balancer.
{{% /alert %}}

## Host Selection

When a client connects to a Relay Load Balancer, the Relay Load Balancer attempts to start a session on the dependent host that has the lowest number of running sessions as a percentage of the maximum number of sessions allowed for the host.

If the session fails to start on the selected host, the Relay Load Balancer successively attempts to start the session on other available hosts until it finds one that can support the session.

If there are no available hosts (i.e., if the number of running sessions on All Hosts equals the maximum number allowed), GO-Global displays a message to the user:

**You are already running as many sessions as you are allowed**.

Otherwise, if the session cannot be started on any of the available hosts, the following message is displayed to the user:

**GO-Global failed to launch the Program Window for your session.**

In a Relay Load Balancer setting, GO-Global checks the maximum sessions settings on the Relay Load Balancer and its dependent hosts. The maximum sessions value on the Relay Load Balancer is the maximum number of sessions that can be run concurrently on all dependent hosts assigned to that Relay Load Balancer.

To modify the **Maximum sessions on this host** setting, open the Admin Console on the host, click Host Options | Session Startup.

## Relay Load Balancer in a DMZ

A Relay Load Balancer in a DMZ can be separated from its dependent application servers by a firewall, with the following requirements:

* The dependent application server must be able to connect to the Relay Load Balancer from behind the firewall. Please note that the reverse is not required. The Relay Load Balancer does not need to be able to connect to the dependent application server.
* The client must be able to connect to the Relay Load Balancer in the DMZ.

When a session starts on a dependent application server, the dependent application server opens a connection to the Relay Load Balancer. When the Relay Load Balancer receives data from the session's clients, it forwards the data to the session over this connection. Similarly, when the Relay Load Balancer receives data from the session over this connection, it forwards the data to the session's clients.

The Relay Load Balancer generally has two network interfaces: one that is accessible from clients outside the DMZ, and one that is accessible from dependent application servers behind the firewall.

The diagram below illustrates the recommended configuration for providing access to hosts on an internal network. The arrows show the direction in which the connections are made. Hosts connect to the Relay Load Balancer, not the other way around. As a result, the internal firewall does not need to allow any connections from the DMZ to the internal network. With this configuration, neither machines on the internet nor machines in the DMZ can connect directly to the hosts on the internal network. It is a highly secure configuration.

![7-4-2](/img/7-4-2.png) 

## Application Host Manager Recovery

The Application Publishing Service can be configured to automatically restart if the service fails. If the Application Publishing Service stops on a Relay Load Balancer, clients are disconnected but sessions continue to run on the dependent hosts that were connected to the Relay Load Balancer. These dependent hosts will attempt to reconnect to the Relay Load Balancer every 15 seconds. When a dependent host reconnects to the Relay Load Balancer, it re-adds its sessions to the Relay Load Balancer and restores any state information associated with the disconnected sessions. Clients are then able to reconnect to their sessions. By default, clients automatically attempt to reconnect to the Relay Load Balancer 5 times. In order to provide higher service availability, a failover Relay Load Balancer can be configured.

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

![7-4-3](/img/7-4-3.png) 

If users' sessions fail to reconnect automatically, increase the value of the **autoreconnect** parameter in client URLs, web pages and shortcuts to a number greater than 5 (the default).

When the failover Relay Load Balancer is active (i.e., when dependent hosts are connected to the failover Relay Load Balancer), users' sessions will take longer to start. For this reason, the primary Relay Load Balancer should be re-activated when it comes back online. To re-activate the primary Relay Load Balancer, terminate the aps.exe process on the failover Relay Load Balancer using Task Manager at a time when users are unlikely to be connected to the cluster. When the aps.exe process is terminated on the failover Relay Load Balancer, dependent hosts and clients will reconnect to the primary Relay Load Balancer. Then, after the cluster's dependent hosts have reconnected to the primary Relay Load Balancer, restart the Application Publishing Service on the failover Relay Load Balancer.

{{% alert title="参照" color="info" %}}
When the **Application Publishing Service** is stopped or restarted on a Relay Load Balancer via **Services,** GO-Global closes all the sessions that are running on the Relay Load Balancer's dependent hosts. Therefore, if you need to re-activate a primary Relay Load Balancer when there are sessions running on the cluster's dependent hosts, don't restart the Application Publishing Service on the failover Relay Load Balancer via Services; instead, terminate the aps.exe process on the failover Relay Load Balancer using Task Manager, as described above.
{{% /alert %}}

## あるホストから別のホストへの構成設定の手動コピー

アプリケーションホストマネージャ(Relay Load BalancerまたはFarm Manager)を使用すると、クラスター内のすべてのホストで設定の変更が自動的に行われます。ただし、アプリケーションホストマネージャを使用しない場合は、ブランド設定ダイアログで指定したものなどのホスト構成設定を、あるコンピュータから別のコンピュータに手動でコピーできます。

### 構成設定を手動でコピーする方法

1. 必要に応じて、サンプルホストですべての設定を構成します。
2. 次のレジストリキーをエクスポートします。`HKEY_LOCAL_MACHINE\Software\GraphOn\GO-Global`
3. ターゲットホストで **Application Publishing Service** を停止します。
4. 次のファイルをサンプルホストからターゲットホストにコピーします。<br>
	`％PROGRAMDATA％\Graphon\GO-Global\HostProperties.xml`<br>
 	`％PROGRAMDATA％\Graphon\GO-Global\DefaultWorkspaceProperties.xml`<br>
	`％PROGRAMDATA％\Graphon\GO-Global\images\*.*`<br>
5. 手順2で作成した.regファイルを実行します。
6. ターゲットホストで **Application Publishing Service** を再起動します。
7. 他のホストについて、手順2〜6を繰り返します。






