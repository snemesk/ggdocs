---
title: "異なるネットワーク上のRelay Load BalancerとDependent Hostの管理"
linkTitle: ""
weight: 09
type: "docs"
---
ユーザがRelay Load BalancerまたはDependent HostでAdmin Consoleを起動すると、Admin ConsoleはRelay Load Balancerに接続し、統合Windows認証を使用してユーザの認証を試みます。Admin ConsoleがDependent Host上で実行されていて、関連するRelay Load Balancerが別のネットワーク上にある場合は、次のようなメッセージが表示されます。

"This computer (Server4) and Server 8 may be located on different networks. Would you like to log onto Server 8 and administer it remotely?(Server8へのログオンに失敗しました。このコンピュータ(Server4)とServer8は異なるネットワーク上にある可能性があります。サーバー8にログオンしてリモートで管理しますか？)"

 **No** をクリックすると、Admin Consoleの **All Hosts** ノードに戻ります。Yesをクリックすると、以下のようにRelay Load Balancer上で特別なリモート管理セッションが開始されます。<br>

1. Dependent Hostの Admin Console が GO-Global Client を起動します。
2. クライアントがRelay Load Balancerに接続し、セッションを開始します。 **Sign In** ダイアログがユーザに表示されます。
3. Relay Load Balancer上のAdministratorsグループのメンバーであるアカウントのユーザ名とパスワードを指定してサインインします。
4. Relay Load Balancer上でAdmin Consoleが起動します。これで、ユーザはRelay Load BalancerとそのDependent Hostすべてを管理できるようになります。
5. Admin Consoleの **Maximum sessions on this host** 設定やライセンスの制限に関係なく、Relay Load Balancer上では常に最大2つの管理セッションを実行できます。

Dependent Hostは、公開されているアプリケーションのリスト、サーバ設定、ユーザ設定をRelay Load Balancerから継承します。アプリケーションは、すべてのDependent Host上の同じディレクトリにインストールする必要があります。アプリケーションはRelay Load Balancerにインストールする必要はありません。GO-GlobalホストがRelay Load Balancerに接続されると、そのサーバ設定はすべてRelay Load Balancerの設定と同期されます。<br>

Relay Load Balancerの設定を変更すると、そのRelay Load Balancerに接続されている **All Hosts** にも変更が反映されます。変えられる設定は、セッションの最大数とRelay Load Balancerの名前だけです。 **Host Options**と **Application Properties** ダイアログのその他の設定はすべてグレーアウトされており、変更することはできません。

Relay Load Balancerを設定する際に、Dependent Hostにアプリケーションがインストールされていても公開されていない場合は、Admin ConsoleからRelay Load Balancerにアプリケーションを公開する必要があります。例えば、Adobe Reader 8.0がDependent HostのC:Greatment Files\AdobeAcrobat 8.0\Reader\AcroRd32.exeにインストールされている場合、Relay Load BalancerのAdmin Consoleを開き、 **Add Application** ダイアログの **Location** ボックスにこのパスの場所を入力します。

{{% alert title="参照" color="info" %}}
マップされたドライブにアイテムを公開する前に、ドライブがRelay Load Balancer上と同じドライブレターと場所にマップされていることを確認してください。
{{% /alert %}}

# Host Selection

クライアントがRelay Load Balancerに接続すると、Relay Load Balancerは、そのホストで許可されている最大セッション数に対する割合として、実行中のセッション数が最も少ないDependent Host上でセッションを開始しようとします。
もし、選択したホストでセッションを開始できなかった場合、Relay Load Balancerは、セッションをサポートできるホストが見つかるまで、他の利用可能なホストでもセッションを開始しようとします。

利用可能なホストがない場合(つまり、すべてのホストで実行中のセッション数が許可された最大数に等しい場合)、GO-Globalはユーザにメッセージを表示します。

 **You are already running as many sessions as you are allowed.**

そうでない場合、利用可能なホストのいずれかでセッションを開始できない場合、次のようなメッセージがユーザに表示されます:<br>

 **GO-Global failed to launch the Program Window for your session.**

Relay Load Balancerの設定では、GO-GlobalはRelay Load BalancerとそのDependent Hostsの **最大セッション数** の設定を確認します。Relay Load Balacner上の最大セッション数の値は、そのRelay Load Balancerに割り当てられたすべてのDependent Host上で同時に実行できる最大セッション数です。

このホストの最大セッション数の設定を変更するには、そのホストのAdmin Consoleを開き、[Host Options｜Session Startup]をクリックします。

# Relay Load Balancer in a DMZ

DMZ内のRelay Load Balancerは、ファイアウォールによってDependent Hostから分離できますが、次の要件があります。

- Dependent Hostは、ファイアウォールの背後からRelay Load Balancerに接続できる必要があります。逆は必要ありませんのでご注意ください。Relay Load Balancerは、Dependent Hostに接続できる必要はありません。
- クライアントは、DMZのRelay Load Balancerに接続できる必要があります。

依存するアプリケーションサーバ上でセッションが開始されると、依存するアプリケーションサーバはRelay Load Balancerへの接続を開きます。Relay Load Balancerは、セッションのクライアントからデータを受信すると、この接続を介してそのデータをセッションに転送します。同様に、Relay Load Balancerはこの接続を介してセッションからデータを受け取ると、そのデータをセッションのクライアントに転送します。

下図は、内部ネットワーク上のホストにアクセスを提供するための推奨構成を示しています。矢印は接続の方向を示しています。ホストはRelay Load Balancerに接続しますが、その逆ではありません。その結果、内部ファイアウォールはDMZから内部ネットワークへの接続を許可する必要はありません。この構成では、インターネット上のマシンもDMZ内のマシンも、内部ネットワーク上のホストに直接接続することはできません。
![5-9-1](/img/5-9-1.png) 

