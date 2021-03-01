---
title: "Webファイル"
linkTitle: ""
weight: 06
type: "docs"
---

GO-Globalホストのセットアップは、`C:\Program Files\GraphOn\GO-Global\Web`の下にGO-Global Webファイルをインストールします。インストール中にMicrosoftインターネットインフォメーションサービス(IIS)が検出されると、GO-Global Webファイルを指す仮想ディレクトリがIISに作成されます。IISが利用できない場合、管理者は指定されたWebサーバー上でGO-Global Webフォルダの内容を手動でホストする必要があります。

管理者はHTMLページを編集してデフォルトオプションを変更したり、どのクライアントをユーザが利用できるようにしたりするかを制限できます。インストール中、初期Webページはlogon.htmlに設定されます。Webブラウザからホストにアクセスするユーザは、次のURLにアクセスする必要があります。**`http://hostname/go-global/`**

Windows用GO-Global AppControllerには、**オールユーザ** バージョンと **シングルユーザ** バージョンの2つのバージョンがあります。**オールユーザ** 版のインストーラ **(AppController.AllUsers.exe)** は、コンピュータを使用するすべてのユーザに対してAppControllerをインストールしますが、コンピュータの管理者権限を持つユーザのみがインストールできます。オールユーザバージョンをインストールするには、URLに次のようにパラメータ **?allusers=true** を追加する必要があります。例: **`http://hostname/goglobal/?allusers=true`**

**シングルユーザ** 版のインストーラ **(AppController.exe)** は、コンピュータの管理者権限を持たないユーザが実行できますが、インストーラを実行しているユーザのみがインストールされます。別のユーザが同じコンピュータ上でAppControllerを実行したい場合は、そのユーザもシングルユーザ版のインストーラーを実行する必要があります。

{{% alert title="参照" color="info" %}}
通常のユーザがローカルポリシーまたはグループポリシーによってソフトウェアのインストールを阻止されている場合、GO-Global AppControllerのシングルユーザバージョンのインストールに失敗することがあります。
{{% /alert %}}

## URLエイリアスの作成

管理者がログオンURLをパーソナライズしたい場合(例えば、 **http://hostname/goglobal** の代わりに **http://hostname/wilson** を使用)、URLのエイリアスを作成できます。詳細については、次の記事を参照してください。

IISの場合: **https://support.microsoft.com/en-us/help/308150/how-to-create-a-virtual-directory-onan-existing-web-site-to-a-folder**

Apacheの場合: **https://httpd.apache.org/docs/2.4/mod/mod_alias.html** 