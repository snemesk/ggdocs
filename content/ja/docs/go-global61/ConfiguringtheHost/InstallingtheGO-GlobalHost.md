---
title: "GO-Globalホストのインストール"
linkTitle: ""
weight: 01
type: "docs"
---
{{% alert title="情報" color="green" %}}
GO-Globalホストのインストールの詳細につきましては弊社提供のメディアにございますDocuments_kitASPフォルダ内のGGH6.*インストール手順書をご参照ください。
{{% /alert %}}


GO-Globalは自己解凍型の実行ファイルとして提供され、 **gg-host.exe** をダブルクリックすることでインストールできます。ホストセットアッププログラムを実行する場合は、コンピュータの管理者グループのメンバであるアカウントにログインしている必要があります。Windows Server 2019でインストーラを実行する場合は、**gg-host.exe** を右クリックし、 **[管理者として実行]** をクリックします。<br>

既定では、GO-Globalホストのセットアップでは、コア **ホスト** コンポーネント、 **Web** コンポーネント(ブラウザログオンのためにホストを構成するために必要なすべてのファイルを含む)、およびライセンスコンポーネントのすべてがインストールされます。 **[Customize]** ボタンをクリックして、インストールしたくないコンポーネントのチェックを外すことで、インストールをカスタマイズすることができます。それ以外の場合は、 **[Install]** ボタンをクリックします。<br>

インストール中、インストーラには、ライセンスを使用して GO-Globalを有効化する方法を説明する画面が表示されます。on-premisesライセンスを使用する場合は、この時点でon-premisesライセンスをインストールしてください。または、cloudライセンスを使用して GO-Globalをアクティベートする場合は、アクティベーションウィザードを実行してください。

# on-premisesライセンスファイルでGO-Globalをアクティブ化

ホスト上でon-premisesライセンスを使用したい場合は、on-premisesライセンスファイルをライセンシングディレクトリにコピーしてください(例：`C:\Program Files\\GraphOn\GO-Global\Licensing`)。別のホストでon-premisesライセンスを使用したい場合は、「複数のホスト環境」を参照してください。<br>

後でライセンスファイルをコピーする場合は、ファイルをコピーした後にGO-Globalライセンスマネージャーを再起動し、次に GO-Global Application Publishing Serviceを再起動する必要があります。

### GO-Global License Managerを再起動する方法

1. [コントロールパネル | 管理ツール | サービス]をクリックします。

![kit3-25-1](/img/kit3-25-1.png)
![kit3-25-2](/img/kit3-25-2.png)
![kit3-25-3](/img/kit3-25-3.png)

2. サービスの一覧から **[GO-Global License Manager]** を選択します。

![kit3-25-4](/img/kit3-25-4.png)
![kit3-25-5](/img/kit3-25-5.png)

3. 右クリックして、 **[再起動]** を選択します。

![kit3-25-6](/img/kit3-25-6.png)

### GO-Global Application Publishing Serviceを再起動する方法

1. [コントロールパネル | 管理ツール | サービス]をクリックします。

![kit3-25-7](/img/kit3-25-7.png)
![kit3-25-8](/img/kit3-25-8.png)
![kit3-25-9](/img/kit3-25-9.png)

2. サービスの一覧から **[GO-Global Application Publishing Service]** を選択します。

![kit3-25-10](/img/kit3-25-10.png)
![kit3-25-11](/img/kit3-25-11.png)

3. 右クリックして、 **[再起動]** を選択します。

![kit3-25-12](/img/kit3-25-12.png)

{{% alert title="参照" color="info" %}}
ライセンスファイル`(C:\Program Files\GraphOn\GO-Global\Licensing\*.lic)`の最小権限は以下の通りです。
**Administrators**:Full Control; **Users**:Read & Execute; **SYSTEM**:Full Control
以下のエラーメッセージがLogファイルに表示された場合、ライセンスファイルのパーミッションが正しくない可能性があります。

`FlexLM code #-1; FlexLM text: Cannot find license file. The license files (or license server system network addresses) attempted are listed below. Use LM_LICENSE_FILE to use a different license file, or contact your software provider for a license file.)`
{{% /alert %}}

2つのGO-Globalライセンスを組み合わせる場合、または同じGO-Globalホストで2つの別々のライセンスを使用する場合、ライセンスファイルのホスト名は大文字と小文字が区別され、同一である必要があります。

