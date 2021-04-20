---
title: "GO-Globalのシステム要件"
linkTitle: ""
weight: 04
type: "docs"
---

### GO-Globalホスト

GO-Globalホストは、以下のWindowsオペレーティングシステムをサポートします。

* Windows Server 2019 : Standard または Datacenter
* Windows Server 2016 : Standard または Datacenter
* Windows Server 2012 R2 : Standard または Datacenter
* Windows Server 2008 R2 SP1 : Standard または Enterprise
* Windows 10 : Professional または Enterprise
* Windows 8.1 : Professional または Enterprise
* Windows 7 SP1 : Professional または Ultimate または Enterprise

※6.0.4はWindows 10 (v2004, v20H2)
• Professional
• Enterprise

※マルチユーザ環境では、Windows Serverの利用を強く推奨します。

* GO-Globalホストは、最新のWindows Updateがインストールされているコンピューターでサポートされています(該当する場合)。
* Security Rollup Packageの有無に関係なくこれらの環境がサポートされます。
* GO-Globalの管理者は、インストールを実行するためにホストの管理者権限が必要で、そのホストには TCP/IP ネッ トワークプロトコルが必要です。
* GO-Globalは、指定されたポート番号491を使用します。ファイアウォール等がある場合は、このポート番号491を通過させるように設定してください。
* GO-Globalは、VMware ESXiとMicrosoft Hyper-Vをサポートします。
* GO-Global は、Device Guardが有効に設定されたWindows 10およびWindows Server 2016の環境で は利用出来ません。
* ホストおよびクライアントは256 色以下の色深度では利用できません。1600万色またはそれ以上を推奨します。
* GO-Globalホストが必要とするメモリとCPUは、公開されるアプリケーションとシステムにアクセスするユーザ数によって決まります。通常、GO-Globalホストは、500 MHz CPUにつき12の「ヘビー ユーザ」、または25の「ライトユー ザ」をサポートできます。(「ヘビーユーザ」とは、1つ以上の大容量アプリケーションを実行して常時対話を行うユーザです。「ライトユーザ」は、1つのアプリケーションを実行して断続的に対話を行うユーザです)。
* GO-Globalはラウンドトリップタイム(RTT)が500ms以下の環境をサポートします。

### GO-Globalクライアント

ユーザは、GO-Globalクライアントをサポートする任意のコンピュータからGO-Globalホストへ接続できます。GO-Globalのクライアントは、以下のプラットフォームをサポートします。

* Windows 10 : Pro と Enterprise(32-bit/64-bit)GO-Globalは、最新のWindows Updateがインストールされているコンピューターでサポートされています(該当する場合)。
* Windows 8.1 : Pro と Enterprise(32-bit/64-bit)
* Windows 7 SP1 : (32-bit/64-bit)
* Red Hat Enterprise Linux and 6 and 7 : (64-bit)
* CentOS 6 and 7 : (64-bit)
* SUSE Linux Enterprise Desktop 12 : (64-bit)
* Ubuntu 16.04 LTS : (64-bit)
* iOS 9.0 or later : iPad, iPhone, iPod Touch
* Android 5.0 or later : ARMプロセッサのみをサポート

GO-Globalは以下のブラウザをサポートします。

* Internet Explorer 11 : (32-bit)
* Mozilla Firefox 52 and later : standard and ESR (32-bit/64-bit)
* Apple Safari 9 or later : Mac OS X
* Google Chrome : Windows 7, Windows 8.1, Windows 10, Chromebook
* Microsoft Edge
