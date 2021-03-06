---
title: "GO-Globalライセンスの管理"
linkTitle: ""
weight: 04
type: "docs"
---

Admin Consoleには、ホストで利用可能なすべてのGO-Globalライセンスが一覧表示され、各ライセンスの製品コード、座席数、有効期限、ステータスなどが表示されます。有効期限が近づいているとき、ライセンスとサポート契約が期限切れになったときにGO-Globalは管理者に警告します。

### ライセンスの表示方法

1. Admin Consoleで、GO-Globalホストのリストから適切なホストを選択します。
2. **[License]** タブをクリックします。

各ライセンスについて、次の情報が表示されます。

| Column                 | Description                                                                                                                                                            |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Status                 | ライセンスステータスを一覧表示できます。Active,Expired,Expires soon,Maint.Expired,Maint.Expires soon,Grace,Old version,Revoked,Trial.                                  |
| License Master ID      | GraphOnの独自の人に優しいライセンスの識別子（例：LIC-122689）                                                                                                                   |
| Product Code:          | ライセンスファイルに表示され、ライセンスを一意に識別し、安全なトランザクションに使用される28桁の英数字コード(例：171205182219607CJs4ndny07Auu） |
| License ID             | On-premiseライセンスファイルの一意の英数字識別子(例：GHPc7uとライセンスファイルGHPc7u.lic)クラウドライセンスには使用されません。                   |
| Seats                  | ライセンスで許可されている同時ユーザーの最大数。                                                              |
| Expiration Date        | ライセンス(トライアルライセンスやサブスクリプションなど)の有効期限が切れる日付。ライセンスの有効期限が切れていない場合、有効期限はpermanentと表示されます。   |
| Support Expiration Date| サポート契約の有効期限。                                                                                                                              |
| Version                | ライセンスのGO-Globalバージョン番号(例：5.0および6.0)                                                                                                           |
| License Server         | ホストが使用しているライセンスサーバーの名前。ホストがクラウドライセンスを使用している場合、ライセンスサーバーはcloud.graphon.comです。                                |

選択した列に応じて、ライセンスは昇順で英数字順にソートされます。
列ヘッダーをクリックして、降順で並べ替えます。 GO-Globalは、[License]タブの下部に、選択したコンピュータにリストされているすべての有効なライセンスの **合計シート数** を表示します。また、リストされているライセンスから現在チェックアウトされているシートの数である **使用中のシート** の数が表示され、選択したコンピュータおよび同じライセンスを使用している他のGO-Globalホストからチェックアウトされたライセンスが含まれます。ホストがクラウドライセンスを使用するように構成されている場合、**予約済みシート** も表示されます。
予約されたシートは、ホストがクラウドライセンスサービスへの接続を失った場合にホストが利用できるシートの数です。

![4-4-1](/img/4-4-1.png) 

有効なGO-Globalサポート契約を結んでいるお客様は、ライセンスを取得したホストで発生した問題についてテクニカルサポートを受けることができます。サポート契約の期限が切れると( **[Support Expiration Date]** 列に示されているように)、重要なGO-Globalアップデートのみをホストにインストールできます。重要でないGO-Globalアップデートはインストールできません。お客様はサポートをリクエストする資格がありません。期限切れ警告の頻度は免許の種類によって異なります。**[Don't display this message again]** をオンにすると、有効期限の警告を無効にすることができます。

GO-Globalホストで利用可能ないずれかのライセンスのサポート契約の期限が切れた後にGO-Global Updateがリリースされた場合は、ホストにアップデートをインストールするためにサポート契約を更新する必要があります。すべてではなく一部のライセンスのサポート契約の期限が切れた後にアップデートがリリースされた場合は、期限切れのサポート契約のあるライセンスを削除するか、期限切れのサポート契約を更新することができます。

サポート契約を更新するには、GO-Global販売代理店にお問い合わせください。

{{% alert title="参照" color="info" %}}
GO-Globalホストが利用できるライセンスのサポート契約の有効期限がGO-Globalホストのビルド日より早い場合、**Application Publishing Service** は実行されません。
{{% /alert %}}

GO-Globalのオンプレミストライアルライセンスの場合、ライセンスマスターID、ライセンスID、およびサポートの有効期限は、該当しないものとして記載されます。有効期限の欄には、トライアルが機能しなくなる日付が記載されています。トライアルライセンスステータスの有効期限が切れると、ユーザはそのコンピュータでGO-Globalを実行できなくなります。GO-Globalの販売代理店に連絡して、GO-Globalの試用ライセンスを延長してください。

ライセンスがRevokedと表示されている場合は無効であり、システムから削除し、Application Publishing Serviceを再起動する必要があります。詳細については、GO-Global販売代理店までお問い合わせください。ライセンスが古いバージョンとして表示されている場合、ライセンスのバージョンはホストが必要とするライセンスのバージョンよりも古いものです。これがホスト上の唯一のライセンスである場合は、アップグレードする必要があります。他のライセンスが動作するために削除する必要はありません。

{{% alert title="参照" color="info" %}}
ライセンスの一覧を更新するには、右クリックして **[Refresh]** を選択するか、キーボードの **F5** キーを押します。
{{% /alert %}}

Cloudサブスクリプションのライセンスが有効期限内に更新されなかった場合、有効期限後に利用猶予期間が設けられています。猶予期間中はライセンスの運用が継続され、お客様がライセンスを更新するための時間が確保されます。猶予期間の終了時に、ライセンスが更新されていない場合は、ステータスがGraceからExpiredに変更され、ライセンスは動作を停止します。