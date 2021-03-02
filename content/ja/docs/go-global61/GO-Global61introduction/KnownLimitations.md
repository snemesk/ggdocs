---
title: "既知の制限"
linkTitle: ""
weight: 07
type: "docs"
---

このページのGO-Globalの既知情報とVersion 6.1.0.30001とVersion 6.1.1.30272セクションで説明されている既知の問題は、[解決された問題](/issuefix)に記載されていない限り次のビルドでも引き続き存在します。

# Version 6.1.1.30272の既知事象

- 新しいビデオオプションが有効になっているかどうかに関係なく：
	- Chromeバージョン80がGO-Globalセッションで実行されている場合、ビデオは再生されません。
	- Windowsオーディオサービスが有効になっていない限り、ビデオはInternetExplorerで再生されません。
	- WindowsMedia PlayerをGO-Globalセッションで実行すると、ビデオは表示されません。
Windows Media Playerの問題を回避するために、お客様は別のメディアプレーヤを使用することができます。

- GO-GlobalホストにTrend Micro Antivirusをインストールすると、セッションの開始に失敗します。この問題を回避するには、aps.exeとlogon.exeをTrend Behavior Monitoringから除外してください。

- CrowdStrike Falconアンチウイルスソリューションは、GO-Globalホストではサポートされていません。

- Webアプリが単独で使用されている場合(AppControllerを使用していない場合)、GO-Globalセッションで実行されているアプリケーションの[カット]、[コピー]、[ペースト]メニューオプションを使用して、ローカルとリモートのアプリケーション間でデータを転送することができません。ローカルとリモートのアプリケーション間でデータの切り取り、コピー、貼り付けを行うには、Ctrl+X、Ctrl+C、Ctrl+Vの各キーボードショートカットを使用する必要があります。

- Windows 10では、公開アプリケーションとしてInternet Explorerを使用して閲覧する場合は、Microsoft Edgeを使用するように指示されます。EdgeはGO-Globalで公開アプリケーションとしてサポートされていません。FirefoxやChrome(64 ビット)などの代替ブラウザを使用してください。

- Microsoft Remote Desktop クライアントはGO-Globalセッションではサポートされていません。

- Sentinel One AntivirusまたはKaspersky EndPoint Securityのいずれかがインストールされている場合、Microsoft OfficeアプリケーションはGO-Globalセッションで実行されません。

- サーバ側の入力メソッドエディタ(IME)は、Windows Server 2019または Windows 10のGO-Globalセッションでは動作しません。

- Kaspersky Anti-VirusがGO-Globalホストにインストールされている場合、一部のアプリケーションがGO-Globalセッションでの起動に失敗することがあります。この問題を回避するには、Kaspersky Anti-Virusを一時停止してください。

- Windows 10ホスト上でGO-Globalセッションを実行しているMicrosoft Officeアプリケーションからクライアントコンピュータ上のディレクトリにファイルを保存すると、保存されたファイルと一緒にクライアントディレクトリに一時ファイル(.tmp)が追加で保存されます。

- Admin Consoleでスマートカードまたはシリアルポートとパラレルポートが有効になっている場合、64ビット版のFirefoxが起動しませんでした。

- GO-Global Web Appの一部のシナリオでコピーアンドペーストが機能しない。

- GO-Global Web AppでDPIスケーリングが機能しないことがある。

- AppControllerがインストール後に自動的に起動しないことがある。この問題が発生した場合は、[Reload]リンクをクリックしてください。


# Version 6.1.0.30001の既知事象

- 次のWebブラウザは、公開アプリケーションとしてサポートされていません。
	- Microsoft Edge
	- Chrome(32ビット)

- GO-GlobalセッションでMicrosoft Officeアプリケーションを実行しているユーザは、ローカルコンピュータにマップされているMyWorkDrivesにファイルを保存できません。

- 新しいビデオオプション：
	- AppControllerforWindowsでのみサポートされています。
	- WindowMediaFoundationがWindowsServer 2012R2ホストにインストールされている必要があります。
	- 標準のRapidXプロトコルよりも多くのメモリとCPUを消費します。
	- ビデオの画面サイズが大きいほど遅くなります。

