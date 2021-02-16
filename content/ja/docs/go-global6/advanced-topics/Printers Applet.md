+++
title = "プリンタアプレット"
description = ""
weight = 7
+++

GO-Globalのプリンタアプレットを使うと、プリンタの追加と削除、プリンタのプロパティの編集、デフォルトプリンタの設定、プリンタドライバの選択、テストページの印刷ができます。プリンタアプレットはプログラムウィンドウからアクセスできます。構成されているすべてのクライアントプリンタと、ユーザがアクセスできるすべてのホストプリンタが一覧表示されます。プリンタのリストは、-acパラメータとprinterconfigパラメータだけでなく、Admin Consoleのプリンタドライバ設定によっても異なります。

プリンタアプレットのアイコンについては後述します。

![7-7-1](/images/7-7-1.png) 

ユーザが次回GO-Globalにサインインしたときに、プリンタアプレットで行った設定は保存されます。これらの設定はコマンドラインオプションよりも優先されます。プリンタアプレットで行ったプリンタの変更はすぐに有効になります。ユーザはセッションを再開する必要はありません。

## プリンタの追加と削除

プリンタは、プリンタアプレットを介して追加または削除されても、クライアントコンピュータに対して追加または削除されず、GO-Globalで使用するように設定されているプリンタのみが判断されます。

### クライアントプリンタを追加する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. **Add**ボタンをクリックします。
3. **Add Printer**ダイアログから目的のプリンタを選択し、 **Add**をクリックします。これにより、設定済みプリンタのリストにそのプリンタが追加され、使用可能になります。

>プリンタがプリンタアプレットから追加されると、-acコマンドラインオプションやprinterconfigパラメータに関係なく、起動時にプリンタが設定されます。

### プリンタを削除する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. **Remove**ボタンをクリックします。

リストからプリンタを削除すると、次にユーザーがGO-Globalセッションを開始したときにそのプリンタが設定されなくなります。[追加]ボタンをクリックしてリストから選択することで、プリンタをいつでもリストに追加できます。

## デフォルトプリンタの設定

ユーザは、プリンタアプレットでデフォルトのプリンタを指定できます。デフォルトプリンタは、黒い丸とプリンタ上のチェックマークで示されます。サーバプリンタを含むすべてのプリンタをデフォルトとして指定できます。

### デフォルトプリンタを設定する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. Set Defaultボタンをクリックします。

## プリンタ設定の編集

プリンタアプレットを通じて、ユーザはレイアウトの向きや用紙サイズなどのプリンタ設定を編集できます。

### プリンタ設定を編集する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. ボタンをクリックします。
4. 必要に応じてプロパティを編集し、 **[OK]**をクリックします。

## テストページの印刷

ユーザは、プリンタアプレットからテストページを印刷して、プリンタが正しく設定されていることを確認し、プリンタがグラフィックとテキストを正しく印刷しているかどうかを確認できます。テストページには、プリンタ名、モデル、ドライバソフトウェアのバージョンなどの情報も表示されます。これは、プリンタの問題のトラブルシューティングに役立つ場合があります。

### テストページを印刷する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. Test Pageボタンをクリックします。

## プリンタドライバの変更

プリンタアプレットを通じて、ユーザは自分のプリンタ用に異なるドライバを選択できます。これは、ドライバが正しく機能していない場合や、ユーザがネイティブドライバとユニバーサルプリンタドライバを切り替えたい場合に便利です。

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. ドライバボタンをクリックしてプリンタドライバの選択ダイアログを開き、GO-Globalホストマシンに現在インストールされているドライバを一覧表示します。
4. 新しいドライバを選択して[OK]をクリックします。これで、プリンタは新しいドライバで設定されました。

ユニバーサルプリンタドライバのみがクラスタマネージャでドライバソースとして指定されている場合、ユーザはドライバを変更できません。ユーザはGO-GlobalのPreview PDFプリンタまたはサーバベースのプリンタのドライバを変更できません。

## プリンタ設定のリセット

ユーザはいつでも、設定やプリンタ設定など、プリンタデータをデフォルト設定にリセットできます。これは、プリンタが正しく設定されていない場合や、ユーザにプリンタの問題が発生している場合に便利です。

