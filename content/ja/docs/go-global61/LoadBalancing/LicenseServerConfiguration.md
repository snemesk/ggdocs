---
title: "License Server Configuration"
linkTitle: ""
weight: 08
type: "docs"
---

When an Independent Host is configured to run as a Relay Load Balancer or a Dependent Host, GO-Global does not automatically make any changes to the host's licensing configuration. For example, if an Independent Host is configured to use an on-premises license that is installed on the same computer as the host, the host will continue to use this on-premises license after the host is connected to a Relay Load Balancer. This is the default configuration, but not typically the best licensing configuration. A Relay Load Balancer and its Dependent Hosts should all be configured to use the same license server(s) or, if cloud licensing is used, the same cloud license.<br>

If an on-premises license is being used and high-availability is not required, GraphOn recommends configuring the Dependent Hosts to use the license server on the Relay Load Balancer as a central license server. (See Multiple Host Enviroments and ensure that the Dependent Hosts are able to connect to the license server's port on the Relay Load Balancer.)<br>

If an on-premises license is being used and high-availability is required, GraphOn recommends configuring the Relay Load Balancer and its Dependent Hosts to use a set of Three-Server Redundant License Servers.<br>

If a cloud license is being used, and high availability is not required, GraphOn recommends activating GO-Global on the Relay Load Balancer. Alternatively, if a cloud license is being used and high availability is required, GraphOn recommends activating GO-Global on both the primary Relay Load Balancer and the failover Relay Load Balancer and configuring each to be a Backup License Server for the other.<br>

With all of these configurations, the **Licenses** tab on the Admin Console will report the same license information, regardless of which computer is selected.<br>

Prior to version 6.1, GO-Global managed licenses from Dependent Hosts by default. With this configuration, administrators had to configure each Dependent Host to use a central license manager. Beginning with version 6.1, administrators no longer need to do this. GO-Global now manages licenses from the Relay Load Balancer by default. This enables administrators to add and remove Dependent Hosts from the Relay Load Balancer without having to make any licensing configuration changes.

{{% alert title="参照" color="info" %}}
Dependent Hosts that are upgraded to version 6.1 from older versions will continue to manage licenses from the Dependent Host. Administrators can change this after the upgrade by editing the value of the **ManageLicensesFrom** property in the **HostProperties.xml** file from Host to Relay on all the Dependent **Hosts** and the **Relay** Load Balancer.
{{% /alert %}}