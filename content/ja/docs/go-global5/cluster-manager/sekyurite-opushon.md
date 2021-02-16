
+++
title = "セキュリティオプション"
description = ""
weight = 4
+++

システム管理者は、[Host Options]ダイアログの[Security]タブを使用して、クライアントとGO-Globalホスト間の通信の転送モードとクライアントとホスト間で転送されるデータの暗号化レベルを選択できます。また、ホストのポート設定を修正したり、統合Windows認証やパスワードのキャッシュを有効にすることも可能です。

## SSL転送の選択

GO-Globalは、WindowsとGO-Globalホスト間の通信方法として、Transmission Control Protocol(TCP)と Secure Socket Layer(SSL)の両方をサポートしています。SSL転送を選択する場合は、SSL証明書ファイルを指定する必要があります。SSL証明書は、GO-Globalのクライアントとホスト間での安全な通信のために必要です。証明書は、VerisignやThawteなどの信頼されている認証局(CA)から入手できます。また、独自に認証局を作成して、その認証局からサーバ証明書に署名することもできます。ワイルドカードSSL証明書もサポートされます。

## 信頼されたサーバの証明書の取得

クライアントのオペレーティングシステムによって信頼されているCAからサーバ証明書を取得する方法については、以下の情報と選択したCAのマニュアルを参照してください。CAは、証明書署名要求(CSR) を必要とします。

### CSRを生成する方法

