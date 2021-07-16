+++
title = "GO-Global Web App"
description = ""
weight = 2
+++


JavaScriptとHTML5を使用して開発されたGO-Global Web Appは、Windows、Mac、Linuxコンピュータ上の一般的なWebブラウザからWindowsアプリケーションを実行することを可能にするゼロインストールクライアントです。 さらに、Webアプリケーションをデプロイするために特別なホスト構成は必要ありません。 Webアプリケーションは、クライアント側のパスワードキャッシュ、GO-GlobalのPreview PDFプリンタによるローカルプリンタへの印刷、およびCTRLキーを使用したローカルアプリケーションとリモートアプリケーション間のテキストのコピーアンドペーストをサポートしています。

## GO-Global Web Appの起動

GO-Globalは、Microsoft Internet Explorer、Mozilla Firefox、Google Chrome、Apple Safariなどの一般的なWebブラウザから実行できます。

### WebブラウザからGO-Globalを起動方法

1. Webブラウザを起動します。
2. [Location box]ボックスに、http://に続けてホスト名と?useApp=falseの順に入力します。次に例を示します。http://hostname/goglobal/?useApp=falseまたはhttps://hostname/goglobal/?useApp=false
3. [**Sign In**]ダイアログが表示されたら、次の情報を入力します。
  1. [**User Name**]ボックスにネットワークユーザー名を入力します。
  2. [**Password**]ボックスにパスワードを入力します。

[Location box]ボックスにhttps://を指定した場合、Admin Consoleの[Host Options]ダイアログの[Security]タブでSSLトランスポートを有効にし、タブで指定したSSL証明書のコモンネームをURLで指定したホスト名と一致させる必要があります。これらはGO-Global v6の新しい要件です。以前のバージョンでは、GO-Globalのブラウザプラグインとアドオン(ほとんどのブラウザでサポートされなくなったテクノロジを使用)は、ブラウザにダウンロードされたWebページから実行された場合でもTCP転送を使用してGO-Globalホストに接続できます。しかし、GO-GlobalのWeb Appはブラウザのセキュリティ制限を受けているため、WebアプリケーションはHTTPS接続を介してロードされるときにWebSocket Secure接続を使用する必要があります。 詳細については、SSL転送の選択を参照してください。

>デフォルトでは、GO-Globalは自動的にフルGO-Global Appをダウンロードして実行しようとします。 ログオンURLに?useApp = falseを追加すると、GO-GlobalからGO-Global Appをダウンロードできなくなり、代わりにGO-Global Web Appが実行されます。