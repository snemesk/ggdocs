---
title: "On-premisesライセンスについて"
linkTitle: ""
weight: 02
type: "docs"
---

On-premisesライセンスは、コンピュータのネットワークアダプタのMACアドレス(ホストID)に関連付けられたライセンスファイルを使用して実行されます。ライセンスファイルは、ライセンスファイルで指定されたホストIDと一致するMACアドレスを持つネットワークアダプタを持つコンピュータにインストールされている場合にのみ使用可能です。ライセンスファイルは、GO-Globalライセンスサーバの`\Program Files\GraphOn\GO-GlobalLicensing`ディレクトリに格納されます。<br>

GO-Globalライセンスサーバは、GO-Global License Manager serviceがインストールおよび実行されているコンピュータです。既定では、GO-Globalホストインストーラgg-host.exeがホストコンポーネントと共にGO-Global License Manager serviceをインストールします。この構成は、1台のコンピュータがアプリケーションサーバとライセンスサーバの両方として動作する小規模な導入に最適です。大規模な導入では、通常、ライセンスファイルはセントラルライセンスサーバにインストールされ、複数のGO-Globalアプリケーションサーバが指定されたセントラルライセンスサーバからライセンスをチェックアウトするように構成されています。また、高可用性が必要な場合は、冗長化したライセンスサーバを構成することができます。

# ライセンス作成 
お客様が新しいライセンスを注文すると、GraphOnはその注文を処理し、ライセンスデータベースに新しいライセンスを作成します。各ライセンスには、一意のライセンスマスターIDと一意のプロダクトコードが割り当てられます。ライセンスマスターIDは "LIC-xxxxx "の形をした人に分かりやすいライセンスの識別子で、プロダクトコードは長い英数字の識別子で、新しいライセンスのアクティベーション、メンテナンスオーダーの更新、ライセンス変更要求(LCR)などのより安全な機能に必要です。

# GO-Globalのアクティベート
On-premisesライセンスでGO-Globalをアクティベートするには、お客様はまずライセンスをアクティベートしてライセンスファイルを取得し、指定のライセンスサーバにライセンスファイルをインストールします。<br>

ライセンスデータベースにライセンスレコードを作成した後、GraphOnは、注文で指定された連絡先にライセンスのライセンスマスターIDとプロダクトコードを電子メールで送信します。管理者はカスタマーポータルからライセンスを有効化することができます。

{{% alert title="参照" color="info" %}}
将来的にライセンスサーバに障害が発生した場合、緊急ライセンスを取得するためにライセンスのプロダクトコードが必要になります。プロダクトコードはライセンスファイルに含まれています。そのため、ライセンスファイルのコピーを安全な場所に保存し、ライセンスサーバに障害が発生した場合にすぐに見つけられるようにしてください。
{{% /alert %}}

### ライセンスを有効にする方法
1. カスタマーポータルにサインインします。
2. [License Management | Activate License]をクリックします。
3. ライセンスのプロダクトコード、電子メールアドレス、ライセンスファイルをインストールするコンピュータのホスト名とホストIDを入力します。
4. **[Activate License]** をクリックします。

次に、カスタマポータルが入力した情報を検証し、ライセンス(.lic)ファイルを作成します。ポータルでは、ライセンスファイルの名前を **ライセンスID** (ライセンスファイルを一意に識別する英数字の識別子)に設定します。(例えば、 **8d73e4k.lic** の場合、8d73e4kはライセンスIDです)さらに、ライセンスIDは、ライセンスのライセンスマスターIDとプロダクトコードと共に、ライセンスファイルに保存されます。最後に、ポータルはライセンスファイルを管理者に電子メールで送信します。<br>

GO-Globalのアクティベーションを完了するには、管理者はライセンスファイルに含まれる指示に従って、アクティベートされたライセンスファイルを指定のライセンスサーバにインストールし、最後のステップに必ず従ってから **GO-Global License Manager Service** を再起動します。

# シートの追加
お客様がon-premisesのライセンスサーバにシートを追加する必要がある場合、お客様は新規のアドオンライセンスを注文します。アドオンライセンスを注文するたびに、GraphOnはライセンスデータベースに新しいライセンスを作成し、そのライセンスのマスターIDとプロダクトコードを注文に記載された連絡先にメールで送信します。お客様の管理者は、ライセンスサーバのオリジナルライセンスをアクティベートするのと同じ手順でアドオンライセンスをアクティベートします。管理者がライセンスサーバにアドオンライセンスをインストールする場合、既存のライセンスファイルはそのままにしておきます。

