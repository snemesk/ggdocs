+++
title = "Admin Consoleへのアクセス方法"
description = ""
weight = 1
+++
Admin Consoleにより、クライアントのGO-Globalホストへのアクセスを管理、監視、制御できます。Admin Consoleには、GO-Globalホストにログオンしているユーザの一覧、そのユーザが実行中のアプリケーション、そのアプリケーションが起動された時刻が表示されます。Admin Consoleを使用すれば、アプリケーションの追加と削除、ユーザセッションの終了、ホスト上で実行中の処理の終了など、さまざまな管理タスクを実行できます。

### Admin Consoleへのアクセス方法

デスクトップ上の[Admin Console]アイコンをダブルクリックします。

－または－

1. Windowsタスクバーの **スタート**ボタンをクリックします。
2. [GraphOn GO-Global | Admin Console] の順にクリックします。

Admin Consoleの左パネルには、Application Publishing Serviceを実行しているネットワーク上のホストの一覧が表示されます。デフォルトでAdmin Consoleは、各自のマシン上で稼働中のホストの情報を表示します。他のホストへ接続してそのホストの情報を閲覧するには、GO-Globalホストの一覧からホスト名をクリックします。

![4-1-2](/images/4-1-2.png)

ホストのアイコンに赤色のXが付いている場合は、システム管理者にそのホストの管理権限がないことを示します。ホストに赤色のXが付いていて、かつ灰色表示になっている場合は、そのホストで Application Publishing Serviceが実行されていないか、ホストが停止していることを示しています。どちらの場合も、システム管理者はAdmin Consoleを介してホストにアクセスすることはできません。

Admin Console左パネル内の**[All Hosts]**アイコンをクリックすれば、ネットワーク上で実行中の全セッションの一覧を確認できます。これで、個別のホストに接続しなくても、アクティブなGO-Globalセッションを確認できます。また、特定のセッションを実行しているホストを検索するのにも便利です。

Admin Consoleから個々のGO-Globalホストにアクセスするためには、そのホストの管理者グループに属している必要があります。ホストの管理権限がなければ、アプリケーションの追加や処理の終了などを行うことはできません。

![4-1-1](/images/4-1-1.png)