### プリンタの設定をリセットする方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. **[Reset Printers]**をクリックします。

プリンタ設定をリセットすると、セッションからすべてのプロキシプリンタが削除されます。クライアントプリンタに再度印刷するには、セッションを再開する必要があります。これにより、デフォルトプリンタが元のデフォルト設定にリセットされます。

## プリンタドライブマッピング

管理者は、MappedPrinterDrivers.xmlを編集してプリンタドライバをマップできます。 ほとんどのGO-Global展開では、管理者はこのファイルを編集する必要はありません。これは、ホストのドライバ名がクライアントの名前と完全に一致しない場合、または管理者がネイティブドライバを上書きしてクライアントに別のプリンタドライバまたはユニバーサルプリンタドライバを使用させたい場合に使用するドライバを指定するために使用されます。

### 別のプリンタドライバを指定する方法

1. C:¥ProgramData¥GraphOnまたはC:¥Documents and Settings¥All Users¥Application Data¥GraphOnでMappedPrinterDrivers.xmlを探します。
2. ワードパッドでファイルを開き、クライアントプリンタドライバの名前を検索します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

3. 値フィールドからドライバ名を削除します。上記の例では、HP LaserJet 2100 Series PSを削除し、  目的のプリンタドライバと交換します。
4. ファイルを保存してください。この変更は、次にユーザがGO-Globalセッションを開始したときに有効になります。

上記の例では<property id="HP LaserJet 2100 Series PS" type="STRING">がクライアントで使用されているドライバです。

<value>HP LaserJet 2100 Series PS</value>は、ホスト上でマッピングされるべきドライバです。

マッピングプリンタドライバを使用して、プリンタにユニバーサルプリンタドライバを使用させることもできます。

### プリンタにユニバーサルプリンタドライバの使用を強制する方法

1. C:¥ProgramData¥GraphOnまたはC:¥Documents and Settings¥All Users¥Application Data¥GraphOnでMappedPrinterDrivers.xmlを探します。
2. ワードパッドでファイルを開き、クライアントプリンタドライバの名前を検索します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

3. 値フィールドからドライバ名を削除します。上記の例では、HP LaserJet 2100 Series PSを削除し、それをユニバーサルリモートプリンタに置き換えます。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>Universal Remote Printer</value> 
</property>
```
4. ファイルを保存します。

次回ユーザがホストに接続したときには、ユニバーサルプリンタドライバを使用してプリンタが設定されます。

複数のドライバをセミコロンで区切ることによって、<値>フィールドに指定できます。

### 追加のドライバを指定する方法

1. C:¥ProgramData¥GraphOnまたはC:¥Documents and Settings¥All Users¥Application Data¥GraphOnでMappedPrinterDrivers.xmlを探します。
2. ワードパッドでファイルを開き、クライアントプリンタドライバの名前を検索します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

3. 追加のドライバを指定してください。たとえば、HP LaserJet 2100 Series PSをリストに追加します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2200 Series PS;HP LaserJet 2100 Series PS</value> 
</property>
```

4. ファイルを保存します。

管理者は、無制限の数のドライバ名を値に追加できます。GO-Globalは、指定された順序でドライバを使用してクライアントプリンタを設定しようとします。セミコロンで区切られたドライバは、プロキシプリンタをインストールするときに使用されるドライバの優先順位を指定します。

### プリンタドライバマッピングを削除する方法

1. テキストエディタでMappedPrinterDrivers.xmlを開き、変更された行全体を削除します。たとえば、次のように削除します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

2. ファイルを保存します。

MappedPrinterDrivers.xmlファイルを削除して、以前の変更を削除することができます。ユーザがホストにサインインすると、ファイルが再作成されます。