# cloudライセンスでGO-Globalをアクティブ化

cloudライセンスを使用してGO-Globalをアクティベートするには、アクティベーションウィザードを実行します。

### アクティベーションウィザードを実行する方法

1. [スタート]メニューから[GraphOn GO-Global｜Activation Wizard]をクリックします。
2. アクティベーションウィザードが表示されたら、画面の指示に従ってください。GraphOnのアカウントを使ってサインインします。アカウントをお持ちでない場合は、アカウントを作成してください。次に、[Sign in]ボタンをクリックします。

{{% alert title="参照" color="info" %}}
GO-Global cloudライセンスは、インターネットに直接アクセスできるコンピュータでのみ使用できます。コンピュータがインターネットにアクセスできない場合(プロキシサーバ経由でインターネットにアクセスしている場合など)、アクティベーションウィザードでは、GO-GlobalがGraphOnのcloudライセンスサービスと通信できないことが通知されます。このメッセージが表示された場合は、以下の手順でon-premisesライセンスを要求することができます。
{{% /alert %}}

3. 該当する場合は、GraphOnのお客様アカウントを選択します。
4. コンピュータで使用するライセンスを選択します。
5. [Accept]をクリックして、GO-Globalライセンス契約に同意します。
6. [Activate]をクリックして、コンピュータ上でGO-Globalをアクティブ化します。

### インストールの完了

GO-Globalを有効化したら、コンピュータを再起動してください。<br>

コンピュータを再起動したら、Webブラウザを選択してGO-GlobalのQuick Startを開きます。このガイドでは、Admin Consoleを使用してアプリケーションを公開し、アプリケーションへのリンクを共有するための基本的な手順を説明します。Quick Startは、[スタート]メニューからもアクセスできます。<br>

GO-Globalホストの起動設定を行う場合は、リストから[GO-Global Application Publishing Service]を選択し、[起動]ボタンをクリックします。GO-Globalホストに適用するオプションを選択します。<br>

# 以前のバージョンからGO-Global 6.1へのアップグレード

以前のバージョンからGO-Global 6.1にアップグレードするお客様は、アップグレードする前にバージョン 6.1のライセンスを取得する必要があります。バージョン 6.1 ホストインストーラは、バージョン 6.1のGO-Globalライセンスを持っていないコンピュータをアップグレードすることはできません。<br>

アップグレードするコンピュータがcloudライセンス(cloudトライアルライセンスなど)を使用している場合は、sales@graphon.com に電子メールでクラウドライセンスのアップグレードを依頼してください。メールにはホストのライセンスのライセンスマスターIDを記載してください。GraphOnがライセンスデータベースのcloudライセンスをアップグレードし、アップグレードが完了したらお客様に通知します。<br>

または、アップグレードするホストがon-premisesのライセンスを使用している場合（ほとんどの場合)、カスタマーポータルでライセンス変更リクエストを送信して新しいライセンスファイルを取得します。

### バージョン6.1のon-premisesライセンスファイルを取得する方法

1. カスタマーポータルにサインインします。
2. License Managementをクリックします。
3. License Change Requestをクリックします。
4. フォームに記入します。
5. Submit Requestをクリックします。

ライセンス変更要求フォームを送信すると、GO-Globalライセンスファイルが電子メールで送信されます。

### 新しいライセンスファイルをインストールする方法

1. GO-Global6.0が現在インストールされている場合、新しいライセンスファイルを\Program Files\GraphOn\GO-Globalディレクトリに配置してください。または、GO-Global版5.0か版4.8が現在取付けられていれば、\Program Files\GraphGraphOn\GO-Global\Programsのディレクトリにライセンスファイルを置いて下さい。
2. 古いバージョンのライセンスファイルを削除します。
3. GO-Global License Manager Serviceを再起動します。

{{% alert title="参照" color="info" %}}
License Managerを再起動しても、GO-Globalホストで実行されているセッションには影響しません。
{{% /alert %}}

### ホストインストーラの実行

ホストのライセンスをアップグレードしたら、GO-Global ホストのインストーラ(gg-host.exe)を実行し、プロンプトが表示されたらコンピュータを再起動します。<br>

