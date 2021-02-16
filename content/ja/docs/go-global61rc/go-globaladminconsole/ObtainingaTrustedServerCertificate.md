---
title: "信頼されたサーバ証明書の取得"
linkTitle: ""
weight: 07
type: "docs"
---

クライアントのオペレーティングシステムによって信頼されているCAからサーバ証明書を取得する方法については、以下の情報と選択したCAのマニュアルを参照してください。CAは、証明書署名要求(CSR)を必要とします。

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

## GO-Globalでの中間SSL証明書の使用

GO-Globalで中間SSL証明書を使用するときは、既存の証明書と中間証明書を連結する必要があります。次の例では、Go Daddy中間証明書を使用しています。

1. GO-Globalホストで使用されている.crtファイルと.keyファイルを取り出します。
2. Go Daddy中間証明書(GODaddyCA.crtなど)をダウンロードしてください。これは元の証明書の購入に付属しているはずですが、次の[Go Daddyサイト](https://certs.godaddy.com/Repository.go)にもあります。
3. あなたの.crtファイルと中間の.crtファイルを連結します(それらを次のように3番目のファイルにまとめます。test_server.crt + GODaddyCA.crt server.crtをコピーします。)
4. 新しく作成したserver.crtファイルと一致するように、手順1のキーファイルの名前をserver.keyに変更します。
5. これら2つのファイルをGO-Globalホストにコピーします(例:`C:\data`)。
6. Admin Consoleを起動します。[Tool | Host Options ]の順にクリックします。 **[Security]** タブをクリックします。
7. 高度な暗号化ライセンスをお持ちの場合は、トランスポートをSSLに変更し、暗号化レベルを256ビットAESに上げます。そうでない場合は、56ビットのままにしてください。
8. `C:\data`にあるSSL証明書server.crtを参照して、 **[OK]** をクリックします。.crtファイルと.keyファイルに同じプレフィックスが付いている場合は、この時点でエラーメッセージは表示されません
9. テスト目的で **接続が安全な場合にユーザに通知する** を有効にします。
10. **OK** をクリックします。
11. 別のシステムからGO-Globalセッションを開始してください。

## iOSおよびAndroidクライアントでの中間SSL証明書の使用

iOSまたはAndroid上のGO-Global AppControllerがサーバ証明書を信頼するためには、中間証明書とすべてのルート証明書を含むSSL証明書チェーン全体を信頼できる必要があります。

1. 証明書チェーンに含まれているすべての.crtファイルと、GO-Globalホストで使用されている.keyファイルを入手します。
2. あなたの.crtとすべての中間およびルートの.crtファイルを連結します(これらを次のようにして最終ファイルにまとめます。copy test_server.crt + intermediate.crt + root1.crt + root2.crt server.crt)。

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

## Resolving SLL Issues

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

When a relay server is configured to use SSL, the name entered into the **Relay Server** field on the Dependent Hosts must match the **Common Name** of the relay server's certificate. (The name entered into the **Relay Server** field on the relay server does not need to match the **Common Name** of the relay server's certificate.)

### To verify that the relay server and Dependent Host are properly configured

1. Run the Admin Console and verify that the Dependent Host appears below the relay server in the tree view. If it does not, the Dependent Host is not connected to the relay server.
2. If the Dependent Host does not appear below the relay server in the tree view, check the **Application Publishing Service** log on the Dependent Host. If it contains a message that the certificate is invalid, there is an SSL configuration problem.
3. If there is an SSL certificate error message in the Dependent Host's Application Publishing Service log, browse to the GO-Global\Programs directory on the Dependent Host and double-click **AppController.exe** to run the GO-Global client.
4. Type the address of the relay server into the **Connection** dialog. Type the address exactly as it is specified in the **Relay Server** field of the **Host Options** dialog on the Dependent Host.
5. Click **Connect.**

If an SSL warning message is displayed, the Dependent Host will not be able to connect to the relay server. Resolve the issue described in the SSL warning message. Then the Dependent Host should be able to connect to the relay server.
If no SSL warning dialog is displayed, but a different error message is displayed (e.g., No available hosts), the SSL configuration is fine. For the purposes of this test, you can disregard any error messages that do not pertain to the ability of the client to open a connection to the relay server.

## 標準認証

標準認証は、GO-Globalホストでデフォルトのユーザ認証方式です。標準認証では、ユーザは **[Sign In]** ダイアログでユーザ名とパスワードを入力して GO-Globalにログオンします。認証されると、ユーザはホストのINTERACTIVEグループ に追加され、コンソールからホストにログオンした場合と同じアクセス権を付与されます。

