+++
title = "GO-Global スタートアップパラメータ"
description = ""
weight = 3
+++


GO-Globalは、次のショートカットとハイパーリンクのパラメータをサポートしています。

| Shortcut       | Parameters               | Description                                                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -u             | user                     | The name of the user’s account.                                                                                                                                                                                                                                                                                                                                                                                                    |
| -p             | password                 | The user’s password                                                                                                                                                                                                                                                                                                                                                                                                                |
| -h             | host*                    | The network name of the GO-Global Host.                                                                                                                                                                                                                                                                                                                                                                                            |
| -hp            | port                     | The port on which the GO-Global Host accepts connections. (491 by default.)                                                                                                                                                                                                                                                                                                                                                        |
| -a             | app                      | The application to run. This may be a command-line string or the application name, as registered with the Admin Console.                                                                                                                                                                                                                                                                                                           |
| -r             | args                     | Application arguments.                                                                                                                                                                                                                                                                                                                                                                                                             |
| -c or -nc      | compression              | -c enables compression. -nc disables compression. compression= “true” enables compression. compression= “false" disables compression. Compression is enabled by default.                                                                                                                                                                                                                                                           |
| -ac            | printerconfig            | Determines how printers are initialized at startup. When printerconfig ="all" or -ac is followed by all, all printers are automatically configured. When printerconfig = "none" or -ac is followed by none, printers are not automatically configured. When printerconfig = "default" or -ac is followed by default, the default printer is configured automatically. This is the default setting.                                 |
| -f             | clientframe              | When set respectively to 1 or “true”, all applications running in the session will be displayed within a bounding window. When set respectively to 0 or “false”, applications will be displayed within their own individual windows.                                                                                                                                                                                               |
| -autoreconnect | autoreconnect            | Determines how many times the client will automatically attempt to reconnect after a broken connection. When autoreconnect=n in a URL or -autoreconnect is followed by n, the client will automatically attempt to reconnect n number of times. (autoreconnect is set to 20 by default.)                                                                                                                                           |
| -geometry      |                          | The width and height of the client window. For example: -geometry 800x600                                                                                                                                                                                                                                                                                                                                                          |
|                | multimonitor             | When set to “true”, the session’s desktop will span all monitors. When set to “false”, applications will be confined to the primary monitor.  multimonitor = “true” by default.                                                                                                                                                                                                                                                    |
|                | width                    | The width of the frame or embedded window. (800 by default.)                                                                                                                                                                                                                                                                                                                                                                       |
|                | height                   | The height of the frame or embedded window. (600 by default.)                                                                                                                                                                                                                                                                                                                                                                      |
|                | embed                    | When set to “true” applications run within the browser window. When set to “false” applications run outside the browser window.                                                                                                                                                                                                                                                                                                    |
|                | bInBrowser               | Not supported in version 6.                                                                                                                                                                                                                                                                                                                                                                                                        |
|                | noscale                  | When noscale is set to "true" and the browser is resized, the resolution of the embedded GO-Global session will adjust accordingly, rather than scaling the displayed image on the client. (noscale = "false" by default.)                                                                                                                                                                                                         |
|                | useApp                   | When useApp= “true”, the GO-Global Web App will try to launch the full GO-Global App. When useApp=“false”, the Web App will not try to launch the GO-Global App. (useApp=“true” by default.)                                                                                                                                                                                                                                       |
|                | installApp               | When installApp=“true”, the user will be prompted to install the full GO-Global App, if it is not already installed. If installApp=“false”, the user will NOT be prompted to install the GO-Global App and no link to install it will be displayed. When installApp=“addLink”, the Get the App link will be added to the GO-Global Web App's toolbar if the full GO-Global App is not already installed.                           |
| -clientscale   | clientscale              | clientscale, followed by the percent scale factor, causes the GO-Global App on Windows to scale the applications running in the session relative to applications running locally on the client computer. For example, adding -clientscale 200 to the command-line will cause applications running in the GO-Global session to appear twice as large as applications running locally on the client computer.                        |
| -clientdpi     | ClientDPIScaling Enabled | -clientdpi 1 or ClientDPIScalingEnabled="true" enables the GO-Global App's DPI scaling feature. -clientdpi 0 or ClientDPIScalingEnabled="false" disables the feature. When these options are specified, they override the value of the ClientDPIScalingEnabled property in the HostProperties.xml file on the host.                                                                                                                |
| -cn            | computerName             | When -cn 1 or computerName=1, the Windows client sends the CLIENTNAME environment variable to the host rather than the actual computer name.                                                                                                                                                                                                                                                                                       |
| -krm           | keyreportingmethod       | This option instructs the client to send either unicode or keycode values to the host based on character type. -krm 0 — The client sends alpha keys as unicode and numeric keys as unicode. -krm 1 — The client sends alpha keys as keycode and numeric keys as unicode. -krm 2 — The client sends alpha keys as unicode and numeric keys as keycode. -krm 3 — The client sends alpha keys as keycode and numeric keys as keycode. |

