---
title: "Dependent Hosts"
linkTitle: ""
weight: 04
type: "docs"
---
Dependent Hostとは、Relay Load Balancerに接続されているGO-Globalホストのことです。GO-Globalクライアントは、Dependent Hostに直接接続することはできません。代わりに、関連するRelay Load Balancerに接続し、Relay Load Balancerは接続されているサーバの1つを選択してセッションをホストします。GO-GlobalホストをDependent Hostとして動作するように設定するには、次の手順に従います。

1. **All Hosts.** のリストから目的のホストを選択します。
2. [Tools | Host Options]をクリックします。
3. **[Configuration]** タブをクリックします。
4. **[Application Host]** をクリックします。
5. **[Dependent Host]** をクリックします。
6. [Relay Lad Balancer address]ボックスにRelay Load BalancerのIPアドレスを入力します。
7. [OK]をクリックします。
8. **Application Publishing Service** が再起動されるまで変更は有効ではないことを示すメッセージボックスが表示されます。 **[OK]** をクリックします。
9. コントロールパネルの[サービス]オプションから **GO-Global Application Publishing Service** を停止して再起動します。

Application Publishing Serviceを再起動すると、Admin ConsoleのGO-Globalホストのリストで、Relay Load Balancerの下にDependent Hostが表示されます。Dependent Hostの色が黄色になっている場合は、そのホストが"孤立状態"になっていることを示しています(言い換えれば、Relay Load Balancerがダウンしていることを示しています）。Application Publishing Serviceがホスト上で実行されていない場合、ホストのアイコンは赤色になります。
ユーザの認証は、Relay Load Balancerではなく、Dependent Hostで行われます。その結果、Dependent Hostは、関連するRelay Load Balancerとは異なるネットワーク上に配置されることがあります。例えば、Dependent Hostは内部のActive Directoryネットワーク上のファイアウォールの後ろにあり、関連するRelay Load Balancerはファイアウォールの外にあるDMZ(非武装地帯)に位置することができます。 **統合Windows認証** を使用する場合、クライアントとDependent Hostは同じドメインに配置する必要がありますが、Relay Load Balancerは別のドメインに配置することができます。

{{% alert title="参照" color="info" %}}
各Dependent Hostに同じアプリケーションをインストールし、同じインストールパスを使用することをお勧めします。
{{% /alert %}}

![5-6-1](/img/5-6-1.png)

## メンテナンスのためのDependent Hostのオフライン化

管理者は、 **[Session Startup]** タブで **Maximum sessions on this host** を0に設定することで、新規ユーザがGO-Globalホストに接続できないようにすることができます。これにより、管理者はRelay Load Balancer環境からDependent Hostを潔く削除することができます。

### Dependent Hostをオフラインにする方法

1. すべてのホストのリストから目的のDependent Hostを選択します。
2. [Tools | Host Options]をクリックします。
3. **[Session Startup]** タブをクリックします。
4. **Maximum sessions on this host** ボックスの値を0に設定します。これにより、新しいユーザがホストに接続できなくなります。
5. **[OK]** をクリックします。

