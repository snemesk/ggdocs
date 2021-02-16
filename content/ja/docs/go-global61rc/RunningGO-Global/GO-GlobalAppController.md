---
title: "GO-Global AppController"
linkTitle: ""
weight: 01
type: "docs"
---

GO-Global AppControllerは、GO-Globalのネイティブクライアントとブラウザアドオンの機能を1つのアプリケーションに統合し、コンピュータのデスクトップ、モバイル デバイス、またはWebブラウザから起動することができます。

### AppControllerをインストールする方法
1. Webブラウザを起動します。
2. [Location]ボックスに、[http://]と入力し、その後にホスト名とAppControllerインストールページを入力します。たとえば、`http://hostname/goglobal/`
3. AppControllerがインストールされていない場合は、ダウンロードするよう求められます。コンピュータのオペレーティングシステムからセットアッププログラムを実行します( **GO-Global.AppController.exe、GO-Global.AppController.dmg、GO-Global.AppController.deb、GO-Global.AppController.rpm** など)。
4. Mac OS Xの場合は、AppControllerを[Applications]フォルダにドラッグします。

AppControllerをインストールすると、ブラウザ、スタートメニュー、またはショートカットから GO-Globalを実行できます。
デフォルトでは、ダウンロード時にインストールファイル名がAppControllerからGO-Global.AppControllerに変更されます。Admin Consoleの[Branding]タブでインストーラ名が変更されている場合は、その名前がインストーラ名のGO-Globalに置き換わります(例:Acme.AppController.exe)。

### コンピュータのメニューからGO-Global AppControllerを実行する方法

1. AppControllerメニューオプションを選択します。<br>
　a. Windowsで、Windowsタスクバーの **[スタート]** ボタンをクリックし、[プログラム | AppController]を選択します。<br>
　b. Linuxでは、[アプリケーション]メニューから[ネットワーク]または[インターネット]カテゴリを選択し、 **[AppController]** をクリックします。<br>
　c. Mac OS Xの場合は、メニューから「Go」→「Applications」を選択し、**AppController** をダブルクリックします。<br>
2. **[Connection]** ダイアログ内にホストのアドレスを入力します。
3. **[Connect]** をクリックします。**[Sign In]** ダイアログが表示されたら、次の情報を入力します。
   - **[User Name]** ボックスにネットワークユーザー名を入力します。
   - **[Password]** ボックスにパスワードを入力します。

![5-1-1](/img/5-1-1.png) 

{{% alert title="参照" color="info" %}}
GO-Globalでは、ログオンプロセスをシャットダウンする前に無効なログオンを3回試行することができます。
{{% /alert %}}

Windowsコンピュータでは、GO-Global ConnectionダイアログにGO-Globalホストへのショートカットを作成するオプションがあります。このオプションを使用すると、ホストに接続するときに[接続]ダイアログを迂回することができます。

### WindowsコンピュータでGO-Globalホストへのショートカットを作成する方法

1. 上記のいずれかの方法でAppControllerを起動します。
2. **[Connection]** ダイアログにサーバのアドレスを入力します。
3. **[Create desktop shortcut to this host]** チェックボックスをオンにします。
4. **[Connect]** をクリックします。ホストへのショートカットがコンピュータのデスクトップに作成されます。

### WindowsでAppControllerのショートカットを作成する方法

1. デスクトップ上で右クリックします。
2. [ 新規作成 | ショートカットの作成 ]の順に作成します。
3. **ショートカットの作成** ダイアログボックスで、AppControllerの実行ファイルを参照します。たとえば、`"C:¥Program Files¥GraphOn\AppController\AppController.exe"`のようになります。
4. AppController.exeへのパスの後にパラメータを追加します。例えば、以下のようにします。<br>
	`"C:\Program Files\GraphOn\AppControllerAppController.exe" -h hostname -a Wordpad -r`<br> 
	`"C:\UsersPublic\Public Documentstest.rtf"`
5. ショートカットの名前を入力し、**[完了]** をクリックします。