バージョン 5またはバージョン 4からバージョン 6.1にアップグレードする場合は、コンピュータを2回再起動するよう求められます。再起動後、ホストインストーラは自動的に再開されます。インストールプロセスの一部として、既存のバージョンのGO-Globalは削除されますが、レジストリ設定およびファイルは保存されます。これらのファイルは、\Program Files\GraphOn\GO-Global.backupフォルダとレジストリにHKEY_LOCAL_MACHINE_MACHINESOFTWARE\GraphOn\GO-Global.backupで見つけることができます。インストーラはまた、ProgramsディレクトリからLicensingディレクトリに新しいライセンスファイルを移動します。

{{% alert title="参照" color="info" %}}
ライセンスをバージョン 6.1にアップグレードするには、お客様がアクティブなサポート契約を結んでいる必要があります。サポート契約が終了している場合は、GO-Globalの販売店またはsales@graphon.comに連絡して更新してください。
{{% /alert %}}

# on-premisesのトライアルライセンスでGO-Globalをアクティブ化

インターネットに直接アクセスできない場合や、cloudのトライアルライセンスが確立できない場合は、on-premisesのトライアルライセンスを作成し、メールでお送りします。

### on-premisesライセンスを使用してGO-Globalを起動する方法

1. コンピュータのホスト名とホストID(物理アドレス)を決定します。<br>
a. [スタート | すべてのプログラム | アクセサリ | コマンドプロンプト]をクリックして、コマンドプロンプトウィンドウを開きます。<br>
b. ipconfig /all と入力し、Enter キーを押します。<br>
c. コンピュータのホスト名と物理アドレスを探します。<br>
d. コンピュータのホスト名、ホストID(物理アドレス)、シート数をメールで sales@graphon.com に送信します。<br>
2. GraphOnからライセンスファイルが届いたら<br>
a. .licファイルをC:\Pro\Program Files\GraphOn\GO-Global\Licensingディレクトリにコピーしてください。<br>
b. GO-Global License Manager Serviceを起動してください。<br>
c. GO-Global Application Publishing Serviceを再起動します。<br>


# 恒久的なon-premisesライセンスのインストール

管理者は、現在クラウドまたはon-premisesのトライアルライセンスを使用しているシステムに、on-premisesの恒久的なライセンスをインストールすることができます。on-premisesの恒久的なライセンスを注文すると、GraphOnは注文を処理して新しいライセンスを作成します。ライセンス情報は、注文依頼に記載された連絡先にメールで送信されます。<br>
管理者はカスタマーポータルからプロダクトコード、メールアドレス、ホスト名、ホストIDを入力してライセンスを有効化する必要があります。新しいライセンス(.lic)ファイルが添付ファイルとして電子メールで送信されます。ライセンス IDは、ライセンスファイルの名前のフォーマットに使用されます。(例:8d73e4k.lic（8d73e4kはライセンスID）)ライセンスファイルの添付ファイルは、指定されたライセンスサーバにインストールする必要があります。<br>

### 恒久的なon-premisesライセンスをインストールする方法

1. GO-Globalライセンスサーバ上のライセンスディレクトリ(例:C:\Program Files\GraphOn\GO-GlobalLicensing)からトライアルまたは無効になったライセンス(.lic)ファイルを削除してください。
2. 新しい.licファイルをGO-GlobalライセンスサーバのLicensingディレクトリに移動します。
3. 必要に応じて、競合するライセンスマネージャがある場合は、SERVER行のホストIDの後にポート番号を追加します。たとえば、以下のようになります。SERVER 2016ITL1 000C2931282E 27009(これにより、ライセンスマネージャがポート27009を使用するように指示されます)これ以外の変更を行うと、ライセンスが破損して無効になる可能性があることに注意してください。
4. GO-Globalライセンスサーバでサービスを開き、GO-Globalライセンスマネージャを再起動します。
5. ライセンスサーバを使用しているすべてのGO-Globalホストで<br>
a. ホストでGO-Globalセッションが実行されていないことを確認します。<br>
b. サービスを開き、GO-Global Application Publishing Serviceを再起動します(これにより、すべてのユーザセッションが終了します)。<br>

# ホスト以外のシステムにWebファイルをインストールする方法

GO-Global WebファイルをGO-Globalホスト以外のシステムにインストールすることができます。

### GO-Globalホスト以外のシステムにWebファイルをインストールする方法

1. 目的のWebサーバ上でホストインストーラを実行し、Webファイルをインストールすることを選択します。
2. Webサーバのlogon.html ページを編集し、ホスト名の代わりにGO-Globalホストのアドレスを挿入して、次のステートメントを追加します。

