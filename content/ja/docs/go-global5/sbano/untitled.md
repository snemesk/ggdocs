+++
title = "GO-Globalホストのインストール"
description = ""
weight= 1
+++

GO-Globalは、自己解凍形式の実行可能ファイルとして提供されており、ダブルクリックするとインストールされます。解凍先のルートフォルダで **gg-host.windows_x86.exe**または **gg-host.windows_x64.exe**を実行してファイルを解凍し、インストールすることもできます。セットアップでは、すべてのGO-Globalホストファイルおよびブラウザログオン用にGO-Globalホストを設定するために必要なファイルがインストールされます。

ホストセットアッププログラムを実行するときは、「管理者」として(つまり、コンピュータのローカル管理者アカウントで)コンピュータにログインする必要があります。コンピュータの管理者グループのメンバであるアカウントでログインするだけでは不十分です。ローカル管理者([コンピュータ名]\administrator)としてログインしている必要があります。

>ライセンスファイル(C:\Program Files\GraphOn\GO-Global\Programs\*.lic)への最小アクセス許可は次のとおりです。Administrators：フルコントロール、Users：読み取りと実行、SYSTEM：フルコントロール
>
>次のエラーメッセージがログファイルに表示される場合は、ライセンスファイルに対する権限が正しくない可能性があります。
>
>_FlexLM code #-1; FlexLM text : Cannot find license file.The license files(or license server system network addresses)attempted are listed below.Use LM_LICENSE_FILE to use a different license file,or contact your software provider for a license file.)_

**Application Publishing Service**と **License Manager**が実行中であることを確認する方法

1. Windows タスクバーの [**スタート**]ボタンをクリックします。
2. [コントロール パネル | 管理ツール]の順にクリックします。
3. [**サービス**]をダブルクリックします。
4. サービスの一覧から GO-Global Application Publishing Service を選択します｡
5. これらのサービス の状態が「開始」で、スタートアップの種類が「自動」であることを確認します。

GO-Globalホストのスタートアップの種類を設定する場合は、一覧からGO-Global Application Publishing Serviceを選択し、[開始]ボタンをクリックします。そこでGO-Globalホストに適用するオプションを選択します。

## ライセンスファイルの手動によるコピー

**License Retrieval Wizard**を利用しない場合は、予め入手したライセンスファイルをGO-GlobalのインストールパスのProgramsディレクトリにコピーして下さい。中央ライセンスサーバを使用するようにGO-Globalを設定している場合は、ライセンスファイルをライセンスサーバにコピーします。詳細については、「中央ライセンスサーバを使用するためのGO-Globalの設定」の項を参照してください。ライセンス ファイルをコピーしたら、License Managerを停止して再起動する必要があります。

### License Manager の起動方法

1. Windowsタスクバーの [**スタート**]ボタンをクリックします。
2. [コントロール パネル | 管理ツール]の順にクリックします。
3. [**サービス**]をダブルクリックします。
4. サービスの一覧から **GO-Global License Manager**を選択します。
5. [**スタート**]ボタンをクリックします。

![2-1-1](/img/2-1-1.png)

>ライセンスマネージャを再起動しても、GO-Globalホスト上で実行されている既存のセッションには影響しません。