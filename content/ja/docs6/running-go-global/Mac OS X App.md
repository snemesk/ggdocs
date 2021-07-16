+++
title = "Mac OS X App"
description = ""
weight = 4
+++

GO-GlobalのMac OS X Appは、ネイティブのMac OS X環境とシームレスに統合できる軽量のアプリケーションです。最新のMac OS X APIを使用するように全面的に書き直され、インストールの簡素化、サウンドサポート、マルチモニタサポート、およびMac OS X Gatekeeperサポートを提供します。これにより、マルウェアから保護され、インターネットからダウンロードされたアプリケーションが不正に動作します。

### Mac OS X Appのインストール方法

1. web browserを起動します。
2. Locationボックスに、http://に続けてホスト名とGO-Globalクライアントのインストールファイルを入力します。たとえば、http://host/goglobal/clients.htmlです。
3. 指示に従ってgg-client.mac.dmgをダウンロードしてインストールします。
4. gg-client.mac.dmgを開き、GO-Global.appをアプリケーションにドラッグします。

### Mac OS X Appの起動方法

1. メニューバーから[ Go | Applications ]の順にクリックします。
2. GO-GlobalをダブルクリックをしてGO-Globalを起動します。
3. [Connection]ダイアログにホストアドレスを入力します。
4. [Sign In]ダイアログが表示されたら、次の情報を入力します。
  - [**User Name**]ボックスにネットワークユーザ名を入力します。
  - [**Password**]ボックスにネットワークユーザのパスワードを入力します。

Mac OS X Appをアンインストールするには、GO-Global.appをアプリケーションからゴミ箱にドラッグします。

### Mac OS X Appで起動パラメータを使用する方法

1. ターミナルを起動します。
2. /Applications/GO-Global.app/Contents/MacOS/ とディレクトリを変更します。
3. ./GO-Globalとスタートパラーメータを入力します。

例：./GO-Global –h 196.125.101.222 –ac all –hp 443