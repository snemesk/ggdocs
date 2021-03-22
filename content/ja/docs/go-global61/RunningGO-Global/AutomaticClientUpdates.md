---
title: "クライアントの自動更新"
linkTitle: ""
weight: 09
type: "docs"
---

管理者は、ユーザが新しいバージョンを実行しているGO-Globalホストに接続したときにGO-Globalクライアントを自動的に更新するようにGO-Globalを設定できます。

### クライアントの自動更新を有効にする方法

1. GO-Global AppController をインストールします。(自動クライアント更新機能はWindowsコンピュータでのみ利用可能です)。
2. 管理者コンソールで、[Tools | Host Options]をクリックします。
3. **[Client Access]** タブをクリックします。
4. **[Automatically update clients]** を有効にします。
5. **[OK]** をクリックします。

Mac および Linux のユーザーは、GO-AppControllerのログオンページ(`http://hostname/goglobal/`など)に接続し、GO-Global AppControllerをインストールすることで、更新バージョンのGO-Globalをダウンロードできます。

![5-8-1](/img/5-8-1.png) 

{{% alert title="参照" color="info" %}}
GO-Global AppControllerのオールユーザバージョンとシングルユーザバージョンでは、クライアントのアップグレード方法が異なります。 **オールユーザ** バージョンのクライアントでは、GO-Global Update Client サービスをインストールしてアップグレードを実行しますが、 **シングルユーザ** バージョンのクライアントでは、サービスを使用せずにアップグレードを実行します。シングルユーザ自動クライアント更新機能は、バージョン6.1以降でのみサポートされており、製品の以前のバージョンからバージョン6.1にアップグレードする場合はサポートされません。
{{% /alert %}}

Admin Consoleで **クライアントの自動更新** を選択し、ユーザーが Windows コンピュータからホストにサインインすると、GO-Globalはクライアントコンピュータにインストールされている GO-Global AppControllerのバージョンとホスト上の GO-Global\Web\Clients ディレクトリのバージョンを比較します。ホスト上のクライアントインストーラが新しい場合、GO-Globalはクライアントコンピュータの一時ディレクトリにインストーラをコピーします。その後、GO-Globalが終了すると、新しいバージョンがインストールされ、その後の GO-Globalセッションで使用できるようになります。新しい更新プログラムのインストールが完了すると、ユーザは画面上で更新されます。

要約すると、以下の条件を満たした場合にGO-Globalの新バージョンがインストールされます。

* **クライアントを自動的に更新する** ことは、Admin Consoleで有効になっています。
* クライアントの新しいバージョンは、ホスト上の `GO-Global\Web\Clients` ディレクトリで利用可能です。
* 新しいクライアントインストーラがクライアントコンピュータにダウンロードされました。
* ユーザはGO-Globalクライアントセッションからサインアウトしました。

{{% alert title="参照" color="info" %}}
Updatesフォルダのデフォルトの場所は`C:\Program Files\GraphOn\GO-Global\Update`になります。それはレジストリキーで定義される:`HKEY_LOCAL_MACHINE_MACHINESOFTWARE\GraphOn\AppControllerUpdates`
{{% /alert %}}