+++
title = "Webクライアント用のGO-Globalホストの設定"
description = ""
weight= 2
+++

GO-Globalホストセットアップは、C:\Program Files\GraphOn\GO-Global\Webの下にGO-Global Webファイルをインストールします。インストール中にMicrosoftインターネットインフォメーションサービス(IIS)が検出されると、GO-Global Webファイルを指す仮想ディレクトリがIISに作成されます。IISが利用できない場合、管理者は指定されたWebサーバ上でGO-Global Webフォルダの内容を手動でホストする必要があります。

IISの仮想ディレクトリの詳細については、以下を参照してください。[http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/8c110149-8060-4dd7-9bdb-e262c21483dd.mspx?mfr=true](http://www.microsoft.com/technet/prodtechnol/WindowsServer2003/Library/IIS/8c110149-8060-4dd7-9bdb-e262c21483dd.mspx?mfr=true)

管理者はGO-GlobalのHTMLページを編集してデフォルトのオプションを変更したり、ユーザが使用できるクライアントを制限したりできます。インストール中、初期Webページはlogon.htmlに設定されます。 Webブラウザからホストにアクセスするユーザは、GO-Globalログオンページにアクセスする必要があります。(例：[http://hostname/goglobal/logon.html](http://hostname/goglobal/logon.html))

Logon.htmlはユーザのプラットフォームとブラウザを自動的に検出し、適切なGO-Globalクライアントを実行します。clients.htmlページではユーザのプラットフォームとブラウザも検出されますが、ユーザのコンピュータにインストールできるすべてのGO-Globalクライアントが一覧表示されます。 allclients.htmlページには、どのクライアントオペレーティングシステムが検出されても、すべてのGO-Globalクライアントが一覧表示されます。

logon.html、clients.html、allclients.htmlに加えて、次のHTMLページがGO-Global Webフォルダにあります。

| HTML Page           | Description                                                                                                                                                                                                                               |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| index.htm           | Default landing page.                                                                                                                                                                                                                     |
| installLinux.html   | Install page for the Linux Client. (gg-client.linux.rpm and gg-client.linux.deb.)                                                                                                                                                         |
| installMac.html     | Install page for the Mac OS X Client. (gg-client.mac.dmg)                                                                                                                                                                                 |
| installWindows.html | Install page for the Windows Client. (gg-client.windows.exe)                                                                                                                                                                              |
| installChrome.html  | Install page for the Chrome Extension.                                                                                                                                                                                                    |
| web.config          | Used to indicate that logon.html is a default document for the virtual directory, and to indicate that file browsing is disabled for the virtual directory. (The web.config file only exists when Microsoft IIS 7 or later is installed.) |

>以前のGO-Globalのバージョンでは、ブラウザプラグイン毎とGO-Globalオプションの組み合わせで別々のHTMLページが用意されていました。例えば、embeddedactivexlogon.htmlはInternet Explorerで埋め込みウィンドウオプションを指定してGO-Globalを起動するために使用され、looselinuxpluginlogon.htmlはLinux上のFirefoxで固定ウィンドウオプションを指定してGO-Globalを起動するために使用されました。
>
>GO-Global 5では、単一のWebページlogon.htmlがすべてのブラウザと設定オプションをサポートしています。したがって、これらの追加の構成固有のWebページは不要であり、それらはもはや製品に含まれていません。