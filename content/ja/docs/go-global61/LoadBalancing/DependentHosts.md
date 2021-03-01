---
title: "Dependent Hosts"
linkTitle: ""
weight: 04
type: "docs"
---
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

![5-6-1](/img/5-6-1.png)