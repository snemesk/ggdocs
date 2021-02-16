---
title: "GGEasyNotify"
linkTitle: ""
weight: 18
type: "docs"
---

## 変更履歴
[2020-05-01: 1.0.0]<br>
・初版<br>

### 機能
通常GO-Globalサーバのコンソールから起動されるアプリケーションで、そのサーバ上に存在する全てのGO-Globalセッションにメッセージを表示します。

### 設置方法

1. GO-GlobalサーバでGGEasyNotify.exeを実行してインストールを行います。

### 使用方法
1. 設定ファイルGGEasyNotify.iniのdefaultセクションで、以下のパラメタを設定して下さい。

| 設定項目 | 説明             |
|----------|------------------|
| logLevel | ログファイルの出力先フォルダーを指定 |
| logd     | ログの出力レベル（1～9）を指定、既定値は4 |
| apsPort  | GGの接続ポートの番号を指定、既定値は491               |
| appName  | メッセージを表示するGGのアプリケーション名、既定値はappNews                |


2. 起動オプションは以下の通りになります。

| 設定項目 | 説明             |
|----------|------------------|
| logLevel | 引数でメッセージを表示するGG上のアプリケーション名を指定 ※未指定時は設定ファイルにあるアプリケーション名を使用されます。 |
| logd     | 引数で起動するアプリケーションへのパラメタを指定 ※パラメタ全体を “” で囲って１つの文字列として指定して下さい。 |

3. 記載方法は以下の通りになります。

```
[default]
logLevel         = 4
logd             = Logs
apsPort          = 491
; appName        = notepad
;-
; [使い方の例]
; GGEasyNotify.exe -appArgs "-id msg3 午後5時 1時間"
```

![GGEasyNotify1](/expackimage/GGEasyNotify1.png)


{{% alert title="情報" color="green" %}}
- KGTN 2020050101
{{% /alert %}}