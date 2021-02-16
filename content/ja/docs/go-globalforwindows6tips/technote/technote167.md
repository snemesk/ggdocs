+++
title = "iOSとの通信"
description = ""
weight = 8
+++
### **クライアントとホストが同じLAN上にあるときの通信**

以下の図は、GO-Global App(iOS上で実行)とホストが同じLAN上にある場合の通信を示しています。 ユーザデータグラムプロトコル(UDP)通信はGO-Globalがネットワーク上にあるホストを自動的に発見するために使用されます。

![9-167-1](/images/9-167-1.png) 

### **Communication with a Relay Server**

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

The diagram below shows how the GO-Global App (running on iOS) communicates with hosts when a relay server is used to connect clients on an external network with hosts that are on an internal network. In this configuration, all connections are made to the relay server.

The external firewall needs to allow connections on port 491 (or whatever port the relay server is configured to use). The internal firewall only needs to allow connections from the internal network to the DMZ; it does not need to allow connections from the DMZ to the internal network.

![9-167-2](/images/9-167-2.png) 