- 新しいビデオオプションが有効になっているかどうかに関係なく：
	- Chromeバージョン80がGO-Globalセッションで実行されている場合、ビデオは再生されません。
	- Windowsオーディオサービスが有効になっていない限り、ビデオはInternetExplorerで再生されません。
	- WindowsMedia PlayerをGO-Globalセッションで実行すると、ビデオは表示されません。

- Open File Redirection機能は、AppController for Windowsでのみサポートされています。

- ファイルを開くリダイレクト機能は、WindowsエクスプローラやWindowsの「ファイルを開く」機能を使ってファイルを開くアプリケーションではサポートされていません。例えば、ユーザがアプリケーションの[ファイルを開く]ダイアログボックスでファイルを右クリックして[開く]を選択した場合、ファイルの種類が[Host Options | Client Access | Open files on client | File Types]でチェックされている場合でも、そのファイルはホスト上のアプリケーションで開きます。この制限はバージョン6.1の製品版でも適用されます。

- クライアントは、サードパーティのロードバランサを経由して、ファームマネージャを介して間接的にファームホストに接続することができます。

- 同様に、クライアントはDependent Hostsに直接接続することができます。

- ユーザがファームホストに接続すると、Admin ConsoleにはクライアントデバイスのIPアドレスはリストされません。

- [Notify users when connections are secure]が有効になっている場合、[secure connection]の通知が自動再接続を妨害することがあります。

- cloudライセンスを使用するようにホストが設定されている場合、Admin Consoleの[Seats in use]値には、選択したホストで使用中のライセンスシートの数が表示されます。複数のホストが同じcloudライセンスを使用するように構成されている場合、Seats in useには、使用中のライセンスのシートの合計数は表示されません。

- Windows Server 2019でGO-Globalホストのインストーラを実行すると、インストーラの[Restart]ボタンをクリックしてもコンピュータが再起動しないことがあります。このような場合は、[スタート]メニューからコンピュータを再起動してください。

- Admin Consoleの[Get Link]ダイアログでWebサーバのアドレスを変更すると、URLに/6.1のサブディレクトリが含まれたままになり、正しくありません。この問題を回避するには、リンクフィールドのURLを編集して /6.1のサブディレクトリを削除してください。

- クライアントシステムからAppControllerをアンインストールした場合、ブラウザが再インストールを促すメッセージを表示しない。

- GO-Globalホストのインストーラは、ダウングレードや修復をサポートしていません。GO-Globalホストのインストールをダウングレードまたは修復するには、GO-Globalをアンインストールして再インストールする必要があります。これを実行し、GOG-Globalの構成設定を維持する手順は、『Admin Guide』に記載されています。

- Windows 10(バージョン2004)では、Office 2019およびOffice 365はGO-Globalセッションで実行されません。

- ユーザは、Windows Server 2019および Windows 10のバージョン1809、1903、1909の一部のOffice 2019アプリケーションからクライアントドライブにファイルを保存できません。

- 公開されたアプリケーションとしてのFirefox 64は、Webページを閲覧した後にハングすることがあります。


# GO-Global全体の既知の制限事項は以下のとおりです。