```
if (host.length == 0)
{
host="hostname";
}
```

# IIS Webサーバを使用して、既定のディレクトリ以外のディレクトリからWebファイルをホストする

Microsoft IIS Web Serverを使用して、既定のgoglobalディレクトリ以外のディレクトリからGO-Global Webファイルをホストすることができます。

### 既定のディレクトリ以外のディレクトリからWebファイルをホストする方法

1. Webサーバ上の`C:\inetpub\wwwroot` にディレクトリを作成し、それをあなたのユーザが表示するようにしたいものを呼び出します。例えば、`C:\inetpub\wwwroot\Web`のようなフォルダを作成します。
2. GO-Globalホストから`C:\Program files\GraphOn\GO-Global\Web` ディレクトリの内容を新しいディレクトリにコピーします。
3. IISマネージャを開き、[サイト | 既定のWebサイト]に移動します。**[既定のWebサイト]** を右クリックし、**[仮想ディレクトリを追加]** をクリックします。
4. 手順1で作成したディレクトリと同じ**エイリアス** を指定し、**物理パス** を手順2でファイルをコピーしたディレクトリに指定します。例えば、`C:\inetpub\wwwrootWeb`のようにします。
5. 新しい仮想ディレクトリをクリックします。次に**MIMEタイプ** をダブルクリックします。
6. **追加** をクリックします。File name extensionボックスに.memを入力します。**[MIMEの種類]** ボックスに`application/octet-stream`と入力します。次にOKをクリックします。
7. この仮想ディレクトリのデフォルトドキュメントとして**logon.html** を追加します(詳細はIISでのデフォルトドキュメントの設定については、`https://support.microsoft.com/enus/help/320051/how-to-configure-the-default-document-in-internet-information-services`を参照してください)。
8. IISの設定が正しいことを確認するには、ブラウザを開き、GO-Globalホストに接続するためのURLを入力します、例:`http://hostname/web/logon.html`もしくは`https://hostname/web/logon.html`(hostnameはあなたのGO-Globalホストの名前です。webはIISで作成した仮想ディレクトリの名前です。)

# Apache HTTPサーバを介したGO-Globalの実行

Apache HTTP Server 2.4 WebサービスがGO-Globalホストにインストールされている場合、ユーザはWebブラウザを使ってクライアントマシンから接続できます。

IISがインストールされている場合は、Apacheをダウンロードする前にWorld Wide Web発行サービスを停止して無効にする必要があります。**[サービス]** から、**[World Wide Web発行サービス]** を右クリックして**[プロパティ]** を選択します。**[プロパティ]** ダイアログで、**[スタートアップの種類]** ドロップダウンメニューから**[無効]** を選択し、**[停止]** ボタンをクリックします。**OK** をクリックしてください。

1. `http://www.apachelounge.com/download/`にアクセスして最新バージョンをダウンロードしてください。GraphOnによってテストされたバージョンは**httpd-2.4.29-Win64-VC15.zip** でした。
2. **C ++再配布可能なVisual Studio 2017** をダウンロードしてインストールします。GraphOnによってテストされたバージョンは、次のリンクからダウンロードできます。`https://aka.ms/vs/15/release/VC_redis.x64.exe`
3. **httpd-2.4.29-Win64-VC15.zip** を`C:\Apache24`ディレクトリのGO-Globalホストに抽出します。
4. **httpd.conf** ファイルの**DirectoryIndex** ディレクティブに**logon.html** を追加します。例えば`C:\Apache24conf\httpd.conf`をテキストエディタで開き、DirectoryIndex 行を編集してファイルを保存します。**DirectoryIndex** 行は以下のようになっているはずです。
```
<IfModule dir_module>
DirectoryIndex logon.html index.html
</IfModule>
```
5. [スタート | すべてのプログラム | アクセサリー | コマンドプロンプト]の順にクリックします。**コマンドプロンプト** を右クリックし、**管理者として実行します。**
6. **[コマンドプロンプト]** ウィンドウで、次のように入力します。
```
cd C:\Apache24\bin
httpd -k install
httpd -k start 
```
　　まだ開いていない場合は、ファイアウォールでポート80を開く必要があります。SSLが実行されている場合は、ポート443が開いていることを確認してください。

