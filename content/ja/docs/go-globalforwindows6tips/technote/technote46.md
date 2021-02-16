+++
title = "いくつかのアプリケーションがGO-Globalセッションで適切に起動または実行できない"
description = ""
weight = 3
+++

いくつかのWindowsアプリケーションは、Windowsシェルによって提供される機能およびサービス(例えばDDE)を使用する(explorer.exe)。ほとんどのアプリケーションはWindowsシェルなしで実行されますが、Windowsシェルがアプリケーションと同じセッションで実行されていないと、起動に失敗したり、正しく実行されなかったりすることがあります。デフォルトでは、WindowsシェルはGO-Globalセッションでは動作しません。アプリケーションがGO-Globalセッションで起動または正常に動作しない場合、アプリケーションはシェルに依存している可能性があります。

### **解決策**

1. GO-Globalセッションのバックグラウンドで実行するようにWindowsシェル(explorer.exe)を登録します。<br>
    a. レジストリエディタから、 **HKEY_LOCAL_MACHINE** キーを展開します。<br>
    b. `\SOFTWARE\GraphOn\Bridges\1.0.0\System\Run\LocalMachine`を展開します。<br> 
    c. DWORD値を作成し、 **explorer.exe** という名前を付けます。値を0に設定してください。<br>
2. explorer.exeおよびexplorer.exeが開始するすべての子プロセスをシステムプロセスとして登録し、最後に公開されたアプリケーションが閉じられるとGO-Globalセッションが終了するようにします。<br> 
    a. GO-Globalセッションを開始し、GO-Globalホストにログオンします。<br>
    b. Admin Consoleの **[Session]** タブで、セッション内でexplorer.exeが実行されていることを確認します。シェルのユーザインターフェイスがどれも表示されていないことを確認します(シェルの一部の要素は、新しいユーザが初めてホストにログオンしたときに表示されることがあります)。<br> 
    c. `HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\Bridges\1.0.0\System\Processes@を展開します。<br>
    d. DWORD値を作成し、explorer.exeという名前を付けます。 **explorer.exe** によって起動されたプロセスについてアドミンコンソールを確認し、これらの各プロセスに対してDWORD値を作成します。システムプロセスには、次のような実行可能ファイルが含まれる場合があります。<br>

```
ALMon.exe
sqlmangr.exe
soffice.exe
reader_sl.exe
acrobat_sl.exe
```
<br>
    e. これらのプロセスの値を0に設定してください。<br>
    f. Program Windowsを閉じます。GO-Globalセッションも終了することを確認してください。<br>

{{% alert title="参照" color="info" %}}
GO-Globalセッションのバックグラウンドで実行するようにWindowsシェルを登録すると、かなりのオーバーヘッドが追加されます。セッションの開始に時間がかかり、より多くのメモリを消費します。シェルの起動時に実行するように登録されている他のプロセスによっても、追加のオーバーヘッドが発生する可能性があります。

不要なプロセスがユーザーのスタートアップフォルダまたはレジストリのさまざまなRunコマンドの下に登録されないように注意する必要があります(例:`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run`)。
{{% /alert %}}