
+++
title = "クライアントマシンからのGO-Globalホストの管理"
description = ""
weight = 13
+++

システム管理者は、任意のクライアントマシンから Cluster Managerに接続できます。これによりシステム管理者は、GO-Globalクライアントを実行する任意のマシンから、プロセスの終了、セッションの終了、アプリケーションの管理ができます。

### クライアントマシンからCluster Managerへのアクセス方法

1. GO-Global Administratorのみがそのアプリケーションにアクセスできるよう、Cluster Manager のアクセス許可を設定します。
2. Windows Explorer内でフォルダGO-Global\Programsからcm.exeを検索します。
3. **cm.exe**を右クリックし、 [**プロパティ**]を選択します。
4. [**プロパティ**]ダイアログ ボックス内で [**セキュリティ**]を選択します。
5. [**セキュリティ**]ダイアログ ボックス内で [権限]を選択します。
6. [**File Permission**]ダイアログボックス内で、GO-Global Administratorsのみがそのアプリケーションを実行できるよう、アクセス許可を設定します。(Windows Explorerでのアクセス許可設定についてのヘルプを参照するには、[File Permission]ボックス内で[Help]ボタンをクリックするか、Explorerの実行中にF1キーを押してください)。
7. Cluster ManagerでCluster Manager(cm.exe)を登録アプリケーションとして追加します。
8. クライアントマシンから、GO-Global Administrator またはそのホストの管理者権限を持つユーザとして、GO-Globalホストへログオンします。これによりProgram Windowが起動します。
9. そのProgram Windowから、Cluster ManagerアイコンをクリックしてCluster Managerを起動します。このアイコンは、ユーザがそのホスト上での管理者権限を持つ場合にのみ、Program Window 内に表示されます。これにより、Cluster ManagerをGO-Globalホストから実行しているのと同じように、アプリケーションやユーザのアクセスを管理できます｡