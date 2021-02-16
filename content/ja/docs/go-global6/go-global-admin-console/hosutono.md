+++
title = "ホストの活動監視"
description = ""
weight = 10
+++


Admin Consoleは、ホストの活動とホストで行われているプロセスに関する情報を表示します。管理者はこの情報を使用して、使用されなくなったアプリケーションと追加のホストが必要かどうかを判断できます。

## セッション情報の閲覧

Admin Consoleは次のセッション情報を表示します。

| Column            | Displays the…                                                                                                                                                                                                                                              |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Session Name      | Unique identifier assigned to a session.                                                                                                                                                                                                                   |
| User              | Network user name of the user accessing applications on the host.                                                                                                                                                                                          |
| Connected Clients | Number of clients connected to a session. 0 indicates that no one is connected to the session (the client has disconnected). 1 indicates that the client is connected and the session is active. 2 or higher indicates that the session is being shadowed. |
| IP Address        | IP address of the client computer from which the user is accessing the host. (Each computer on a network has a unique IP address.)                                                                                                                         |
| Startup Time      | Date and time the user started the application.                                                                                                                                                                                                            |
| Applications      | Number of applications the user is accessing.                                                                                                                                                                                                              |

### セッション情報の閲覧方法

[Sessions]タブをクリックします。

>管理コンソールの左パネルにある [**All Hosts**]アイコンをクリックして、ネットワーク上のすべてのアクティブセッションのリストを表示します。これにより、個々のホストに接続しなくてもアクティブなGO-Globalセッションを表示できます。

## プロセス情報の閲覧

プロセスとは、ユーザがホストから実行している特定のアプリケーションを指します。 Admin Consoleは次のプロセス情報を表示します。

| Column       | Displays the…                                                                                                                                                                                     |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name         | Name of the application running on the host.                                                                                                                                                      |
| User         | Network user name of the user accessing the application.                                                                                                                                          |
| Startup Time | Date and time the user started the application.                                                                                                                                                   |
| Process ID   | Process identification number assigned by the host's operating system. (The number for each running application matches the process identification number displayed in the Windows Task Manager.) |

### プロセス情報の閲覧方法

1. [Processes] タブをクリックします。

## Admin Consoleのリフレッシュ

Admin Consoleに表示されるセッション、プロセス、アプリケーションの情報を手動で更新することも、自動的に更新するように設定することもできます。Admin Consoleが自動的に更新されるように設定されている場合でも、いつでも手動で更新できます。

### Admin Consoleのリフレッシュ方法

1. [View | Refresh]の順にクリックします。

## リフレッシュレートの設定

Admin Consoleの[セッション]、[プロセス]、[アプリケーション]タブを手動でリフレッシュ、または指定した頻度で自動的にリフレッシュするよう設定できます。

### 手動リフレッシュのみを行うようにリフレッシュレートを設定する方法

1. [View | Options]の順にクリックします｡
2. [Manual]をクリックします｡

![4-11-1](/img/4-11-1.png) 

### 自動的にリフレッシュするようにリフレッシュレートを設定する方法

1. [View | Options]の順にクリックします｡
2. [Refresh every x seconds]オプションをクリックします。
3. [seconds]ボックスに値を入力します。

## Status Bar

Status Barは、Admin Consoleの画面下部に表示されています。マウスのポインタをメニュー内の特定項目上に移動すると、そのメニューコマンドの簡易説明がStatus Barに表示されます。Status Barは、現在アクセスされているGO-Globalホストの名称、およびそのホストのMemory使用法とCPU使用率(Windows Task Managerが算出)を表示します。

Status Barの最後の2項目、 **Sessions**と **Procs**は、アクティブなGO-Globalホストで実行中のセッション数およびプロセス数です。

[**All Host**]を選択すると、 [**Sessions**]数にはネットワーク上で実行中のすべてのセッションが表示され、 [**Procs**]数にはネットワーク上のすべてのプロセスが表示されます。‌

### ステータスバーをオンまたはオフにする方法

1. [View | Options]の順にクリックします｡
2. [**Status Bar**]チェックボックスをオンまたはオフにします。

## ブロードキャスト間隔の設定

Broadcast Interval値を変更して、ホスト情報がAdmin Consoleに送信される頻度を指定できます。この値は各ブロードキャストの間隔(秒数)を示し、ホストのCPU、Memory、Sessions、Processes、Status Bar の更新頻度と [**All Hosts**]の一覧にホストが表示されるまでにかかる時間に影響します。ブロードキャストは UDPを介して送信され、そのパケットサイズは約 25 ～ 37 バイトです。

### ブロードキャスト間隔の設定方法

1. **GO-Global Application Publishing** **Service**を停止します。
2. 次のいずれかのディレクトリで **HostProperties.xml**ファイルを見つけます。 C:\ProgramData\GraphOn
3. ワードパッドで **HostProperties.xml**を開き、次のセクションを見つけます。

```
</property> 
<property id="BroadcastInterval" group="Miscellaneous" type="UINT32"> 
<value>300</value> 
</property>
```

4. 値に必要なミリ秒数を入力します。(この値は1以上の整数でなければなりません。値を0に設定すると、他のGO-GlobalホストがAdmin Consoleに表示されなくなります。Broadcast Intervalのデフォルト値は300です。)
5. **GO-Global Application Publishing** **Service**を再起動します。
