+++
title = "自動クライアントキーボードサポート"
description = ""
weight= 3
+++

GO-Globalの新しい自動クライアントキーボードサポートオプションにより、管理者はGO-Globalホストを自動的に任意のクライアントキーボードで動作するように設定できます。このオプションを有効にすると、ユーザはクライアントデバイスのローカルキーボード切り替え機能を使用してキーボードをその場で切り替えることができ、クライアントのローカル入力エディター(IME)を使用することができます。この機能により、GO-Globalホストにキーボードレイアウトをインストールしたり、GO-Globalクライアントにキーボードマッピングファイルをインストールする必要がなくなりました。この機能は、Mac OS Xで埋め込みウィンドウモードで実行されている場合を除き、すべてのGO-Globalクライアントでサポートされています。

既存のGO-Globalユーザに一貫したユーザエクスペリエンスを提供するために、自動クライアントキーボードサポートオプションはデフォルトで無効になっています。ユーザごとまたはすべてのユーザに対して有効にできます。

### ユーザごとに自動クライアントキーボードサポートを有効にする方法

クライアントショートカットに **-kb ClientSideIME**を追加します。

たとえば、Windowsクライアントの場合：

"C:\Program Files (x86)\GraphOn\GO-Global\Client\gg-client.exe" -kb ClientSideIME

または、GO-GlobalがWebブラウザから実行されている場合は、logon.htmlページを参照するハイパーリンクに次の引数を追加します。 **&keyboard=ClientSideIME**

### すべてのユーザーに対して自動クライアントキーボードサポートを有効にする方法

1. 以下のいずれかのディレクトリでHostProperties.xmlファイルを見つけます。

```
C:\Documents and Settings\All Users\Application Data\GraphOn (On Windows 2003); 
C:\ProgramData\GraphOn (On Windows 2008).
```
2. ワードパッドでHostProperties.xmlを開き、ClientSideIMEEnabledプロパティを探します。
3. ClientSideIMEEnabledプロパティをtrueに設定します。
4. ファイルを保存してください。
