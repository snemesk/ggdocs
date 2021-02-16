---
title: "License Servers in a Relay Server Environment"
linkTitle: ""
weight: 12
type: "docs"
---

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

Prior to version 6.1, GO-Global managed licenses from Dependent Hosts by default. This required administrators to configure each Dependent Host to use a central license manager. This is no longer necessary, as version 6.1 manages licenses from the relay server by default. Administrators can add and remove Dependent Hosts from the relay server without having to make any licensing configuration changes.

Dependent Hosts that are upgraded to version 6.1 from older versions will continue to manage licenses from the Dependent Host. After upgrading, administrators can change this by editing the value of the **ManageLicensesFrom** property in the **HostProperties.xml** file from **Host** to **Relay** on all the Dependent Hosts and the relay server, as follows: 

### To checkout licenses from the relay server

1. Stop the **GO-Global Application Publishing Service.**
2. Locate the file **HostProperties.xml** in the `C:\ProgramData\GraphOn\GO-Global` directory.
3. Open **HostProperties.xml** in WordPad and locate the ManageLicensesFrom property.
4. Set the **ManageLicensesFrom** property to **Relay.**
5. Save the file.
6. Restart the **GO-Global Application Publishing Service.**

If this property is changed to Relay on an inDependent Host or if it is set to an invalid value,licenses will revert to being managed from the host.
