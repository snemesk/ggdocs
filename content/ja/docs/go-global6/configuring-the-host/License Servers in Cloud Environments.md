+++
title = "クラウド環境のライセンスサーバ"
description = ""
weight = 10
+++

GO-Globalライセンスファイルは、GO-Global License Managerサービスが実行されているコンピュータのMACアドレスにバインドされています。Amazon Webサービス(AWS)などのクラウド環境では、仮想コンピュータのMACアドレスが変わる可能性があります。GO-Global License Managerサービスを実行しているコンピュータのMACアドレスが変更されると、サービスはライセンスをチェックアウトできなくなり、GO-Globalセッションは開始できなくなります。これを防ぐには、GO-Global License Managerサービスを実行している仮想コンピュータを、固定のMACアドレスを持つように構成する必要があります。AWS環境では、固定Elastic IPアドレス(EIP)と固定MACアドレスを使用してElastic Network Interface(ENI)を作成し、そのENIをGO-Global License Managerサービスを実行している仮想コンピュータ(EC2インスタンス)に接続することでこれを実行できます。

### AWSでEIPとENIを作成し、EC2インスタンスにアタッチする方法

1. **Elastic IP(EIP)を作成する**
        EC2コンソールのナビゲーションペインから、[ネットワークとセキュリティ | セキュリティ]の順にクリックします。[Elastic IP]をクリックし、[新しいアドレスを割り当てる]を選択します。 詳細については、AWS EIPのドキュメントを参照してください。: [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)​
2. **Elastic Network Interfaceを作成する(ENI)**
        2.1 EC2コンソールのナビゲーションペインから[Network Interfaces]を選択します。
        2.2 [ネットワークインターフェイスの作成]をクリックします。
        2.3 説明を入力し、適切なアベイラビリティーゾーンからサブネットを選択します。
        2.4 プライベートIPを自動割り当てのままにします。
        2.5 ファイアウォールルールを含むセキュリティグループを選択してください。
3. **Elastic IP(EIP)をElastic Network Interface(ENI)に割り当てます。**
        3.1 EIPとENIを作成したら、[Network Interface | アクション| IPアドレスの管理] の順に選択します。
        3.2 ステップ1で作成したEIPをENIに割り当てます。 詳細については、AWS ENIのドキュメントを参照してください。: [https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html)​
4. GO-Global License Managerサービスを実行しているインスタンスにENIを添付します。
        4.1 ECインスタンスから、GO-Global License Managerサービスを実行しているインスタンスを選択し、[アクション | ネットワーキング | ネットワークインターフェイス]の順に選択します。
        4.2 手順2で作成したENIを選択します。使用できない場合は、別のAWSインスタンスに添付されているか、インスタンスとは異なるアベイラビリティーゾーンに作成されている可能性があります。
{{% alert title="Note" color="info" %}}
ENIをインスタンスに割り当てるには、ENIのサブネットがGO-Global License Managerサービスを実行しているAWSインスタンスと同じアベイラビリティーゾーンにある必要があります。 Amazon Virtual Private Cloud（VPC）を介して、アベイラビリティーゾーンでサブネットを使用するか、アベイラビリティーゾーンでカスタムサブネットを作成できます。
{{% /alert %}}