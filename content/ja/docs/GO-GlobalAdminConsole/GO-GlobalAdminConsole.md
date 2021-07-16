---
title: "GO-Global Admin Console"
linkTitle: ""
weight: 01
type: "docs"
---
Admin Consoleでは、GO-Globalホストの管理、監視、GO-Globalホストへのクライアントアクセスの制御を行うことができます。Admin Consoleには、GO-Globalホストにサインインしているユーザのリストと、ユーザが実行しているアプリケーションが表示されます。Admin Consoleでは、アプリケーションの追加と削除、ユーザセッションの終了、ホスト上で実行されているプロセスの終了など、さまざまな管理タスクを実行できます。

### Admin Consoleにアクセスする方法
デスクトップ上の **GO-Global Admin Console** アイコンをダブルクリックします。もしくは

1. Windowsタスクバーの **[スタート]** ボタンをクリックします。<br>

2. [GraphOn GO-Global｜Admin Console］をクリックします。<br>

Admin Consoleの左側のパネルには、Application Publishing Serviceを実行しているネットワーク上のホストの一覧が表示されます。デフォルトでは、Application Publishing Serviceには、自分のマシンで実行されているホストの情報が表示されます。他のホストに接続してホストの情報を表示するには、[GO-Global Hosts]の一覧からホスト名をクリックします。<br>

ホストのアイコンが赤になっている場合、ホストがApplicationPublishing Serviceを実行していないか、オフになっています。いずれの場合も、管理者はAdmin Consoleからそのホストにアクセスできません。Admin Consoleの左側パネルの **[All Hosts]** アイコンをクリックすると、ネットワーク上のすべてのアクティブなセッションのリストが表示されます。これにより、個々のホストに接続することなく、アクティブなGO-Globalセッションを表示することができます。また、特定のセッションのホストを検索するのにも便利です。<br>

Admin Consoleからそのホストにアクセスするには、各GO-Globalホストの管理者グループに所属している必要があります。ホストの管理者権限がない場合、アプリケーションの追加やプロセスの終了などを行うことができません。