- GO-Globalはグループポリシーのログオンスクリプトまたはログオフスクリプトをサポートしていません。
- MicrosoftのVBScriptsは、バッチファイルで実行されない限り、ログオンスクリプトとしてサポートされていません。
- GO-Globalホスト上のファイルをコピーしてクライアントに貼り付け、既存のファイルを上書きしようとすると、うまくいかない場合があります。
- GO-GlobalはParallels Virtuozzoをサポートしていません。
- GO-GlobalはGO-GlobalセッションでAdobe Acrobat 8.0をサポートしています。以前のバージョンのAcrobatはサポートされていません。
- Macから印刷する場合、Appleのプレビューアプリケーションはサポートされていません。Mac OS Xアプリを実行している場合、印刷するにはAdobe Readerが必要です。
- GO-GlobalのUniversal Print Driverはポート9010を使用しています。このポートは変更できません。GO-Globalホスト上の他のソフトウェアがポート9010を使用している場合、ユーザはUniversal Print Driverを使用して印刷することができません。
- ライセンスファイルが追加または削除されるたびに、GO-Globalライセンスマネージャーサービスを再起動する必要があります。
- 日本語キーボードは、Mac OS Xでは-kb ClientSideIMEオプションでのみサポートされています。
- クライアントのタスクマネージャが"常にトップにある"に設定されている場合、ペイントの問題が発生することがあります。
- クライアントの表示が256色に設定されていると、色が正しく表示されないことがあります。
- ジャーナルレコードフックはサポートされていません。そのため、アプリケーションによってはマクロの記録に失敗することがある。
- クライアント側のファイルに埋め込まれたOLEオブジェクトは編集できません。OLEオブジェクトの編集に必要なアプリケーションがホスト上で利用可能な場合は、ホスト上のドライブにファイルをコピーして編集し、必要に応じてクライアントにコピーし直してください。
- Windows以外のクライアントでは、クライアント上で実行されているアプリケーションとホスト上で実行されているアプリケーションの間では、テキストと画像のみをコピーして貼り付けることができます。
- GO-Globalホストがrelay serverに接続されている場合、ホストの設定(公開アプリケーションなど)がrelay serverの設定に置き換わるという警告は表示されません。
- セッションシャドウイングされている間は、切断されたセッションにユーザが再接続することはできません。
- GO-Globalは、システムアカウント以外のアカウントでのアプリケーション公開サービスの実行をサポートしていません。
- キーボードマッピングコマンドライン引数-kbは、Linuxおよび Mac OS Xでは大文字と小文字が区別されます。
- GO-Globalは /3GB スイッチをサポートしていません。
- pdfforgeからのPDFCreatorはサポートされていません。
- MicrosoftのXPS Document Writerは、ユニバーサルプリンタドライバを使用している場合、クライアントプリンタとしてサポートされていますが、XPS Printer Driverはサポートされていません。
- dependent application serverからGO-Globalを管理する場合、異なるアカウントで2つのシステムに対話的にログオンしている場合、Admin Consoleを使用してrelay serverに接続することはできません。代わりに、relay serverでAdmin Consoleを実行してください。
- GO-Globalは、システムトレイと統合するアプリケーションをサポートしていません。
- Admin Consoleで[Apply Group Policy]が有効になっている場合、セッションの開始に時間がかかる。
- Windows統合認証を使用してユーザが認証し、サーバ側のパスワードキャッシュが無効になっている場合、ホストのテーマは適用されません。
- ユーザに対してInternet Explorer拡張セキュリティ設定が有効になっている場合、GO-GlobalセッションからOffice 365にログインするには、*.microsoftonline.comをユーザの信頼できるサイトに追加する必要があります。
- Chrome77以降で useApp=true(既定の設定)でGO-Global Webアプリを実行すると、ユーザは GO-Globalアプリを実行するたびに承認するよう求められます。Chromeでは、ユーザが承認ダイアログを回避して常にアプリケーションを実行するオプションがなくなりました。
- ユーザはGO-Globalセッションで実行されているChromeからクライアント側のスマートカードにアクセスできません。
- 環境変数LM_LICENSE_FILEが存在しないか、何も設定されていないか、または HKLM_GlosseSOFTWAREFLEXlm License Manager\GGLicenseManagerLicenseレジストリ値と一致しない場合、GO-Globalホストはライセンスのチェックアウトに失敗します。
- いくつかのライセンス構成では(例えば、セントラルライセンスサーバが使用されている場合)、APSはメッセージを記録します。"Failed to obtain a [application_process_name] license for the following reason: License server system does not support this feature…"これらのメッセージは良性です。
- Hyper-Vロールが有効になっている場合、Windows Server 2016 および Windows Server 2019でGO-Globalセッションの開始に失敗します。
- HostProperties.xmlファイルでClientSideIMEEnabledがtrueに設定されている場合(デフォルト値)、Ctrl-ZおよびCtrl-Yを使用すると、一部のアプリケーションで異常な動作が発生することがあります。これらの問題を回避するには、ClientSideIMEEnabledをfalseに設定してください。
- ユーザがiOSまたはAndroidからSSLトランスポートが有効になっているGO-Globalホストに接続すると、SSL警告ダイアログが表示されます。この問題を回避するには、管理者が中間証明書とルート証明書の両方をサーバ証明書に連結し、ユーザが最初にホストに接続するときに証明書を検査し、正しい場合は[インストール]をクリックして証明書をデバイスにインストールする必要があります。
- Windows Server 2012 R2上でAdobe ReaderをGO-Globalセッションで実行すると、"AppContainer System Incompatibility "というレポートが表示されます。この問題を回避してメッセージが表示されないようにするには、Adobeの環境設定で「起動時に保護モードを有効にする」オプションのチェックを外すことができます。
- Web MSIが[ホストオプション]ダイアログボックスの[更新]タブを使用してインストールされ、対応するホストMSIがインストールされていない場合、GO-Global\Webディレクトリの内容は更新されますが、[更新]タブではインストールされた更新のリストにWeb MSIが含まれません。
- Adobe Acrobat ProがGO-Globalセッションで実行されると、ホストコンピューターがクラッシュします。この問題を回避するには、Adobe純正モニターサービスとAdobe純正ソフトウェア整合性サービスを無効にします。
- バージョン 6のGO-Globalホストの以前のリリースを最新のリリースにアップグレードしても、変更されていないファイルは置き換えられません。これは設計によるものです。
- Windowsアップデートが最新でない一部のシステムで、GO-Globalホストのインストールに失敗します。これは、MicrosoftのVisual Studio再配布可能ファイルの前提条件がインストールされていない場合に発生します。この問題を回避するには、Windows Updateを適用してください。
- ユーザがInternetExplorerでGO-GlobalWeb Appを実行し、AppControllerがインストールされていないか有効になっていない場合、ユーザーが最初にCTRL+X、CTRL+C、CTRL+Vを入力すると、Internet Explorerは次のメッセージを表示することがあります。「このWebページにクリップボードへのアクセスを許可しますか？」ユーザが[アクセスを許可する]または[許可しない]をクリックしてこのメッセージを閉じると、ユーザがキーを押すたびに二重文字が表示される場合があります。この問題を回避するには、CTRLキーを押して離します。また、ユーザがCTRL+Cを入力した場合、選択したテキストは"c"に置き換えられる場合があります。この問題を回避するには、アプリケーションの元に戻す機能(たとえば、CTRL+Zを入力)を使用して、削除されたテキストを復元します。上記のメッセージは、セッションごとに1回だけ表示されます。これらの問題は、ユーザがその後CTRL+X、CTRL+C、またはCTRL+Vを押して、GO-Global Web Appのインスタンス内でテキストを切り取り、コピー、または貼り付けた場合には発生しません。
- ユーザがGoogle ChromeまたはMozilla FirefoxでGO-Global Webアプリを実行し、CTRL+NまたはCTRL+Tを入力すると、それぞれ新しいウィンドウまたは新しいタブが開きます。同様に、ユーザがInternet ExplorerでGO-Global Web Appを実行し、CTRL+OまたはCTRL+Pを入力すると、Internet Explorerの[ファイルを開く]ダイアログボックスまたは[印刷]ダイアログボックスがそれぞれ開きます。これらのケースやその他のケースでは、ブラウザはGO-Global Web Appの既定の動作を抑制することを許可していません。
- Mac OS XのSafariでGO-Global Web Appをバックグラウンドタブに移動すると、クライアントはセッションから切断されます。
- ユーザがWindows 7のInternet Explorer 11からGO-Globalホストを参照すると、アプリがインストールされていてもAppControllerのインストールを促すプロンプトが表示されます。ユーザはこのプロンプトを無視することができます。
- GO-Global WebアプリでDPIスケーリングが機能しないことがある。
- バージョン 6のGO-Globalホストがサイレントインストールされている場合、GO-Global Audio Driverがインストールされず、アップグレードされません。この問題を回避するには、GO-Globalホストのインストーラを実行した後、デバイスマネージャからGO-Global Audio Driverをインストールしてください。
- AppControllerがインストール後に自動的に起動しない場合があります。この問題が発生した場合は、[Reload]リンクをクリックしてください。



