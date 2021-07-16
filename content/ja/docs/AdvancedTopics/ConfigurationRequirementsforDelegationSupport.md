---
title: "委任サポートの構成要件"
linkTitle: ""
weight: 02
type: "docs"
---
統合Windows認証を **ホストのキャッシュパスワード**なしで使用すると、一部のネットワークリソースにアクセスするためにWindows委任が必要になる場合があります。たとえば、委任が有効になっていないと、グループポリシーが正しく適用されないことがあります。

委任サポートの構成要件は次のとおりです。

* 委任には、Kerberos認証プロトコルとActive Directoryドメインが必要です。
* ドメインネームシステム(DNS)サーバは、サービスロケーション(SRV)リソースレコードをサポートする必要があります。 また、DNSサーバがDNS動的更新をサポートすることをお勧めします。 DNS動的更新プロトコルがないと、管理者はドメインコントローラによって作成され、DNSサーバによって保存されたレコードを手動で構成する必要があります。Windows 2000以降で提供されるDNSサービスは、これら両方の要件をサポートしています。
* GO-Globalクライアント、GO-Globalホスト、および電子メールやデータベースなどのバックエンドサービスをホストしているコンピュータは、Kerberosをサポートしている必要があります。
* クライアントのユーザーアカウントは、GO-Global Application Publishing Serviceによる委任をサポートしている必要があります。 **Active Directoryユーザとコンピュータの管理コンソール** で、ユーザを選択して **[アクション | コンピュータ]** の順にクリックします。プロパティ **アカウント** タブをクリックします。[アカウントオプション]リストボックスを下にスクロールして、 **[アカウントが機密で委任できない]** オプションが無効になっていることを確認します。 **[アカウントは委任に対して信頼されている]** オプションを有効にします。

![7-6-1](/img/7-6-1.png) 

* Windows Server 2008の[プロパティ]ダイアログに[委任]タブが表示されない場合は、これは仕様によるものです。[委任]タブは、サービスアカウント名(SPN)がユーザアカウントに対して作成された後にのみ表示されます。昇格したコマンドプロンプトで、以下を実行します。Active DirectoryでDOMAIN Accountを検索します。**[委任]** タブが[プロパティ]ダイアログに表示されます。**[任意のサービスへの委任でこのユーザを信頼する]** を選択します **(Kerberosのみ)。**

```
setspn -A HTTP / intranet.domain.local DOMAIN\Account
```

![7-6-2](/img/7-6-2.png) 

* GO-Globalホストは、ユーザのアカウントを他のコンピュータに委任する権限を持っている必要があります。 **Active Directoryユーザとコンピュータの管理** コンソールで、コンピュータを選択して**[アクション | プロパティ]** の順にクリックします。プロパティ[委任]タブをクリックします。 **[任意のサービスへの委任に対してコンピュータを信頼する]** を有効にします(Kerberos)。これらの委任権限を適用するには、GO-Global Application Publishing Serviceをローカルシステムアカウントで実行するように構成する必要があります。

![7-6-3](/img/7-6-3.png) 

{{% alert title="参照" color="info" %}}
Active Directory内の任意のサービス(Kerberosのみ)への **[コンピュータを委任に対して信頼する]** を有効にしたら、委任を有効にするためにGO-Globalホストを再起動する必要があります。
{{% /alert %}}

* **GO-Global Application Publishing Service** のService Principle Name(SPN)をActive Directoryに登録できるようにする必要があります。GO-Global Application Publishing Serviceは、サービスが再実行されるたびにこれを試みます。 **setspn.exe** ユーティリティ(Microsoft Resource Kitに収録。Microsoftからも個別にダウンロード可能)を使用して、SPNが正しく設定されているかどうかを確認できます。下の図は、setspn.exeをGO-Globalホストで実行したときに表示されるコマンドウィンドウです。

![7-6-4](/img/7-6-4.png) 

adlab-ggserverを、GO-Globalホストのコンピュータ名に置き換えます。{54094C05-F977-4987-BFC9-E8B90E088973} Globally Unique Identifier(GUID)は、GO-Global Application Publishing Serviceが {54094C05-F977-4987-BFC9-E8B90E088973}/adlab-ggserver.adlab.graphon.com SPNを作成するときに使用します。

次のコマンドウィンドウは、GO-Globalホストで **setspn.exe**を実行したときに表示される出力画面で、ネットワーク設定にエラーがあることを示しています。上述のすべての要件が満たされている場合、この画面は表示されません。

![7-6-5](/img/7-6-5.png) 