### アドオンライセンスをインストールする方法
1. ライセンスファイル内の指示に従って、ライセンスファイルをライセンスサーバにコピーします。既存のライセンスファイルはそのままにしておきます。
2. **GO-Global License Manager Service** を再起動します。サービスが再起動されるまでアドオンライセンスは認識されません。サービスを再起動しても、すでにログインしているユーザは中断されません。

ライセンスサーバに複数のライセンスファイルがインストールされている場合、各ライセンスファイルの名前はサーバ上で一意である必要があります。GraphOnでは、ライセンスIDに設定されたファイル名でライセンスファイルを配信します。<br>

GraphOnでは、ライセンスファイルをそのままインストールすることを推奨しています。しかし、管理者はシステム管理などの理由でライセンスファイルの名前を変更することができます。その場合、管理者はライセンスファイルの名前がライセンスサーバ上で一意であること、ファイルの拡張子が.licであることを確認しなければなりません。(たとえば、License1.lic、License2.lic、License3.licなど)ファイル拡張子が<.lic>でない場合、GO-Global License Manager serviceはライセンスファイルを認識しません。

# ライセンスのアップグレードとリホスト 
GO-Globalが新しいバージョンへアップグレードされた場合、およびライセンスがリホストされた場合(異なるMACアドレスの新しいコンピュータに移動された場合には、新しいライセンスファイルが必要になります。新しいライセンスファイルを取得するには、管理者がカスタマーポータルを介してライセンス変更要求(LCR)を送信します。変更要求は通常1～2日以内に処理されますが、処理には最大5営業日かかる場合があります。処理が完了すると、新しいライセンスIDを含む新しいライセンスファイルが管理者に電子メールで送信されます。(ライセンスマスターIDとプロダクトコードは変更されません)その後、管理者は新しいライセンスファイルをインストールし、ファイルに記載されている指示に従って古いライセンスファイルを削除します。古いライセンスファイルは、GraphOnによって無効化されている/取り消されているため、削除しなければなりません。

# ライセンスデータベース
お客様は、カスタマーポータルでライセンスの詳細とステータスを確認することができます。また、お客様は管理者コンソールを使用して、GO-Globalホストが使用しているライセンスのステータスと詳細を表示することができます。カスタマーポータルと管理者コンソールの両方で、ライセンスのステータス、バージョン、および保守の有効期限が表示されます。

# 複数のホスト環境
既定では、GO-Global License Manager serviceは GO-Globalホストと共にインストールされ、GO-Globalホストは同じコンピュータ上のGO-Global License Managerを使用するように構成されています。または、1つ以上のGO-Globalホストを構成して、別のコンピュータで実行されているセントラルライセンスマネージャを使用するように設定することもできます。

### 別のコンピュータで実行されているライセンスサーバを使用するようにGO-Globalホストを構成する方法

1. GO-Globalホストとライセンスサーバの間にファイアウォールがある場合、ライセンスサーバがポート27000を使用するように設定し、ライセンスマネージャ(BLM)がポート5678を使用するように設定し、ファイアウォールでこれらの2つのポートを開きます。<br>
a. ライセンスサーバは、デフォルトでポート27000-27009を使用します。次のように、ライセンスファイルのSERVER行の最後に27000を追加して、ポート27000を使用するようにライセンスサーバを構成します。<br>

```
SERVER LicenseServer1 00d0b74f4023 27000
```

   b. ライセンスマネージャ(BLM)は、デフォルトでエフェメラルポートを使用します。以下のように、ライセンスファイルのDAEMON行の最後に"port=5678"を追加して、ポート5678を使用するように構成します。<br>

```
DAEMON BLM port=5678
```

   c. 外部ファイアウォールとライセンスサーバ上のソフトウェアファイアウォールをTCPポート27000と5678を許可するように構成します。<br>

2. 各GO-Globalホストで、 **GO-Global License Manager service** を無効にします。<br>
a. [コントロールパネル | 管理ツール | サービス]をクリックします。<br>
b. サービスの一覧からGO-Global License Managerを右クリックし、 **[プロパティ]** をクリックします。<br>
c. [スタートアップの種類]で **[無効]** を選択します。<br>
d. **[停止]** ボタンをクリックします。<br>
e. **[OK]** をクリックします。<br>

3. 次のいずれかの方法で、各GO-Globalホストがセントラルライセンスサーバを使用するように設定します。<br>
a. LM_LICENSE_FILE環境変数をライセンスファイルのパスの代わりにport@host(例:27000@LicenseServer1)に設定します。<br>
-または-<br>
b. ライセンスファイルをセントラルライセンスサーバからGO-GlobalホストのLicensingディレクトリにコピーし、ライセンスファイルのSERVER行の直後にUSE_SERVER行を次のように追加します。<br>

```
SERVER LicenseServer1 00d0b74f4023 27000
USE_SERVER
```

# 高可用性
GO-Globalでは、冗長化したライセンスサーバを使用してOn-premisesライセンスの高可用性をサポートしています。冗長化したライセンスサーバを使用する場合は、サーバマシンは安定したシステムを選択してください。再起動やシャットダウンが頻繁に行われるシステムは選択しないでください。冗長化したライセンスサーバマシンには、サポートされているGO-Globalホストマシンを使用できます。これらのサーバは、信頼できるネットワーク上で優れた通信を行い、同じサブネット内に配置されている必要があります。通信速度が遅い、またはダイヤルアップリンクで冗長化したサーバを構成しないようにしてください。
GO-Globalは、On-premisesライセンスのライセンスサーバの冗長化について、2つの方法をサポートしています。

* ライセンスサーバの3台での冗長化
* ライセンスファイルリストの冗長性

{{% alert title="参照" color="info" %}}
セントラルライセンスサーバおよびライセンスサーバの3台での冗長化のセカンダリサーバでは、License Manager serviceを無効にする必要があります。
{{% /alert %}}

# ライセンスサーバの3台での冗長化
ライセンスサーバの3台での冗長化では、3台のライセンスサーバのうち2台が稼働していれば、サーバのクォーラムが確立され、システムは機能的に動作し、ライセンスの総量を満たすことができます。<br>

ライセンスサーバの3台での冗長化は、ハードウェアのフェイルオーバー保護のみを目的として設計されており、負荷分散は行いません。これは、3台のサーバ冗長化では、3台のサーバのうち 1台だけが **マスタ** であり、ライセンスを発行できるからです。<br>

以下は、オンライン登録後にGraphOnが提供する3台のサーバでの冗長化ライセンスファイルの例です。3台のGO-Globalホストのホスト名と、それぞれのホストID(多くの場合はイーサネットアドレス)を提供する必要があります。ライセンスサーバのポート(例:27000)も、まだリストにない場合は、各サーバ行に追加する必要があります。

```
SERVER wilson 000476BA8EE9 27000
SERVER piper 00115B73383E 27000
SERVER caspian 000476BA8F74 27000
DAEMON BLM port=5678
INCREMENT session blm 6.0 31-dec-2020 5 99E82D1B9A64 HOSTID=ANY
INCREMENT any_app blm 6.0 31-dec-2020 uncounted D1D222D031C4 \
HOSTID=ANY
```

3台のライセンスサーバのライセンスファイルをそれぞれのライセンスサーバにコピーする必要があります。
最後に、GO-Globalホストをライセンスサーバにポイントする必要があります。これは、各GO-GlobalホストにライセンスをコピーしてUSE_SERVERを使用するように編集する方法(以下の例を参照)、または各サーバを環境変数に追加する方法の2つの方法で行うことができます。

```
SERVER wilson 000476BA8EE9 27000
SERVER piper 00115B73383E 27000
SERVER caspian 000476BA8F74 27000
USE_SERVER
```

2番目のオプションでは、各サーバをカンマで区切って環境変数に追加します。たとえば、LM_LICENSE_FILE = 27000@wilson、27000@piper、27000@caspianとなります。最初にマスタサーバ(上記の例では wilson)で **GO-Global Application Publishing Service** と **GO-Global License Manager** を再起動し、次にセカンダリおよび3台目のサーバで再起動します。<br>

3台のサーバがすべて稼働した後、Flexeraの **lmtools** アプリケーションを実行して、冗長化したライセンスサーバのステータスをチェックすることをお勧めします。lmtools.exeを起動し、 **[Server Status]** タブを選択します。 **[Perform Status Enquiry]** をクリックして、サーバが"UP"であることを確認します。<br>

lmtoolsはLicensingディレクトリ(Global\GO-Global\Licensing)または[スタート]メニューから入手できます。lmtoolsアプリケーションは診断目的のために含まれています。機能に関する質問は、Flexeraに直接お問い合わせください。

# ライセンスファイルリストの冗長性
3台のサーバの冗長化の代わりに、ライセンスファイルリストの冗長化は、ライセンスサーバを監視できるシステム管理が限られている場合や、離れた場所にあるアプリケーション(シカゴと東京など)で負荷分散が必要な場合、または2台以上のライセンスサーバが必要な場合に利用できます。<br>

ライセンスファイルの冗長化では、ライセンスサーバのグループの各1つが総ライセンスのサブセットにサービスを提供します。そのため、この方法では、ライセンスサーバの3台での冗長化のような真の冗長性は得られません。<br>

環境変数 **LM_LICENSE_FILE** をライセンスファイルのリストに設定します。GO-Globalは成功するかリストの最後に到達するまで、リスト内の各サーバーから順番にライセンスチェックアウトを試みます。<br>

次の例は、ライセンスファイルリストの冗長性の仕組みを示しています。10ライセンスが必要な場合、2つのプロダクトコードをそれぞれ5つずつリクエストする必要があります。実際のライセンスは、プロダクトコードから生成されます。ライセンスサーバの3台での冗長化とは異なり、サーバマシンは物理的に離れています。両方のサーバのライセンスサーバが稼働している必要があります。<br>

サンプルライセンスファイルは次のようになります。


**License 1 for chicago:**
```
SERVER chicago 00508BFE7FFE 27000 DAEMON blm port=5678 INCREMENT session blm 6.0 permanent 5 DF9C8F5ADF34 HOSTID=ANY \
user_info="Joe User joeu@mycompany.com" ISSUER="GraphOn \
Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
1996-2020 GraphOn Corporation. All Rights Reserved" ck=142 \
SN=12865-AA
INCREMENT any_app blm 6.0 permanent 5 1DF84A360E8F HOSTID=ANY \
user_info=" Joe User joeu@mycompany.com " ISSUER="GraphOn \
Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
1996-2020 GraphOn Corporation. All Rights Reserved" ck=84 \
SN=12865-AA
```


**License 2 for tokyo:**
```
SERVER tokyo 00508BF77F7E 27000 DAEMON blm port=5678 INCREMENT session blm 6.0 permanent 5 16BE40E1D98D HOSTID=ANY \
user_info="Joe User joeu@mycompany.com" ISSUER="GraphOn \
Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
1996-2020 GraphOn Corporation. All Rights Reserved" ck=142 \
SN=12865-AA
INCREMENT any_app blm 6.0 permanent 5 6DB6F3E402DF HOSTID=ANY \
user_info=" Joe User joeu@mycompany.com " ISSUER="GraphOn \
Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
1996-2020 GraphOn Corporation. All Rights Reserved" ck=84 \
SN=12865-AA
```

chicagoサーバの管理者は、 **LM_LICENSE_FILE** を以下のように設定してください。

```
27000@chicago;27000@tokyo 
```

ここで、27000は **シカゴ** と **東京** のライセンスサーバが実行しているポートを表しています。これにより、ライセンスエンジンは最初にchicagoからのライセンスチェックアウトを試みるように指示します。失敗した場合は、東京からのチェックアウトを試みます。<br>
tokyoサーバの管理者は、 **LM_LICENSE_FILE** を以下のように設定してください。

```
27000@tokyo;27000@chicago
```

これにより、ライセンスエンジンは最初に **東京** からのライセンスチェックアウトを試みるように指示します。失敗した場合は、 **シカゴ** からのチェックアウトを試みます。

### LM_LICENSE_FILE変数を変更または設定する方法

1. 現在の環境変数を表示または変更するには、 **マイコンピュータ** を右クリックして **プロパティ** を選択します。
2. **[詳細設定]** タブを選択し、下の **[環境変数]** をクリックします。
3. **[システム変数]** で[LM_LICENSE_FILE]を選択し、 **[編集]** をクリックします。
4. 新しい冗長サーバを反映するように、 **変数値** を `C:\Program Files\GraphOn\GO-Global\Licensing` から変更します。ライセンスサーバ名をセミコロン(;)で区切ります。GO-Globalはリストの最初のサーバを試みます。何らかの理由で失敗した場合は、2番目のサーバが試行されます。
5. GO-Global Application Publishing Service再起動します。

ライセンスサーバの3台での冗長化の場合と同様に、すべてのサーバが起動して稼働したら **lmtools** を実行して、冗長化したライセンスサーバの状態を確認することをお勧めします。

# クラウド環境でのOn-Premisesライセンスの使用

GO-Globalライセンスファイルは、GO-Global License Manager Serviceが実行されているコンピュータのMACアドレスにバインドされます。Amazon Web Services(AWS)などのクラウド環境では、仮想コンピュータのMACアドレスが変更されることがあります。GO-Global License Manager Serviceを実行しているコンピュータのMAC アドレスが変更されると、サービスがライセンスをチェックアウトできなくなり、GO-Globalセッションの開始に失敗します。これを防ぐには、GO-Global License Manager Serviceを実行している仮想コンピューターに固定のMACアドレスを設定する必要があります。AWS環境では、固定の **Elastic IPアドレス(EIP)** と固定のMACアドレスを持つ **Elastic Network Interface(ENI)** を作成し、GO-Global License Manager Serviceを実行している仮想コンピュータ(EC2 インスタンス)にENIをアタッチすることで、これを行うことができます。

### AWSでEIPとENIを作成し、EC2インスタンスにアタッチする方法

1. Elastic IP(EIP)を作成する。
EC2コンソールのナビゲーションペインから[NETWORK & SECURITY | Elastic IPs | **Allocate new address** ]を選択します。
詳細については、AWS EIPのドキュメントを参照してください。<br>
[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)
2. Elastic Network Interface(ENI)を作成します。<br>
2.1 EC2コンソールのナビゲーションペインで、**Network Interface** を選択します。<br>
2.2 **Create Network Interface** をクリックします。<br>
2.3 **Description** を入力し、適切な可用性ゾーンからサブネットを選択します。<br>
2.4 プライベートIPは自動割り当てのままにしておく。<br>
2.5 ファイアウォールルールを含むセキュリティグループを選択します。<br>
3. Elastic IP(EIP)をElastic Network Interface(ENI)に割り当てます。<br>
3.1 EIPとENIを作成したら、[Network Interface | Actions | Manage IP Addresses]を選択します。<br>
3.2 手順1で作成したEIPをENIに割り当てます。<br>
詳細については、AWS ENIのドキュメントを参照してください。<br>
[https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)

{{% alert title="参照" color="info" %}}
ENIをインスタンスに割り当てるには、ENIのサブネットがGO-Global License Managerサービスを実行しているAWSインスタンスと同じ可用性ゾーンにある必要があります。Availability Zoneのサブネットを使用するか、Amazon Virtual Private Cloud (VPC)を介してAvailability Zoneにカスタムサブネットを作成することができます。
{{% /alert %}}

4. GO-Global License Managerサービスを実行しているインスタンスにENIをアタッチします。<br>
4.1 EC インスタンスから、GO-Global License Manager サービスを実行しているインスタンスを選択し、[Actions | Networking | Attach Network Interface]を選択します。<br>
4.2 手順 2 で作成した ENI を選択します。利用できない場合は、別のAWSインスタンスにアタッチされているか、インスタンスとは異なる可用性ゾーンに作成されている可能性があります。<br>

# 緊急時のOn-Premisesライセンス

お客様のライセンスサーバに問題がある場合(ライセンスサーバが動作しているハードウェアに障害が発生した場合など)、お客様はカスタマーポータルで緊急のOn-Premisesライセンスを要求できます。

### 緊急On-Premisesライセンスファイルを取得する方法

1. カスタマーポータルにサインインします。
2. **License Management** をクリックします。
3. **Emergency License Request** をクリックします。
4. フォームに必要事項を入力します。プロダクトコードは、ホストのライセンスファイルから取得できます。
5. **Request Emergency License** をクリックします。

これらの手順が完了すると、カスタマーポータルで入力された情報が検証され、フォームで指定された電子メールアドレスに一時的なOn-Premisesライセンスファイルが送信されます。

### 緊急On-Premisesライセンスをインストールする方法

1. 緊急On-Premisesライセンスファイルを受け取ったら、ホスト上の`\Program Files\GraphOn\GO-GlobalLicensing`ディレクトリにファイルをコピーしてください。
2. **GO-Global License Manager Service** を再起動します。
3. **Application Publishing Service** を再起動します。