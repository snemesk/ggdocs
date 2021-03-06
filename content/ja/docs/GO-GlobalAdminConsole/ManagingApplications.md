---
title: "アプリケーションの管理"
linkTitle: ""
weight: 02
type: "docs"
---

Admin Consoleを使用すると、アプリケーションを公開して共有できます。

## アプリケーションのインストール

GO-Global を介して実行されるアプリケーションをインストールする場合、ベンダ提供の関連文書を参照して、適切なマルチユーザインストール方法を確認してください。ほとんどの場合、管理者アカウントでアプリケーションをインストールする必要がありますが、各アプリケーションによってインストール要件は異なります。またインストールは、マルチユーザ展開に関するMicrosoftのガイドラインに準拠する必要があります

{{% alert title="参照" color="info" %}}
GO-Globalを介してアプリケーションを展開しても、各企業が無制限のアクセス権を取得することにはなりません。同時に実行できるアプリケーションの数に関しては、ベンダのライセンス供与規定に準拠する必要があります。
{{% /alert %}}

## アプリケーションの公開

アプリケーションはAdmin Consoleを使って公開されます。Admin Consoleを介してアプリケーションを公開するときに、アプリケーションの起動方法を制御する起動パラメータを指定できます。** Quick Start ** を実行するときは、プロンプトに従ってアプリケーションを公開してください。

### アプリケーションを公開する方法

1. **[All Hosts]** の一覧から、目的のホストを選択します。
2. **[Applications]** タブをクリックします。
3. **[Add]** ボタンをクリックします。
4. **[Location]** ボックスの横にある **[Browse]** ボタンをクリックして、アプリケーションの実行可能ファイルを見つけて選択します。
5. **[OK]** をクリックします。

デフォルトでは、ブラウズダイアログは`PROGRAMDATA\Microsoft\Windows\Start Menu\Programs`ディレクトリに開きます。最初のアプリケーションを公開した後、ダイアログが最後に公開されたアプリケーションのディレクトリで開きます。<br>

### アプリケーション名の変更

アプリケーションの .exeファイルを参照すると、そのファイル名が自動的に **[Name]** ボックス内に入力されます(アプリケーション名は Program Windowに表示されます)。そのままデフォルトの表示名を使用することも、新しい名称を入力することも可能です。アプリケーションの表示名をスペースのみにすることはできません。また、バックスラッシュ( \ )も使用できません。このフィールドは空欄のままにしないでください。<br>

### アプリケーションアイコンの変更

アプリケーションのデフォルトアイコン以外のアイコンを選択する場合は、**[Icon]** ボタンをクリックします。<br>

### 起動状態の変更

[Startup State]セクションで、アプリケーションを最大化、最小化、通常モードのいずれで起動するかを選択します。デフォルトの起動状態は通常モードです。<br>

### 開始ディレクトリの変更

アプリケーションの実行可能ファイルを参照した場合は、ディレクトリのパス名が自動的に **[Start Directory]** ボックスに表示されます。それ以外の場合は、アプリケーションを起動するディレクトリのフルパス名を入力します。<br>

### コマンドラインオプションの指定

**[Command-Line Options]** ボックスで、アプリケーションの起動パラメータを指定できます。これらのパラメータは各アプリケーションに固有のものであるため、特定の起動パラメータについてはアプリケーションのドキュメントを参照してください。<br>

## 公開アプリケーションへのリンクの共有

Admin Consoleの **[Get Link]** ボタンをクリックすると、選択したアプリケーションへのリンクをコピーしてユーザと共有し、そのアプリケーションにすばやくアクセスできます。

### アプリケーションリンクを共有する方法

1. **Installed Applications** のリストから、共有したいアプリケーションを選択します。
2. インストール済みアプリケーションのリストの右側にある **[Get Link]** ボタンをクリックします。
3. **[Application Link]** ダイアログで、**[Copy]** ボタンをクリックしてリンクをクリップボードにコピーします。
4. リンクを電子メールまたはインスタントメッセージに貼り付けて、ユーザと共有します。

![4-2-2](/img/4-2-2.png) 

{{% alert title="参照" color="info" %}}
Admin Consoleがチュートリアルモードで実行されている場合、**[Copy]** ボタンをクリックすると、次のメッセージが表示されます。**[Copy]** をクリックしてこのリンクをクリップボードにコピーします。それを電子メールまたはインスタントメッセージに貼り付けて、ユーザと共有できます。
{{% /alert %}}

## ブラウザ外でのアプリケーションの実行

