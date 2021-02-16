+++
title = "ホストインストーラがインターネットインフォメーションサービス(IIS)を構成してGO-GLOBAL WEB APPをホストするのに失敗する"
description = ""
weight = 16
+++

_この記事は GO-Global v6.0.1.29306以降に適用されます。_

GO-GlobalホストのWebインストーラ(iis.msi)のインストールに失敗した場合、GO-Global Application Publishing Serviceのログファイルには次のメッセージが含まれている場合があります。

aps (1900) The installer failed to configure IIS to host the GO-Global Web App. Users will be unable to browse to this computer and run the GO-Global Web App.

詳細については、技術ノート 210 を参照してください。
iis.msiのインストールに失敗する場合は、IIS で既定のサイトが指定されていないことが原因である可能性があります。これを解決するには、以下を追加してください。をポート80に1つのサイトを作成し、ホスト名フィールドは空白のままにしておきます。その後、以下のようにホストインストーラを実行します。

1. **[Webサイトの追加]** ダイアログを使用してIISでWebサイトを追加します。
2. **サイト名を作成** します(例:TestSite)。
3. **物理パス** を選択します(例:`C:temp`)。
4. **Binding** をhttpのままにして、Portを **80** に設定します。
5. **ホスト名フィールド** は空白のままにしておきます。
6. **OK** をクリックして IIS サービスを再起動します。
7. GO-Globalホストインストーラを実行します。 **[カスタマイズ]** ボタンをクリックします。
8. インストールオプションがすべて選択されていることを確認し、[ **Host | Web | licensing** ]の順に選択し、 **[OK]** をクリックします。

![9-210-1](/images/9-210-1.png)

9. **修復** ボタンをクリックして、インストーラが完了するのを待ちます。

これらの手順で問題が解決しない場合は、Web インストーラのログに以下のエラーがないか確認してください。

```
WriteIIS7ConfigChanges: Error 0x800700b7: Failed get staticContent section for mimemap
WriteIIS7ConfigChanges: Error 0x800700b7: Failed to configure IIS MimeMap.
WriteIIS7ConfigChanges: Error 0x800700b7: WriteIIS7ConfigChanges Failed.
CustomAction WriteIIS7ConfigChanges returned actual error code 1603
```

ログファイルは、ユーザのtempフォルダに格納されています。
`C:\Users\[username]\AppData\Local\Temp`または`%TEMP%`で、GO-Global_Host_20200412134338_010_iis.msi.logなどの名前が付けられます。
Webインストーラのログファイルに上記のエラーメッセージが含まれている場合は、以下の回避策を実行してください。

1. 次のセクションを **`%WINDIR%\System32\inetsrv\configApplicationHost.config`** ファイルから削除します

```
<location path="Default Web Site/GraphOnGO-Global">
<system.webServer>
<defaultDocument>
<files>
<clear/>
<clear/>
<add value="logon.html"/>
</files>
</defaultDocument>
<staticContent>
<mimeMap fileExtension=".mem" mimeType="application/octet-stream" />
<mimeMap fileExtension=".deb" mimeType="application/octet-stream" />
<mimeMap fileExtension=".rpm" mimeType="application/octet-stream" />
<mimeMap fileExtension=".dmg" mimeType="application/octet-stream" />
<mimeMap fileExtension=".otf" mimeType="application/octet-stream" />
<mimeMap fileExtension=".properties" mimeType="text/plain" />
</staticContent>
</system.webServer>
</location>
```

2. このセクションを削除した後、GO-Globalホストを再インストールします。
IIS を手動で構成する方法については、管理者ガイドの第 II 章の次のセクションを参照してください。[IIS Webサーバを使用して、既定のディレクトリ以外のディレクトリからWebファイルをホストする](http://localhost:1313/docs/go-globalrc61/configuringthehost/runningthe30daytrialversion/#iis-web%E3%82%B5%E3%83%BC%E3%83%90%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E6%97%A2%E5%AE%9A%E3%81%AE%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E4%BB%A5%E5%A4%96%E3%81%AE%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E3%81%8B%E3%82%89web%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92%E3%83%9B%E3%82%B9%E3%83%88%E3%81%99%E3%82%8B)、[Apache HTTPサーバを介したGO-Globalの実行](http://localhost:1313/docs/go-globalrc61/configuringthehost/runningthe30daytrialversion/#apache-http%E3%82%B5%E3%83%BC%E3%83%90%E3%82%92%E4%BB%8B%E3%81%97%E3%81%9Fgo-global%E3%81%AE%E5%AE%9F%E8%A1%8C)
