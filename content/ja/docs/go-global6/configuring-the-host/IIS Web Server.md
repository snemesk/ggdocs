
+++
title = "IIS Webサーバーを使用して、既定のディレクトリ以外からWebファイルをホストする"
description = ""
weight = 5
+++
Microsoft IIS Webサーバを使用して、既定のgoglobalディレクトリ以外からGO-Global Webファイルをホストできます。

### 既定のディレクトリ以外からWebファイルをホストする方法

1. Webサーバの C:\inetpub\wwwroot\にディレクトリを作成し、ユーザに表示したいディレクトリに呼び出します。たとえば、C:\inetpub\wwwroot\Webのフォルダを作成します。
2. GO-GlobalホストからC:\Program files\GraphOn\GO-Global\Webディレクトリの内容を新しいディレクトリにコピーします。
3. IISマネージャを開き、[サイト]に移動します。既定のWebサイト **既定のWebサイト**を右クリックし、 **仮想ディレクトリの追加**をクリックします。
4. 手順1で作成したディレクトリと同じエイリアスを指定し、手順2でファイルをコピーしたディレクトリを **物理パス**に指定します。たとえば、C:\inetpub\wwwroot\Webです。
5. 新しい仮想ディレクトリをクリックします。次に **MIMEタイプ**をダブルクリックします。
6. **追加**をクリックします。 **File name extension**ボックスに.memを入力します。[MIMEの種類]ボックスにapplication/octet-streamと入力します。次に **OK**をクリックします。
7. IISの設定が正しいことを確認するには、ブラウザを開き、GO-Globalホストに接続するためのURLを入力します(例 : **http://hostname/web/logon.html**)。(hostnameはあなたのGO-Globalホストの名前です。webはIISで作成した仮想ディレクトリの名前です。)
