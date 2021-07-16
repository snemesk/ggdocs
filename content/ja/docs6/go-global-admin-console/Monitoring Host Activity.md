+++
title = "GO-Globalライセンスの管理"
description = ""
weight = 4
+++


Admin Consoleには、ホストで利用可能なすべてのGO-Globalライセンスが一覧表示され、各ライセンスの製品コード、座席数、有効期限、ステータスなどが表示されます。有効期限が近づいているとき、ライセンスとサポート契約が期限切れになったときにGO-Globalは管理者に警告します。

### ライセンスの表示方法

1. Admin Consoleで、GO-Globalホストのリストから適切なホストを選択します。
2. [License]タブをクリックします。

各ライセンスについて、次の情報が表示されます。

| Column                 | Description                                                                                                                                                            |
|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Status                 | A license status can be listed as Active, Expired, Expires soon, Maint. Expired, Maint. Expires soon, Old version, Revoked, and Trial.                                 |
| License Master ID      | GraphOn’s record of the license (e.g., LIC-122689)                                                                                                                     |
| Product Code:          | 28-digit alphanumeric code that appears in the license file, uniquely identifies the license, and is used for secure transactions (e.g., 171205182219607CJs4ndny07Auu) |
| License ID             | Unique, encoded alphanumeric ID representing the license file (e.g., GHPc7u with license file GHPc7u.lic)                                                              |
| Seats                  | The number of concurrent users the license allows. If there are no restrictions, seats will be unlimited.                                                              |
| Expiration Date        | The date the license expires (a trial license, in most cases). When a license does not have an expiration date, the expiration date is listed as “permanent.”          |
| Maint. Expiration Date | The date the Support contract expires.                                                                                                                                 |
| Features               | Type of license (e.g., session or strong encryption)                                                                                                                   |
| Version                | The license’s GO-Global version number (e.g., 5.0 and 6.0)                                                                                                             |
| License Server         | The name of the license server that the host is using                                                                                                                  |

選択した列に応じて、ライセンスはアルファベット順に昇順でソートされます。列見出しをクリックして降順に並べ替えます。

[License]タブの下部に、選択したコンピュータに対して一覧表示されているすべての有効なライセンスの合計シート数が表示されます。リストに表示されているライセンスから現在チェックアウトされているシートの数である使用中のシート数も表示されます。選択したコンピュータおよび同じライセンスを使用している他のGO-Globalホストからチェックアウトされたライセンスも含まれます。

![4-4-1](/images/4-4-1.png)

Session Licenseは、ホスト上で1人以上のユーザがGO-Globalセッションを開始することを許可する、GO-Globalホストが利用できるライセンスです。

強力な暗号化ライセンスは別のライセンスファイルで提供され、次の追加の暗号化アルゴリズムを提供します : 128ビットRC4、168ビット3DES、256ビットAES。強力な暗号化ライセンスはサーバごとのライセンスであり、同時ユーザ数には基づいていません。強力な暗号化ライセンスを取得するには、KitASP販売窓口にお問い合わせください。

有効なGO-Globalサポート契約を結んでいるお客様は、ライセンスを取得したホストで発生した問題に対する技術サポートを受けることができます。サポート契約が期限切れになると([Maint. Expiration Date]列に表示)、重要なGO-Global Updatesのみをホストにインストールできます。重要ではないGO-Global Updatesはインストールできず、顧客はサポートを要求する資格がありません。有効期限警告は、有効期限の30日前に表示され始め、7日に1回表示されます。[Don't display this message again.]このメッセージを再度表示しないをオンにすると、有効期限の警告を無効にすることができます。

GO-Globalホストで利用可能ないずれかのライセンスのサポート契約の期限が切れた後にGO-Global Updateがリリースされた場合は、ホストにアップデートをインストールするためにサポート契約を更新する必要があります。すべてではなく一部のライセンスのサポート契約の期限が切れた後にアップデートがリリースされた場合は、期限切れのサポート契約のあるライセンスを削除するか、期限切れのサポート契約を更新することができます。

サポート契約を更新するには、KitASP販売窓口に連絡してください。

>GO-Globalホストが利用できるライセンスのサポート契約の有効期限がGO-Globalホストのビルド日より早い場合、Application Publishing Serviceは実行されません。

GO-Globalのトライアルライセンスでは、ライセンスマスターID、ライセンスID、およびメンテナンス有効期限が適用外として表示されます。[Expiration Date]列は、トライアルが機能しなくなる日を示します。試用ライセンスの有効期限が切れると、ユーザはそのコンピュータでGO-Globalを実行できなくなります。

ライセンスが失効として表示されている場合、そのライセンスは無効であり、システムから削除する必要があります。また、Application Publishing Serviceを再起動する必要があります。さらに支援が必要な場合は、KitASP技術支援センターにお問い合わせください。ライセンスがOld versionと表示されている場合、そのライセンスのバージョンは、ホストが要求しているライセンスバージョンよりも古いものです。それがホスト上の唯一のライセンスである場合は、アップグレードする必要があります。他のライセンスが機能するため削除する必要はありません。

>ライセンスの一覧を更新するには、右クリックして[更新]を選択するか、キーボードのF5キーを押します。

GO-Globalライセンスの詳細については、Appendixを参照してください。
