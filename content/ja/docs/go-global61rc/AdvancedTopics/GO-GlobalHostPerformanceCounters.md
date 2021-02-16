---
title: "GO-Globalホストパフォーマンスカウンタ"
linkTitle: ""
weight: 05
type: "docs"
---

GO-GlobalホストパフォーマンスカウンタをWindowsパフォーマンスモニタに追加して、アクティブセッションの数とホストに接続されているクライアントの数を追跡できます。パフォーマンスカウンタを追加して、relay serverに接続されているホストの数を追跡し、ホスト上で許可されているセッションの最大数を特定することもできます。

GO-Globalホストパフォーマンスカウンタを使用すると、管理者はGO-Globalホストへのネットワークアクセスを持つ任意のマシンからホストのアクティビティを監視できます。リモートパフォーマンス監視を機能させるには、リモートレジストリサービス(Regsvc.exe)を有効にする必要があります。

### GO-Globalホストパフォーマンスカウンタをパフォーマンスモニタに追加する方法

1. [スタート | プログラム | 管理ツール | パフォーマンス]の順にクリックします。
2. **パフォーマンスモニタ** をクリックした後 **+** ボタンをクリックして、カウンタを追加します。
3. **[使用可能なカウンタ]** 一覧から、**GO-Globalホスト** を探してクリックします。
4. **[追加>>]** ボタンをクリックして、4つのカウンタ(Active Sessions、Client Connections、Maximum Sessions、Server Connections)を追加します。
5. [OK]をクリックします。

![7-5-1](/img/7-5-1.png) 

GO-Global ホストパフォーマンスカウンタには、次のものがあります。

* **Client Connections** － independent hostsまたはrelay server上のクライアント接続の総数。この値は、dependent hostsでは常に 0 です。
* **Server Connections**－ relay serverに接続しているdependent hostsの総数。この値は、independent hostsまたはdependent hostsでは常に 0 です。
* **Active Sessions** － independent hostsまたはdependent hostsの場合、これはホスト上で実行されているセッションの数です。relay serverの場合、これは接続されているすべてのdependent hostsでホストされているセッションの総数です。
* **Maximum Sessions** － Admin Consoieの **[Host Options]**ダイアログで設定した **セッションの最大数**を表示します。