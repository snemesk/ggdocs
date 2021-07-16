+++
title = "独自の認証局の作成"
description = ""
weight = 4
+++

# 独自の認証局の作成

多数のGO-Globalホストが稼動するサイトでは、独自の認証局を作成し、この認証局から各サーバの証明書に署名して、その証明書を各クライアントにインストールすることができます。この方法なら、信頼されていない認証局に関する警告が表示されることはなく、サイトの各サーバにサードパーティ製の証明書を取得する必要もありません。

OpenSSLツールキットと相互運用性のある認証局の作成および管理を支援するサードパーティ製のアプリケーションとシステムは多数あります。これらのツールでは、GO-Globalで使用できる署名付きサーバ証明書を修正作業は不要で生成できます。

認証局は、各サーバキーに署名して、サーバキーが本物であり、改ざんされていないことをクライアントが確認できるようにする仮想組織です。

認証局を作成するには、CAキーと自己署名証明書を作成する必要があります。CA証明書とキーの作成後、[インターネットオプション]ダイアログを使用して、クライアントのデバイスにCA証明書をインポートします。最後に、サーバ鍵はCA証明書を使用して署名されます。これで、クライアントマシンは署名が本物であることを確認し、CAの信頼性についてユーザに警告することなくサーバへの接続を許可できます。

>このプロセスでは、次の 9 つのファイルが生成されます。 ca.key、ca.csr、ca.crt、ca.cfg、ca.serial、server.cfg、server.key、server.crt、server.csr

## 信頼されたサーバ証明書を従属ホストにインポートする

信頼されたサーバ証明書をdependent hostにインポートするには、Microsoft管理コンソールにポリシーを追加します。これは自己証明書を使用する場合にのみ必要です。

1. dependent hostで、[スタート | ファイル名を指定して実行]の順にクリックします。[名前]ボックス内に **mmc**と入力します。Microsoft Management Console が開きます。
2. [コンソール |スナップインの追加と削除]の順にクリックして、 [**追加**]をクリックします。
3. [利用できるスタンドアロンスナップイン]の一覧から [証明書]を選択して、[追加]をクリックします。
4. [**証明書スナップイン**]ダイアログで[コンピュータアカウント]を選択し、 [**次へ**]をクリックします。
5. [**コンピュータの選択**]ダイアログで、[ローカルコンピュータ]を選択します。[完了]をクリックします。
6. [**スタンドアロンスナップインの追加**]ダイアログを閉じます。
7. [**スナップインの追加と削除**]ダイアログに戻り、 [**証明書(ローカルコンピュータ)**]をクリックします。
8. [**OK**]をクリックします。
9. [コンソールルート]から [**証明書(ローカルコンピュータ)**]を展開します。 [**信頼されたルート証明機関**] をクリックします。右の枠内にある [**証明書**]を右クリックします。
10. [すべてのタスク |インポート]の順に選択します。証明書 **ca.cert**を表示します。

![8-4-1](/images/8-4-1.png) 

サーバキーと証明書のファイル(server.key、server.crtなど)は同じベースファイル名を使用し、GO-Globalホストの同じディレクトリに配置する必要があります。dependent hostにはSSL証明書は必要ありませんが、指定されたrelay serverには、CAによって署名され、dependent hostで認識される有効なSSL証明書が必要です。これらの条件が満たされているかどうかは、以下の方法で確認できます。

1. dependent hostで、ネイティブのWindowsクライアントを実行します。
2. [**マイコンピュータ**]を右クリックします。
3. [**エクスプローラ**]をクリックします。
4. \GO-Global\Programsディレクトリを表示します。
5. **gg-client.exe**をダブルクリックします。
6. Admin Consoleで指定されたrelay serverの名前を入力します。
7. relay serverのSSL証明書が、CAによって署名され、dependent hostで認識される有効な証明書の場合、 [**Security Alert**]ダイアログは表示されません。 [**Security Alert**]ダイアログが表示された場合、dependent hostは、relay serverに接続できません。

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
extensions = x509v3 [ x509v3 ] subjectAltName = email:copy basicConstraints = CA:true,pathlen:0 nsComment = "[your company] site CA" nsCertType = sslCA
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
Country Name (2 letter code) [AU]:US State or Province Name (full name) [Some-State]:Washington Locality Name (eg, city) []:Bellevue Organization Name (eg, company) [Internet Widgits Pty Ltd]:Company Name Organizational Unit Name (eg, section) []: Engineering Common Name []:server Email Address []:user@company.com Please enter the following 'extra' attributes to be sent with your certificate request: A challenge password []: [enter] An optional company name []: [enter]
```

プロンプトに対して、以下のように入力します。

```
Country Name:国の 2 文字の略語 State or Province Name:州または都道府県の完全な名称 Locality Name:組織の所在地の市区町名 Organization Name:会社名または組織名 Organizational Unit Name:部署名またはこのサーバを表す名前 Common Name:このサーバの名前。証明書に使用されます。人の名前ではないので注意してください。Email address:このサーバの担当者の電子メール アドレス
```

Common Nameは、GO-Globalホストのホスト名と一致している必要があります。異なる名前を使用すると、接続時にクライアントから警告が発せられます。最後に、CAの証明書を使用してサーバキーに署名します。これには、次のコマンドを使用します。

```
[OPENSSL_DIR]\bin\openssl x509 –req –extfile server.cfg –days 1825 –CA ca.crt –CAkey ca.key –CAserial ca.serial –in server.csr –out server.crt -days 1825
```

-days 1825パラメータを使用すると、サーバの証明書は1825 日(約5年)で失効します。証明書の有効期限を早くまたは遅くしたい場合は、要件に応じてこの数値を調整します。ca.crt、server.key、server.crtファイルを、システムアカウントからアクセスでき、かつホストにログオンするユーザのアカウントからはアクセスできないターゲットサーバ上のディレクトリにコピーします。最後に、Admin Consoleでサーバ証明書を選択します。

** サーバ証明書の選択方法 **

1. Admin Consoleで、[Tools | Hosts Options]の順にクリックします。
2. [Security]タブをクリックします。
3. [Transport]の一覧で、SSL を選択します。
4. [SSL Certificate]ボックスにサーバの証明書ファイル(server.crtなど)へのパスを入力するか検索をします。
5. [OK]をクリックします。

これで、GO-Globalホストに新しいSSL証明書が作成され、独自のカスタム認証局によって署名されました。

## IIS Certificate Wizard を使用したCSRの生成

以下に、Microsoftの **IIS Certificate Wizard**を使用して証明書署名要求(CSR)を作成し、その後OpenSSLを使用して証明書を生成する方法を説明します。この例では、システム管理者はCAです。

この証明書をGO-Globalで有効にするには、プライベートキーが必要です。プライベートキーは、IIS Certificate Wizard を使用してCSRを生成するときに作成されますが、デフォルトではエンドユーザに提示されません。そのため、MMC(Microsoft Management Console)を使用してプライベートキーのバックアップを個別に取る必要があります。手順については、以下をMicrosoft IIS 6.0の見出しを見てください。[https://search.thawte.com/support/ssl-digital-certificates/index?page=content&id=AR214](https://search.thawte.com/support/ssl-digital-certificates/index?page=content&id=AR214)

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
