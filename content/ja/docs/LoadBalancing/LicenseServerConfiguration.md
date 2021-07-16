---
title: "ライセンスサーバの構成"
linkTitle: ""
weight: 08
type: "docs"
---

Independent HostがRelay Load BalancerまたはDependent Hostとして動作するように設定されている場合、GO-Globalはホストのライセンス設定を自動的に変更しません。例えば、Independent Hostがホストと同じコンピュータにインストールされているOn-premisesを使用するように設定されている場合、ホストがRelay Load Balancerに接続された後も、そのホストはこのOn-premisesライセンスを使用し続けます。これはデフォルトの構成ですが、一般的には最適なライセンス構成ではありません。Relay Load BalancerとそのDependent Hostは、すべて同じライセンスサーバを使用するように設定するか、Cloudライセンスを使用する場合は、同じCloudライセンスを使用するように設定する必要があります。
On-premisesライセンスを使用しており、高可用性を必要としない場合は、Relay Load Balancer上のライセンスサーバーを中央ライセンスサーバーとして使用するように、Dependent Hostを設定することをお勧めします。(複数のホスト環境を参照し、Dependent HostがRelay Load Balancer上のライセンスサーバのポートに接続できることを確認してください)。
On-premisesライセンスを使用しており、高可用性が必要な場合は、3台の冗長ライセンスサーバを使用するようにRelay Load BalancerとそのDependent Hostを設定することをお勧めします。

Cloudライセンスを使用しており、高可用性を必要としない場合は、Relay Load Balancer上でGO-Globalを有効にすることを推奨します。また、Cloudライセンスを使用しており、高可用性が必要な場合は、プライマリのRelay Load BalancerとフェイルオーバのRelay Load Balancerの両方でGO-Globalを起動し、それぞれをもう一方のバックアップライセンスサーバに設定することをお勧めします。
これらの構成では、どちらのコンピュータを選択したかにかかわらず、Admin Consoleの **[License]** タブに同じライセンス情報がレポートされます。
バージョン6.1以前のバージョンでは、GO-GlobalはデフォルトでDependent Hostのライセンスを管理していました。この構成では、管理者は各Dependent Hostでセントラルライセンスマネージャを使用するように構成する必要がありました。バージョン 6.1より、管理者はこの設定を行う必要がなくなりました。GO-GlobalはデフォルトでRelay Load Balancerからライセンスを管理するようになりました。これにより、管理者はライセンス構成を変更することなく、Relay Load BalancerからDependent Hostを追加および削除できるようになりました。

{{% alert title="参照" color="info" %}}
旧バージョンからバージョン6.1にアップグレードされたDependent Hostは、Dependent Hostからのライセンス管理を継続します。管理者は、アップグレード後に、すべてのDependent HostとRelay Load Balancerの **HostProperties.xml** ファイルの **ManageLicensesFrom** プロパティの値を **Host** から **Relay** に編集することで、これを変更することができます。
{{% /alert %}}