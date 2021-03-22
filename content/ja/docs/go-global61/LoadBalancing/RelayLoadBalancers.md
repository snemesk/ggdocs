---
title: "Relay Load Balancers"
linkTitle: ""
weight: 03
type: "docs"
---
Relay Load Balancerは、1台以上のホストを集中的に制御するGO-Globalホストです。Relay Load Balancerは、クライアント接続を維持し、負荷分散されたアプリケーションホストのセット全体にGO-Globalセッションを分散します。Relay Load Balancerは、1つ以上のDependent Hostsを持つノードとして、 **All Hosts** のリストの最初のレベルにあるAdmin Consoleに表示されます。

### GO-GlobalホストがRelay Load Balancerとして動作するように構成方法

1.  **All Hosts** のリストから目的のホストを選択します。
2. [Tools | Host Options]をクリックします。
3.  **[Configuration]** タブをクリックします。
4.  **[Relay Load Balancer address]** ボックスにコンピュータの名前またはIPアドレスを入力します。
5.  **[OK]** をクリックします。
6. Relay Load Balancer上の **Application Publishing Service** が再起動されるまで変更は有効ではないことを示すメッセージボックスが表示されます。 **OK** をクリックします。
7. コントロールパネルの[サービス]オプションから、 **GO-Global Application Publishing Service** を停止して再起動します。

1つ以上のDependent HostでRelay Load Balancerとして動作するようにホストを設定すると、GO-Globalはクライアント接続の負荷分散を行い、セッションが正常に開始されるようにします。選択したホストでセッションの開始に失敗した場合、Relay Load Balancerは別のホストを選択し、セッションをサポートできるホストが見つかるまで再試行します。
各Dependent Hostの負荷は、Dependent Host上で実行されているセッションの数を、Dependent HostのAdmin Consoleで設定されているこの **ホストの最大セッション数** で割った値として計算されます。
Relay Load Balancer環境を設定する際には、Relay Load Balancerの **Log Folder** パスがDependent Hosts上に存在することを確認してください。そうしないと、ユーザがGO-Globalにサインインしようとしたときに **Sign In** ダイアログが表示されません。各Relay Load BalancerのC:ドライブ上にログディレクトリを作成するか(例：`C:DATA\DataAPS_LOGS`)、またはDependent Hosts上に既に存在する`C:DATA\Program Files\GraphOn\GO-Global\Log`を使用します。Admin Consoleの **Log Folder** のパスを変更するだけでなく、\Log\Codesと \Log\Templatesのディレクトリを新しい場所にコピーする必要があります。

{{% alert title="参照" color="info" %}}
Admin ConsoleでRelay Load Balancerが選択されている場合、すべてのDependent Hostsで実行されているプロセスの数がAdmin Consoleのステータスバーに表示されません。
{{% /alert %}}

Relay Load Balancerには最低512MBのRAMが必要です。ほとんどのデプロイメントでは、最高の結果を得るために、マルチプロセッササーバで1GBを推奨します。Relay Load Balancerに接続されているDependent Hostsの数によっては、より多くのRAMが必要になる場合があります。
Dependent Hostsに必要なメモリとCPUは、公開するアプリケーションとシステムにアクセスするユーザの数によって決まります。一般的に、Dependent Hostsは12人のライトユーザ(ユーザ辺り500MHzのCPU利用を想定)と25人のヘビーユーザ(ユーザ辺り500MHzのCPU利用を想定)をサポートすることができます。(ライトとは、断続的なユーザインタラクションを伴う1つのアプリケーションを実行しているユーザと定義し、ヘビーとは、連続的なユーザインタラクションを伴う1つ以上の大規模なアプリケーションを実行しているユーザと定義されます。)