ユーザが公開アプリケーションへのリンクをクリックしてGO-Globalホストにサインインすると、アプリケーションが開き、Webブラウザの外部で実行されます。このデフォルト設定を無効にするには、**[Run application outside the browser]** のチェックを外します。これにより、パラメータ **&embed=true** がURLに追加されます。このパラメータを追加してユーザがリンクをクリックすると、アプリケーションはユーザのWebブラウザ内で実行されます。

### ホストアドレスの編集

**ホストアドレス** は、GO-Global AppControllerまたはWeb Appがホストコンピュータへの接続に使用するアドレスを指定します。デフォルトでは、これはGO-Globalホストがインストールされているコンピュータの完全修飾ドメイン名です。クライアントがロードバランサ(GO-Global Relay Load Balancerやthird-party load balancerなど)を介してホストに接続する場合は、**ホストアドレス** を完全修飾ドメイン名に設定します。

### ホストアドレスを編集する方法

1. **[Application Link]** ダイアログで、**[Host Address]** ボックスにホストの完全修飾ドメイン名を入力します。アプリケーションリンクは自動的に更新されます。

2. **[Copy]** ボタンをクリックしてURLをコピーし、ユーザと共有します。

### Webサーバアドレスの編集

**Webサーバアドレス** は、GO-Global Web App、GO-Global AppController、それらをサポートするファイルをユーザのブラウザに提供するために使用されるWebサーバのアドレスを指定します。デフォルトのWebサーバアドレスは**apps.graphon.com** です。これは、GraphOnによってホストされているWebサーバのアドレスです。あなたがあなた自身のWebサーバを使うつもりならば、GO-Global WebコンポーネントをWebサーバにインストールし、**Webサーバアドレス** をあなたのWebサーバのアドレスに変更してください。たとえば、WebサーバがGO-Globalホストと同じコンピュータにインストールされている場合は、**Webサーバアドレス** と**ホストアドレス** を同じアドレスに設定します。

### Webサーバのアドレスを編集する方法

1. **[Application Link]** ダイアログで、**[Web Server Address]** ボックスにWebサーバのアドレスを入力します。アプリケーションリンクは自動的に更新されます。

2. **[Copy]** ボタンをクリックしてURLをコピーし、ユーザと共有します。

{{% alert title="参照" color="info" %}}
ユーザが内部ネットワークとパブリックネットワークの両方からホストにアクセスする場合、ホストとWebサーバは、**[Host Address]** フィールドと **[Web Server Address]** フィールドに指定されたアドレスを介して内部ネットワークとパブリックネットワークの両方からアクセスできる必要があります。これを実現するには、内部DNSエントリが **ホストアドレス** と **Webサーバアドレス** をコンピュータの内部IPアドレスにマップし、パブリックDNSエントリが **ホストアドレス** と **Webサーバアドレス** をこれらのコンピュータのパブリックIPアドレスにマップする必要があります。
{{% /alert %}}

### リモートユーザのアクセスを有効にする .

インターネットからGO-Globalホストにアクセスするユーザがいる場合、これらのユーザがホストコンピュータに接続できるようにする必要があります。これは通常、VPNを介して、または DMZネットワークにGO-Global Relay Load Balancerを設定することで行われます。VPNまたはDMZネットワークをお持ちでない場合は、次の手順でインターネットルータからGO-Globalホストにポートを転送することもできます。

1. ルータソフトウェアを開き、ポート転送設定を見つけます。通常は、「詳細設定」の下にあり、「ポート転送」の下にあります。
2. 必要に応じて、GO-Globalと呼ばれる新しいサービスを作成します。
3. 内部および外部ポート範囲を491に設定し、プロトコルをUDP/TCPパケットに設定します。
4. GO-Globalホストの内部IPアドレスを入力します。
5. [Apply]または[Save]をクリックして変更を保存します。
6. [application link]ダイアログボックスで、[Host address]ボックスにGO-GlobalホストのパブリックIPアドレスを入力します。アプリケーションリンクが自動的に更新されます(パブリックIPアドレスは、GO-Globalホストのブラウザからwhatismyip.comにアクセスすることで確認できます)。
7. [Copy]ボタンをクリックして URLをコピーし、リモートユーザと共有します。

### デフォルトリンクプロパティの設定

デフォルトのアプリケーションリンクプロパティを **[Application Link]** ダイアログボックスで指定したものに設定して、ホストアドレス、Webサーバアドレス、アプリケーションをブラウザの内部で実行するか外部で実行するかを含めることができます。これらのデフォルトのリンクプロパティは、新しいアプリケーションが公開されたときに適用されます。

### デフォルトのリンクプロパティを設定する方法

1. **[Application Link]** ダイアログで、 **[Set defaults]** ボタンをクリックします。

2. **[Yes]** をクリックして確定します。

### アプリケーションの複製

