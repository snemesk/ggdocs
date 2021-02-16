---
title: "クライアントマシンからのGO-Globalホストの管理"
linkTitle: ""
weight: 16
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

## ブランディング

ブランディングでは、管理者は、**Sign In** ダイアログ、プログラムウィンドウ、GO-Global AppControllerでエンドユーザが表示するテキスト、ラベル、画像を編集やカスタマイズすることができます。たとえば、サインインダイアログでは、ダイアログのタイトルバー、フィールドラベル、ボタン、テキスト、画像をすべてパーソナライズまたはローカライズできます。

![4-18-1](/img/4-18-1.png)

### サインインダイアログをブランディングする方法

1. Admin Consoleから、[Tools | Branding] をクリックします。
2. [Sign In]をクリックします。
3. 次のいずれかを編集します。
* **Title bar** のテキスト
* **Sign in to** のテキスト
* **User name field** のラベル
* **Sign In** ボタンのラベル
* **Cancel** のラベル
4. 新しい画像を参照するには、**[Image]** ボタンをクリックします。次の形式.jpg、.jpeg、.bmp、.ico、.png、.gif、.tifがサポートされています。代替画像は40x40ピクセルにリサイズされます。
5. **[Display host name in sign in to]** テキストをクリックすると、ユーザーがサインインするホスト名が非表示になります。デフォルトでは、ログオンダイアログにホスト名が表示されます。
6. **[Clear all to restore defaults]** ボタンをクリックすると、元のテキストと画像に戻ります。
7. **[OK]** をクリックします。

![4-18-2](/img/4-18-2.png)

以下の例では、タイトルバーのテキスト、「サインイン」テキスト、ユーザ名とパスワードのラベル、サインインボタンとキャンセルボタン、および画像がすべてブランド化され、ローカライズされています。

![4-18-3](/img/4-18-3.png)



