+++
title = "ホスト以外のシステムへのWebファイルのインストール"
description = ""
weight = 4
+++

GO-Global Webファイルは、GO-Globalホスト以外のシステムにもインストールできます。

### GO-Globalホスト以外のシステムにWebファイルをインストールする方法

1. Webファイルをインストールすることを選択して、目的のWebサーバでホストインストーラを実行します。
2. Webサーバ上のlogon.htmlページを編集して、hostnameの代わりにGO-Globalホストのアドレスを挿入して、以下のステートメントを追加します。

```
if (host.length == 0)
{
host="hostname";
}
```
