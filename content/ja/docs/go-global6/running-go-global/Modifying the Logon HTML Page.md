+++
title = "logon.htmlページの変更"
description = ""
weight = 6
+++

GO-GlobalをWebブラウザから実行している場合は、GO-Globalのlogon.htmlページを編集して起動パラメータを指定できます。

### logon.htmlページの変更方法

1. HTMLエディタでlogon.htmlを開きます。
2. 編集したいパラメータを見つけます。 最も一般的なパラメータは、ログオンページに次のように記載されています。

```
//
// controlArgs.set([ "user", "testuser1" ]);
// controlArgs.set([ "password", "testpassword1" ]);
// controlArgs.set([ "embed", "false" ]);
// controlArgs.set([ "width", "640" ]);
// controlArgs.set([ "height", "480" ]);
// controlArgs.set([ "desktop", "false" ]);
// controlArgs.set([ "app", "testapp1" ]);
// controlArgs.set([ "port", "491" ]);
// controlArgs.set([ "autoclose", "false" ]);
// controlArgs.set([ "printerconfig", "default" ]);
// controlArgs.set([ "bInBrowser", "false" ]);
// controlArgs.set([ "host", "testhost1" ]);
// controlArgs.set([ "compression", "true" ]);
// controlArgs.set([ "clientframe", "false" ]);
// controlArgs.set([ "multimonitor", "true" ]);
// controlArgs.set([ "noscale", "false" ]);
// controlArgs.set([ "authority", "not_specified" ]);
// controlArgs.set([ "credentials", "not_specified" ]);
// controlArgs.set([ "sessionid", "1234" ]);
// controlArgs.set([ "autoreconnect", "0" ]);
// controlArgs.set([ "windowless", "false" ]);
// controlArgs.set([ "maxbpp", "16" ]);
// controlArgs.set([ "keyboard", "ClientSideIME" ]);
// controlArgs.set([ "args", "testargs1" ]);
// controlArgs.set([ "useApp", "true" ]);
// controlArgs.set([ "installApp", "add_link" ]);
```
3. 行の先頭から//を削除して、対応するcontrolArgs.setのコメントを外します。その後、必要に応じて値を編集します。例えば:

```
controlArgs.set([ "user", "johng" ]);
controlArgs.set([ "embed", "true" ]);
```
4. 表示されていない起動パラメータを指定するには、各パラメータにcontrolArgs.set()を追加します。 例えば:

```
controlArgs.set([ "parameter", "true" ]);
```
5. ページを保存します。