### 標準認証を有効にする方法

1. [Tools | Host Options]の順にクリックします。
2. **[Security]** タブをクリックします。
3. [Standard authentication(prompt for user name and password)] をクリックします。
4. **[OK]** をクリックします。

## 統合 Windows 認証

統合Windows認証を使用すれば、ユーザは、ホストにログオンしてユーザ名とパスワードを再入力する必要なく GO-Globalホストに接続しセッションを開始できます。統合Windows認証のみが認証オプションとして有効となっている場合、ユーザ名とパスワードがネットワークを通じて転送されることはありません。GO-Globalは、GO-Globalクライアントと同じセキュリティコンテキストでユーザのセッションを実行します。ユーザはサーバのINTERACTIVEグループではなく、NETWORKグループに追加されます。そのため、いくつかのリソースに対してはアクセスが拒否される場合があります。

統合Windows認証を使用してGO-Globalホストに接続すると、ホストに対話的にログオンした場合とほとんど同じリソースにアクセスできます。しかし、クライアントおよびホストのオペレーティングシステムやネットワークがサポートしている認証プロトコルによっては、ユーザがネットワーク上の他のコンピュータ内にあるリソースにアクセスすると、ユーザ名とパスワードの再入力を求められる場合があります。ネットワークリソースがユーザ名とパスワードを要求できないものである場合は、アクセスは拒否される場合があります。

ネットワーク上の他のコンピューターにアクセスするには、認証資格情報を他のコンピューターに渡すことができるようにActive Directoryを構成する必要があります。マイクロソフトでは、認証資格情報を3つ以上のコンピューターに "委任"として渡す権利を示しています。委任は、Active Directoryネットワークで適切な設定でサポートされています。Active Directoryドメインコントローラを正しく設定する手順については、Microsoft Windowsオペレーティングシステムのマニュアルを参照してください。詳細については、第7章の **[委任サポートの構成要件](/docs/go-globalrc61/advancedtopics/configurationrequirementsfordelegationsupport/)** を参照してください。

{{% alert title="参照" color="info" %}}
**[サーバサイドのパスワードキャッシュ]** オプションを有効にすると、統合Windows認証を使用した場合でもINTERACTIVEグループメンバとしてログオンできます。
{{% /alert %}}

統合Windows認証は、GO-Globalホストと同じドメインのメンバであるWindowsコンピュータからサインインするユーザと、GO-Globalホストの信頼されるドメインのメンバであるWindowsコンピュータからサインインするユーザが利用できます。

### 統合Windows認証を有効にする方法

1. [Tools | Host Options]の順にクリックします。
2. **[Security]** タブをクリックします。
3. [Integrated Windows authentication]を有効にします。
4. **[OK]** をクリックします。

GO-Globalでは、標準認証または統合Windows認証のいずれかが有効になっている必要があります。これらの認証方式のいずれも選択されていない状態で **[OK]** をクリックしダイアログを閉じると、次のエラーメッセージが表示されます。

![4-7-1](/img/4-7-1.png) 

標準認証と統合Windows認証が両方とも有効になっている場合、GO-Globalホストはまず統合Windows認証によってユーザのログオンを試みます。これに失敗した場合は、 **[Sign In]** ダイアログを表示してユーザ名とパスワードの入力を求め、標準認証でユーザのログオンを試みます。

## ホストでのパスワードキャッシュ

ユーザが標準の認証でGO-Globalホストにサインインすると( **[Sign In]** ダイアログ、パラメータ、またはコマンドライン引数で指定されたユーザー名とパスワードのどちらかを使用)、そのユーザはホストのINTERACTIVEグループに追加されます。一方、統合Windows認証を使用してGO-Globalホストにサインインしたユーザは、サーバのNETWORKグループに追加されます。デフォルトでは、INTERACTIVEグループのメンバは、NETWORKグループのメンバより多くのホストのリソースにアクセスできます。このため、統合Windows認証を使用してログオンしたユーザの場合、さまざまな条件により「アクセス拒否」エラーが発生することがあります。

{{% alert title="参照" color="info" %}}
NETWORKグループのメンバがアクセスを制限されている分野には、DCOM(別名OLEおよびCOM/COM+)のセキュリティ制限、ファイルのセキュリティ制限、アプリケーション固有のセキュリティ確認があります。システム管理者は、統合Windows認証でログオンしたユーザがアクセスする必要のあるすべてのリソース(ファイル、サービスなど)が、そのアクセスを許可するよう正しく設定されているか確認してください。
{{% /alert %}}

