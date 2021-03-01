---
title: "Running the Windows desktop in the background of GO-Global sessions"
linkTitle: ""
weight: 11
type: "docs"
---
Running the Windows desktop (explorer.exe) in the background of GO-Global sessions
Some Windows applications use features and services that are provided by the Windows desktop (explorer.exe). Most applications run without the desktop, but some fail to start or run properly when the desktop is not running in the same session as the application. By default, the desktop does not run in GO-Global sessions. If an application fails to start or work properly in a GO-Global session, it may have a dependency on the desktop.

To register the Windows desktop (explorer.exe) to run in GO-Global sessions
From the Registry Editor, expand the HKEYLOCALMACHINE key.
Expand \SOFTWARE\GraphOn\GO-Global\System\Run\LocalMachine.
Create a DWORD value and name it explorer.exe.
Set the value to
With this configuration, the desktop will run in GO-Global sessions but will not be visible.

参照
Registering the Windows desktop to run in the background of a GO-Global session adds significant overhead. Sessions will take longer to start and will consume more memory. Additional overhead can also result from other processes that are registered to run when the desktop starts up. Care should be taken to ensure that unnecessary processes are not registered in users’ Startup folders or under the various Run commands in the Registry (e.g., HKEYLOCALMACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run).

Explorer.exe will run in the session the first time that a user signs on to a host. This is done to fully initialize the user profile. Explorer.exe will not run in subsequent sessions started by the same user on the same host, unless configured to do so as described above.

## システムプロセスの登録
GO-Globalアーキテクチャでは、1つのセッション内で複数のプロセスを実行できます。常に最低1つのプロセスが実行されている必要があります。すべてのプロセスが終了すると、GO-Globalセッションが閉じられ、すべてのリソースが割り当て解除され、クライアント接続が切断されます。

通常のプログラムの実行中に、ほとんどのアプリケーションでは、外部操作を実行するための子プロセスが作成されます。これらのアプリケーションの中には、例えばWindowsヘルプなど、独自のユーザインターフェイスを提供するものがあり、必要なくなるとユーザによって閉じられます。他には、ユーザインターフェイスを提供せず、固定の操作を行ってから終了するヘルパープロセスもあります。アプリケーションは、終了する前に作成した子プロセスを制御して終了させることもできます。

問題は、プロセスがユーザインターフェースを持たず、自分自身で終了せず、親プロセスが直接終了させない場合にまれに発生します。既定の構成では、これらのプロセスは、他のすべてのプロセスが終了すると、ハングした GO-Globalセッションを作成します。残りのプロセスはセッションをアクティブに保ちますが、クライアントにはセッションを完全に閉じるためのユーザインターフェイスがありません。

この問題を解決するために、GO-Globalホストでは、システムプロセスとして実行する特定の実行可能ファイルの登録をサポートしています。セッション内に残っているプロセスがシステムプロセスのみの場合、GO-Globalセッションは終了します。

ほとんどのアプリケーションでは、デフォルトの構成で十分です。プロセスが終了する手段を持たずに作成された特別なケースでは、待機中のプロセスの実行可能ファイルを登録することで、GO-Globalセッションを適切に終了させることができます。

警告
以下の情報には、Windowsレジストリを開いて操作することが含まれています。ここで説明されている操作以外の操作を行うと、構成エラーが発生し、システムが使用できなくなる可能性があります。レジストリを操作する際には、細心の注意を払ってください。

### 実行ファイルをシステムプロセスを作成するものとして登録する方法

1. レジストリエディタ(regedit.exe)を実行します。
2. HKEY_LOCAL_MACHINE\Software\GraphOn\GO-Global\System\Processesにブラウズする。
3. 登録される実行可能ファイルの名前(例えば、AGENTSVR.EXE)を持つ DWORD エントリを作成してください。
4. 新しいエントリの値を、実行ファイルへのフルパスが指定されている場合は1に、ベース名のみが指定されている場合は2に設定します(フルパスを含めることで、同じ実行ファイルイメージの異なるバージョンを異なる方法で実行することができます)。
5. レジストリエディタを閉じます。

この設定は、将来のセッションに加えて、現在のすべてのGO-Globalセッションに影響します。これには、すでに「ハング」状態にあるセッションは含まれません。このようなセッションは、Admin Consolから終了する必要があります。