---
title: "Advanced Session Process Configuration"
linkTitle: ""
weight: 10
type: "docs"
---

このセクションでは、GO-Globalセッション内で実行されるプロセスに設定可能な高度な設定オプションについて説明します。これらの設定は、特定の実行可能な（.exe）アプリケーションに適用することも、特定の設定のないアプリケーションに適用されるデフォルト設定として適用することもできます。このセクションで説明されている変更を行う際には、注意が必要です。不適切な設定は、プロセスの起動に影響を与えたり、プロセスをGO-Globalと互換性のないものにしたり、サスペンド／リジューム操作時に致命的な結果をもたらす可能性があります。GO-Global セッション内で実行されるほとんどのアプリケーションでは、GO-Global ライブラリーがロードされ、目的の動作を得るためにリダイレクションを行います。これらのライブラリが初期化できるリダイレクションには2つのレベルがあります。第1のレベルでは、アプリケーションおよびシステムモジュールが特定の方法で動作するように構成されます。ほとんどのアプリケーションでは、1つまたは複数のレベル1の設定を有効にする必要があります。レベル1の設定には、「クライアントのタイムゾーン」、「クライアントの印刷」、「Windows APIの動作変更」などがあります。レベル2では、アプリケーションとクライアントの間に通信チャネルを作成し、セッション関連情報を二重に送信します。GO-Globalとの最高レベルのアプリケーションの互換性を確保するために、レベル2の設定はできるだけ少ないアプリケーションで有効にする必要があります。レベル2の設定には、「クライアントサウンド」、「クライアントのシリアルポートおよびパラレルポート」があります。セッションプロセスをリダイレクトするGO-Globalライブラリが採用するさまざまな構成設定は、レジストリ内の16進数のビット値によって制御されます。必要なビット値をOR演算してQWORDというレジストリ値を作成します。ここでは、プロセス・リダイレクタ・ビットの一覧と、その設定内容について説明します。

**0x0000000000000001** *- セッション内でのプロセスの実行を禁止する

**0x0000000000000002**- GO-Globalライブラリの読み込みを無効にします。すべてのリダイレクトが無効になります。リダイレクト操作の実行に要する時間は、一般的なWindowsアプリケーションの起動に要する時間のごく一部ですが、単純なコンソールアプリケーションの起動・実行に要する時間の大きな割合を占めることがあります。コンソールアプリケーションの中にはリダイレクトを必要としないものもあり、これらのタスクを実行すると、ログオンスクリプトの実行に必要な時間が大幅に延びてしまいます。このビットを含めることで、管理者はプロセスのリダイレクションをバイパスすることができます。GO-Globalライブラリのロードと初期化が行われないため、アプリケーションの実行が速くなります。このビットは、何らかの理由で、GO-Globalのリダイレクション設定の一部または全部と互換性のないアプリケーションにも使用できます。

**0x0000000000000004**- クライアントのタイムゾーンを無効にする。このビットは、何らかの理由でGO-Global Client Time Zoneのリダイレクト設定と互換性のないアプリケーションに使用できます。

**0x0000000000000008**- クライアント印刷を無効にする。このビットは、何らかの理由でGO-Globalのクライアント印刷のリダイレクト設定と互換性のないアプリケーションに使用できます。

**0x0000000000000040** *- WindowsのProcessIdToSessionId()APIを有効にして、GO-GlobalのセッションIDを返すようにします。

**0x0000000000000200**- クライアントサウンドを無効にする。このビットは、何らかの理由でGO-Global Client Soundのリダイレクト設定と互換性のないアプリケーションに使用することができます。

**0x0000000000000400**- クライアントのシリアルポートおよびパラレルポートを無効にします。このビットは、何らかの理由でGO-Globalクライアントのシリアルポートおよびパラレルポートのリダイレクト設定と互換性のないアプリケーションに使用できます。

**0x0000000000000800** *- WindowsのGetComputerName()APIを有効にして、クライアントのコンピュータ名を返すようにします。以下も参照してください。クライアントコンピュータの名前を取得する。中断されたセッションにクライアントが再接続したときに、クライアント環境変数（CLIENTCOMPUTERNAMEおよびCLIENTCOMPUTERIPADDRESS）の更新を無効にする。

