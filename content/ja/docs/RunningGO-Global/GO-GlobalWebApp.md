---
title: "GO-Global Web App"
linkTitle: ""
weight: 02
type: "docs"
---

JavaScriptとHTML5を使用して開発されたGO-Global Web Appは、Windows、Mac、Linuxコンピュータ上の一般的なWebブラウザからWindowsアプリケーションを実行することを可能にするゼロインストールクライアントです。さらに、Webアプリケーションをデプロイするために特別なホスト構成は必要ありません。Webアプリケーションは、クライアント側のパスワードキャッシュ、GO-GlobalのPreview PDFプリンタによるローカルプリンタへの印刷、およびCTRLキーを使用したローカルアプリケーションとリモートアプリケーション間のテキストのコピーアンドペーストをサポートしています。

# GO-Global Web Appの起動

GO-Globalは、Microsoft Internet Explorer、Mozilla Firefox、Google Chrome、Apple Safariなどの一般的なWebブラウザから実行できます。

### WebブラウザからGO-Globalを起動方法

1. Webブラウザを起動します。
2. [Location box]ボックスに、http://に続けてホスト名と **?useApp=false** の順に入力します。次に例を示します。`http://hostname/goglobal/?useApp=false`または`https://hostname/goglobal/?useApp=false`
3. **[Sign In]** ダイアログが表示されたら、次の情報を入力します。
  - **[User Name]** ボックスにネットワークユーザー名を入力します。
  - **[Password]** ボックスにパスワードを入力します。

[Location box]ボックスに **https://** を指定した場合、Admin Consoleの **[Host Options]** ダイアログの[Security]タブで **SSLトランスポート** を有効にし、タブで指定したSSL証明書のcommon nameをURLで指定したホスト名と一致させる必要があります。これらはGO-Global v6の新しい要件です。以前のバージョンでは、GO-Globalのブラウザプラグインとアドオン(ほとんどのブラウザでサポートされなくなったテクノロジを使用)は、ブラウザにダウンロードされたWebページから実行された場合でもTCP転送を使用してGO-Globalホストに接続できます。しかし、GO-GlobalのWeb Appはブラウザのセキュリティ制限を受けているため、WebアプリケーションはHTTPS接続を介してロードされるときにWebSocket Secure接続を使用する必要があります。 詳細については、 **SSL転送の選択** を参照してください。

{{% alert title="参照" color="info" %}}
デフォルトでは、GO-Globalは自動的にフルGO-Global AppControllerをダウンロードして実行しようとします。ログオンURLに?useApp = falseを追加すると、GO-GlobalからGO-Global AppControllerをダウンロードできなくなり、代わりにGO-Global Web Appが実行されます。
{{% /alert %}}

# GO-Global AppControllerを使用したWebアプリケーションの実行

GO-Global Web Appを使用すると、ユーザは自分のコンピュータに何もインストールせずにブラウザからアプリケーションを実行できます。しかし、そこに Webアプリケーションのみを実行した場合のいくつかの制限事項があります。たとえば、Webアプリケーションのみを実行している場合、クライアントファイルアクセス、シリアルポートとパラレルポート、スマートカード、クライアントサウンド、クライアントプリンタへの直接印刷、ルーズウィンドウモードでのGO-Globalの実行などの機能はサポートまたは利用できません。これらの制限は、完全なGO-Global AppControllerをダウンロードしてインストールすることで簡単に克服できます。 Windows、Linux、Macコンピュータに完全なGO-Global AppControllerをインストールすると、WebブラウザからGO-Globalを実行するユーザはこれらすべての機能にアクセスできるようになります。

GO-Globalは、GO-Global AppControllerのインストールと実行を制御するための2つのURLパラメータを提供します。 これらのパラメータは以下のとおりです。

* useApp　　useApp = trueの場合、Webアプリケーションは完全なGO-Global AppControllerを起動しようとします。useApp = falseの場合、WebアプリケーションはGO-Global AppControllerを起動しようとしません。デフォルトでuseApp = trueです。
* installApp　　installApp = trueの場合、まだインストールされていない場合、ユーザは完全なGO-Global AppControllerをインストールするように求められます。 installApp = falseの場合、ユーザはGO-Global AppControllerをインストールするように要求されず、インストールするためのリンクも表示されません。installApp = addLinkのとき、完全なGO-Global Appがまだインストールされていない場合は、 **[Get the App]** リンクがGO-Global Web Appのツールバーに追加されます。

