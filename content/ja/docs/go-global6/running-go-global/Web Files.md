+++
title = "Webファイル"
description = ""
weight = 8
+++


GO-Globalホストのセットアップは、C:\Program Files\GraphOn\GO-Global\Webの下にGO-Global Webファイルをインストールします。インストール中にMicrosoftインターネットインフォメーションサービス(IIS)が検出されると、GO-Global Webファイルを指す仮想ディレクトリがIISに作成されます。IISが利用できない場合、管理者は指定されたWebサーバー上でGO-Global Webフォルダの内容を手動でホストする必要があります。

管理者はHTMLページを編集してデフォルトオプションを変更したり、どのクライアントをユーザが利用できるようにしたりするかを制限できます。インストール中、初期Webページはlogon.htmlに設定されます。Webブラウザからホストにアクセスするユーザは、次のURLにアクセスする必要があります。http:// hostname/go-global/

GO-Globalは自動的にユーザのプラットフォームとブラウザを検出し、適切なGO-Globalクライアントを起動します。allclients.htmlページには、どのクライアントオペレーティングシステムが検出されても、すべてのGO-Globalクライアントが一覧表示されます。

Windowsを実行している管理者は、GO-Globalのシングルユーザ版またはAll Users版のいずれかをダウンロードしてインストールできます。シングルユーザ版(go-global.exe)では、現在ログインしているユーザに対してのみGO-Global Appがインストールされます。全ユーザー版(go-global.windows.exe)では、マシン上のすべてのユーザに対してGO-Global Appがインストールされます。

## クライアントウィンドウのサイズ変更

コマンドライン引数–fを使用すると、コマンドライン引数–geometryを使用してクライアントウィンドウのサイズを変更できます。コマンドラインに-geometryを指定しないと、クライアントウィンドウは最大化されます。GO-Globalをルーズウィンドウモードで実行した場合、-geometryは効果がありません。クライアントウィンドウのサイズを変更するには、GO-Globalクライアント実行可能ファイルに–geometryを追加し、その後に目的の幅と高さを続けます。