**0x0000000000001000** *- 最適化のために、Explorer.exeの起動時に実行される通常の処理の一部を無効にします。このビットにより、Explorer.exeがHKEYLOCALMACHINE\Microsoft Windows\CurrentVersion\Run、RunOnce、およびRunOnceExレジストリキーの下にリストされたプロセスを起動するのを防ぐことができます。これにより、エクスプローラーをセッションで実行するために必要なシステムリソースが削減されます。

**0x0000000080000000** *- Delphiで作成されたアプリケーションで、Client Serial and Parallel Ports機能を使用できるようになりました。Delphiで作成されたアプリケーションは、WindowsのGetOverlappedResult()APIからのすべての戻り値を適切に処理しません。このビットは、WAITTIMEOUTを返さず、代わりにWAITOBJECT0を返します。

**0x0000000800000000** *- NtQuerySystemInformation関数がGO-GlobalのセッションIDを返すようにします。このオプションは、Windows セッション ID を使用する .NET アプリケーションで必要となる場合があります。

**0x0000040000000000**- プロセスが作成またはアクセスする特定の名前付きパイプをセッション・プライベートにします。

*サポート担当者から指示された場合にのみ使用すべき高度なオプションを示します。

{{% alert title="参照" color="info" %}}
リストアップされていないビットは、意図的に文書化されておらず、GraphOn社内でのみ使用されます。リストにないビットを含むレジストリ値を変更したり、追加したレジストリ値にリストにないビットを適用したりしないでください。このようなことをすると、GO-Globalホストの動作に支障をきたします。
{{% /alert %}}

これらのビットを組み合わせることで、特定のアプリケーションのリダイレクタ設定をカスタマイズしたり、レジストリエントリを持たないアプリケーションが使用するデフォルト設定を変更したりすることができます。いずれの場合も、サポートエンジニアからの指示がない限り、GO-Globalの初期インストール時に設定されたデフォルト値のビットを必ず含めるようにしてください。

### 特定のアプリケーションにカスタムリダイレクタ設定を追加す方法

1. [スタート｜名前を指定して実行]をクリックします。
2. Regeditと入力します。
3. `HKEYLOCALMACHINE\GraphOn\GO-Global\Loader\Processes.`のレジストリキーを表示します。
4. [Edit | New | QWORD value]をクリックします。
5. アプリケーションの実行ファイルの名前を入力する。(例：Beeps.exe.)アプリケーションの名前は、完全修飾パス、またはファイルの基本名と拡張子のいずれかで指定できます。
6. 新しいレジストリ値を選択します。
7. [Edit | Modify]をクリックします。
8. ベースが「16進法」になっていることを確認します。
9.  **Value data** エディットボックスに結合ビットを入力する。
10. **OK.** をクリックします。

### 名前付きパイプをセッション・プライベートにする方法

1. 名前付きパイプを使用する各プロセスに、**0x0000040000000000**ビットを含むカスタムリダイレクタ設定を追加します。
2. `KEYLOCALMACHINE\SOFTWARE\GraphOn\GOGlobal\System\Namedpipes` レジストリキーの下にDWORD形式のレジストリ値を作成し、セッションプライベート化する名前付きパイプを特定する。
3. レジストリ値の名前を、名前付きパイプの名前と比較される文字列と同じにして、レジストリ値を以下のいずれかに設定してください:
  - 1 - 名前付きパイプの名前がレジストリ値の名前と一致したときに、名前付きパイプをセッション・プライベートにする。
  - 2 - 名前付きパイプの名前の先頭がレジストリ値の名前と一致したら、名前付きパイプをセッション・プライベートにする
  - 4 - 名前付きパイプの名前の一部がレジストリ値の名前と一致した場合、名前付きパイプのセッションをプライベートにします。

比較タイプ1と2は、\\pipenameの形でなければならず、大文字と小文字を区別してテストされます。比較タイプ4は、大文字と小文字を区別します。

### デフォルトのリダイレクト設定を変更する方法

