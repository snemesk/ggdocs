---
title: "Mac OS X App"
linkTitle: ""
weight: 03
type: "docs"
---


GO-GlobalのMac OS X Appは、ネイティブのMac OS X環境とシームレスに統合できる軽量のアプリケーションです。最新のMac OS X APIを使用するように全面的に書き直され、インストールの簡素化、サウンドサポート、マルチモニタサポート、およびMac OS X Gatekeeperサポートを提供します。これにより、マルウェアから保護され、インターネットからダウンロードされたアプリケーションが不正に動作します。

### Mac OS X Appのインストール方法

1. web browserを起動します。
2. Locationボックスに、http://に続けてホスト名とAppControllerクライアントのインストールファイルを入力します。たとえば、 **`http://host/goglobal/`** です。
3. 指示に従って **AppController.dmg** をダウンロードしてインストールします。
4. **AppController.dmg**を開き、**AppController.app** をアプリケーションにドラッグします。

### Mac OS X Appの起動方法

1. メニューバーから[ Go | Applications ]の順にクリックします。
2. GO-Globalをダブルクリックをして **AppController** を起動します。
3. **[Connection]** ダイアログにホストアドレスを入力します。
4. **[Sign In]** ダイアログが表示されたら、次の情報を入力します。
  - **[User Name]** ボックスにネットワークユーザ名を入力します。
  - **[Password]** ボックスにネットワークユーザのパスワードを入力します。

Mac OS X Appをアンインストールするには、**AppController.app** をアプリケーションからゴミ箱にドラッグします。

### Mac OS X Appで起動パラメータを使用する方法

1. **Terminal** を起動します。
2. `/Applications/AppController.app/Contents/MacOS/` とディレクトリを変更します。
3. `./AppController` とスタートパラーメータを入力します。

例：`./AppController –h 196.125.101.222 –ac all –hp 443`