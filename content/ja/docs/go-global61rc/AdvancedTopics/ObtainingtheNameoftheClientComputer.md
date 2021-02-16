---
title: "クライアントコンピュータの名前を取得する"
linkTitle: ""
weight: 20
type: "docs"
---
GO-Globalホストではなくクライアントのコンピュータ名を必要とするアプリケーションの場合、管理者はその実行可能ファイルの名前をレジストリキー

**HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\Compatibility\GetComputerName**

の下にDWORDとして追加し、データ値 **0x00000001**データ値0x00000001で追加できます。このレジストリキーの下にリストされているデータ値が **0x00000001**のいずれかの名前に一致する実行可能ファイルがWindows **GetComputerName** APIを呼び出すと、指定されたバッファにホスト名ではなくクライアントコンピュータ名が書き込まれます。

さらに、公開アプリケーションの実行環境の一部として存在する **CLIENTCOMPUTERNAME**という名前の環境変数があります。

この環境変数には、クライアントのコンピュータ名が含まれています。 **CLIENTCOMPUTERIPADDRESS**環境変数は、コンピュータ名ではなくクライアントコンピュータのIPアドレスを含むことを除いて、同じ機能を実行します。標準のWindows環境変数 **COMPUTERNAME**は変更されていません。その値はホストのコンピュータ名です。

### クライアントコンピュータ名の取得方法

1. レジストリエディタ (regedit.exe) を実行します。
2. レジストリエディタ で、 **HKEY_LOCAL_MACHINE** キーを展開します。
3. 次の **GetComputerName** キーを検索します。 [SOFTWARE\GraphOn\GO-Global\Compatibility\GetComputerName]
4. この実行可能ファイルの **DWORD**エントリを作成します (例 : pw.exe)。
5. 新しいエントリの値を **0x00000001**に設定します。
6. レジストリエディタを終了します。

さらに、公開されたアプリケーションの実行環境の一部として存在する **CLIENTCOMPUTERNAME** という名前の環境変数があります。この環境変数には、クライアントのコンピュータ名が含まれています。**CLIENTCOMPUTERIPADDRESS**、**CLIENTNETWORKADDRESS**環境変数は、同様の機能を実行します。前者にはクライアントコンピュータのローカルIPアドレスが含まれ、後者にはクライアントコンピュータのパブリックIPアドレスが含まれます

クライアントがセッションに再接続すると、**CLIENTCOMPUTERNAME**、**CLIENTCOMPUTERIPADDRESS**、**CLIENTNETWORKADDRESS** 環境変数は、環境変数を取得するためのAPI呼び出しを行うと、既存の各プロセスで更新されます。セッションプロセスがこれらのAPIの1つを呼び出す前に、別のプロセスがセッションプロセスの環境変数を取得しようとした場合、これらの環境変数の値は更新されて表示されません。更新をトリガーする正確なAPI呼び出しは次のとおりです。

	UserEnv!CreateEnvironmentBlock()
	Kernel32!ExpandEnvironmentStringsA/W()
	Kernel32!GetEnvironmentStringsA/W()
	Kernel32!GetEnvironmentVariableA/W()
