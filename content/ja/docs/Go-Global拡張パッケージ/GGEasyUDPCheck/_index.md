---
title: "GGEasyUDPCheck"
linkTitle: ""
weight: 31
type: "docs"
---

## 変更履歴
[2017-06-28: 1.0.0]<br>
・UDPのポート通信をチェックするツール<br>
・初版<br>

### 機能
![GGEasyUDPCheck1](/expackimage/GGEasyUDPCheck1.png)

Admin Consoleの左側に表示されるサーバの一覧(GO-Global Hosts)は，各GO-Globalサーバが送信するUDP:491(マルチキャスト通信)のメッセージをAdmin Consoleが受信した時に表示されます。
上記のように批評の場合はWindowsファイアウォール等でUDP:491 がブロックされていることが考えられますので、このツールを利用してUDP:491の受信状況(到達状況)を確認してください。


### 設置方法

調査したいサーバにGGEasyUDPCheck.exeを配置。

### 使用方法
1. 利用者がコマンドプロンプトでGGEasyUDPCheck.exeを配置したところで実行すれば動作します。<br>
例:C:¥Program Files\GGEasyUDPCheck.exe

画面およびログファイルには，次のような受信情報が記録されます。

```
[2017-06-13 12:45:08] Name = DESKTOP-P7UNP59, Addr = 192.168.1.160
[2017-06-13 12:45:09] Name = WS2012R2-Isumi1, Addr = 192.168.1.63
…
※ Name = <受信したGG サーバーの名前>
※ Addr = <受信したGG サーバーのIP アドレス>

```

計測時間を経過すると受信処理は終了し，次のようなサマリー情報(重複を排除しGO-Globalサーバの名前でソート)が表示されます。

```
[2017-06-13 12:45:23] --- Summary ---
[2017-06-13 12:45:23] [1] Name = DESKTOP-P7UNP59, Addr = 192.168.1.160 (10)
[2017-06-13 12:45:23] [2] Name = WS2012R2-Isumi1, Addr = 192.168.1.63 (10)
[2017-06-13 12:45:23] --- End ---
※ 括弧内の数値は受信した回数
```

2. GGEasyUDPCheck.iniのdefaultセクションで，以下のパラメタを設定して下さい。

| 設定項目 | 説明             |
|----------|------------------|
| logd     | ログの出力フォルダ |
| logLevel | ログ出力レベル(1～9)|
| rxpPort  | GO-Globalサーバのポート番号(既定値:491)|
| interval | 計測時間(既定値:30秒)|
| pvSleep  | 受信処理のスリープ時間(既定値:500ミリ秒)|

3. コマンドプロンプトで以下の引数を設定することで.iniファイルの設定を上書きすることが出来ます。

| 引数　　 | 説明             |
|----------|------------------|
|-logLevel | ログ出力レベル |
|-rxpPort  | GGサーバーのポート番号|
|-interval | 計測時間       |

例:C:¥Program Files\GGEasyUDPCheck.exe -interval 300


{{% alert title="情報" color="green" %}}
- KGTN 2017061301
{{% /alert %}}