>クライアントプリンタは、クライアントのセッション中に一時的にGO-Globalホストにインストールされます。プリンタドライバは恒久的にインストールされています。管理者は、GO-GlobalホストのPrintersフォルダにあるプリンタとドライバのリストを表示できます。
>
>すべての新規ユーザにデフォルトのプリンタを追加するには、次の記事を参照してください。
>
>[https://support.microsoft.com/en-us/kb/252388#%2Fen-us%2Fkb%2F252388](https://support.microsoft.com/en-us/kb/252388#%2Fen-us%2Fkb%2F252388)

## プリンタ設定をファイルへエクスポート

ほとんどのプリンタは、WindowsのDEVMODE構造体に設定を保存しています。 GO-Globalは、ユーザがサインアウトしたときに各プリンタのDEVMODE構造体の内容を保存し、ユーザがサインインしてプリンタが再作成されたときにこれらの設定を復元します。

管理者はエントリ<export_printer_settings> true </export_printer_settings>をMappedPrinterDrivers.xmlに追加できるため、ユーザがプリンタの設定を保存すると、その設定はWindowsのDEVMODE構造体ではなくファイルに書き込まれます。

### プリンタ設定をファイルへエクスポートする方法

1. C:\ProgramData\GraphOn\GO-GlobalでMappedPrinterDrivers.xmlを見つけます。
2. ファイルをテキストエディタで開き、クライアントプリンタドライバの名前を検索します。次に例を示します。

```
<driver name="HP LaserJet 2100 Series PS">
<alternate_driver_name="HP LaserJet 2100 Series PS"> </alternate_driver_name>
</driver> 
```

3. 次のように、エントリ <export_printer_settings> true </export_printer_settings>を追加します。

 ```
<driver name="HP LaserJet 2100 Series PS">
<alternate_driver_name="HP LaserJet 2100 Series PS">
<export_printer_settings>true</export_printer_settings>
</alternate_driver_name>
</driver> 
```

4. ファイルを保存します。

## プリンタマッピングのデフォルトプリンタ設定ファイルの作成

管理者は、マップされたプリンタのデフォルトプリンタ設定を含むファイルを作成できます。エントリ<default_printer_settings_file>を追加してMappedPrinterDrivers.xmlにプリンタ設定ファイルを指定すると、<export_printer_settings>がfalseに設定されているかどうかにかかわらず、管理者がユーザの個別ファイルが存在しない場合にプリンタのデフォルト設定を指定できます。ユーザはまだプリンタ設定を変更していません。プリンタ設定を設定したら、設定をファイルにエクスポートしてから、デフォルトのプリンタ設定ファイルをMappedPrinterDrivers.xmlに追加します。

### プリンタの環境設定を設定する方法

1. コントロールパネルから、デバイスとプリンタを選択します。
2. 目的のプリンタを右クリックして[印刷設定]を選択します。
3. プリンタの設定を編集して、[適用]をクリックします。
4. [OK]をクリックして[印刷設定]ダイアログを閉じます。

![7-7-2](/images/7-7-2.png) 

### 新しい印刷設定をファイルにエクスポートする方法

管理者としてコマンドプロンプトを実行し、次のコマンドを入力します。

```
rundll32.exe printui.dll PrintUIEntry /Ss /n "printer name" /a "full path to settings file"
```

例:

```
rundll32.exe printui.dll PrintUIEntry /Ss /n "HP Officejet Pro 8600" /a
"C:\printersettings\Officejet.dat"
```

### MappedPrinterDrivers.xmlにデフォルトのプリンタ設定ファイルを作成する方法

1. GO-Global Application Publishing Serviceを停止します。
2. C:\ProgramData\GraphOn\GO-GlobalでMappedPrinterDrivers.xmlを見つけます。
3. 以下を追加してください。

```
<driver name="printer driver name">
<alternate_driver name="alternate driver name">
<export_printer_settings>true</export_printer_settings>
<default_printer_settings_file>"full path to settings file” </default_printer_settings_file>
</alternate_driver>
</driver>
For example:
<driver name="HP Officejet Pro 8600">
<alternate_driver name="OfficeJet Driver 1">
<export_printer_settings>true</export_printer_settings>
<default_printer_settings_file>"C:\printersettings\Officejet.dat."</default_printer_settings_file>
</<alternate_driver>
</driver>
```

4. ファイルを保存してください。この変更は、次にユーザがGO-Globalセッションを開始したときに有効になります。
5. GO-Global Application Publishing Serviceを起動します。

## クライアントプリンタ名のカスタマイズ

GO-Globalは、クライアントマシンに設定されている各プリンタについて、ホストにプリンタをインストールします。これらのプリンタはプロキシプリンタと呼ばれ、GO-Global経由で印刷するときにユーザに表示されるプリンタです。複数のユーザがGO-Globalホストに接続するので、これらのプリンタは、ユーザが自分のプリンタだけを見ることができるようにフィルタリングする必要があります。これには、各プリンタに一意の識別子を割り当てる必要があります。

レジストリを通じて、管理者はこれらのプロキシプリンタ名の形式を指定し、ユーザ名、クライアントコンピュータのIPアドレス、クライアントマシン名などの情報を含めることができます。 PrinterNameFormatレジストリキーは、GO-Globalセッションの開始後に作成されます。

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
2. レジストリエディタで、 **HKEY_LOCAL_MACHINE**キーを展開します。
3. **PrinterNameFormat**キーを見つけます。[HKLM\Software\GraphOn\GO-Global\AppServer \PrinterNameFormat]
4. [**PrinterNameFormat**]を右クリックして、[**Modify**]を選択します。
5. [値のデータ]フィールドに、1つまたは複数のクライアントプリンタカスタマイズトークンを入力します。
6. レジストリエディタを終了します。

PrinterNameFormatキーは、デフォルトで(from ％C)に設定されています。上記の例を使用すると、プリンタ名は次のようになります。PrinterName (from HRWorkstation)

PrinterNameFormatストリング内の％以外の特殊文字はトークンではないため、文字通りに使用されます。

許可されていない12文字があります。! ,  = / : * ? " < > and |.これらの文字のいずれかが文字列で使用されている場合、それらはハイフンに置き換えられます。

## 印刷可能領域を調整する

場合によっては、GO-Global Universal Printer Driver(UPD)を使用して印刷するアプリケーションでは、ページの端の近くにあるドキュメントの一部が印刷されない場合、ドキュメントの一部が切り取られることがあります。この問題に対処する方法は2つあります。代替の.PPDファイルを使用してドキュメントの印刷可能領域を定義する方法と、印刷ジョブの拡大縮小を有効にする方法です。

1番目の方法は、代替.PPDファイルをインストールする必要があります。

### 代替の.PPDファイルをインストールする方法

1. 以下からUniversalRemotePrinter.ppdをダウンロードします。ftp.graphon.com/private/gg6/6.0.0.xxxxx/UniversalRemotePrinter.ppd
2. GO-Global Application Publishing Serviceを停止します。
3. UniversalRemotePrinter.ppdを次のフォルダにコピーします。 C:\Windows\System32\spool\drivers\x64\3
4. UniversalRemotePrinter.bpdが存在する場合は削除します。
5. GO-Global Application Publishing Serviceを起動します。

UniversalRemotePrinter.ppdファイルは、ユニバーサルプリンタドライバのドライバ設定を定義します。 このファイルのデフォルトバージョンでは、ドライバが印刷できる領域はページ全体です。これは、テキストまたはイメージをページの端に印刷できることを意味します。ほとんどのプリンタは物理的にこれに対応していません。代替.PPDファイルは、定義された用紙サイズに対して1/4インチ(6.35 mm)の余白を定義します。これにより、アプリケーションは印刷可能領域を予測し、それによってクリッピングすることなく印刷ジョブをレイアウトすることができます。

2番目の方法は、HostProperties.xmlファイルでEnablePrintOptionsプロパティをtrueに設定して、印刷ジョブの拡大縮小を有効にする必要があります。または、ホストがアップグレードされている場合は、HostPropertyDefinitions.xmlを編集します。

### 印刷ジョブの拡大縮小を有効にする方法

1. Application Publishing Serviceを停止します。
2. テキストエディタで%PROGRAMDATA%\GraphOn\GO-Global\HostProperties.xmlを開きます。
3. EnablePrintOptionsプロパティを見つけて、それに関連付けられた値を "true"に変更します。
4. PrintOptionsプロパティの値が "-printermargins -xoffset 50 -yoffset 30"であることを確認してください。
5. HostProperties.xmlを保存して、Application Publishing Serviceを起動します。