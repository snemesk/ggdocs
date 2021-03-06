---
title: "サイレントインストール"
linkTitle: ""
weight: 15
type: "docs"
---
GO-Globalはサイレントインストールすることができます。言い換えれば、インストールはプロセスの最初の起動以外はユーザの操作なしで実行されます。サイレントホストアップグレードを実行する前に、バージョン6.1のGO-Globalライセンスをライセンスディレクトリにコピーする必要があります。

### クライアントのサイレントインストールを実行する方法

1. cmd.exeをローカル管理者として実行します(管理者として実行)。
2. 以下のコマンドを実行します。

```
AppController.exe /q
```

これにより、スタートメニューに GO-Global AppControllerショートカットが追加されます。[ Start | Programs | GO-Global ]ショートカットなしでGO-Global AppControllerをサイレントインストールするには、次のコマンドを実行します。

```
AppController.exe /q CLIENT_SHORTCUT="No"

```


GO-Globalホストをサイレントインストールすることもできます。GO-Globalホストをアップグレードする場合もこれらの手順は同じです。

### サイレントホストインストールを実行する方法

1. ローカル管理者としてcmd.exeを実行します(管理者として実行)。
2. 次のコマンドを実行してください。

```
go-global.exe /q
```
3. ホストは自動的に再起動します。
4. ライセンスファイルを **Licensing** ディレクトリにコピーします。
5. **GO-Global License Manager** サービスを再起動します。

システムを自動的に再起動せずにサイレントホストインストールを実行するには、次のコマンドを実行します。

```
gg-host.exe /q /norestart
```