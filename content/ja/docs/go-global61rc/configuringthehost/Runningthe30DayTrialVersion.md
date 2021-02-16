---
title: "Running the 30-Day Trial Version"
linkTitle: ""
weight: 07
type: "docs"
---
{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。GO-Globalの評価を行う際にはきっとエイエスピー営業部までお問い合わせください。
{{% /alert %}}

GO-Global’s 30-day trial version can be downloaded from GraphOn’s website. The Activation Wizard runs during the GO-Global trial installation, and is accessible from the Start menu after installing the host. It configures the computer to use a GraphOn product license, then activates GO-Global on the computer. GO-Global can be activated on a computer with a trial license only once.

### To run the Activation Wizard

1. From the Start Menu, click GraphOn GO-Global | Activation Wizard.

![kit2-11-1](/img/kit2-11-1.png)
![kit2-11-2](/img/kit2-11-2.png)

2. When the Activation Wizard opens, follow the prompts. Sign in using your GraphOn account. Create an account if you do not have one. Then click the **Sign in** button. 

![kit2-11-3](/img/kit2-11-3.png)

{{% alert title="参照" color="info" %}}
GO-Global cloud trial licenses can only be used on computers that have direct access to the internet. If a computer does not have access to the internet (e.g., if it accesses the internet via a proxy server), the Activation Wizard will notify you that GO-Global is unable to communicate with GraphOn’s online license service. If you see this message, you can request an on-premises trial license as described below.
{{% /alert %}}

3. If applicable, select a GraphOn customer account.

![kit2-11-4](/img/kit2-11-4.png)
![kit2-11-5](/img/kit2-11-5.png)

4. Select the license you would like the computer to use. If there are no available licenses, click **Start New Trial.** Specify a description for the license, then click **OK.**

![kit2-11-6](/img/kit2-11-6.png)

5. Click **Accept** to accept the GO-Global License Agreement.
6. Click **Activate** to enable GO-Global on this computer.

After installing GO-Global and running the Activation Wizard, you must restart the computer.

{{% alert title="参照" color="info" %}}
If a license is grayed out, it is not an active license, and cannot be used.
{{% /alert %}}

## オンプレミスのトライアルライセンスを使用してGO-Globalをアクティブにする方法

インターネットに直接アクセスできないコンピュータの場合、またはクラウドのトライアルライセンスが確立できない場合、GraphOnはオンプレミスのFlexeraベースのトライアルライセンスを作成し、電子メールで送信します。オンプレミスライセンスを使用してGO-Globalを起動するには
1. コンピュータのホスト名とホストID(物理アドレス)を決定します。<br>
	a. [スタート | すべてのプログラム | アクセサリ | コマンドプロンプト] をクリックして、コマンドプロンプトウィンドウを開きます。<br><br>
![kit2-11-8](/img/kit2-11-8.png)<br><br>
	b. `ipconfig /all` と入力し、Enter キーを押します。<br><br>
![kit2-11-9](/img/kit2-11-9.png)<br><br>
	c. **コンピュータのホスト名** と **物理アドレス(NIC)** を探します。<br><br>
![kit2-11-10](/img/kit2-11-10.png)

2. コンピュータのホスト名、ホストID(物理アドレス)、ユーザ数を明記してKitASPにメールを送信します。<br> 
3. KitASPからライセンスファイルが届いたら<br>
	a. .licファイルを`C:\Program Files\GraphOn\GO-Global\Licensing` ディレクトリにコピーしてください。<br> 
	b. **GO-Global License Manager Service** を起動してください。<br>
	c. **GO-Global Application Publishing Service** を再起動します。<br>

## 恒久的なオンプレミスライセンスのインストール

管理者は、現在クラウドやオンプレミスのトライアルライセンスを使用しているシステムに、オンプレミスの恒久的なライセンスをインストールすることができます。恒久的なライセンスの注文が入ると、GraphOnは注文を処理して新しいライセンスマスターを作成します。ライセンス情報は、注文リクエストに記載された連絡先にメールで送信されます。管理者はカスタマーポータルから製品コード、メールアドレス、ホスト名、ホストIDを入力してライセンスを有効化する必要があります。新しいライセンス(.lic)ファイルが添付ファイルとして電子メールで送信されます。ライセンスIDは、ライセンスファイルの名前のフォーマットに使用されます(例:**8d73e4k.lic** 、8d73e4kはライセンスID)。ライセンスファイルの添付ファイルは、指定されたライセンスサーバにインストールする必要があります。

### 恒久的なのオンプレミスライセンスをインストールする方法
1. GO-Globalライセンスサーバ上のライセンスディレクトリ(例:`C:\Program Files\GraphOn\GO-Global\Licensing\`)からトライアルまたは無効になったライセンス(.lic)ファイルを削除してください。
2. 新しい.lic ファイルをGO-Globalライセンスサーバーのライセンスディレクトリに移動する。
3. 必要に応じて、競合するライセンスマネージャーがある場合は、<SERVER>行のホストIDの後にポート番号を追加します。たとえば、以下のようになります。SERVER 2016ITL1 000C2931282E 27009(これにより、ライセンスマネージャがポート27009を使用するように指示されます)これ以外の変更を行うと、ライセンスが破損して無効になる可能性があることに注意してください。
4. GO-Globalライセンスサーバ上で**サービス** を開き、**GO-Global License Manager** を再起動します。
5. ライセンス サーバーを使用しているすべての GO-Global ホストで:<br>
a. ホストで GO-Globalセッションが実行されていないことを確認します。<br>
b. **サービス** を開き、**GO-Global Application Publishing Service** を再起動します(これにより、すべてのユーザセッションが終了します)。<br>

## ホスト以外のシステムにWebファイルをインストールする方法

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

## IIS Webサーバを使用して、既定のディレクトリ以外のディレクトリからWebファイルをホストする

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

## Apache HTTPサーバを介したGO-Globalの実行

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

{{% alert title="参照" color="info" %}}
GO-Globalのバージョン番号には、ソフトウェアのメジャーバージョン、マイナーバージョン、サービスパックバージョン、ビルド番号が含まれています。たとえば、バージョン**6.1.2.37894** では、**6** がメジャーバージョン、**1** がマイナーバージョン、**2** がサービスパックバージョン、そして**37897** がビルド番号です。

GraphOnがGO-Globalへのメジャーアップグレードをリリースすると、メジャーバージョン番号が増えます。メジャーアップグレードには、通常、重要な新機能または変更された機能や機能、ユーザインターフェイスの変更、またはアーキテクチャの変更が含まれます。GraphOnがGO-Globalへのマイナーアップグレードをリリースすると、マイナーバージョン番号が増えます。マイナアップグレードには、一般的にマイナーな機能追加や変更、バグ修正とセキュリティ改善が含まれます。GraphOnがGO-GlobalにService Packをリリースすると、Service Packのバージョン番号が増えます。サービスパックには一般にバグ修正が含まれており、新しいプラットフォームのサポートとマイナーな機能強化が含まれている場合があります。ビルド番号はすべてのGO-Globalリリースで増加しています。ビルド番号だけが増えたリリースがパッチです。パッチには通常、セキュリティ上の問題、互換性の問題、および製品の問題に対する修正が含まれています。たとえば、パッチにはGO-Globalが最新リリースのMicrosoft Windows上で動作することを可能にする変更が含まれているかもしれません。
{{% /alert %}}