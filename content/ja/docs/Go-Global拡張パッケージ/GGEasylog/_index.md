---
title: "GGEasylog"
linkTitle: ""
weight: 04
type: "docs"
---
## 変更履歴
[2017-03-07: 1.0.0]<br>
・初版<br>

### 機能
![GGEasylog1](/expackimage/GGEasylog1.png)

アプリケーション(.EXE)のラッパー・プログラムで，これを介してアプリケーションが起動されると，アプリケーションの起動日時・終了日時・ユーザーID・クライアント端末の名前・クライアント端末のIPアドレスがログに記録するツール。

### 設置方法
アプリケーションの操作記録を行いたいサーバにGGEasylogフォルダを配置。

### 使用方法
1. GGEasylogフォルダ内にあるGGEasylog.iniにアプリケーションのパスを記載します。
例）Internet Explorerの場合
path = C:\Program Files (x86)\Internet Explorer\iexplore.exe
args = http://www.yahoo.co.jp
2. AdminConsoleの[Executable Path]ボックス内にGGEasyLog を指定し，コマンドラインのオプションで ?app <アプリケーションの名称> を指定します。アイコンを本来のアプリケーションのアイコンに変更します。
3. GGにログオン後，登録したアプリケーションを起動します。先ず、GGEasyLog が起動され、GGEasyLogはログに起動日時を記録し、次にアプリケーション(この例ではIE)を起動します。この時タスクバーには、ラッパーのGGEasyLogは現れません。
4. アプリケーションを閉じます。GGEasyLogはアプリケーションの終了を認識し，終了日時を記録します。
5. ログに記載されているStart行 が開始日時、Ended行が終了日時です。Appはアプリケーションの名称、PID はプロセスID、USER はユーザーID、CNAME はクライアント端末の名前、IPADDR はクライアント端末のIPアドレスです。


{{% alert title="参照" color="info" %}}
アプリケーションの操作記録を行いたいサーバが複数ある場合はそれぞれのサーバで作業を行ってください。
{{% /alert %}}


{{% alert title="情報" color="green" %}}
- KGTN 2017012301
- KGTN 2017021101
{{% /alert %}}