+++
title = "GO-Global Appを利用したWebアプリケーションの実行"
description = ""
weight = 3
+++

GO-Global Web Appを使用すると、ユーザは自分のコンピュータに何もインストールせずにブラウザからアプリケーションを実行できます。しかし、そこに Webアプリケーションのみを実行した場合のいくつかの制限事項があります。 たとえば、Webアプリケーションのみを実行している場合、クライアントファイルアクセス、シリアルポートとパラレルポート、スマートカード、クライアントサウンド、クライアントプリンタへの直接印刷、ルーズウィンドウモードでのGO-Globalの実行などの機能はサポートまたは利用できません。これらの制限は、完全なGO-Global Appをダウンロードしてインストールすることで簡単に克服できます。 Windows、Linux、Macコンピュータに完全なGO-Global Appをインストールすると、WebブラウザからGO-Globalを実行するユーザはこれらすべての機能にアクセスできるようになります。

GO-Globalは、GO-Global Appのインストールと実行を制御するための2つのURLパラメータを提供します。 これらのパラメータは以下のとおりです。

* useApp　　useApp = trueの場合、Webアプリケーションは完全なGO-Global Appを起動しようとします。useApp = falseの場合、WebアプリケーションはGO-Global Appを起動しようとしません。 デフォルトでuseApp = trueです。
* installApp　　installApp = trueの場合、まだインストールされていない場合、ユーザは完全なGO-Global Appをインストールするように求められます。 installApp = falseの場合、ユーザはGO-Global Appをインストールするように要求されず、インストールするためのリンクも表示されません。 installApp = addLinkのとき、完全なGO-Global Appがまだインストールされていない場合は、[Get the App]リンクがGO-Global Web Appのツールバーに追加されます。

たとえば、URLにこれらのパラメータのどちらも指定されていない場合（URLがhttp://hostname/goglobal/logon.htmlの場合など)、GO-Globalは自動的にGO-Global Appのダウンロードを開始し、ユーザにプロンプトを表示します。インストールして実行します。または、installAppオプションがaddLinkに設定されている場合(たとえば、URLがhttp://hostname/goglobal/logon.html?installApp = addLinkの場合)、Webアプリケーションのツールバーに[Get the App]リンクが追加されます。ユーザがこのリンクをクリックすると、GO-Globalはダウンロードを開始し、GO-Global Appの実行とインストールのプロセスを案内します。

GO-Global Appをインストールして有効にすると、「埋め込み」URLパラメータを使用して、アプリケーションをブラウザウィンドウ内で実行するかブラウザウィンドウ外で実行するかを制御できます。 embedパラメータが指定されていないか、または" false"に設定されている場合(たとえば、URLがhttp://hostname/goglobal/logon.html?embed = falseである場合)、ユーザのアプリケーションはGO-Global Appを介してブラウザのウィンドウ外で実行されます。

あるいは、埋め込みパラメータが「true」に設定されている場合(例えば、URLが http://hostname/goglobal/logon.html?embed = true)アプリケーションはWebアプリケーションを介してブラウザウィンドウ内で実行されます。この場合、GO-GlobalもGO-Global Appを起動します(インストールされて有効になっている場合)が、GO-Global Appはコンピュータのデバイス(プリンタやドライブなど)へのアクセスを提供する目的でのみ使用されます。セッションのアプリケーションは表示されません。

>GO-Global Appがブラウザウィンドウ内で実行されている場合、デフォルトの背景色は白です。背景色は、HostProperties.xmlファイルのDesktopColorプロパティで指定されています。 色は10進数形式のRGB値として指定されます。たとえば、デフォルトの白の色は10進数で16777215です(16進数で0x00FFFFFF)。

GO-Global AppがインストールされていないかuseApp = falseの場合、embedオプションは無視されます。それ以外の場合、embedはデフォルトでfalseに設定されています。

>Webアプリケーションを使用しているときは、アプリケーションのメニューまたはツールバーからクリップボードにコピーアンドペーストすることはできません。 代わりに、Windowsでは、コピーにはCTRL + C、貼り付けにはCTRL + Vを使用します。 Macでは、コピーするにはキーボードショートカットCommand-C、貼り付けるにはCommand-Vを使用します。

## Accessing the Host or Relay Server Directly from the Internet

If users will be connecting to a GO-Global Host or relay server from the internet, the web server and host addresses in the URL must be public (internet) addresses. When there is no public web server available, GraphOn's web server, apps.graphon.com, can be used.

In this case, a URL such as the following would be shared with users: [http://apps.graphon.com/goglobal/?host=hostname](http://apps.graphon.com/goglobal/?host=hostname), where hostname is the public address of the GO-Global Host.

When using a web server other than GraphOn's, the URL must use the public address of the web server. For example: [http://webservername.com/goglobal/?host=hostname](http://webservername.com/goglobal/?host=hostname)

If users will be accessing a host or relay server from both the Internet and the internal network, the external and internal DNS should be configured so that the public and internal addresses of the web server are the same, and the public and internal addresses of the host are the same. Alternatively, administrators can provide external and internal users with different URLs, but this may be confusing to users.

When hosts are accessed via a third-party load balancer, the URL must include the address of the load-balancer. For example, [http://loadbalancer.com/goglobal/?host=hostname&app=Notepad](http://loadbalancer.com/goglobal/?host=hostname&app=Notepad)​

