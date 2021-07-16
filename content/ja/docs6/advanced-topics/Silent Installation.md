+++
title = "サイレントインストール"
description = ""
weight = 22
+++

GO-Globalはサイレントインストールすることができます。言い換えれば、インストールはプロセスの最初の起動を除いて、ユーザーの操作なしで実行されます。サイレントホストアップグレードを実行する前に、バージョン6のGO-GlobalライセンスをLicensingディレクトリにコピーする必要があります。

### サイレントクライアントインストールを実行する方法

1. ローカル管理者としてcmd.exeを実行します(管理者として実行)。
2. 次のコマンドを実行してください。

```
go-global.windows.exe /q
```

これによりGO-Globalショートカットがスタートメニューに追加されます。[ Start | Programs | GO-Global ].

ネイティブクライアントへのショートカットではなくGO-Global Webクライアントをインストールするには、次のコマンドを実行します。

```
go-global.exe /q CLIENT_SHORTCUT="No"
```

GO-Globalホストをサイレントインストールすることもできます。GO-Globalホストをアップグレードする場合もこれらの手順は同じです。

### サイレントホストインストールを実行する方法

1. ローカル管理者としてcmd.exeを実行します(管理者として実行)。
2. 次のコマンドを実行してください。

```
go-global.exe /q
```
3. ホストは自動的に再起動します。
4. ライセンスファイルをLicensingディレクトリにコピーします。
5. GO-Global License Managerサービスを再起動します。

システムを自動的に再起動せずにサイレントホストインストールを実行するには、次のコマンドを実行します。

```
gg-host.exe /q /norestart
```