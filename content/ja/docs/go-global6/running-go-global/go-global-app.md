+++
title = "GO-Globalの実行"
description = ""
weight = 1
+++

# GO-Global App

新しいGO-Global Appは、GO-Global 5のネイティブクライアントとブラウザアドオンの機能を単一のアプリケーションに統合したもので、コンピュータのデスクトップ、モバイルデバイス、またはWebブラウザから起動できます。

### GO-Global Appのインストール方法

1. Webブラウザを起動します。
2. [locatation] ボックス内で、http://に続けてホスト名とGO-Globalログオンページを入力します。例 : [http://hostname/goglobal/logon.html](http://hostname/goglobal/clients.html)
3. GO-Global Appがインストールされていない場合、GO-Globalは自動的にダウンロードを開始します。 ダウンロードしたファイルを実行してください。 それ以外の場合は、画面に表示される指示に従って、コンピュータのオペレーティングシステムからセットアッププログラムをダウンロードして実行します。(go-global.exe、gg-client.mac.dmg、gg-client.linux.deb、gg-client.linux.rpm.)
4. Mac OS Xでは、gg-client.mac.dmgを開きます。

GO-Global Appをインストールした後、スタートメニュー、ショートカット、またはコンソールウィンドウからGO-Globalを実行できます。

### コンピュータのメニューからGO-Globalを実行する方法

1. GO-Globalメニューオプションを選択します。
  a. Windowsでは、Windowsタスクバーの **スタート**ボタンをクリックし、[Programs | GO-Global ]の順に選択します。
  b. Linuxでは、[アプリケーション]メニューから[ネットワーク]または[インターネット]カテゴリを選択し、 [**GO-Global**]をクリックします。
  c. Mac OS Xでは、[移動]メニューから[Applications]を選択し、 [**GO-Global**]をダブルクリックします。
2. [**Connection**]ダイアログ内にホストのアドレスを入力します。
3. [**Connect**]をクリックします。[**Sign In**]ダイアログが表示されたら、次の情報を入力します。
   - [**User Name**]ボックスにネットワークユーザー名を入力します。
   - [**Password**]ボックスにパスワードを入力します。

>GO-Globalは、ログオンプロセスをシャットダウンする前に、ユーザーに無効なログオン試行を3回許可します。

Windowsコンピュータでは、GO-Global ConnectionダイアログにGO-Globalホストへのショートカットを作成するオプションがあります。このオプションを使用すると、ホストに接続するときに[接続]ダイアログを迂回することができます。

### WindowsコンピュータにGO-Globalホストへのショートカットを作成する方法

1. 上記のいずれかの方法でGO-Globalを起動します。
2. [**Connection**]ダイアログにサーバのアドレスを入力します。
3. [Create desktop shortcut to this host]チェックボックスをオンにします。
4. [**Connect**]をクリックします。ホストへのショートカットがコンピュータのデスクトップに作成されます。

### Windows上でGO-Globalのショートカットを作成する方法

1. デスクトップ上で右クリックします。
2. [ 新規作成 | ショートカットの作成 ]の順に作成します。
3. ショートカットの作成ダイアログボックスで、GO-Global Clientの実行ファイルを参照します。 たとえば、" C:¥Program Files¥GraphOn¥GO-Global Client¥gg-client.exe"のようになります。
4. gg-client.exeへのパスの後にパラメータを追加します。例えば"C:\Program Files\GraphOn\GO-Global\Client\gg-client.exe" –h hostname –a Wordpad –r "C:\Users\Public\Public Documents\test.rtf"
5. ショートカットの名前を入力して[完了]をクリックします。

