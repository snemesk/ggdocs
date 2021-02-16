---
title: "委任サポートの設定要件"
linkTitle: ""
weight: 3
type: "docs"
---


第4章で説明したように、統合Windows認証を **ホストのキャッシュパスワード**なしで使用すると、一部のネットワークリソースにアクセスするためにWindows委任が必要になる場合があります。 たとえば、委任が有効になっていないと、グループポリシーが正しく適用されないことがあります。

委任サポートの構成要件は次のとおりです。

* 委任には、Kerberos認証プロトコルとActive Directoryドメインが必要です。どちらもWindows 2000 で初めて採用された機能です。
* Domain Name System(DNS)サーバは、Service Location (SRV)リソースレコードをサポートしている必要があります。また、DNSサーバはDNSダイナミック更新をサポートしていることが推奨されています。DNSダイナミック更新プロトコルがサポートされていない場合は、システム管理者は、ドメインコントローラで作成されDNSサーバによって保存されたレコードを手動で設定する必要があります。Windows 2000以降で提供されているDNSサービスは、これらの要件をサポートしています。
* GO-Globalクライアント、GO-Globalホスト、および電子メールやデータベースなどなんらかのバックエンドサービスをホストしているコンピュータは、Kerberosをサポートしている必要があります。Kerberosは、Windows 2000以降を稼動しているシステムの、Windows 2000以降の Active Directoryドメインでサポートされます。
* クライアントのユーザーアカウントは、GO-Global Application Publishing Serviceによる委任をサポートしている必要があります。 **Active Directoryユーザーとコンピュータ**の管理コンソールで、ユーザーを選択して **[アクション | プロパティ]**の順にクリックします。 **アカウントタブ**をクリックします。 [アカウントオプション]リストボックスを下にスクロールして、 **[アカウントが機密で委任できない]**オプションが無効になっていることを確認します。 **[アカウントは委任に対して信頼されている]**オプションを有効にします。

![6-3-1](/image5/6-3-1.png)

* Windows Server 2008の[プロパティ]ダイアログに[委任]タブが表示されない場合、これは仕様によるものです。[委任]タブは、サービスアカウントに対してサービスプリンシパル名(SPN)が作成された後にのみ表示されます。昇格したコマンドプロンプトで、

```
setspn -A HTTP / intranet.domain.local DOMAIN\Account
```

を実行します。Active DirectoryでDOMAIN\Accountを検索します。 **[委任]**タブが[プロパティ]ダイアログに表示されます。 **[このユーザを任意のサービスへの委任に対して信頼する]**を選択します(Kerberosのみ)。

![6-3-2](/image5/6-3-2.png)

* GO-Globalホストには、ユーザのアカウントを他のコンピュータに委任する権限が必要です。 **[Active Directory ユーザーとコンピュータ]**管理コンソールでコンピュータを選択し、 **[ アクション | プロパティ ]**の順にクリックします。プロパティ[委任]タブをクリックします。 **[任意のサービスへの委任に対してコンピュータを信頼する]**を有効にします **(Kerberos)。**これらの委任権限を適用するには、GO-Global Application Publishing Serviceをローカルシステムアカウントで実行するように設定する必要があります。

![6-3-3](/image5/6-3-3.png)

>Active Directory内の任意のサービス(Kerberosのみ)への **[コンピュータを委任に対して信頼する]**を有効にしたら、委任を有効にするためにGO-Globalホストを再起動する必要があります。

* **GO-Global Application Publishing Service**のService Principle Name(SPN)をActive Directoryに登録できるようにする必要があります。GO-Global Application Publishing Serviceは、サービスが再実行されるたびにこれを試みます。 **setspn.exe**ユーティリティ(Microsoft Resource Kitに収録。Microsoft からも個別にダウンロード可能)を使用して、SPNが正しく設定されているかどうかを確認できます。下の図は、setspn.exeをGO-Globalホストで実行したときに表示されるコマンドウィンドウです。

![6-3-4](/image5/6-3-4.png)

adlab-ggserverを、GO-Globalホストのコンピュータ名に置き換えます。{54094C05-F977-4987-BFC9-E8B90E088973} Globally Unique Identifier(GUID)は、GO-Global Application Publishing Serviceが {54094C05-F977-4987-BFC9-E8B90E088973}/adlab-ggserver.adlab.graphon.com SPNを作成するときに使用します。

次のコマンドウィンドウは、GO-Globalホストで **setspn.exe**を実行したときに表示される出力画面で、ネットワーク設定にエラーがあることを示しています。上述のすべての要件が満たされている場合、この画面は表示されません。

![6-3-5](/image5/6-3-5.png)