アプリケーションの複製では、選択された登録済みアプリケーションの完全なコピーが作成されます。これは、同一のアプリケーションを異なるユーザやグループに対してさまざまな形で利用可能にする場合に便利です。たとえば、 **[Sign In]** ダイアログを表示しないコマンド行オプション付きの1つのバージョンのアプリケーションと、クライアントにサインインを要求するコマンド行オプションのない別のバージョンのアプリケーションを登録できます。アプリケーションを複製する場合には、新しい表示名を選択する必要があります。

### アプリケーションの複製方法

1. **[Installed Applications]** の一覧から複製するアプリケーションを選択します。

2. [Tools | Applications | Duplicate]の順にクリックします。

－または－

[Installed Applications]の一覧の右側にある **[Duplicate]** ボタンをクリックします。

### アプリケーション名の変更

アプリケーションに割り当てる表示名は、エンドユーザのProgram Windowに表示されます。アプリケーションの表示名は常時変更可能です。

### アプリケーションの表示名の変更方法

1. **[Installed Applications]** の一覧から名前を変更するアプリケーションを選択します。
2. [Tools | Applications | Rename]の順にクリックします。

－または－

[Installed Applications]の一覧の右側にある **[Rename]** ボタンをクリックします。<br>

3. **[Rename Application]** ダイアログの **[New]** ボックスに名前を入力します。

### アプリケーションのプロパティの編集

アプリケーションが公開されたら、いつでもアプリケーションのプロパティを編集できます。たとえば、アプリケーションのスタートアップ状態、実行可能ファイルの場所、アプリケーションを起動するフォルダの編集が可能です。

### アプリケーションのプロパティの編集方法

1. **[Applications]** タブをクリックします。
2. **[Installed Applications]** の一覧からアプリケーションを選択します。
3. **[Properties]** ボタンをクリックします。
4. 以下のいずれかの操作を行います
  - **[Executable Path]** ボックス内に、新しいパス名を入力します。
  - **[Start Directory]** ボックス内に、アプリケーションを起動するディレクトリのフルパス名を入力します。
  - **[Command-Line Options]** ボックス内に、そのアプリケーション用のスタートアップパラメータを入力します。
  - **[Display Name]** ボックス内に、そのアプリケーションの新しい表示名を入力します。
  - **[Startup State]** セクションで、そのアプリケーションの起動モード(Maximized、Minimized、Normal)を選択します。
  - **[Icon]** ボタンをクリックして、新しいアプリケーションアイコンを検索します。

![4-2-3](/img/4-2-3.png) 

### アプリケーションの削除

GO-Globalで展開したアプリケーションは、Admin Consoleで削除します。Admin Consoleでアプリケーションを削除しても、ホストからは削除されません。GO-Globalクライアントがそのアプリケーションにアクセスできなくなるだけです。

### アプリケーションの削除方法

1. **[Applications]** タブをクリックします。
2. [Installed Applications]の一覧から削除するアプリケーションを選択します。
3. **[Remove]** ボタンをクリックします。

－または－

　　[Tools | Applications | Remove]の順にクリックします。

Admin Consoleでインストール済みアプリケーションを削除する時に、あるユーザがそのアプリケーションを実行していた場合、そのユーザのセッションは中断されません。しかし、そのユーザがそのアプリケーションを終了すると、そのアプリケーションは利用不可能になり、Program Window内にアイコンは表示されません。

Admin Consoleにアプリケーションを登録すると、インストール済みアプリケーションの一覧にアプリケーションの名前とパスが表示されます。列のタイトルをクリックすると、リスト内の項目を昇順または降順に並べ替えることができます。これは、Admin Consoleのすべてのリストに当てはまります。<br>

ODBC データソースを使用するアプリケーションを設定する場合は、GO-Globalクライアントがデータソースにアクセスできるように、ODBCドライバをシステムDSN(データソース名)として設定する必要があります。データソースの詳細については、Windows ODBCデータソース管理者オンラインヘルプを参照してください。<br>

アクセス制限により、Admin Consoleでは、UNC形式で指定されたパスの有効性を確認できません(例：\Machine Name\Folder Name\...)、またはマップされたネットワークドライブに存在するパスの有効性を確認できません。公開されたアイテムのLocationまたはStart Directoryがマップされたドライブを含むか、UNCパスで指定されている場合、Admin Consoleは、有効かどうかにかかわらず、指定されたパスを受け入れます。パスが無効な場合、またはクライアントユーザが指定された実行可能ファイルまたはフォルダにアクセスする権限を持っていない場合、公開されたアイテムはProgram Windowに表示されません。アイテムを選択し、[Properties]ボタンをクリックします。アイテムの場所またはStart Directoryを更新してみてください。<br>

