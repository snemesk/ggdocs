---
title: "クライアントマシンからのGO-Globalホストの管理"
linkTitle: ""
weight: 30
type: "docs"
---

システム管理者は、任意のクライアントマシンからAdmin Consoleに接続できます。これによりシステム管理者は、GO-Globalクライアントを実行する任意のマシンから、プロセスの終了、セッションの終了、アプリケーションの管理ができます。

### クライアントマシンからAdmin Consoleへのアクセス方法

1. GO-Global Administratorのみがそのアプリケーションにアクセスできるよう、Admin Consoleのアクセス許可を設定します。
2. Windows Explorer内でフォルダGO-Global\Programsから **AdminConsole.exe** を検索します。
3. **AdminConsole.exe** を右クリックし、 **[Properties]** を選択します。
4. **[Properties]** ダイアログ ボックス内で **[Security]** を選択します。
5. **[Security]** ダイアログ ボックス内で **[Permission]** を選択します。
6. **[File Permission]** ダイアログボックス内で、GO-Global Administratorsのみがそのアプリケーションを実行できるよう、アクセス許可を設定します(Windows Explorerでのアクセス許可設定についてのヘルプを参照するには、[File Permission]ボックス内で[Help]ボタンをクリックするか、Explorerの実行中にF1キーを押してください)。
7. Admin ConsoleでAdminConsole(AdminConsole.exe)を登録アプリケーションとして追加します。
8. クライアントマシンから、GO-Global Administrator またはそのホストの管理者権限を持つユーザとして、GO-Globalホストへログオンします。これによりProgram Windowが起動します。
9. そのProgram Windowから、Admin ConsoleアイコンをクリックしてAdmin Consoleを起動します。このアイコンは、ユーザがそのホスト上での管理者権限を持つ場合にのみ、Program Window内に表示されます。これにより、Admin ConsoleをGO-Globalホストから実行しているのと同じように、アプリケーションやユーザのアクセスを管理できます｡

