
+++
title = "共有アカウント"
description = ""
weight = 7
+++

共有アカウントは、GO-Globalセッションを開始するために複数のユーザが同じアカウントを使用しているときに指定する必要があります。共有アカウントでGO-Globalにサインインしたユーザは、切断してからGO-Globalに再接続することはできません。これにより、ユーザは他のユーザのセッションに再接続できなくなります。

共有アカウントでGO-Globalホストにログオンすると、Cluster ManagerのDisconnected sessions terminateオプションは無視され、動作はHostProperties.xmlファイルのSessionTimeoutBrokenConnectionプロパティによって決まります。(HostProperties.xmlは、Windows 2003の場合はC : \Documents and Settings\All Users\Application Data\GraphOnに、Windows 2008の場合はC : \ProgramData\GraphOnにあります)。

このプロパティの値が0に設定されている場合、セッションはただちに終了します。値が0より大きい場合、セッションは中断され、指定された分数の間サーバ上で実行されたままになります。後者の場合、セッションを開始したユーザだけが中断されたセッションに再接続できます。デフォルトでは、SessionTimeoutBrokenConnectionは0分に設定されています。

### 共有アカウントの指定方法

1. [Tools | Host Options]の順にクリックします。
2. [**General**]タブをクリックします。
3. [**共有アカウント**]編集ボックスに共有アカウントのユーザ名を入力します。複数の共有アカウントが必要な場合は、アカウントのユーザ名をセミコロンで区切ります。
4. [**OK**]をクリックします。

そのユーザが自分のセッションから切断されている間に管理者が既存のユーザ名を共有アカウントとして指定した場合、そのセッションは終了制限に達するまでサーバ上で実行されたままになります。その後セッションは終了します。共有アカウントを指定する前に、そのアカウントを使用している接続または切断されたセッションがないことをCluster Managerで確認してください。

GO-Globalは、共有アカウントに対するドメイン名(NORTH\johngなど)の使用をサポートしていません。

![4-7-1](/image5/4-7-1.png) 
