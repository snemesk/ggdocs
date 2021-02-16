+++
title = "自動クライアントキーボードを無効にする方法"
description = ""
weight = 5
+++


自動クライアントキーボードを使用すると、管理者はGO-Globalホストを任意のクライアントキーボードで自動的に機能するように設定できます。この機能はデフォルトで有効になっていますが、HostProperties.xmlファイルを編集して無効にすることができます。

### 自動クライアントキーボードを無効にする方法

1. HostProperties.xmlファイルを探します(例：C:\ProgramData\GraphOn\GO-Global)
2. ワードパッドでHostProperties.xmlを開き、ClientSideIMEEnabledプロパティを探します。
3. ClientSideIMEEnabledプロパティをfalseに設定します。
4. ファイルを保存してください。

自動クライアントキーボードがHostProperties.xmlで無効になっている場合でも、次のようにユーザーごとに有効にできます。

クライアントショートカットに-kb ClientSideIMEを追加します。

たとえば、Windowsクライアントの場合："C:\Program Files\GraphOn\GO-Global\Client\gg-client.exe" -kb ClientSideIME

または、GO-GlobalがWebブラウザから実行されている場合は、logon.htmlページを参照するハイパーリンクに次の引数を追加します。&keyboard = ClientSideIME たとえば、[http://hostname/goglobal/logon.html?direct=true&keyboard=ClientSideIME](http://hostname/goglobal/logon.html?direct=true&keyboard=ClientSideIME)のようになります。