7. `C:\Apache24\bin`を開き、**ApacheMonitor.exe** を実行します。システムトレイからApache Monitorを開き、サービスが開始されたことを確認します。
8. `C:\Apache24\htdocs`を開き、**goglobal** という名前のディレクトリを作成します。
9. `C:\Program files\GraphOn\GO-Global\Web`の内容を`C:\Apache24\htdocs\goglobal`ディレクトリにコピーします。
10. GO-Globalホスト上でブラウザを開き、`http://localhost/goglobal/logon.html`にアクセスしてセッションを開始します。


社内外のユーザによるGO-Globalホストへのセキュアな接続を可能にする

1. ホストとは別のコンピューターにWebコンポーネントをインストールします(WebサーバとGO-Globalホストは、同じコンピュータ上の同じポートでリッスンすることはできません)。
2. Microsoft IISが実行されていないか、GO-Globalホスト上の接続を受け入れていないことを確認します。
3. **[Hosts Options]** ダイアログの **[Security]** タブの **[Port]** フィールドの値を443に変更します。

![kit2-15-1](/img/kit2-15-1.png)
![kit2-15-2](/img/kit2-15-2.png)<br>
![kit2-15-3](/img/kit2-15-3.png)
![kit2-15-4](/img/kit2-15-4.png)<br>
![kit2-15-5](/img/kit2-15-5.png)

![2-8-1](/img/2-8-1.png)

4. ホストポートの設定を変更した後、**Port** パラメータに433を付加してWebに追加します。ホストへの接続に使用されるリンクは例えば、`http://hostname.graphon.com/goglobal/?host=hostname.graphon.com&port=443`
5. **[Hosts Options]** の **[Security]** タブで、ホストとWebサーバの **SSL証明書** を取得します。Webサーバコンピュータのドメイン名とGO-Globalホストのドメイン名が同じであることを確認します。それ以外の場合、ブラウザは、WebサーバからダウンロードされたWebアプリがGO-GlobalホストへのWebSocket接続を開くのを防ぎます。
6. 外部DNSを構成して、ホストおよびWebサーバ証明書の **コモンネーム** をホストおよびWebサーバコンピュータの外部IPアドレスに解決します。
7. ホストとWebの **コモンネーム** を解決するように内部DNSを構成します。

# サーバロールと設定タブ

管理者は、[Host Options]ダイアログの[Configuration]タブを使用して、Admin Consoleでサーバの役割を指定できます。例えば、管理者はGO-Globalホストをアプリケーションホスト(独立ホスト、従属ホスト、またはファームホストなど)として、またはアプリケーションホストマネージャ(Relay Load Balancerまたはファームマネージャなど)として指定できます。
管理者は、[Configuration]タブを使用して、前の章で説明したバックアップライセンスマネージャを構成することもできます。


# アプリケーションホストマネージャとライセンスサーバ

バージョン6.1では、アプリケーションホストマネージャ(Relay Load Balancerなど)を使用する場合、GO-Globalはデフォルトでアプリケーションホストマネージャーからライセンスを管理します。これにより、次のようなメリットがあります。

* 管理者は、ライセンス構成を変更することなく、クラスタにアプリケーションホストを追加および削除することができます。
* cloudライセンスを使用すると、クラスタ内のすべてのホストが GraphOn cloudライセンスサービスと通信できない場合に、予約されたシートを共有できるようになります。

バージョン6.1以前のバージョンでは、GO-Globalはデフォルトで依存ホストのライセンスを管理していました。このため、管理者は各従属ホストがセントラルライセンスマネージャを使用するように設定する必要がありました。旧バージョンからバージョン 6.1にアップグレードされた従属ホストは、引き続き従属ホストからのライセンスを管理します。
アップグレード後、管理者は、すべてのディペンデントホストとRelay Load Balancer上の **ホスト** から **Relay** への **HostProperties.xml** ファイル内の **ManageLicensesFrom** プロパティの値を以下のように編集することで、これを変更することができます。

### Relay Load Balancerからライセンスをチェックアウトする方法
1. **GO-Global Application Publishing Service** を停止します。
2. `C:\ProgramData\GraphOn\GO-Global`ディレクトリ内の **HostProperties.xml** ファイルを探してください。
3. WordPadで **HostProperties.xml** を開き、 **ManageLicensesFrom** プロパティを探します。
4. **ManageLicensesFrom** プロパティを **Relay** に設定します。
5. ファイルを保存します。
6. **GO-Global Application Publishing Service** を再起動します。







