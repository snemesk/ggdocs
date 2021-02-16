---
title: "クラウド環境でのライセンスサーバ"
linkTitle: ""
weight: 11
type: "docs"
---

GO-Globalライセンスファイルは、GO-Global License Manager Serviceが実行されているコンピュータのMACアドレスにバインドされます。Amazon Web Services (AWS) などのクラウド環境では、仮想コンピュータのMACアドレスが変更されることがあります。GO-Global License Manager Serviceを実行しているコンピュータのMAC アドレスが変更されると、サービスがライセンスをチェックアウトできなくなり、GO-Globalセッションの開始に失敗します。これを防ぐには、GO-Global License Manager Serviceを実行している仮想コンピューターに固定のMACアドレスを設定する必要があります。AWS環境では、固定の **Elastic IPアドレス(EIP)** と固定のMACアドレスを持つ **Elastic Network Interface(ENI)** を作成し、GO-Global License Manager Serviceを実行している仮想コンピュータ(EC2 インスタンス)にENIをアタッチすることで、これを行うことができます。

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
