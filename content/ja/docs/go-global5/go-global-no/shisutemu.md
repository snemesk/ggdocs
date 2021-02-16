+++
title = "システム要件"
description = ""
weight= 5
+++

## GO-Global Server

GO-Globalホストの稼働には、以下の Windowsオペレーティングシステムのいずれかが必要です。

**Windows 10**

* Professional Edition(64-bit)
* Enterprise Edition(64-bit)

**Windows 8.1**

* Professional Edition(64-bit)
* Enterprise Edition(64-bit)

**Windows 8**

* Professional Edition(64-bit)
* Enterprise Edition(64-bit)

**Windows 7 with Service Pack 1**

* Professional Edition(64-bit)
* Ultimate Edition(64-bit)
* Enterprise Edition(64-bit)

**Windows Server 2012 R2**

* Standard Edition(64-bit)
* Datacenter Edition(64-bit)

**Windows Server 2012**

* Standard Edition(64-bit)

**Windows Server 2008 R2 with Service Pack 1**

* Standard Edition(64-bit)
* Enterprise Edition(64-bit)

※マルチユーザ環境では、Windows Serverの利用を強く推奨します。

* これらのプラットフォームは Security Rollup Package付きでも無しでもサポートされます。
* 右から左へ表記される言語はサポートされません。
* GO-Global管理者は、インストールを実行するためにホスト上の管理者権限が必要で、そのホストにはTCP/IPネットワークプロトコルが必要です。
* GO-Globalは、指定されたポート番号491を使用します。ファイアウォール等がある場合は、このポート番号491を通過させるように設定してください。
* GO-Globalは、VMWare ESXiとMicrosoft Hyper-Vをサポートします。
* GO-Globalのブラウザ展開用にホストを設定するためには、Web Server(例:Microsoft Internet Information Server(IIS)、Apache HTTP Serverなど)も必要です。
* ホストおよびクライアントは256色以下の色深度では利用できません。1600万色またはそれ以上を推奨します。
* GO-Globalホストが必要とするメモリとCPUは、公開されるアプリケーションとシステムにアクセスするユーザ数によって決まります。通常、GO-Globalホストは、500 MHz CPUにつき12の「ヘビー ユーザ」、または25の「ライトユーザ」をサポートできます。(「ヘビーユーザ」とは、1つ以上の大容量アプリケーションを実行して常時対話を行うユーザです。「ライトユーザ」は、1つのアプリケーションを実行して断続的に対話を行うユーザです)。
* GO-Globalはラウンドトリップタイム(RTT)が500ms以下の環境をサポートします。

## GO-Globalクライアント

ユーザは、GO-Globalクライアントをサポートする任意のコンピュータからGO-Globalホストへ接続できます。GO-Globalクライアントは、以下のプラットフォームをサポートします。

* Windows 10(32-bit/64-bit)、Windows 8.1 Standard と Pro(32-bit/64-bit)、Windows 8 Standard と Pro(32-bit/64-bit)、Windows 7 with Service Pack 1(32-bit/64-bit)、Windows XP with Service Pack 3 (32-bit)
* Mac OS X 10.6以降
* Red Hat Enterprise Linux 5と6(64-bit);CentOS 5と6(64-bit);SUSE Linux Enterprise Desktop 11(64-bit);  Ubuntu 12.04 LTS(64-bit)
* iOS 8.0以降でiPad、iPhone、iPod Touch
* Android 4.0以降でARMプロセッサのみをサポート

GO-Globalは以下のブラウザをサポートします。

* Internet Explorer 10と11(32-bit)
* WindowsのMozilla Firefox 38 ESR(32-bit)
* Mac OS XのApple Safari 5.0.6以降
* Windows XP、Windows 7、Windows 8、Windows 8.1、Windows 10で動作するChrome