アイテムをアンインストールまたは新しい場所に移動した場合、Application Publishing Serviceを再起動しても、Admin Consoleには表示されません。<br>

UNC形式で指定されたアイテムのパス、またはマップされたドライブに存在するアイテムのグループおよびユーザ設定をAdmin Consoleで表示することができません。これが適用されるアプリケーションまたはファイルについて、Admin Consoleの[group and user settings]ウィンドウに次のメッセージが表示されます。"User/Group settings not available"<br>

マップされたドライブに存在するがGO-Globalでの使用がライセンスされていないアイテムがAdmin Consoleで公開されている場合、そのアイテムのアイコンがProgram Windowsに表示されます。ただし、ユーザはアイテムを開くことができず、アイテムを起動しようとするとエラーメッセージが表示されます。

{{% alert title="参照" color="info" %}}
インストールされているアプリケーションのリストまたはアプリケーションのユーザー/グループのリストでアイテムの上でマウスの右ボタンをクリックすると、よく使用するコマンドのショートカットメニューが表示されます。
{{% /alert %}}

## ユーザやグループに対するアプリケーション起動パラメータの割り当て

Admin Consoleでは、ネットワーク上またはローカルマシン上のユーザやグループに対するアプリケーションの実行方法を指定するパラメータの割り当てが可能です。ユーザやグループに対して設定されたパラメータは、ユーザやグループがそのアプリケーションを起動する度に適用されます。個人に対して設定されたアプリケーション起動パラメータは、グループやアプリケーションに対して設定されたパラメータより優先されます。クライアントがGO-Globalを介してアプリケーションを起動すると、Program Windowは、まず個別ユーザに対して割り当てられた起動パラメータを確認します。何もパラメータが割り当てられていない場合は、Program Windowがシステムから取得した順に、そのユーザが属するグループの一覧を確認します。または、Program Windowは、そのアプリケーションに割り当てられている一般的な起動パラメータを検索します。

{{% alert title="参照" color="info" %}}
**[About GraphOn GO-Global]** ボックスで、ユーザが割り当てられているグループ、システムにおけるそのグループ一覧の順序を確認できます。
{{% /alert %}}

ユーザやグループ用のファイルアクセス許可は、サーバのWindows NTファイルシステム(NTFS)セキュリティ設定によって制御されます。ファイルアクセス許可は、Admin Consoleを通して設定することはできません。[Installed Applications]一覧からアプリケーションを選択すると、そのファイルやアプリケーション対してNTFSで指定されたユーザのアクセス許可が、[Application Users/Groups]一覧に表示されます。次に、特定のユーザやグループに対するアプリケーションのプロパティを編集できます。ファイルアクセス許可はNTFSで初期化されたドライブ上でのみ設定可能です。

### ユーザまたはグループに対するアプリケーション起動パラメータの割り当て方法

1. **[Applications]** タブをクリックします。

2. **[Installed Applications]** の一覧からアプリケーションを選択します。

3. **[Application Users/Groups]** の一覧からユーザまたはグループを選択します。

4. **[Properties]** ボタンをクリックします。

5. 以下のいずれかの操作を行います。
  - **[Start Directory]** ボックス内に、アプリケーションを起動するディレクトリ内のフル パス名を入力します。
  - **[Startup State]** セクションで、そのアプリケーションの起動モード (Maximized、Minimized、Normal) を選択します。
  - **[Command-Line Options]** ボックス内に、そのアプリケーションの起動時に使用するコマンド行引数を入力します。

![4-2-4](/img/4-2-4.png) 

{{% alert title="情報" color="green" %}}
ユーザやグループごとにアプリケーションを公開、非公開にする設定はWindowsのOSレベルでアプリケーションのアクセス許可を行います。グループ単位で許可を行う場合は事前にユーザグループを作成して以下の情報を参照してください。<br>
KGTN 2010121602<br>
[GGW3.2.1/GGH4.X/GGH5.X] アプリケーションを利用できるユーザーを限定したい。<br>
KGTN 2016062301<br>
[GGH4.X-5.X] 特定ユーザーまたは特定クライアントに限り、アプリケーションを利用出来るようにする設定はあるのか？<br>
KGTN 2016081801<br>
[GGH5.X] 特定ユーザーに対してアプリケーションのアイコンを表示しない方法は？<br>
{{% /alert %}}

{{% alert title="情報" color="green" %}}
共有フォルダやネットワークドライブを公開する方法は以下の技術ノートを参照ください。<br>
KGTN 2011022406<br>
[GGW-3.2.1] PW(Program Window)に共有フォルダを配置したい。<br>
KGTN 2016050601<br>
[GGH4.X-5.X] ログオン時にネットワークドライブを割り当てる方法は？<br>
{{% /alert %}}




