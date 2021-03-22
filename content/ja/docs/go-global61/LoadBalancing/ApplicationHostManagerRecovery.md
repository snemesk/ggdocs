---
title: "アプリケーションホストマネージャのリカバリ"
linkTitle: ""
weight: 10
type: "docs"
---
Application Publishing Serviceは、サービスに障害が発生した場合に自動的に再起動するように設定できます。たとえば、Application Publishing ServiceがRelay Load Balancer上で停止すると、クライアントは切断されますが、Relay Load Balancerに接続されていたDependent Hosts上ではセッションは継続して実行されます。これらのDependent Hostsは、15秒ごとにRelay Load Balancerへの再接続を試みます。Dependent HostsがRelay Load Balancerに再接続すると、Relay Load Balancerにセッションを再追加し、切断されたセッションに関連付けられたすべての状態情報を復元します。これにより、クライアントは自分のセッションに再接続できます。

デフォルトでは、クライアントは自動的にアプリケーションホストマネージャへの再接続を5回試みます。より高いサービス可用性を提供するために、フェイルオーバーアプリケーションホストマネージャを設定することができます。

### To configure a Failover Application Host Manager 

1. GO-Globalホストをアプリケーションホストマネージャと同じネットワーク上の別のコンピュータにインストールします。このコンピュータがフェイルオーバーアプリケーションホストマネージャになります。すべてのクライアントおよびDependent Hosts(またはファームマネージャ)は、フェイルオーバーアプリケーションホストマネージャに接続できる必要があります。
2. GO-Globalホストをアプリケーションホストマネージャとして実行するように設定します。<br>
	a. コンピュータ上で **Admin Console** を実行します。<br>
	b. [Tools | Host Options]をクリックします。<br>
	c. **[Configuration]**タブをクリックします。<br>
	d. **Application Host Manager** をクリックします。<br> 
	e. プライマリのアプリケーションホストマネージャがRelay Load Balancerの場合は、 **Relay Load Balancer** をクリックします。プライマリのApplication Host ManagerがFarm Managerの場合は、 **Farm Manager** をクリックします。<br>
	f. **OK** をクリックします。<br>
	g. **Application Publishing Service** を再起動します。<br>
3. プライマリアプリケーションホストマネージャから公開アプリケーションをエクスポートし、フェイルオーバーアプリケーションホストマネージャにインポートします。<br>
	a. プライマリアプリケーションホストマネージャで、管理者としてRegeditを実行してください。<br>
	b. 以下のレジストリキーを選択してください：`\HKEY_LOCAL_MACHINE\GraphOn\GO-Global\AppServer`<br>
	c. **[File | Export…]** をクリックします。<br>
	d. ファイルの名前を入力します(例: Appserver.reg)。<br>
	e. **Save** をクリックします。<br>
	f. このファイルをフェイルオーバーアプリケーションホストマネージャにコピーします。<br>
    	g. ファイルをダブルクリックします。<br>
	h. **Yes** をクリックして、ファイルをインポートします。<br>
	i. **OK** をクリックします。<br>
4. また、Failover Relay Load Balancerに接続できない場合は、Failover Relay Load Balancerに接続するように各Dependent Hostsを設定します。<br>
	a. Admin Consoleを実行します。<br>
	b. [Tools | Host Options]をクリックします。<br>
	c. **[Configuration]**タブをクリックします。<br>
	d. **Relay Load Balancer address**には、両方のRelay Load Balancerのアドレスを完全修飾ドメイン名と一緒に入力します。プライマリRelay Load Balancerのアドレスを最初に入力し、セミコロンを続けて入力し、その後にフェイルオーバRelay Load Balancerのアドレスを入力します。例：primary_relay_load_balancer.graphon.com;failover_relay_load_balancer.graphon.com<br>
	e. **OK** をクリックします。
5. クライアントの起動に使用するURLとショートカットに、プライマリとフェイルオーバの両方のRelay Load Balancerのアドレスを指定します。
	a. ブラウザ経由で接続するユーザには、 **host** パラメータにプライマリRelay Serverのアドレスを設定し、その後にセミコロン、その後にフェイルオーバRelay Serverのアドレスを設定したHTMLページまたはURLを提供します。
	b. インストールされたクライアントを介して接続するユーザに、 **-h** コマンドライン引数をプライマリRelay Serverのアドレスに等しくし、セミコロンの後にフェイルオーバRelay Serverのアドレスを続くように設定するショートカットを提供します(例: -h primary_relay_load_balancer_address;failover_relay_load_balancer_address).<br>。

この構成では、プライマリのRelay Load Balancerが何らかの理由で障害を起こした場合、Dependent Hostsとクライアントは自動的にフェイルオーバーサーバに再接続し、ユーザは通常、プライマリのRelay Load Balancerが障害を起こしてから1～2分以内にセッションに再接続されます。これを下図に示します。

![5-10-1](/img/5-10-1.png) 

同様に、ファームマネージャの構成では、ファームマネージャが何らかの理由で障害を起こすと、ファームホストとクライアントは自動的にフェイルオーバーのファームマネージャに再接続し、ユーザは通常、ファームマネージャの障害発生から1～2分以内にセッションに再接続されます。これを下図に示します。

![5-10-2](/img/5-10-2.png) 

ユーザのセッションが自動的に再接続に失敗した場合は、クライアントのURL、Webページ、ショートカットの **autoreconnect** パラメータの値を5よりも大きい値(デフォルト)にしてください。

フェイルオーバRelay Load Balancerがアクティブな場合(つまり、Dependent HostsがフェイルオーバRelay Load Balancerに接続されている場合)、ユーザのセッションの開始に時間がかかります。このため、プライマリのRelay Load Balancerは、オンラインになったら再起動してください。プライマリのRelay Load Balancerを再起動するには、ユーザがクラスタに接続する可能性が低い時間帯にタスクマネージャを使用してフェイルオーバのRelay Load Balancerのaps.exeプロセスを終了します。フェールオーバのRelay Load Balancerでaps.exeプロセスが終了すると、Dependent HostsとクライアントはプライマリのRelay Load Balancerに再接続します。クラスタのDependent HostsがプライマリのRelay Load Balancerに再接続した後、フェイルオーバのRelay Load Balancer上で **Application Publishing Service** を再起動してください。

{{% alert title="参照" color="info" %}}
 **Service** 経由でRelay Load Balancer上で **Application Publishing Service** を停止または再起動すると、GO-GlobalはRelay Load BalancerのDependent Hosts上で実行中のすべてのセッションを閉じます。したがって、クラスタのDependent Hosts上でセッションが実行されているときにプライマリのRelay Load Balancerを再アクティベートする必要がある場合は、フェイルオーバのRelay Load Balancer上でサービスを介してApplication Publishing Serviceを再起動しないで、代わりに、上述のようにタスクマネージャを使用してフェイルオーバのRelay Load Balancer上でapps.exeプロセスを終了します。
{{% /alert %}}