1. http: //www.openssl.org/related/binaries.htmlから **OpenSSL**をダウンロードします。(ライトバージョンでなくフルバージョンのOpenSSLをダウンロードして下さい。例 : Win32OpenSSL-v0.9.8a.exe.)
2. GO-Globalホストに **OpenSSL**をインストールします。
3. [スタート | ファイル名を指定して実行 ]の順にクリックします。
4. 「cmd」と入力し、Enterキーを押します。
5. 以下のコマンドを入力して、サーバの秘密鍵を生成します(「OPENSSL_DIR」は、OpenSSLのインストール先のディレクトリへのパス(C:\OpenSSLなど)です。 ​

```
[OPENSSL_DIR]\bin\openssl genrsa –out server.key 1024
```
6. 次のコマンドを入力します。

```
[OPENSSL_DIR]\bin\openssl req –new –key server.key –out server.csr
```

このコマンドを実行すると、以下のように、証明書に含める属性の入力を求められます。

```
Country Name: JP 
State:都道府県名 
Locality: 市区町村名 
Organization: 会社名 
Organizational Unit: 部署名 
Common Name: サーバ名 
E-mail Address: 電子メール アドレス
```

ワイルドカードSSL証明書を使用しない場合Common Nameは、GO-Globalホストのホスト名(ホストに接続するときに指定する名前)と一致している必要があります。異なる名前を使用すると、接続時にクライアントから警告が発せられます。上のコマンドの出力は、server.csrという名前のファイルに保存されます。このファイルをCAに送信します。GO-Globalでは、OpenSSLツールキットに基づいてSSLが実装されているため、使用するツールは、Apache mod_sslパッケージなどのOpenSSLベースの製品で使用されているツールと同じです。mod_sslパッケージを使用してサーバの証明書を取得する方法については、CA の指示に従ってください。

認証局(CA)から署名された証明書ファイルが届いた時、それをserver.csrというファイル名で保存してください。このファイルと上記ステップ5で生成されたファイルserver.keyをGO-Globalホスト上のシステムアカウントおよびAdministratorグループのアカウントでのみアクセス可能なフォルダへコピーしてください。この時、通常のユーザアカウントでアクセス出来ないことを必ず確認してください。最後に、クラスタマネージャで署名された証明書ファイルを選択してください。

### サーバ証明書の選択方法

1.Cluster Managerで、[Tools | Host Options]の順にクリックします。
2. **Security**タブをクリックします。
3. **Transport**リストの中から **SSL**を選択します。
4. [SSL Certificate]ボックスに、サーバの証明書(server.crtなど)ファイルへのパスを入力または参照します。
5. **OK**をクリックします。

## GO-Globalでの中間SSL証明書の使用

GO-Globalで中間SSL証明書を使用するときは、既存の証明書と中間証明書を連結する必要があります。次の例では、Go Daddy中間証明書を使用しています。

1. GO-Globalホストで使用されている.crtファイルと.keyファイルを取り出します。
2. Go Daddy中間証明書(GODaddyCA.crtなど)をダウンロードしてください。これは元の証明書の購入に付属しているはずですが、次のGo Daddyサイト([https://certs.godaddy.com/Repository.go](https://certs.godaddy.com/Repository.go))にもあります。
3. あなたの.crtファイルと中間の.crtファイルを連結します。(それらを次のように3番目のファイルにまとめます。 test_server.crt + GODaddyCA.crt server.crtをコピーします。)
4. 新しく作成したserver.crtファイルと一致するように、手順1のキーファイルの名前をserver.keyに変更します。
5. これら2つのファイルをGO-Globalホストにコピーします(例 : C:\data)。
6. Cluster Managerを起動します。ツールをクリックします。Host Options [**Security**]タブをクリックします。
7. 高度な暗号化ライセンスをお持ちの場合は、トランスポートをSSLに変更し、暗号化レベルを256ビットAESに上げます。そうでない場合は、56ビットのままにしてください。
8. C : \dataにあるSSL証明書server.crtを参照して、 [**OK**]をクリックします。.crtファイルと.keyファイルに同じプレフィックスが付いている場合は、この時点でエラーメッセージは表示されません
9. テスト目的で **接続が安全な場合にユーザに通知する**を有効にします。
10. **OK**をクリックします。
11. 別のシステムからGO-Globalセッションを開始してください。

## iOSおよびAndroidクライアントでの中間SSL証明書の使用

iOSクライアントまたはAndroidクライアント、あるいはその両方がサーバー証明書を信頼するためには、中間証明書とすべてのルート証明書を含む、SSL証明書チェーン全体を信頼できなければなりません。 iOSクライアントとAndroidクライアントにチェーン全体を提供するサーバ証明書を作成します。

1. 証明書チェーンに含まれているすべての.crtファイルと、GO-Globalホストで使用されている.keyファイルを入手します。
2. あなたの.crtとすべての中間およびルートの.crtファイルを連結しなさい。(これらを次のようにして最終ファイルにまとめます。copy test_server.crt + intermediate.crt + root1.crt + root2.crt server.crt)。0個以上の中間ファイルと1個以上のルートファイルがあります。 .crtファイルが自己署名されている場合は、.crtファイルの名前をserver.crtに変更するだけです。
3. 新しく作成したserver.crtファイルと一致するように、手順1のキーファイルの名前をserver.keyに変更します。
4. これら2つのファイルをGO-Globalホストにコピーします(例：C : \Data)。
5. クラスタマネージャを起動します。ツールをクリックします。Host Options [**Security**]タブをクリックします。
6. 高度な暗号化ライセンスをお持ちの場合は、トランスポートを **SSL**に変更し、暗号化レベルを256ビットAESに上げます。そうでない場合は、56ビットのままにしてください。
7. c：\dataにあるSSL証明書 **server.crt**を参照して、 [**OK**]をクリックします。 .crtファイルと.keyファイルに同じプレフィックスが付いている場合は、この時点でエラーメッセージは表示されません。
8. テスト目的で **接続が安全な場合にユーザに通知する**を有効にします。
9. **OK**をクリックします。
10. iOSまたはAndroidデバイスからGO-Globalセッションを開始します。

## 独自の認証局の作成

多数のGO-Globalホストが稼動するサイトでは、独自の認証局を作成し、この認証局から各サーバの証明書に署名して、その証明書を各クライアントにインストールすることができます。この方法なら、信頼されていない認証局に関する警告が表示されることはなく、サイトの各サーバにサードパーティ製の証明書を取得する必要もありません。

OpenSSLツールキットと相互運用性のある認証局の作成および管理を支援するサードパーティ製のアプリケーションとシステムは多数あります。これらのツールでは、GO-Globalで使用できる署名付きサーバ証明書を修正作業は不要で生成できます。

認証局は、各サーバキーに署名して、サーバキーが本物であり、改ざんされていないことをクライアントが確認できるようにする仮想組織です。

認証局を作成するには、CAキーと自己署名証明書を作成する必要があります。CA証明書とキーの作成後、[インターネットオプション]ダイアログを使用して、クライアントのデバイスにCA証明書をインポートします。最後に、サーバ鍵はCA証明書を使用して署名されます。これで、クライアントマシンは署名が本物であることを確認し、CAの信頼性についてユーザに警告することなくサーバへの接続を許可できます。

>このプロセスでは、次の9つのファイルが生成されます。 ca.key、ca.csr、ca.crt、ca.cfg、ca.serial、server.cfg、server.key、server.crt、server.csr

## 信頼されたサーバ証明書を従属ホストにインポートする

信頼されたサーバ証明書を従属ホストにインポートするには、Microsoft管理コンソールにポリシーを追加します。これは自己証明書を使用する場合にのみ必要です。

1. 従属ホストで、[スタート | ファイル名を指定して実行]の順にクリックします。[名前]ボックス内に **mmc**と入力します。Microsoft Management Console が開きます。
2. [コンソール |スナップインの追加と削除]の順にクリックして、 [**追加**]をクリックします。
3. [利用できるスタンドアロンスナップイン]の一覧から [証明書]を選択して、[追加]をクリックします。
4. [**証明書スナップイン**]ダイアログで[コンピュータアカウント]を選択し、 [**次へ**]をクリックします。
5. [**コンピュータの選択**]ダイアログで、[ローカルコンピュータ]を選択します。[完了]をクリックします。
6. [**スタンドアロンスナップインの追加**]ダイアログを閉じます。
7. [**スナップインの追加と削除**]ダイアログに戻り、 [**証明書(ローカルコンピュータ)**]をクリックします。
8. [**OK**]をクリックします。
9. [コンソールルート]から [**証明書(ローカルコンピュータ)**]を展開します。 [**信頼されたルート証明機関**] をクリックします。右の枠内にある [**証明書**]を右クリックします。
10. [すべてのタスク |インポート]の順に選択します。証明書 **ca.cert**を表示します。

![4-4-1](/image5/4-4-1.png)

サーバキーと証明書のファイル(server.key、server.crtなど)は同じベースファイル名を使用し、GO-Globalホストの同じディレクトリに配置する必要があります。従属ホストにはSSL証明書は必要ありませんが、指定された中継サーバには、CAによって署名され、従属ホストで認識される有効なSSL証明書が必要です。これらの条件が満たされているかどうかは、以下の方法で確認できます。

1. 従属ホストで、ネイティブのWindowsクライアントを実行します。
2. [**マイコンピュータ**]を右クリックします。
3. [**エクスプローラ**]をクリックします。
4. \GO-Global\Programsディレクトリを表示します。
5. **gg-client.exe**をダブルクリックします。
6. Cluster Managerで指定されたリレーサーバの名前を入力します。
7. 中継サーバのSSL証明書が、CAによって署名され、従属ホストで認識される有効な証明書の場合、 [**Security Alert**]ダイアログは表示されません。 [**Security Alert**]ダイアログが表示された場合、従属ホストは、中継サーバに接続できません。

## CAキーと証明書の作成

認証局(CA)を作成するには、まずRSA秘密鍵を生成する必要があります。この鍵が悪用されると、不明なホストを承認ホストとする偽の証明書が作成される恐れがあるため、この鍵は必ず秘密にしておく必要があります。認証局の整合性を維持することが非常に重要です。CAキーを作成するには、次のコマンドを使用します。

```
[OPENSSL_DIR]\bin\openssl genrsa -out ca.key 1024
```

このコマンドによって最初のCAキーが生成され、ca.keyというファイルに保存されます。キーの作成後、CA証明書の作成に使用する証明書署名要求(CSR)を生成します。CSRを生成するには、次のコマンドを使用します。

```
[OPENSSL_DIR]\bin\openssl req –new –key ca.key -out ca.csr
```

このコマンドは対話的に実行され、証明書に含まれる情報の入力を求められます。以下に入力例を示します。

```
Country Name (2 letter code) [AU]:US 
State or Province Name (full name) [Some-State]:Washington 
Locality Name (e.g., city) []:Bellevue
Organization Name (e.g., company) [Internet Widgits Pty Ltd]:GraphOn Corporation 
Organizational Unit Name (e.g., section) []:GraphOn Corporation 
CACommon Name (e.g., YOUR name) []:GraphOn Corporation  
Email Address []:hostmaster@graphon.com
Please enter the following extra attributes to be sent with your certificate request: 
A challenge password []:[enter] 
An optional company name []:[enter]
```

プロンプトには以下のように入力します。

```
Country Name:国の 2 文字の略語 
State or Province Name:州または都道府県の完全な名称 
Locality Name:市区町村名 
Organization Name:組織名または会社名 
Organizational Unit Name:組織名には CA 名を表す名前を入力します。
Common Name:CA の運用担当者または CA そのものを表す総称を入力します。
Email Address:CA の担当者に証明書に関する問い合わせを送信するときに使用する電子メール アドレスです。
```

最後のステップはCA証明書を確立することです。 これを行うには、CAに関する情報を含む設定ファイルを作成します。 ファイルは **ca.cfg**という名前で、以下を含む必要があります。

```
extensions = x509v3 
[ x509v3 ] 
subjectAltName = email:copy basicConstraints = CA:true,pathlen:0 
nsComment = "[your company] site CA" 
nsCertType = sslCA
```

このファイルの作成後、次のコマンドを使用してCA証明書に署名できます。

```
OPENSSL_DIR]\bin\openssl x509 –req –extfile ca.cfg –days 1825 –signkey ca.key –in ca.csr –out ca.crt
```

生成される証明書ファイル **ca.crt**が、各クライアントデバイスの証明書ストアにインポートする証明書になります。また、サーバキーに署名するための設定ファイルも作成する必要があります。このファイルには **server.cfg**という名前を付け、以下の情報を含めます。

```
extensions = x509v3 [ x509v3 ] subjectAltName = email:copy nsComment = "Certificate signed by your company CA" nsCertType = server
```

さらに、このCAによって署名された証明書のシリアル番号を保存するファイルも作成する必要があります。次のコマンドを使用します。

```
echo 01 > ca.serial
```

## サーバキーの作成と署名

新しいサーバキーを作成するには、次のコマンドを使用します。

```
[OPENSSL_DIR]\bin\openssl genrsa –out server.key 1024
```

これにより、新しいサーバキーが生成され、 **server.key**というファイルに保存されます。次に、サーバキーの証明書署名要求(CSR)を生成します。この作業は、基本的にCAキーのCSR生成に使用するプロセスと同じですが、入力内容は少し異なります。次のコマンドを使用します。

```
[OPENSSL_DIR]\bin\openssl req –new –key server.key –out server.csr
```

このコマンドは対話的に実行され、生成されるサーバ証明書に関する情報を求めるプロンプトが表示されます。以下に入力例を示します。

```
Country Name (2 letter code) [AU]:US 
State or Province Name (full name) [Some-State]:Washington 
Locality Name (eg, city) []:Bellevue 
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Company Name 
Organizational Unit Name (eg, section) []: Engineering 
Common Name []:server 
Email Address []:user@company.com 
Please enter the following 'extra' attributes to be sent with your certificate request: 
A challenge password []: [enter] 
An optional company name []: [enter]
```

プロンプトに対して、以下のように入力します。

```
Country Name:国の 2 文字の略語 
State or Province Name:州または都道府県の完全な名称 
Locality Name:組織の所在地の市区町名 
Organization Name:会社名または組織名 
Organizational Unit Name:部署名またはこのサーバを表す名前 
Common Name:このサーバの名前。証明書に使用されます。人の名前ではないので注意してください。
Email address:このサーバの担当者の電子メール アドレス
```

Common Nameは、GO-Globalホストのホスト名と一致している必要があります。異なる名前を使用すると、接続時にクライアントから警告が発せられます。最後に、CAの証明書を使用してサーバキーに署名します。これには、次のコマンドを使用します。

```
[OPENSSL_DIR]\bin\openssl x509 –req –extfile server.cfg –days 1825 –CA ca.crt –CAkey ca.key –CAserial ca.serial –in server.csr –out server.crt -days 1825
```

-days 1825パラメータを使用すると、サーバの証明書は1825 日(約5年)で失効します。証明書の有効期限を早くまたは遅くしたい場合は、要件に応じてこの数値を調整します。ca.crt、server.key、server.crtファイルを、システムアカウントからアクセスでき、かつホストにログオンするユーザのアカウントからはアクセスできないターゲットサーバ上のディレクトリにコピーします。最後に、Cluster Manager でサーバ証明書を選択します。

**サーバ証明書の選択方法**

1. Cluster Managerで、[Tools | Hosts Options]の順にクリックします。
2. [Security]タブをクリックします。
3. [Transport]の一覧で、SSL を選択します。
4. [SSL Certificate]ボックスにサーバの証明書ファイル(server.crtなど)へのパスを入力するか検索をします。
5. [OK]をクリックします。

これで、GO-Globalホストに新しいSSL証明書が作成され、独自のカスタム認証局によって署名されました。

## IIS Certificate Wizard を使用したCSRの生成

以下に、Microsoftの **IIS Certificate Wizard**を使用して証明書署名要求(CSR)を作成し、その後OpenSSLを使用して証明書を生成する方法を説明します。この例では、システム管理者はCAです。

この証明書をGO-Globalで有効にするには、プライベートキーが必要です。プライベートキーは、IIS Certificate Wizard を使用してCSRを生成するときに作成されますが、デフォルトではエンドユーザに提示されません。そのため、MMC(Microsoft Management Console)を使用してプライベートキーのバックアップを個別に取る必要があります。操作方法については、[http://www.thawte.com/ssl-digital-certificates/technical-support/backup.html](http://www.thawte.com/ssl-digital-certificates/technical-support/backup.html)のMicrosoft IIS 6.0のセクションを参照してください。

この例では、プライベートキーは.keyファイルではなく.pfxファイルです。これをGO-Globalで使用できるようにするには、PEMフォーマットに変換する必要があります。.pfxファイルをPEMフォーマットに変換するには、次のコマンドを使用します。

```
openssl pkcs12 -nocerts -in server.pfx -out server.pem –nodes
```

ファイルの拡張子を.pemから.keyに変更します。作成されたファイルは **server.key**と呼ばれ、GO-Global でSSLを稼動させるために必要です。このファイルのプレフィックスはCAが作成した証明書と同じでなければなりません(例: server.crt)。

GO-Globalでは、証明書はPEMフォーマットである必要があります。サードパーティのCAに証明書を要求する場合は、PEMフォーマットでの証明書を要求するよう推奨します。これが不可能で、証明書がDERフォーマットでしか提供されない場合は、次のコマンドを使用することによってPEMフォーマットに変換できます。

```
openssl x509 -inform der -in MYCERT.cer -out MYCERT.pem
```

生成された **MYCERT.pem**のファイル名を **MYCERT.crt**に変更すれば GO-Globalで使用できるようになります。

## 接続がセキュリティで保護されたユーザへの通知

SSL転送が選択されている場合は、接続が安全なときにセキュリティ警告をユーザに通知するように選択できます。

### 接続がセキュリティで保護されていることをユーザに通知する方法

1. Cluster Managerで、[Tools | Host Options]の順にクリックします。
2. [**Security**]タブをクリックします。
3. [**Transport**]の一覧で、SSLを選択します。
4. [**SSL Certificate**]ボックスにサーバの証明書ファイルへのパスを入力するかファイルを検索します。
5. [Notify users when connections are secure]オプションをクリックします。
6. [**OK**]をクリックします。

![4-4-2](/image5/4-4-2.png) 

SSL転送が選択されている場合、そのGO-Globalホストへのすべての接続は、Cluster Manager、クライアント、および依存ホストからの接続を含め、SSL転送と選択された暗号化アルゴリズムを使用します。

## セッションの暗号化

セキュリティ上の理由で、システム管理者はクライアントとホスト間で転送されるすべてのデータをオプションで暗号化できます。暗号化できるデータには、ログオン時に提供されるクライアントのユーザ名とパスワードおよび、クライアントが送信またはホストが返した任意のアプリケーションデータが含まれます。TCP転送モードを選択した場合、GO-Globalは[56-bit DES]暗号化を使用します。DESキーは、RSA公開鍵暗号化標準を使用して受け渡しされます。RSAキーは512 ビットです。SSL 転送モードを選択した場合、[128-bit RC4]、[168-bit 3DES]、[256-bit AES]の 3 つの暗号化アルゴリズムから選択できます。これらのアルゴリズムを使用するには特別なライセンスが必要です。このライセンスを取得するには、GO-Globalの営業担当者に連絡してください。

### サーバセッションの暗号化方法

1. [Tools | Host Options] の順にクリックします。
2. [**Security**]タブをクリックします。
3. [**Encryption**]の一覧から、暗号化レベルを選択します。
4. [**OK**]をクリックします。

暗号化を有効にすると、その後のGO-Globalセッションがすべて暗号化されます。暗号化を有効に設定した時点ですでに実行中のセッションは暗号化されないままです。ただし、GO-Globalホストに次にログオンした時には、そのセッションは暗号化されます。セッションを暗号化するには、ユーザは一度GO-Globalホストからログオフし、再びログオンする必要があります。

![4-4-3](/image5/4-4-3.png) 

>[128-bit RC4]、[168-bit 3DES]、[256-bit AES]の3つの暗号化アルゴリズムを使用するには、特別なライセンス(オプション)が必要です。このライセンスの取得方法については、KitASPの販売担当者にお問い合わせください。

## サーバポート設定の変更

ユーザがファイアウォールやルーターを介してGO-Globalにアクセスするためには、システム管理者が Application Publishing Service 用のホストポート設定を変更する必要があります。Application Publishing Serviceの実行には専用ポートが必要です。同じポートで別のサービスを実行するとコンフリクトが起きる場合があります。TCPとSSLのデフォルトのポート番号はどちらも 491です。

### サーバポート設定の変更方法

1. [**All Hosts**]の一覧から、目的のサーバを選択します。
2. [Tools | Host Options]の順にクリックします。
3. [**Security**]タブをクリックします。
4. [**Port**]ボックスに新しいポート番号を入力します。
5. [**OK**]をクリックします。

ホストポートの設定を変更したら、GO-Globalハイパーリンクからportパラメータを変更する必要があります。portパラメータに続けて新しいポート番号を使用します。 例えば、 http://hostname/goglobal/logon.html?port=1667

ショートカットからGO-Globalを実行しているユーザは、ショートカットに-hp引数(新しいポート番号が続く)を追加する必要があります。たとえば、"C:\Program Files\GraphOn\GOGlobal\Client\gg-client.exe" -h server1 -hp 1667のようになります。

ポート番号は、GO-Globalにログオンしたときに [**Connection**]ダイアログで指定することも可能です。この場合は、 [**Host address**]ボックス内に、ホスト名またはIPアドレス、コロン、ポート番号の順に入力します。(例 : server1:1667)。IPv6アドレスを指定する場合は、ホストのIPアドレスをブラケットで囲ってください。たとえば[fe80::29c:29ff:fe95:519a]:491というように指定します。

どちらの方法でも新しいポート番号が指定されていない場合、ユーザはGO-Globalにサインインできません。

>ホストポートを変更した後、デフォルトポート491以外のポートでクライアント印刷を機能させるには、 **Print Spooler**サービスと **GO-Global Application Publishing**サービスを再起動する必要があります。

## 標準認証

標準認証は、GO-Globalホストでデフォルトのユーザ認証方式です。標準認証では、ユーザは [**Sign In**]ダイアログでユーザ名とパスワードを入力して GO-Globalにログオンします。認証されると、ユーザはホストのINTERACTIVEグループ に追加され、コンソールからホストにログオンした場合と同じアクセス権を付与されます。

### 標準認証を有効にする方法

1. [Tools | Host Options]の順にクリックします。
2. [**Security**]タブをクリックします。
3. [Standard authentication(prompt for user name and password)]をクリックします。
4. [OK]をクリックします。

![4-4-4](/image5/4-4-4.png) 

## 統合 Windows 認証

統合Windows認証を使用すれば、ユーザは、ホストにログオンしてユーザ名とパスワードを再入力する必要なく GO-Globalホストに接続しセッションを開始できます。統合Windows認証のみが認証オプションとして有効となっている場合、ユーザ名とパスワードがネットワークを通じて転送されることはありません。GO-Globalは、GO-Globalクライアントと同じセキュリティコンテキストでユーザのセッションを実行します。ユーザはサーバのINTERACTIVEグループではなく、NETWORKグループに追加されます。そのため、いくつかのリソースに対してはアクセスが拒否される場合があります。

統合Windows認証を使用してGO-Globalホストに接続すると、ホストに対話的にログオンした場合とほとんど同じリソースにアクセスできます。しかし、クライアントおよびホストのオペレーティングシステムやネットワークがサポートしている認証プロトコルによっては、ユーザがネットワーク上の他のコンピュータ内にあるリソースにアクセスすると、ユーザ名とパスワードの再入力を求められる場合があります。ネットワークリソースがユーザ名とパスワードを要求できないものである場合は、アクセスは拒否される場合があります。

ネットワーク上の他のコンピュータにアクセスするためには、認証資格情報が他のコンピュータに引き渡されるようにActive Directoryを設定する必要があります。Microsoftは、3台目以降のコンピュータに認証資格情報を引き渡す権限を「委任」と呼んでいます。委任 は、Windows 2000以降の正しく設定された Active Directoryネットワークでサポートされています。Active Directoryのドメインコントローラを正しく設定する手順については、Microsoft Windowsオペレーティングシステムの関連文書を参照してください。Windows NTドメインは委任をサポートしていません。この環境で統合Windows認証を有効にしても、ネットワーク上の他のコンピュータ内にあるリソースにアクセスできない場合があります。このようなリソースへのアクセス制限の回避については、第 6 章の「委任サポートの設定要件」の項を参照してください。

>[**サーバサイドのパスワードキャッシュ**]オプションを有効にすると、統合Windows認証を使用した場合でもINTERACTIVEグループメンバとしてログオンできます。

統合Windows認証は、GO-Globalホストと同じドメインのメンバであるWindowsコンピュータからサインインするユーザと、GO-Globalホストの信頼されるドメインのメンバであるWindowsコンピュータからサインインするユーザが利用できます。

### 統合Windows認証を有効にする方法

1. [Tools | Host Options]の順にクリックします。
2. [**Security**]タブをクリックします。
3. [Integrated Windows authentication]を有効にします。
4. [**OK**]をクリックします。

GO-Globalでは、標準認証または統合Windows認証のいずれかが有効になっている必要があります。これらの認証方式のいずれも選択されていない状態で [**OK**]をクリックしダイアログを閉じると、次のエラーメッセージが表示されます。

![4-4-5](/image5/4-4-5.png) 

標準認証と統合Windows認証が両方とも有効になっている場合、GO-Globalホストはまず統合Windows認証によってユーザのログオンを試みます。これに失敗した場合は、[Sign In]ダイアログを表示してユーザ名とパスワードの入力を求め、標準認証でユーザのログオンを試みます。

## ホストでのパスワードキャッシュ

ユーザが標準の認証でGO-Globalホストにサインインすると ([Sign In]ダイアログ、パラメータ、またはコマンドライン引数で指定されたユーザー名とパスワードのどちらかを使用)、そのユーザはホストの INTERACTIVEグループに追加されます。一方、統合Windows認証を使用してGO-Globalホストにサインインしたユーザは、サーバのNETWORKグループに追加されます。デフォルトでは、INTERACTIVEグループのメンバは、NETWORKグループのメンバより多くのホストのリソースにアクセスできます。このため、統合Windows認証を使用してログオンしたユーザの場合、さまざまな条件により「アクセス拒否」エラーが発生することがあります。

>NETWORKグループのメンバがアクセスを制限されている分野には、DCOM(別名OLEおよびCOM/COM+)のセキュリティ制限、ファイルのセキュリティ制限、アプリケーション固有のセキュリティ確認があります。システム管理者は、統合Windows認証でログオンしたユーザがアクセスする必要のあるすべてのリソース(ファイル、サービスなど)が、そのアクセスを許可するよう正しく設定されているか確認してください。

システム管理者は、[ホストにパスワードをキャッシュする]オプションを有効にして、これらのエラーを回避することができます。そうすることで、ユーザーは接続するたびにユーザー名とパスワードを入力しなくても、完全なINTERACTIVEアクセス権でサインインできます。ユーザは、最初にホストに接続したとき、またはパスワードの変更後にパスワードの入力を求められます。パスワードは暗号化され、それぞれのプロファイルに保存されています。その後GO-Globalに接続すると、ユーザは自動的にサインインしてホストのINTERACTIVEグループに追加されます。コンソールでホストにサインインした場合と同じアクセス権が付与されます。

GO-Globalは、ホストに保存されている512ビットキーを使用してRSAアルゴリズムを使用してパスワードを暗号化します。暗号化キーは、%ALLUSERSPROFILE%\GraphOn\ks\ks.datファイルに格納されています。このファイルを読み取ることができるのは、ホストのAdministratorsグループおよびSYSTEMアカウントのメンバだけです。

>移動プロファイルが使用されるGO-Globalホストのクラスタでは、1つのホストからのキーファイルをクラスタ内のすべてのホストにコピーする必要があります。

## クライアントでのパスワードキャッシュ

クライアント側のパスワードキャッシュにより、GO-Globalホストのドメインのメンバではないユーザは、サーバに接続するたびにユーザ名とパスワードを入力する必要なしにGO-Globalにサインインすることができます。[Cache passwords on the client]が有効になっていると、[Sign In]ダイアログに[このコンピュータに保存する]チェックボックスが表示されます。ユーザがこれを有効にした場合、最初の手動認証の後、ユーザのログオン資格情報はホスト上で暗号化され、ネットワーク経由で送信され、ユーザープライベートディレクトリのクライアントコンピュータに保存されます。

ユーザがその後サーバに接続すると、キャッシュされたパスワードがホストに送信され、そこで復号化されます。[Sign In]ダイアログに、ユーザ名とパスワード、[このコンピュータに保存する]チェックボックスをオンにした状態で表示されます。ユーザが[このコンピュータに保存する]オプションを無効にすると、ユーザーの資格情報はクライアントコンピュータから削除されます。

GO-Globalは、ホストに格納されている512ビットキーを使用してRSAアルゴリズムを使用して、クライアントにパスワードをキャッシュします。暗号化キーは、%ALLUSERSPROFILE%\GraphOn\ks\ks.datファイルに格納されています。このファイルを読み取ることができるのは、サーバのAdministratorsグループおよびSYSTEMアカウントのメンバだけです。

GO-Globalホストのクラスタでは、1つのホストからのキーファイルをクラスタ内のすべてのホストにコピーする必要があります。

### クライアントサイドのパスワードキャッシュを有効にする方法

1. Cluster Manager で、[Tools | Server Options]の順にクリックします。
2. [**Security**]タブをクリックします。
3. [**Standard authentication (prompt user for user name and password)**]を有効にします。
4. [**Cache passwords on the client**]を有効にします。
5. [**OK**]をクリックします。

ほとんどのプラットフォームにおいて、パスワードのキャッシュは、ユーザのホームディレクトリにあるGO-Globalホストの名前の付いた .datファイルに保存されます。下記の表は、各GO-Globalクライアントにおけるパスワードのキャッシュの保存先の例を示します。この例では、「user1」はユーザ名、「server1」はGO-Globalホストの名称、「192.168.100.111」はGO-GlobalホストのIPアドレスです。

| Platform | Password Locations                                                             |
|----------|--------------------------------------------------------------------------------|
| Mac OS X | /Users/user1/.gg-client/192.168.100.111.dat                                    |
| Windows  | C:\Documents and Settings\user1\Application Data\GraphOn\GO-Global\server1.dat |
| Linux    | /home/user1/.gg-client/192.168.100.111.dat                                     |

クライアントサイドのパスワードキャッシュはすべてのGO-Globalクライアントでサポートされています。