---
title: "サイレントインストール"
linkTitle: ""
weight: 32
type: "docs"
---


GO-Globalクライアントはサイレントモードでインストールできます。 つまり、プロセスの初期起動を除いて、ユーザの操作なしでインストールが実行できます。

### サイレントインストールの方法

1. ローカル管理者としてcmd.exeを実行します(管理者として実行)。
2. 次のコマンドを実行します。

```
cmd /c gg-client.windows.exe /s /v"/qn"
```

GO-Globalショートカットが[Start | Programs | GraphOn GO-Global 5 | GO-Global]に追加されます。

ネイティブクライアントへのショートカットではなく、GO-Global Webクライアントをインストールするには、次のコマンドを実行します。

```
cmd /c gg-client.windows.x86.exe /s /v"/qn GOGLOBAL_SHORTCUT="No""
```