1. スタート｜実行｜をクリックします。
2. Regedit」と入力します。
3. レジストリキー「HKEYLOCALMACHINE\GraphOn\GO-Global\Loader\Processes.`」を参照します。
4. 既存の **DefaultLoaderOptions** レジストリ値を選択します。
5. [Edit | Modify]をクリックします。
6. ベースが「16進法」になっていることを確認します。
7. **Value data** エディットボックスに結合ビットを入力する。
8. **OK.** をクリックします。

構成例

GO-Globalホストには以下のアプリケーションがインストールされており、Cluster Managerに登録されています。

* DataDownloader.exe
* DataProcessor.exe
* DataViewer.exe

DataDownloader.exe**実行ファイルは、シリアルデバイスからデータを読み取り、ファイルに保存するWindowsアプリケーションです。Client Soundは、データのダウンロード中にエラー状態のアラートを通知するために必要となります。Client Files Access は、クライアントシステムにデータファイルを保存するために使用します。WindowsのGetComputerName()APIをリダイレクトして、データファイル内のデータのソースを示すために、クライアントのコンピュータ名を使用できるようにする必要があります。

データを格納するシリアルデバイスがクライアントコンピュータに接続されているため、クライアントのシリアルポートとパラレルポートを有効にする必要があります。DataDownloader.exeは、このシステムでクライアントのシリアルポートとパラレルポートにアクセスする唯一のプロセスであるため、DataDownloader.exe専用のレジストリエントリが追加されています。これにより、他のすべてのアプリケーションでクライアントのシリアルポートとパラレルポートを無効にすることで、このレベル2リダイレクタ設定に関連するリスクとオーバーヘッドを最小限に抑えることができます。

このアプリケーションの設定は、次のように計算されます。

0x0000000000000100 - これらのビットは、もともとDefaultLoaderOptionsで設定されていたものです。

0x0000000000000800 - WindowsのGetComputerName()APIのリダイレクトを有効にするためのビットです。0x0000000000000900 - DataDownloader.exeのレジストリ値に設定される16進数のQWORDです。DataProcessor.exeの実行ファイルは、クライアントからシリアルデータファイルを読み込み、処理されたデータファイルをクライアントに書き出すためにClient File Accessを必要とするコンソールアプリケーションです。また、シリアルデータファイルに記録された時間を適切に処理するために、Client Time Zoneを使用します。リダイレクタの設定に関連するリスクとオーバーヘッドを最小限に抑えるため、その他の設定はすべて無効にします。このアプリケーションの設定は以下のように計算されます。

0x0000000000000100 - これらのビットは、もともとDefaultLoaderOptionsで設定されていたものです。

0x0000000000000008 - これは、クライアント印刷を無効にするビットです。

0x0000000000000200 - これは、クライアントサウンドを無効にするビットです。

0x0000000000000400 - クライアントのシリアルポートとパラレルポートを無効にするビットです。

0x0000000000000708 – DataProcessor.exeのレジストリ値に設定される16進数のQWORDです。

DataViewer.exe**実行ファイルは、データを分析できるように表示するWindowsアプリケーションです。クライアントから処理済みのデータファイルを読み込むためには、Client File Accessが必要です。アプリケーションの音を聞くためには、Client Soundが必要です。分析したデータを紙に印刷するために、クライアント印刷が必要です。これらはほとんどのアプリケーションで必要とされる設定なので、以下の計算には **DefaultLoaderOptions** レジストリ値を使用しています。

デフォルトの設定では、クライアントのシリアルポートとパラレルポートを無効にするように変更します。これは、クライアントのシリアルポートとパラレルポートを使用する唯一のアプリケーションであるDataDownloader.exeが、特に有効にする独自のレジストリ設定を持っているためです。

0x0000000000000100 これらのビットは、もともとDefaultLoaderOptionsで設定されていたものです。

0x0000000000000400 - クライアントのシリアルポートとパラレルポートを無効にするビットです。

0x0000000000000500 – DefaultLoaderOptionsのレジストリ値に設定される16進数のQWORDを指定します。

この例では、アプリケーション固有の設定とデフォルトの設定を組み合わせることで、アプリケーションの非互換性のリスクを最小限に抑え、最適な環境での実行を可能にしています。

