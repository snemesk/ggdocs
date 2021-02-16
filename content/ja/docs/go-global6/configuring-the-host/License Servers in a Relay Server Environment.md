+++
title = "License Servers in a Relay Server Environment"
description = ""
weight = 9
+++

>本項目の設定は推奨設定ではございませんのでご注意ください。

Before upgradi

By default, licenses are checked out and managed from dependent hosts. Licenses can be managed from a relay server by setting the value of the **ManageLicensesFrom** property to **Relay** in the **HostProperties.xml** file. This change must be made on the relay server as well as the dependent hosts.

### To checkout licenses from the relay server

1. Stop the **GO-Global Application Publishing Service**
2. Locate the file **HostProperties.xml** in the C:\ProgramData\GraphOn\GO-Global directory.
3. Open **HostProperties.xml** in WordPad and locate the **ManageLicensesFrom** property.
4. Set the **ManageLicensesFrom** property to **Relay**.
5. Save the file.
6. Restart the **GO-Global Application Publishing Service.**

The default value for the **ManageLicensesFrom** property is Host. If this property is changed to **Relay** on an independent host or if it is set to an invalid value, licenses will revert to being managed from the host.
