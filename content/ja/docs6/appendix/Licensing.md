+++
title = "Licensing"
description = ""
weight = 1
+++
# Licensing

GO-Globalのライセンスは、必要な同時ユーザ数に基づいており、永続的です。GO-Globalライセンスファイルはノードロックされています。つまり、それらはホストのMACアドレス(ホストID)で明確に識別され、そのホストにインストールされている場合にのみ使用可能です。GO-Globalホストは、ライセンスサーバやアプリケーションサーバとして設定できます。ライセンスも含むGO-Globalホストは、ライセンスサーバと呼ばれます。

一般的な小規模エンドユーザサイトは、アプリケーションサーバとライセンスサーバの両方として動作する1つのGO-Globalホストがあるという基本構成で動作します。一般的な大規模サイトでは、ライセンスがネットワーク上の中央のライセンスサーバにインストールされ、複数のGO-Globalアプリケーションサーバがネットワーク上の指定された中央のライセンスサーバからライセンスをチェックアウトするように設定されています。さらに、GO-Globalライセンスは冗長性と高可用性のためにいくつかの異なるライセンスサーバ設定をサポートします。これらはこのガイドの第2章で説明されています。

GraphOnは、ライセンスを購入するたびに、ライセンスマスタと呼ばれる固有のライセンスデータベースレコードを作成します。各ライセンスマスタには、ほとんどのセキュリティ関連トランザクションに使用される固有の製品コードと、単純な連続番号である固有のライセンスマスタIDが割り当てられています。ライセンスマスタIDは、ライセンスの簡単な参照としてライセンス管理に使用されます。製品コードはより長く、英数字であり、新しいライセンスの有効化、メンテナンス注文の更新、およびライセンス変更要求(LCR)などのより安全な機能に必要です。ライセンスマスタIDと製品コードはどちらもライセンスファイルで識別され、どちらもライセンスの恒久的な識別子です。

新しいバージョンのGO-Globalをサポートするため、または新しいMACアドレス(ホストID)を持つ新しいサーバにライセンスを移動する必要がある場合は、時間の経過とともに、更新されたライセンスファイルを発行する必要があります。各変更イベントで、GraphOnは更新されたライセンスファイルを提供し、古いライセンスファイルを無効にします。ライセンスマスターIDと製品コードは変わりません。それらは恒久的です。発行された新規または更新された各ライセンスファイルには、そのライセンスに対する一意のランダムなライセンスIDがあります。ライセンスIDもライセンスファイル内で識別されます。

## ライセンスファイルの入手

新しいライセンスの注文が行われると、GraphOnは注文を処理して新しいライセンスマスタを作成します。ライセンス情報は、注文要求で識別された連絡先に電子メールで送信されます。ユーザは、製品コード、電子メールアドレス、ホスト名、およびホストIDを入力して、カスタマーポータルからライセンスをアクティブ化する必要があります。新しいライセンス(.lic)ファイルは添付ファイルとして電子メールで送信されます。ライセンスIDは、ライセンスファイルの名前をフォーマットするために使用されます。 (例：8d73e4k.lic、ここで8d73e4kはライセンスIDです)。 指定されたライセンスサーバに添付されたライセンスをインストールします。

## ライセンス変更依頼

管理者がライセンスファイルを新しいライセンスサーバに移動した場合は、カスタマーポータルからライセンス変更要求(LCR)を行う必要があります。同様に、GO-Globalの新しいバージョンがリリースされたときには、ライセンス変更要求も要求されます。ライセンス変更要求は通常1〜2日以内に処理されますが、処理には最大5営業日かかります。更新されたライセンスは、新しいライセンスIDとともに電子メールの添付ファイルとして送信されます。(ライセンスマスターIDと製品コードは変更されません。)GraphOnによって無効にされたか取り消されたため、古いライセンスファイルを削除する必要があります。ライセンスファイルに記載されている手順に従って、更新されたライセンスをインストールする必要があります。

## ライセンスデータベース

製品コードまたはライセンスIDを使用して、ライセンシーはカスタマーポータルでライセンスの詳細とステータスを確認できます。ライセンスデータベースには、1つ以上のライセンスのステータス、バージョン、製品ファミリ、およびメンテナンスの有効期限が表示されます。

## 複数のライセンス

顧客が時間をかけて追加のライセンスを注文するのは一般的です。GraphOnは、ライセンスの注文ごとに、アドオンライセンスごとに一意の新しいライセンスマスターを作成します。管理者はすでにインストールされているライセンスを変更または変更する必要はありません。

### アドオンライセンスをインストールする方法

1. アドオンライセンス製品コードを受け取った後。カスタマーポータルからライセンスをアクティベートします。
2. ライセンスファイル内の指示に従って、ライセンスサーバにライセンスをインストールします。
3. GO-Global License Managerサービスを再起動します。それ以外の場合、アドオンライセンスは認識されません。サービスを再起動しても、アクティブにログインしているエンドユーザが中断されることはありません。

複数のライセンスがインストールされている場合、小数点の左側の命名は固有でなければなりません。 GraphOnは、常に一意のライセンスIDを使用してライセンスファイルを配信します。管理者は調整する必要はなく、受け取ったライセンスをインストールするだけで済みます。ただし、システム管理上の理由から管理者がライセンスファイルの名前を変更する場合は、ライセンスファイル名が一意でファイル拡張子が.licである限り、これは許可されます。拡張子が「.lic」ではない場合、GO-Global License Managerサービスはそのライセンスを認識しません（例：License1.lic、License2.lic、License3.lic）。 GraphOnは、「LicenseID.lic」命名規則に従って配布されたとおりにライセンスをインストールすることをお勧めします。
