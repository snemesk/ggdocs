---
title: "ホストの活動監視"
linkTitle: ""
weight: 25
type: "docs"
---

Admin Consoleは、ホストの活動とホストで行われているプロセスに関する情報を表示します。管理者はこの情報を使用して、使用されなくなったアプリケーションと追加のホストが必要かどうかを判断できます。

# セッション情報の閲覧

Admin Consoleは次のセッション情報を表示します。

| Column            | Displays the…                                                                                                                                                                                                                                              |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Session Name      | セッションに割り当てられた一意の識別子。                                                                                                                                                                                                                  |
| User              | ホスト上のアプリケーションにアクセスするユーザのネットワークユーザ名。                                                                                                                                                                                         |
| Connected Clients | セッションに接続しているクライアントの数。0は、セッションに接続されているクライアントがいないことを示します（クライアントは切断されています）。1は、クライアントが接続されており、セッションがアクティブであることを示します。2以上の場合は、セッションがシャドウイングされていることを示します。 |
| IP Address        | ユーザがホストにアクセスしているクライアントコンピュータのIPアドレス。(ネットワーク上の各コンピュータには固有のIPアドレスがあります)。                                                                                                                       |
| Startup Time      | ユーザがアプリケーションを起動した日時。                                                                                                                                                                                                          |
| Applications      | ユーザがアクセスしているアプリケーションの数。                                                                                                                                                                                                             |

### セッション情報の閲覧方法

[Sessions]タブをクリックします。

{{% alert title="参照" color="info" %}}
管理コンソールの左パネルにある **[All Hosts]** アイコンをクリックして、ネットワーク上のすべてのアクティブセッションのリストを表示します。これにより、個々のホストに接続しなくてもアクティブなGO-Globalセッションを表示できます。
{{% /alert %}}

# プロセス情報の閲覧

プロセスとは、ユーザがホストから実行している特定のアプリケーションを指します。 Admin Consoleは次のプロセス情報を表示します。

| Column       | Displays the…                                                                                                                                                                                     |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Name         | ホスト上で実行されているアプリケーションの名前。                                                                                                                                                    |
| User         | アプリケーションにアクセスしているユーザのネットワークユーザ名。                                                                                                                                         |
| Startup Time | ユーザがアプリケーションを起動した日時。                                                                                                                                                  |
| Process ID   | ホストのオペレーティングシステムによって割り当てられたプロセス識別番号。(各実行中のアプリケーションの番号は、Windowsタスクマネージャに表示されるプロセス識別番号と一致します) |

### プロセス情報の閲覧方法

[Processes] タブをクリックします。

# Admin Consoleのリフレッシュ

Admin Consoleに表示されるセッション、プロセス、アプリケーションの情報を手動で更新することも、自動的に更新するように設定することもできます。Admin Consoleが自動的に更新されるように設定されている場合でも、いつでも手動で更新できます。

### Admin Consoleのリフレッシュ方法

[View | Refresh]の順にクリックします。

# リフレッシュレートの設定

Admin Consoleの[セッション]、[プロセス]、[アプリケーション]タブを手動でリフレッシュ、または指定した頻度で自動的にリフレッシュするよう設定できます。

### 手動リフレッシュのみを行うようにリフレッシュレートを設定する方法

1. [View | Options]の順にクリックします｡
2. **[Manual]** をクリックします｡

![4-13-1](/img/4-13-1.png) 

### 自動的にリフレッシュするようにリフレッシュレートを設定する方法

1. [View | Options]の順にクリックします｡
2. [Refresh every x seconds]オプションをクリックします。
3. **[seconds]** ボックスに値を入力します。

# Status Bar

Status Barは、Admin Consoleの画面下部に表示されています。マウスのポインタをメニュー内の特定項目上に移動すると、そのメニューコマンドの簡易説明がStatus Barに表示されます。Status Barは、現在アクセスされているGO-Globalホストの名称、およびそのホストのMemory使用法とCPU使用率(Windows Task Managerが算出)を表示します。

Status Barの最後の2項目、 **Sessions**と **Procs** は、アクティブなGO-Globalホストで実行中のセッション数およびプロセス数です。

**[All Host]** を選択すると、 **[Sessions]** 数にはネットワーク上で実行中のすべてのセッションが表示され、 **[Procs]** 数にはネットワーク上のすべてのプロセスが表示されます。‌

### ステータスバーをオンまたはオフにする方法

1. [View | Options]の順にクリックします｡
2. **[Status Bar]** チェックボックスをオンまたはオフにします。

# ブロードキャスト間隔の設定

Broadcast Interval値を変更して、ホスト情報がAdmin Consoleに送信される頻度を指定できます。この値は各ブロードキャストの間隔(秒数)を示し、ホストのCPU、Memory、Sessions、Processes、Status Bar の更新頻度と **[All Hosts]** の一覧にホストが表示されるまでにかかる時間に影響します。ブロードキャストはUDPを介して送信され、そのパケットサイズは約25～37バイトです。

### ブロードキャスト間隔の設定方法

1. **GO-Global Application Publishing Service** を停止します。
2. 次のいずれかのディレクトリで **HostProperties.xml**ファイルを見つけます。`C:\ProgramData\GraphOn`
3. ワードパッドで **HostProperties.xml** を開き、次のセクションを見つけます。

```
</property> 
<property id="BroadcastInterval" group="Miscellaneous" type="UINT32"> 
<value>300</value> 
</property>
```

4. 値に必要なミリ秒数を入力します(この値は1以上の整数でなければなりません。値を0に設定すると、他のGO-GlobalホストがAdmin Consoleに表示されなくなります。Broadcast Intervalのデフォルト値は300です)。
5. **GO-Global Application Publishing Service**を再起動します。
