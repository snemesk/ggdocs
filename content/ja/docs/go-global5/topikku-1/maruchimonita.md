---
title: "マルチモニタ"
linkTitle: ""
weight: 20
type: "docs"
---


Globalクライアントは、Windows上でマルチモニタをサポートします。マルチモニタのサポートは、デフォルトで有効になっていますが、手動で無効にすることもできます。

### GO-Globalショートカットを使用してマルチモニタを無効にする方法

1. GO-Globalショートカットに引数-mm 0を追加します。

```
gg-client.exe -h server1 -mm 0
```

### GO-Globalショートカットを使用してマルチモニタを有効にする方法

1. GO-Globalショートカットに引数-mm 1を追加します。

```
gg-client.exe -h server1 -mm 1
```

### GO-Globalハイパーリンク経由でマルチモニタを無効にする方法

1. GO-Globalハイパーリンクでマルチモニタパラメータをfalseに設定します。

```
http://hostname/goglobal/logon.html?multimonitor=false
```

### GO-Globalハイパーリンク経由でマルチモニタを有効にする方法

1. GO-Globalハイパーリンクでマルチモニタパラメータをtrueに設定します。

```
http://hostname/goglobal/logon.html?multimonitor=true
```