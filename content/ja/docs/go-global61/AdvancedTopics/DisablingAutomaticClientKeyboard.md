---
title: "自動クライアントキーボードを無効にする方法"
linkTitle: ""
weight: 19
type: "docs"
---
自動クライアントキーボードを使用すると、管理者はGO-Globalホストを任意のクライアントキーボードで自動的に機能するように設定できます。この機能はデフォルトで有効になっていますが、HostProperties.xmlファイルを編集して無効にすることができます。

### 自動クライアントキーボードを無効にする方法

1. **HostProperties.xml** ファイルを探します(例: `C:\ProgramData\GraphOn\GO-Global`)
2. ワードパッドで **HostProperties.xml** を開き、**ClientSideIMEEnabled** プロパティを探します。
3. **ClientSideIMEEnabled** プロパティをfalseに設定します。
4. ファイルを保存してください。

自動クライアントキーボードがHostProperties.xmlで無効になっている場合でも、次のようにユーザーごとに有効にできます。

クライアントショートカットに **-kb ClientSideIME** を追加します。

たとえば、Windowsクライアントの場合:`"C:\Program Files\GraphOn\AppController\AppController.exe" -kb ClientSideIME`

または、GO-GlobalがWebブラウザから実行されている場合は、logon.htmlページを参照するハイパーリンクに次の引数を追加します。 **`&keyboard=ClientSideIME`** たとえば、 **[http://hostname/goglobal/logon.html?direct=true&keyboard=ClientSideIME]** のようになります。