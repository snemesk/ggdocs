---
title: "GO-Globalホストのインストール"
linkTitle: ""
weight: 04
type: "docs"
---
{{% alert title="情報" color="green" %}}
GO-Globalホストのインストールの詳細につきましては弊社提供のメディアにございますDocuments_kitASPフォルダ内のGGH6.*インストール手順書をご参照ください。
{{% /alert %}}


GO-Globalは自己解凍型の実行ファイルとして提供され、**gg-host.exe**をダブルクリックすることでインストールできます。ホストセットアッププログラムを実行する際には、コンピュータの管理者グループのメンバであるアカウントでログインする必要があります。
既定では、GO-Globalホストセットアップは、コアホストコンポーネント、Webコンポーネント(ブラウザログオンのためにホストを設定するために必要なすべてのファイルを含む)、ライセンスコンポーネントのすべてをインストールします。**[Customize]** ボタンをクリックして、インストールしたくないコンポーネントのチェックを外すことで、インストールをカスタマイズすることができます。それ以外の場合は、**[Install]** ボタンをクリックします。GO-Globalを有効にするには、GO-Globalのライセンスファイルを既定のライセンスフォルダにコピーしてください。ライセンスサーバを使用するように GO-Globalを設定するには、外部ライセンス管理サーバを使用するようにGO-Globalを設定するを参照してください。
後でライセンスファイルをコピーする場合は、ファイルをコピーした後にGO-Global License Managerを再起動し、次に GO-Global Application Publishing Serviceを再起動する必要があります。

### GO-Global License Managerを再起動する方法

1. [コントロールパネル | 管理ツール | サービス]をクリックします。

![kit2-9-1](/img/kit2-9-1.png)
![kit2-9-2](/img/kit2-9-2.png)
![kit2-9-3](/img/kit2-9-3.png)

2. サービスの一覧から [GO-Global License Manager]を選択します。

![kit2-9-4](/img/kit2-9-4.png)
![kit2-9-5](/img/kit2-9-5.png)

3. 右クリックして、[再起動]を選択します。

![kit2-9-6](/img/kit2-9-6.png)

### GO-Global Application Publishing Serviceを再起動する方法

1. [コントロールパネル | 管理ツール | サービス]をクリックします。

![kit2-9-7](/img/kit2-9-7.png)
![kit2-9-8](/img/kit2-9-8.png)
![kit2-9-9](/img/kit2-9-9.png)

2. サービスの一覧から [GO-Global Application Publishing Service]を選択します。

![kit2-9-10](/img/kit2-9-10.png)
![kit2-9-11](/img/kit2-9-11.png)

3. 右クリックして、[再起動]を選択します。

![kit2-9-12](/img/kit2-9-12.png)

ホストをインストールしてコンピュータを再起動した後、Webブラウザを選択してGO-Globalの **Interactive Quick Start Guide** を開きます。このガイドでは、Admin Consoleを通じてアプリケーションを公開する方法、アプリケーションへのリンクを共有する方法を説明しています。GO-Global AppControllerのログオンページに **?help=ac** を追加することで、**Interactive Quick Guide**をいつでも開くことができます。たとえば、`http://hostname/goglobal/?help=ac`のように設定します。

{{% alert title="参照" color="info" %}}
ライセンスファイル`(C:\Program Files\GraphOn\GO-Global\Licensing\*.lic)`の最小権限は以下の通りです。
**Administrators**:Full Control; **Users**:Read & Execute; **SYSTEM**:Full Control
以下のエラーメッセージがLogファイルに表示された場合、ライセンスファイルのパーミッションが正しくない可能性があります。

`FlexLM code #-1; FlexLM text: Cannot find license file. The license files (or license server system network addresses) attempted are listed below. Use LM_LICENSE_FILE to use a different license file, or contact your software provider for a license file.)`
{{% /alert %}}

2つのGO-Globalライセンスを組み合わせる場合、または同じGO-Globalホストで2つの別々のライセンスを使用する場合、ライセンスファイルのホスト名は大文字と小文字が区別され、同一である必要があります。

GO-Globalホストの起動設定を設定する場合は、リストから[GO-Global Application Publishing Service]を選択し、**[Startup]** ボタンをクリックします。GO-Globalホストに適用するオプションを選択します。