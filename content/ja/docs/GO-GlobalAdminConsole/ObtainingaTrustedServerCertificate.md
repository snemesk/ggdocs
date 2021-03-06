---
title: "信頼されたサーバ証明書の取得"
linkTitle: ""
weight: 07
type: "docs"
---

強力な暗号化証明書ウィザードを使用する代わりに、お客様は他の認証局のサーバ証明書を使用することができます。クライアントのオペレーティングシステムによって信頼されているCAからサーバ証明書を取得する方法については、以下の情報と選択したCAのマニュアルを参照してください。CAは、証明書署名要求(CSR)を必要とします。

### CSRを生成する方法

1. [http://www.openssl.org/related/binaries.html](http://www.openssl.org/related/binaries.html)から **OpenSSL** をダウンロードします。
2. GO-Globalホストに **OpenSSL**をインストールします。
3. [スタート | ファイル名を指定して実行 ]の順にクリックします。
4. **cmd** と入力し、**Enter** キーを押します。
5. 以下のコマンドを入力して、サーバの秘密鍵を生成します。OPENSSL_DIRとは、OpenSSLがインストールされているディレクトリへのパスです(たとえば、`C:\openSSL`)。 ​

```
[OPENSSL_DIR]\bin\openssl genrsa –out server.key 2048
```
6. 次のコマンドを入力します。

```
[OPENSSL_DIR]\bin\openssl req –sha256 –new –key server.key –out server.csr
```

このコマンドを実行すると、以下のように、証明書に含める属性の入力を求められます。

```
Country Name:JP 
State:都道府県名 
Locality:市区町村名 
Organization:会社名 Organizational 
Unit:部署名 
Common Name:サーバ名 
E-mail Address:電子メールアドレス
```

ワイルドカードSSL証明書を使用しない場合Common Nameは、GO-Globalホストのホスト名(ホストに接続するときに指定する名前)と一致している必要があります。異なる名前を使用すると、接続時にクライアントから警告が発せられます。上のコマンドの出力は、 **server.csr**という名前のファイルに保存されます。このファイルをCAに送信します。GO-Globalでは、OpenSSLツールキットに基づいてSSLが実装されているため、使用するツールは、Apache mod_sslパッケージなどのOpenSSLベースの製品で使用されているツールと同じです。mod_sslパッケージを使用してサーバの証明書を取得する方法については、CA の指示に従ってください。

認証局(CA)から署名された証明書ファイルが届いた時、それを **server.crt** というファイル名で保存してください。このファイルと上記ステップ5で生成されたファイル **server.key** をGO-Globalホスト上のシステムアカウントおよびAdministratorグループのアカウントでのみアクセス可能なフォルダへコピーしてください。この時、通常のユーザアカウントでアクセス出来ないことを必ず確認してください。最後に、Admin Consoleで署名された証明書ファイルを選択してください。

### サーバ証明書の選択方法

1. Admin Consoleで、[Tools | Host Options]の順にクリックします。
2. **Security**タブをクリックします。
3. **Transport**リストの中から **SSL**を選択します。
4. **[SSL Certificate]** ボックスに、サーバの証明書(server.crtなど)ファイルへのパスを入力または参照します。
5. **OK**をクリックします。

GO-Globalは、証明書とその鍵がPEM形式であることを要求しています。第三者のCAに証明書を要求する場合、GraphOnはPEM形式で証明書を要求することをお勧めします。これが不可能で、証明書をDER形式でしか配信できない場合は、次のコマンドを使用してPEM形式に変換できます。

```
openssl x509 -inform der -in MYCERT>cer -out MYCERT.pem
```

MYCERT.pemファイルは、GO-Globalで使用するためにMYCERT.crtに名前を変更できます。

# GO-Globalでの中間SSL証明書の使用

GO-Globalで中間SSL証明書を使用するときは、既存の証明書と中間証明書を連結する必要があります。次の例では、Go Daddy中間証明書を使用しています。

1. GO-Globalホストで使用されている.crtファイルと.keyファイルを取り出します。
2. Go Daddy中間証明書(GODaddyCA.crtなど)をダウンロードしてください。これは元の証明書の購入に付属しているはずですが、次の[Go Daddyサイト](https://certs.godaddy.com/Repository.go)にもあります。
3. 次のように.crtと中間の.crtファイルを連結します：test_server.crt+GODaddyCA.crt server.crt
4. 新しく作成したserver.crtファイルと一致するように、手順1のキーファイルの名前をserver.keyに変更します。
5. これら2つのファイルをGO-Globalホストにコピーします(例:`C:\data`)。
6. Admin Consoleを起動します。[Tool | Host Options ]の順にクリックします。 **[Security]** タブをクリックします。
7. 高度な暗号化ライセンスをお持ちの場合は、トランスポートをSSLに変更し、暗号化レベルを256ビットAESに上げます。そうでない場合は、56ビットのままにしてください。
8. `C:\data`にあるSSL証明書server.crtを参照して、 **[OK]** をクリックします。.crtファイルと.keyファイルに同じプレフィックスが付いている場合は、この時点でエラーメッセージは表示されません
9. テスト目的で **接続が安全な場合にユーザに通知する** を有効にします。
10. **OK** をクリックします。
11. 別のシステムからGO-Globalセッションを開始してください。

{{% alert title="参照" color="info" %}}
GO-Globalのモバイルアプリで中間のSSL証明書を使用する場合は、ルート証明書が必要です。
{{% /alert %}}

# iOSおよびAndroidクライアントでの中間SSL証明書の使用

iOSまたはAndroid上のGO-Global AppControllerがサーバ証明書を信頼するためには、中間証明書とすべてのルート証明書を含むSSL証明書チェーン全体を信頼できる必要があります。

1. GO-Globalホストで使用されているサーバ証明書の証明書チェーン内の中間証明書およびルート証明書の証明書ファイルを取得します。
2. すべての証明書ファイルを次のように 1 つのファイルに連結します。test_server.crt+intermediate.crt+root.crt server.crt.

{{% alert title="参照" color="info" %}}
0個以上の中間ファイルと1個以上のルートファイルがあります。.crtファイルが自己署名されている場合は、.crtファイルの名前をserver.crtに変更する必要があります。
{{% /alert %}}

3. 新しく作成した **server.crt** ファイルと一致するように、手順1のキーファイルの名前を **server.key** に変更します。
4. これら2つのファイルをGO-Globalホストにコピーします(`C:\Data`)。
5. Admin Consoleを起動します。[Tool | Host Options]の順にクリックします。**[Security]** タブをクリックします。
6. 高度な暗号化ライセンスをお持ちの場合は、トランスポートを **SSL**に変更し、暗号化レベルを256ビットAESに上げます。そうでない場合は、56ビットのままにしてください。
7. `C:\data`にあるSSL証明書 **server.crt** を参照して、 **[OK]** をクリックします。.crtファイルと.keyファイルに同じプレフィックスが付いている場合は、この時点でエラーメッセージは表示されません。
8. テスト目的で **Notify users when connections are secure** を有効にします。
9. **OK**をクリックします。
10. iOSまたはAndroidデバイスからGO-Globalセッションを開始します。

# SSLの問題を解決する

SSLを使用するようにRelay Load Balancerを設定している場合、Dependent HostsのRelay Load Balancer欄に入力した名前は、Relay Load Balancerの証明書のCommon Nameと一致している必要があります。(Relay Load BalancerのRelay Load Balancerフィールドに入力した名前は、Relay Load Balancerの証明書のCommon Nameと一致する必要はありません) リレーロードバランサーと依存ホストが正しく設定されていることを確認するには、以下の手順に従います。

1. 管理者コンソールを実行し、ツリービューのRelay Load Balancerの下に従属ホストが表示されていることを確認します。表示されない場合は、従属ホストがRelay Load Balancerに接続されていません。
2. 2. ツリービューで従属ホストがリレーロードバランサーの下に表示されない場合は、従属ホストのアプリケーショ ンパブリッシングサービスのログを確認します。証明書が無効であるというメッセージがあれば、SSLの設定に問題があります。
3. 3. ディペンデントホストの Application Publishing Service ログに SSL 証明書のエラーメッセージがある場合は、ディペンデントホストの GO-Global の GO-G\Programs ディレクトリを参照し、AppController.exe をダブルクリックして GO-Global クライアントを実行します。
4. 接続ダイアログにリレーロードバランサーのアドレスを入力します。従属ホスト上のホストオプションダイアログのリレーロードバランサーフィールドに指定されているアドレスを正確に入力します。
5. 5. [Connect]をクリックします。

SSL警告メッセージが表示された場合、従属ホストはRelay Load Balancerに接続できません。SSL警告メッセージに記載されている問題を解決してください。そうすれば、従属ホストはRelay Load Balancerに接続できるはずです。
SSL警告ダイアログが表示されず、別のエラーメッセージが表示された場合(例：利用可能なホストがありません)は、SSL設定に問題がないことを示しています。このテストでは、クライアントがRelay Load Balancerへの接続を開く能力に関係のないエラーメッセージは無視しても構いません。


