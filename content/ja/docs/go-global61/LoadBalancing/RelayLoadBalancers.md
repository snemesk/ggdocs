---
title: "Relay Load Balancers"
linkTitle: ""
weight: 03
type: "docs"
---
A Relay Load Balanceris a GO-Global Host that provides centralized control over one or more hosts. Relay Load Balancers maintain client connections and distribute GO-Global sessions across a set of load-balanced application hosts. Relay Load Balancers appear in the Admin Console on the first level of the list of **All Hosts** as nodes with one or more Dependent Hosts.

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