たとえば、URLにこれらのパラメータのどちらも指定されていない場合（URLが **`http://hostname/goglobal/logon.html`** の場合など)、GO-Globalは自動的にGO-Global AppControllerのダウンロードを開始し、ユーザにプロンプトを表示します。インストールして実行します。または、installAppオプションがaddLinkに設定されている場合(たとえば、URLが **`http://hostname/goglobal/logon.html?installApp=addLink`** の場合)、Webアプリケーションのツールバーに[Get the App]リンクが追加されます。ユーザがこのリンクをクリックすると、GO-Globalはダウンロードを開始し、GO-Global AppControllerの実行とインストールのプロセスを案内します。

GO-Global AppControllerをインストールして有効にすると、「埋め込み」URLパラメータを使用して、アプリケーションをブラウザウィンドウ内で実行するかブラウザウィンドウ外で実行するかを制御できます。 embedパラメータが指定されていないか、または" false"に設定されている場合(たとえば、URLがhttp://hostname/goglobal/logon.html?embed = falseである場合)、ユーザのアプリケーションはGO-Global AppControllerを介してブラウザのウィンドウ外で実行されます。

あるいは、埋め込みパラメータが「true」に設定されている場合(例えば、URLが **`http://hostname/goglobal/logon.html?embed=true`**)アプリケーションはWebアプリケーションを介してブラウザウィンドウ内で実行されます。この場合、GO-GlobalもGO-Global AppControllerを起動します(インストールされて有効になっている場合)が、GO-Global AppControllerはコンピュータのデバイス(プリンタやドライブなど)へのアクセスを提供する目的でのみ使用されます。セッションのアプリケーションは表示されません。

{{% alert title="参照" color="info" %}}
AppControllerをブラウザウィンドウ内で実行すると、デフォルトの背景色は白になります。背景色は、 **HostProperties.xml** ファイルの **DesktopColor** プロパティで指定します。色は10進数形式のRGB値として指定されます。例えば、白のデフォルトの色は10進数で16777215(16進数では0x00FFFFFF)です。例えば、背景色を青に変更するには、 **DesktopColor** プロパティを10906937に設定します。
GO-Global AppControllerがインストールされていないかuseApp=falseの場合、embedオプションは無視されます。それ以外の場合、embedはデフォルトでfalseに設定されています。
{{% /alert %}}

埋め込みオプションが有効な場合、AppControllerは、 **-host** パラメータをホストのconfig.xmlファイルの **hostaddress** フィールドの値に設定して起動します。GO-Globalインストーラは、この値をコンピュータの名前に初期化します。ユーザーが別のアドレス(パブリックDNSアドレスなど)でホストに接続する場合は、config.xmlファイルの **hostaddress** フィールドをこのアドレスに設定する必要があります。

### ホストアドレスの値を変更する方法

1. **Application Publishing Service** を停止します。
2. `C:\ProgramData\GraphOnOn\GO-Global`ディレクトリに **config.xml** ファイルを配置してください。
3. Wordpadで **config.xml** を開き、<hostaddress>フィールドを探してください。
4. ホストアドレスの値を更新します。
5. 編集した.xmlファイルを保存します。
6. **Application Publishing Service** を起動します。

{{% alert title="参照" color="info" %}}
GO-Global Web Appを使用する場合、アプリケーションのメニューまたはツールバーからクリップボードにコピーして貼り付けることはサポートされていません。代わりに、Windowsでは、キーボードショートカットの **Ctrl+C** を使用してコピーし、 **Ctrl+V** を使用して貼り付けます。Macでは、キーボードショートカットの **Command-C** を使用してコピーし、**Command-V** を使用して貼り付けます。
{{% /alert %}}

# Accessing the Host or Relay Load Balancer Directly from the Internet

ユーザがインターネットからGO-Global HostやRelay Load Balancerに接続する場合、URL内のWebサーバーとホストアドレスはパブリック(インターネット)アドレスでなければなりません。公開されているウェブサーバがない場合は、GraphOnのウェブサーバであるapps.graphon.comを使用することができます。

この場合、以下のようなURLがユーザと共有されます。`http://apps.graphon.com/goglobal/?host=hostname`、hostnameはGO-Globalホストの公開アドレスです。

GraphOn以外のウェブサーバを使用する場合は、そのウェブサーバの公開アドレスを使用してください。例： http://webservername.com/goglobal/?host=hostname
ユーザがインターネットと内部ネットワークの両方からホストやRelay Load Balancerにアクセスする場合、外部と内部のDNSは、ウェブサーバの公開アドレスと内部アドレスが同じになるように設定し、ホストの公開アドレスと内部アドレスが同じになるように設定します。あるいは、管理者が外部と内部のユーザに異なるURLを提供することもできますが、これはユーザを混乱させる可能性があります。
サードパーティのロードバランサを介してホストにアクセスする場合、URL にはロードバランサのアドレスを含める必要があります。例えば **`http://loadbalancer.com/goglobal/?host=hostname&app=Notepad`**

