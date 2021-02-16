---
title: "システム要件"
linkTitle: ""
weight: 04
type: "docs"
---
{{% alert title="情報" color="green" %}}
代理店様向けの専用ページにGO-Global製品OSバージョン別マトリックスとGO-Global製品バージョン別機能マトリックスの資料も用意しています。<br>
合わせてご参照ください。
{{% /alert %}}

## GO-Globalホスト
- GO-Globalホストには、次の64ビットWindowsオペレーティングシステムのいずれかが必要です。<br>
　**Windows Server 2019** - Standard/Datacenter<br>
　**Windows Server 2016** - Standard/Datacenter<br>
　**Windows Server 2012 R2** - Standard/Datacenter<br>
　**Windows 10(バージョン1809以降)** - Professional/Enterprise(マルチユーザ環境では、Windows Serverの利用を強く推奨します。)
- GO-Globalホストは、最新のWindowsアップデートがインストールされているコンピュータでサポートされています。
- インストールを実行するには、管理者がホストの管理者権限を持っている必要があり、ホストがネットワークプロトコルとしてTCP/IPを使用している必要があります。
- GO-Globalは、TCPパケットのためにGraphOnの登録ポート491をリッスンします。外部ファイアウォールやホスト上のソフトウェアファイアウォールをTCPポート491を許可するように設定してください。
- GO-Globalは、VMware ESXiおよびHyper-Vをサポートしています。
- GO-Globalは、Device Guard を有効にしているWindows Server 2016システムをサポートしていません。
- GO-Globalは、ドメインコントローラへのホストのインストールをサポートしていません。
- クライアントとホストの色深度は256以上である必要があります。1,600万以上を推奨します。
- GO-GlobalホストのメモリとCPUの要件は、公開されているアプリケーションとシステムにアクセスするユーザ数によって決まります。一般的に、GO-Globalホストは12人のヘビーユーザ/500 MHz CPUと 25人のライトユーザ/500 MHz CPUをサポートすることができます(「ヘビー」とは、1 つ以上の大規模なアプリケーションを継続的に実行しているユーザと定義されます。「ライト」とは、断続的なユーザ操作を伴う1つのアプリケーションを実行しているユーザと定義されます)。
- GO-Globalは最大500ミリ秒の往復遅延をサポートしています。
- GO-Globalでは、最低28.8kbpsのモデム速度が必要です。
- GO-Globalでは、ユーザのネットワーク帯域幅ごとに16kbpsを必要とします。

## GO-Globalクライアント
GO-Globalは以下のクライアントプラットフォームをサポートしています。
- Windows 10(バージョン1809以降)Professional/Enterprise(32ビット/64ビット)<br>
  Windows 7 Professional/Ultimate/Enterprise(32ビット/64ビット)。GO-Globalは、最新のWindowsアップデートがインストールされたコンピュータでサポートされています。
- Mac OS X 10.13以降
- Red Hat Enterprise Linux 7と8(64ビット)、CentOS 7および8(64ビット)、SUSE Linux Enterprise Desktop 15(64ビット)、Ubuntu 18.04 LTSと19(64ビット)
- iOS 11.0以降
- ARMプロセッサのAndroid 8.0以降

GO-Globalは以下のブラウザをサポートしています。
- Internet Explorer 11(32ビット)
- Mozilla Firefox 60以降
- Mac OS XでのApple Safari 11以降
- Google Chrome 67以降のWindows 7/Windows 10/Chromebookとの連携
- Microsoft Edge Chromium