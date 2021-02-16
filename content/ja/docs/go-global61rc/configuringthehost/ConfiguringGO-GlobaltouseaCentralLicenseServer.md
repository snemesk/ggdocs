---
title: "外部ライセンス管理サーバを使用するためのGO-Globalの設定"
linkTitle: ""
weight: 09
type: "docs"
---

既定では、GO-Global License Manager serviceはGO-Globalホストと共にインストールされ、GO-GlobalホストはGO-Globalホストと同じコンピュータ上にあるGO-Global License Managerを使用するように構成されています。または、1つ以上のGO-Globalホストを構成して、別のコンピュータで実行されている中央のGO-Global License Managerを使用するように構成することもできます。次のいずれかの方法を使用して、別のコンピュータでGO-GlobalホストがGO-Global License Managerを使用するようにGO-Globalホストを構成できます。開始前に GO-GlobalホストでGO-Global License Managerを停止することをお勧めします。外部ライセンス管理サーバのすべてのセカンダリサーバでライセンスマネージャを無効にする必要があります。

### GO-Global License Managerを停止する方法

1. [コントロールパネル | 管理ツール | サービス]をクリックします。
![kit2-16-1](/img/kit2-16-1.png)
![kit2-16-2](/img/kit2-16-2.png)

2. サービスの一覧から **[GO-Global License Manager]** を選択します。
![kit2-16-3](/img/kit2-16-3.png)
![kit2-16-4](/img/kit2-16-4.png)

3. **[停止]** ボタンをクリックします。<br>
![kit2-16-5](/img/kit2-16-5.png)

GO-GlobalホストでGO-Global License Managerを停止した後、外部ライセンス管理サーバを構成する次のいずれかの方法で作業を進めることができます。以下の例では、License Server 1はライセンスサーバの名前です。
GO-Globalホスト上で、LM_LICENSE_FILE環境変数にライセンスファイルへのパスの代わりにport@host(例:`27000@LicenseServer1`)を指定します。FLEXnet PublisherのLMTOOLS.EXEは、License Server 1のライセンスファイルが正しく読み込まれていることを報告します。
または
GO-Globalホスト上で、GO-Globalホスト上のライセンスファイルのSERVER行の直後にUSE_SERVERを配置します。これは基本的には前述の方法と同じですが、環境変数の変更は必要ありません。

たとえば、GO-Globalホスト上の永続的ライセンスファイル(license.lic など)は次のように表示されます。

```
SERVER LicenseServer1 00d0b74f4023
USE_SERVER
```

## ファイアウォールでライセンスマネージャのポートを開く
GO-Globalホストとライセンスサーバの間にファイアウォールがある場合、FLEXnet(デフォルトでは27000)とライセンスマネージャ(BLM)のポートをファイアウォールで開く必要があります。ライセンスマネージャの場合は、ライセンスサーバ上のライセンスに特定のポートの

port=<port#> 

を追加します(特定のポート番号を手動で割り当てない限り、エフェメラルポート番号が使用されます)。

```
例:
SERVER caspian 000476BA8F74 27000
DAEMON BLM port=5678
INCREMENT session blm 6.0 31-dec-2020 5 99E82D1B9A64 HOSTID=ANY
INCREMENT any_app blm 6.0 31-dec-2020 uncounted D1D222D031C4
HOSTID=ANY
```

{{% alert title="情報" color="green" %}}
本項目の設定は以下の技術ノートを参照ください。

KGTN 2010102003<br>
KGTN 2013031903<br>
KGTN 2017081801<br>

{{% /alert %}}
