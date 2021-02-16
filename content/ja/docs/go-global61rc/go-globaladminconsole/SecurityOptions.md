---
title: "セキュリティオプション"
linkTitle: ""
weight: 05
type: "docs"
---

システム管理者は、**[Host Options]** ダイアログの **[Security]** タブを使用して、クライアントとGO-Globalホスト間の通信の転送モードとクライアントとホスト間で転送されるデータの暗号化レベルを選択できます。また、ホストのポート設定を修正したり、統合Windows認証やパスワードのキャッシュを有効にすることも可能です。


## サーバポート設定の変更

ユーザがファイアウォールやルーターを介してGO-Globalにアクセスするためには、システム管理者が Application Publishing Service 用のホストポート設定を変更する必要があります。Application Publishing Serviceの実行には専用ポートが必要です。同じポートで別のサービスを実行するとコンフリクトが起きる場合があります。TCPとSSLのデフォルトのポート番号はどちらも491です。

### サーバポート設定の変更方法

1. **[All Hosts]** の一覧から、目的のホストを選択します。
2. [Tools | Host Options]の順にクリックします。
3. **[Security]** タブをクリックします。
4. **[Port]** ボックスに新しいポート番号を入力します。
5. **[OK]** をクリックします。

{{% alert title="参照" color="info" %}}
HTTPS接続を受け入れるように設定されたコンピュータにWebサーバがない場合にのみ、ポートを443に設定できます。**GO-Global Application Publishing Service** がポート443での接続を許可する必要がある場合(たとえば、プロキシサーバを介した接続を許可する場合)、Webサーバは別のコンピュータで実行する必要があります。
{{% /alert %}}

![4-5-1](/img/4-5-1.png) 

ホストポートの設定を変更したら、GO-Globalハイパーリンクからportパラメータを変更する必要があります。portパラメータに続けて新しいポート番号を使用します。 例えば、 **`http://hostname/goglobal/logon.html?port=1667`**

ショートカットからGO-Globalを実行しているユーザは、ショートカットに-hp引数(新しいポート番号が続く)を追加する必要があります。たとえば、`"C:\Program Files\GraphOn\AppController\AppController.exe" -h server1 -hp 1667`のようになります。

ポート番号は、GO-Globalにログオンしたときに **[Connection]** ダイアログで指定することも可能です。この場合は、 **[Host address]** ボックス内に、ホスト名またはIPアドレス、コロン、ポート番号の順に入力します(例:`server1:1667`)。IPv6アドレスを指定する場合は、ホストのIPアドレスをブラケットで囲ってください。たとえば[fe80::29c:29ff:fe95:519a]:491というように指定します。

どちらの方法でも新しいポート番号が指定されていない場合、ユーザはGO-Globalにサインインできません。

{{% alert title="参照" color="info" %}}
ホストポートを変更した後、デフォルトポート491以外のポートでクライアント印刷を機能させるには、 **Print Spooler** サービスと **GO-Global Application Publishing** サービスを再起動する必要があります。
{{% /alert %}}

## セッションの暗号化

セキュリティ上の理由で、システム管理者はクライアントとホスト間で転送されるすべてのデータをオプションで暗号化できます。暗号化できるデータには、ログオン時に提供されるクライアントのユーザ名とパスワードおよび、クライアントが送信またはホストが返した任意のアプリケーションデータが含まれます。TCP転送モードを選択した場合、GO-Globalは **[56-bit DES]** 暗号化を使用します。DESキーは、RSA公開鍵暗号化標準を使用して受け渡しされます。RSAキーは512ビットです。SSL転送モードを選択した場合、 **[128-bit RC4]、[168-bit 3DES]、[256-bit AES]** の3つの暗号化アルゴリズムから選択できます。

### サーバセッションの暗号化方法

1. [Tools | Host Options] の順にクリックします。
2. **[Security]** タブをクリックします。
3. **[Encryption]** の一覧から、暗号化レベルを選択します。
4. **[OK]** をクリックします。

![4-5-2](/img/4-5-2.png) 

暗号化を有効にすると、その後のGO-Globalセッションがすべて暗号化されます。暗号化を有効に設定した時点ですでに実行中のセッションは暗号化されないままです。ただし、GO-Globalホストに次にログオンした時には、そのセッションは暗号化されます。セッションを暗号化するには、ユーザは一度GO-Globalホストからログオフし、再びログオンする必要があります。

暗号化が有効になっている場合、そのGO-Globalホストへのすべての接続は、Admin Console、クライアント、 Dependent Hostsからの接続を含め、選択されたトランスポートおよび暗号化アルゴリズムを使用します。Relay Load Balancerを使用する場合、GO-Globalはリンクされた暗号化を提供します。具体的には、Relay Load BalancerのApplication Publishing Serviceは、クライアントから受信したデータを復号化し、データをDependent Hostに転送する前に再暗号化します。同様に、Dependent Hostから受信したデータを復号化し、クライアントに転送する前に再暗号化します。

## 接続がセキュリティで保護されたユーザへの通知

SSL転送が選択されている場合は、接続が安全なときにセキュリティ警告をユーザに通知するように選択できます。

![4-5-3](/img/4-5-3.png) 

### 接続がセキュリティで保護されていることをユーザに通知する方法

1. Admin Consoleで、[Tools | Host Options]の順にクリックします。
2. **[Security]** タブをクリックします。
3. **[Transport]** の一覧で、SSLを選択します。
4. **[SSL Certificate]** ボックスにサーバの証明書ファイルへのパスを入力します。
5. **[Notify users when connections are secure]** オプションをクリックします。
6. **[OK]** をクリックします。

## SSL転送の選択

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