システム管理者は、 **[ホストにパスワードをキャッシュする]** オプションを有効にして、これらのエラーを回避することができます。そうすることで、ユーザは接続するたびにユーザ名とパスワードを入力しなくても、完全なINTERACTIVEアクセス権でサインインできます。ユーザは、最初にホストに接続したとき、またはパスワードの変更後にパスワードの入力を求められます。パスワードは暗号化され、それぞれのプロファイルに保存されています。その後GO-Globalに接続すると、ユーザは自動的にサインインしてホストのINTERACTIVEグループに追加されます。コンソールでホストにサインインした場合と同じアクセス権が付与されます。

GO-Globalは、ホストに保存されている512ビットキーを使用してRSAアルゴリズムを使用してパスワードを暗号化します。暗号化キーは、`%ALLUSERSPROFILE%\GraphOn\AppController\ks\ks.dat`ファイルに格納されています。このファイルを読み取ることができるのは、ホストのAdministratorsグループおよびSYSTEMアカウントのメンバだけです。

### ホストでパスワードキャッシュを有効にする方法

1. Admin Consoleで、[Tools]メニューから[Tools | Host Options]の順にクリックします。
2. [Security]タブをクリックします。
3. **[Integrated Windows authentication]** を有効にします。
4. **[Cache passwords on the host]** を有効にします。
5. **OK** をクリックします。

{{% alert title="参照" color="info" %}}
移動プロファイルが使用されるGO-Globalホストのクラスタでは、1つのホストからのキーファイルをクラスタ内のすべてのホストにコピーする必要があります。
{{% /alert %}}

![4-7-2](/img/4-7-2.png) 

## クライアントでのパスワードキャッシュ

クライアント側のパスワードキャッシュにより、GO-Globalホストのドメインのメンバではないユーザは、サーバに接続するたびにユーザ名とパスワードを入力する必要なしにGO-Globalにサインインすることができます。**[Cache passwords on the client]** が有効になっていると、**[Sign In]** ダイアログに **[Remember me on this computer]** チェックボックスが表示されます。ユーザがこれを有効にした場合、最初の手動認証の後、ユーザのログオン資格情報はホスト上で暗号化され、ネットワーク経由で送信され、ユーザのプライベートディレクトリのクライアントコンピュータに保存されます。

ユーザがその後サーバに接続すると、キャッシュされたパスワードがホストに送信され、そこで復号化されます。**[Sign In]** ダイアログに、ユーザ名とパスワード、**[Remember me on this computer]** チェックボックスをオンにした状態で表示されます。ユーザが **[Remember me on this computer]** オプションを無効にすると、ユーザの資格情報はクライアントコンピュータから削除されます。

GO-Globalは、ホストに格納されている512ビットキーを使用してRSAアルゴリズムを使用して、クライアントにパスワードをキャッシュします。暗号化キーは、`%ALLUSERSPROFILE%\GraphOn\AppController\ks\ks.dat`ファイルに格納されています。このファイルを読み取ることができるのは、サーバのAdministratorsグループおよびSYSTEMアカウントのメンバだけです。

{{% alert title="参照" color="info" %}}
GO-Globalホストのクラスタでは、1つのホストからのキーファイルをクラスタ内のすべてのホストにコピーする必要があります。
{{% /alert %}}

### クライアントサイドのパスワードキャッシュを有効にする方法

1. Admin Consoleで、[Tools | Server Options]の順にクリックします。
2. **[Security]** タブをクリックします。
3. [Standard authentication(prompt user for user name and password)]を有効にします。
4. [Cache passwords on the client]を有効にします。
5. **[OK]** をクリックします。

ほとんどのプラットフォームにおいて、パスワードのキャッシュは、ユーザのホームディレクトリにあるGO-Globalホストの名前の付いた .datファイルに保存されます。下記の表は、各GO-Globalクライアントにおけるパスワードのキャッシュの保存先の例を示します。例では、user1はユーザ名、hostname.domain.comはGO-Globalホストのアドレスです。

| Platform | Password Locations                             |
|----------|------------------------------------------------|
| Mac OS X | /Users/user1/.AppController/hostname.domain.com.dat   |
| Windows  | \Users\user1\AppData\Roaming\GraphOn\AppController|
| Linux    | /home/user1/.AppController/hostname.domain.com.dat    |

クライアントサイドのパスワードキャッシュはすべてのGO-Globalクライアントでサポートされています。
