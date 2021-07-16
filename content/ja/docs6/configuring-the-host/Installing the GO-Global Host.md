+++
title = "GO-Globalホストのインストール"
description = ""
weight = 2
+++


GO-Globalは自己解凍型の実行ファイルとして配布されており、gg-host.exeをダブルクリックしてインストールすることができます。ホストセットアッププログラムを実行するときは、コンピュータの管理者グループのメンバであるアカウントにログインする必要があります。

デフォルトでは、GO-Globalホストのセットアップは、すべての **ホスト**のコアコンポーネント、 **Web**コンポーネント(ブラウザログオン用にホストを設定するために必要なすべてのファイルを含む)、および **Licensing**コンポーネントをインストールします。 [**Customize**]ボタンをクリックして、インストールしたくないコンポーネントを選択解除することで、インストールをカスタマイズできます。それ以外の場合は、 [**Install**]ボタンをクリックしてください。

GO-Globalを有効にするには、 **GO-Globalライセンスファイルをデフォルトのライセンスフォルダ** C:\ Program Files\GraphOn\GO-Global\Licensingにコピーします。ライセンスサーバを使用するようにGO-Globalを設定するには、[セントラルライセンスサーバを使用するためのGO-Global](https://app.gitbook.com/@kitasp-goglobal/s/kitasp-documentaion/go-global-6/configuring-the-host/configuring-go-global-to-use-a-central-license-server)の構成を参照してください。

後でライセンスファイルをコピーすることを選択した場合は、ファイルをコピーした後にGO-Global License Managerを再起動し、次にGO-Global Application Publishing Serviceを再起動する必要があります。

### GO-Global License Managerを再起動する方法

1. [コントロールパネル | 管理ツール | サービス]の順にクリックします。
2. サービスの一覧から **GO-Global License Manager**を選択します｡
3. 右クリックをして **再起動**を選択します。

### GO-Global Application Publishing Service を再起動する方法

1. [コントロール パネル | 管理ツール | サービス]の順にクリックします。
2. サービスの一覧から **GO-Global Application Publishing Service**を選択します｡
3. 右クリックをして **再起動**を選択します。

ホストをインストールしてコンピュータを再起動したら、Webブラウザを選択してGO-Globalの **Interactive Quick Start Guide**を開きます。このガイドでは、admin consoleを介してアプリケーションを公開する方法と、アプリケーションへのリンクを共有する方法について説明します。 **Interactive Quick Start Guide**は、GO-Globalのログオンページに **?help=ac**を追加することでいつでも開くことができます。たとえば、 **http://hostname/goglobal/?help=ac**のようになります。

>ライセンスファイル(C:\Program Files\GraphOn\GO-Global\Programs*.lic)への最小アクセス権限は次のとおりです。
>
>Administrators：フルコントロール、Users：読み取りと実行、SYSTEM：フルコントロール 次のエラーメッセージがログファイルに表示される場合は、ライセンスファイルに対する権限が正しくない可能性があります。 _FlexLM code #-1; FlexLM text : Cannot find license file.The license files(or license server system network addresses)attempted are listed below.Use LM_LICENSE_FILE to use a different license file,or contact your software provider for a license file.)_

2つのGO-Globalライセンスを組み合わせるとき、または同じGO-Globalホストで2つの別々のライセンスを使用するときは、ライセンスファイル内のホスト名は大文字と小文字が区別され、同一である必要があります。

GO-Globalホストの起動設定を行う場合は、リストからGO-Global Application Publishing Serviceを選択して、 [**起動**]ボタンをクリックしてください。GO-Globalホストに適用したいオプションを選択します。