*ログオンHTMLページでホストが指定されていない場合、GO-Globalはログオンファイルのダウンロード元のマシンを検出し、そのホストに接続します。 **[Connection]**ダイアログは表示されず、ユーザには **[Sign In]**ダイアログのみが表示されます。

host = "？"の場合ユーザはホストのアドレスの入力を求められます。アプリケーションが指定されていない場合は、Program Windowsが開きます。

>autoclose = "true"および bInBrowser = "true"の場合、ユーザのセッションが終了するとブラウザウィンドウは閉じます。 autoclose = "true"かつ bInBrowser = "false"の場合、クライアントが起動すると同時にブラウザウィンドウは閉じます。

### GO-Global のショートカットの作成

1. デスクトップ上で右クリックします。
2. [新規作成 | ショートカット]をクリックします。
3. [ショートカットの作成]ダイアログ ボックス内で、GO-Globalクライアントの実行可能ファイルを検索します。例 :

```
C:\Program Files\GraphOn\GO-Global Client\gg-client.exe
```
4. gg-client.exeのパスの後にパラメータを追加します。例:

```
"C:\Program Files\GraphOn\GO-Global\Client\gg-client.exe" –h servername –a Wordpad –r "C:\Users\Public\Public Documents\test.rtf"
```
5. ショートカットの名称を入力し、[終了]をクリックします。

### Mac OS X Client でのコマンド行引数の使用方法

1. [Terminal]を開きます。
2. /Applications/GO-Global.app/Contents/MacOS/ ディレクトリに切り替えます。
3. **./GO-Global**に続いてコマンド行引数を入力します。例 :

```
./GO-Global –h 196.125.101.222 -c -ac all -hp 443
```

* コマンド行引数はオプションで、大文字と小文字を区別しません。 **－r**以外の引数は任意の順序で付加できます。 **－r**は例外的にコマンド行引数の最後に付け、 **–a**引数と合わせて使用する必要があります。
* **–a**引数を使用すると、そのアプリケーションが存在しない場合でもProgram Windowは起動されません。
* **－r**引数で渡されるスタートアップパラメータは、各アプリケーションに固有です。スタートアップパラメータの詳細については、各アプリケーションの関連文書を参照してください。
* ユーザがパスワードを持たない場合、 **－p ""**を使用して **[Sign In]**ダイアログをバイパスできます。ただしこの時、コマンド行でユーザ名も指定しておく必要があります｡
* ユーザ名、パスワード、アプリケーション表示名、アプリケーション引数に空白がある場合には、コマンド行引数で引用符を使用する必要があります。たとえば、Adobe Acrobat Readerを起動する場合は、引数 **–a "Acrobat Reader"**とします。同様に、ユーザ名「Jim C」は、 **–u "Jim C"** と指定します。

### Mac OS Xでデスクトップショートカットを作成する方法

1. アプリケーションフォルダからAutomatorを実行します。
2. ドキュメントのタイプとしてアプリケーションを選択します。
3. アクションにシェルスクリプトを実行を選択します。
4. ドキュメント化されたGO-Global起動パラメータのいずれかを使用して、[Run Shell Script]ダイアログに次のコマンドラインを追加します。例 :

```
/Applications/GO-Global.app/Contents/MacOS/GO-Global -h [HostName] -u [UserName] -p [Password] -a [Application] &
```
5. アプリケーションを適切な名前でデスクトップに保存します。
6. アプリケーションを実行すると、与えられた起動パラメータでGO-Globalが実行されます。

GO-GlobalをWebブラウザから実行する場合は、logon.htmlページを参照するハイパーリンクに引数を追加することによってGO-Globalの起動パラメータを指定できます。これらのハイパーリンクは、文書、Webページ、電子メール、インスタントメッセージなどに挿入できます。

### GO-Globalハイパーリンクを作成する方法

1. Webページをエディタで開きます。
2. エディタの[ハイパーリンクの挿入]オプションを選択します。
3. ホストのアドレスを入力し、続けて目的のハイパーリンクパラメータを入力します。

```
http://hostname/logon.html?mode=embed&width=1024&height=768&app=C:\Program Files\Windows NT\Accessories\wordpad.exe&args=C:\Users\Public\Public Documents\test.rtf
```
4. そのページを保存します。

* パラメータはオプションで、大文字と小文字が区別されます。それらは任意の順序で追加できます。
* パラメーター内のスペースは、 "％20"に置き換える必要があります。

### クライアントウィンドウのサイズ変更

コマンドライン引数–fを使用すると、コマンドライン引数–geometryを使用してクライアントウィンドウのサイズを変更できます。コマンドラインで-geometryを指定しないと、クライアントウィンドウは最大化されます。GO-Globalクライアントをルーズウィンドウモードで実行した場合、-geometryは無効です。クライアントウィンドウのサイズを変更するには、GO-Globalクライアント実行可能ファイルに–geometryを追加し、その後に目的の幅と高さを続けます。

例:

```
Windows
"C:\Program Files\GraphOn\GO-Global\Client\gg-client.exe" -f –geometry=800x600
Linux
./gg-client –h 196.125.010.222 –f –geometry=800x600
Mac
./GO-Global –h 196.125.010.222 –f –geometry=800x600
```
