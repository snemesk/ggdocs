---
title: "クライアントプリンタ名のカスタマイズ"
linkTitle: ""
weight: 06
type: "docs"
---

GO-Globalは、クライアントマシンに設定されている各プリンタについて、ホストにプリンタをインストールします。これらのプリンタはプロキシプリンタと呼ばれ、GO-Global経由で印刷するときにユーザに表示されるプリンタです。複数のユーザがGO-Globalホストに接続するので、これらのプリンタは、ユーザが自分のプリンタだけを見ることができるようにフィルタリングする必要があります。これには、各プリンタに一意の識別子を割り当てる必要があります。

レジストリを通じて、管理者はこれらのプロキシプリンタ名の形式を指定し、ユーザ名、クライアントコンピュータのIPアドレス、クライアントマシン名などの情報を含めることができます。 **PrinterNameFormat** レジストリキーは、GO-Globalセッションの開始後に作成されます。

管理者は、次のトークンからプリンタ文字列名のサフィックスを作成できます。

| トークン | 説明                        | 例              |
|----------|-----------------------------|-----------------|
| %U       | ユーザ名                    | Wilson          |
| %I       | クライアントの IP アドレス  | 192.168.100.147 |
| %M       | クライアントの MAC アドレス | 001122334455    |
| %C       | クライアントのマシン名      | HRWorkstation   |
| %S       | サーバのマシン名            | Server1         |

### クライアントプリンタ名のカスタマイズ方法

1.レジストリエディタ(regedit.exe)を実行します。
2. レジストリエディタで、 **HKEY_LOCAL_MACHINE** キーを展開します。
3. **PrinterNameFormat**キーを見つけます。`[HKLM\Software\GraphOn\GO-Global\AppServer\PrinterNameFormat]`
4. **[PrinterNameFormat]**を右クリックして、 **[Modify]** を選択します。
5. **[値のデータ]** フィールドに、1つまたは複数のクライアントプリンタカスタマイズトークンを入力します。
6. レジストリエディタを終了します。

PrinterNameFormatキーは、デフォルトで(from ％C)に設定されています。上記の例を使用すると、プリンタ名は次のようになります。PrinterName(from HRWorkstation)

PrinterNameFormatストリング内の％以外の特殊文字はトークンではないため、文字通りに使用されます。

許可されていない12文字があります。! ,  = / : * ? " < > and |.これらの文字のいずれかが文字列で使用されている場合、それらはハイフンに置き換えられます。

# 印刷可能領域を調整する

場合によっては、GO-Global Universal Printer Driver(UPD)を使用して印刷するアプリケーションでは、ページの端の近くにあるドキュメントの一部が印刷されない場合、ドキュメントの一部が切り取られることがあります。この問題に対処する方法は2つあります。代替の.PPDファイルを使用してドキュメントの印刷可能領域を定義する方法と、印刷ジョブの拡大縮小を有効にする方法です。

1番目の方法は、代替.PPDファイルをインストールする必要があります。

### 代替の.PPDファイルをインストールする方法

1. 以下から **UniversalRemotePrinter.ppd** をダウンロードします。`ftp.graphon.com/private/gg6/6.0.0.xxxxx/UniversalRemotePrinter.ppd`
2. **GO-Global Application Publishing Service** を停止します。
3. **UniversalRemotePrinter.ppd** を次のフォルダにコピーします。`C:\Windows\System32\spool\drivers\x64\3`
4. **UniversalRemotePrinter.bpd** が存在する場合は削除します。
5. **GO-Global Application Publishing Service** を起動します。

UniversalRemotePrinter.ppdファイルは、Universalプリンタドライバのドライバ設定を定義します。このファイルのデフォルトバージョンでは、ドライバが印刷できる領域はページ全体です。これは、テキストまたはイメージをページの端に印刷できることを意味します。ほとんどのプリンタは物理的にこれに対応していません。代替.PPDファイルは、定義された用紙サイズに対して1/4インチ(6.35 mm)の余白を定義します。これにより、アプリケーションは印刷可能領域を予測し、それによってクリッピングすることなく印刷ジョブをレイアウトすることができます。

2番目の方法は、 **HostProperties.xml** ファイルで **EnablePrintOptions** プロパティをtrueに設定して、印刷ジョブの拡大縮小を有効にする必要があります。または、ホストがアップグレードされている場合は、 **HostPropertyDefinitions.xml** を編集します。

### 印刷ジョブの拡大縮小を有効にする方法

1. **Application Publishing Service** を停止します。
2. テキストエディタで`%PROGRAMDATA%\GraphOn\GO-Global\HostProperties.xml`を開きます。
3. **EnablePrintOptions** プロパティを見つけて、それに関連付けられた値を "true"に変更します。
4. PrintOptionsプロパティの値が "-printermargins -xoffset 50 -yoffset 30"であることを確認してください。
5. **HostProperties.xml** を保存します。
6. **Application Publishing Service** を起動します。

印刷ジョブのスケーリングを有効にすると、印刷可能領域内に収まらない印刷ジョブが縮小され、画像またはテキストが定義された用紙サイズに収まるようになります。スケーリング操作は、GO-Globalクライアントアプリケーションで実行されます。これは、Universalプリンタドライバを使用するように構成されたプリンタにのみ影響します。PDFのプレビュープリンタには影響しません。