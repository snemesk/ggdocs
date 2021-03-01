---
title: "SSL転送の選択"
linkTitle: ""
weight: 07
type: "docs"
---
GO-Globalは、WindowsとGO-Globalホスト間の通信方法として、Transmission Control Protocol(TCP)と Secure Socket Layer(SSL)の両方をサポートしています。SSL転送を選択する場合は、SSL証明書ファイルを指定する必要があります。GO-Globalのクライアントとホスト間の通信を保護するには、SSL証明書が必要です。強力な暗号化証明書ウィザードを使用して、GO-Globalホストの信頼できるSSL証明書を生成できます。これにより、管理者はサードパーティの認証局から証明書を購入しなくても、強力な暗号化とSSL/TLSセキュリティを有効にできます。詳細については、以下のセクション **[強力な暗号化証明書ウィザード](/docs/go-globalrc61/go-globaladminconsole/strongencryptioncertificatewizard/)** を参照してください。証明書は、VerisignやThawteなどの信頼されている認証局(CA)から入手できます。また、独自に認証局を作成して、その認証局からサーバ証明書に署名することもできます。ワイルドカードSSL証明書もサポートされます。詳細については、 **[信頼されたサーバー証明書の取得](/docs/go-globalrc61/go-globaladminconsole/obtainingatrustedservercertificate/)** を参照してください。

### SSL転送を選択する方法

1. Admin で、[Tools | Host Options]の順にクリックします。
2. **[Security]** タブをクリックします。
3. **[Transport]** の一覧で、**SSL** を選択します。
4. **[SSL Certificate]** ボックスにサーバの証明書ファイルへのパスを入力します。
5. **[OK]** をクリックします。

{{% alert title="参照" color="info" %}}
**[SSLトランスポート]** を選択した場合、ユーザがWebブラウザを使用してGO-Globalホストにアクセスする場合は、WebサーバでHTTPSを有効にする必要があります。
{{% /alert %}}

When a Relay Load Balancer is used:

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

- The certificate must be installed on the Relay Load Balancer but does not need to be installed on the Dependent Hosts.
- On the Dependent Hosts, the value in the **Relay Load Balancer** address field on the **Configuration** tab of the **Host Options** dialog must match the certificate's Common Name.

ファームマネージャを使用する場合：

- 証明書は、ファームマネージャと各ファームホストにインストールする必要があります。
- ファームホストでは、 **ファームマネージャのアドレスフィールド** の値が証明書のコモンネームと一致する必要があります。


