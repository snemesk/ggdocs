---
title: "プリンタドライブマッピング"
linkTitle: ""
weight: 05
type: "docs"
---
管理者は、 **MappedPrinterDrivers.xml** を編集してプリンタドライバをマップできます。ほとんどのGO-Globalの構築では、管理者はこのファイルを編集する必要はありません。これは、ホストのドライバ名がクライアントの名前と完全に一致しない場合、または管理者がネイティブドライバを上書きしてクライアントに別のプリンタドライバまたはUniversalプリンタドライバを使用させたい場合に使用するドライバを指定するために使用されます。

### 別のプリンタドライバを指定する方法

1. `C:¥ProgramData¥GraphOn`または`C:¥Documents and Settings¥All Users¥Application Data¥GraphOn`で **MappedPrinterDrivers.xml** を探します。
2. ワードパッドでファイルを開き、クライアントプリンタドライバの名前を検索します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

3. 値フィールドからドライバ名を削除します。上記の例では、HP LaserJet 2100 Series PSを削除し、目的のプリンタドライバと交換します。
4. ファイルを保存してください。この変更は、次にユーザがGO-Globalセッションを開始したときに有効になります。

上記の例では<property id="HP LaserJet 2100 Series PS" type="STRING">がクライアントで使用されているドライバです。

<value>HP LaserJet 2100 Series PS</value>は、ホスト上でマッピングされるべきドライバです。

マッピングプリンタドライバを使用して、プリンタにUniversalプリンタドライバを使用させることもできます。

### プリンタにUniversalプリンタドライバの使用を強制する方法

1. `C:¥ProgramData¥GraphOn`または`C:¥Documents and Settings¥All Users¥Application Data¥GraphOn`で **MappedPrinterDrivers.xml** を探します。
2. ワードパッドでファイルを開き、クライアントプリンタドライバの名前を検索します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

3. 値フィールドからドライバ名を削除します。上記の例では、HP LaserJet 2100 Series PSを削除し、それをUniversalリモートプリンタに置き換えます。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>Universal Remote Printer</value> 
</property>
```
4. ファイルを保存します。

次回ユーザがホストに接続したときには、Universalプリンタドライバを使用してプリンタが設定されます。

複数のドライバをセミコロンで区切ることによって、<値>フィールドに指定できます。

### 追加のドライバを指定する方法

1. `C:¥ProgramData¥GraphOn`または`C:¥Documents and Settings¥All Users¥Application Data¥GraphOn`で **MappedPrinterDrivers.xml** を探します。
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

1. テキストエディタで **MappedPrinterDrivers.xml** を開き、変更された行全体を削除します。たとえば、次のように削除します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

2. ファイルを保存します。

**MappedPrinterDrivers.xml** ファイルを削除して、以前の変更を削除することができます。ユーザがホストにサインインすると、ファイルが再作成されます。

{{% alert title="参照" color="info" %}}
クライアントプリンタは、クライアントのセッション中に一時的にGO-Globalホストにインストールされます。プリンタドライバは恒久的にインストールされています。管理者は、GO-GlobalホストのPrintersフォルダにあるプリンタとドライバのリストを表示できます。

すべての新規ユーザにデフォルトのプリンタを追加するには、次の記事を参照してください。

[https://support.microsoft.com/en-us/kb/252388#%2Fen-us%2Fkb%2F252388]
{{% /alert %}}

# プリンタ設定をファイルへエクスポート

ほとんどのプリンタは、WindowsのDEVMODE構造体に設定を保存しています。GO-Globalは、ユーザがサインアウトしたときに各プリンタのDEVMODE構造体の内容を保存し、ユーザがサインインしてプリンタが再作成されたときにこれらの設定を復元します。

管理者はエントリ **<export_printer_settings>true</export_printer_settings>** を **MappedPrinterDrivers.xml** に追加できるため、ユーザがプリンタの設定を保存すると、その設定はWindowsのDEVMODE構造体ではなくファイルに書き込まれます。

### プリンタ設定をファイルへエクスポートする方法

1. `C:\ProgramData\GraphOn\GO-Global`で **MappedPrinterDrivers.xml** を見つけます。
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

# プリンタマッピングのデフォルトプリンタ設定ファイルの作成

管理者は、マップされたプリンタのデフォルトプリンタ設定を含むファイルを作成できます。エントリ **<default_printer_settings_file>** を追加して **MappedPrinterDrivers.xml** にプリンタ設定ファイルを指定すると、 **<export_printer_settings>** がfalseに設定されているかどうかにかかわらず、管理者がユーザの個別ファイルが存在しない場合にプリンタのデフォルト設定を指定できます。ユーザはまだプリンタ設定を変更していません。プリンタ設定を設定したら、設定をファイルにエクスポートしてから、デフォルトのプリンタ設定ファイルを **MappedPrinterDrivers.xml** に追加します。デフォルトの設定ファイルは、すべてのユーザがアクセスできるように、公開された場所に保存する必要があります。

### プリンタの環境設定を設定する方法

1. コントロールパネルから、 **デバイスとプリンタ** を選択します。
2. 目的のプリンタを右クリックして **[印刷設定]** を選択します。
3. プリンタの設定を編集して、 **[適用]** をクリックします。
4. **[OK]** をクリックして **[印刷設定]** ダイアログを閉じます。

![7-10-2](/img/7-10-2.png) 

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

1. **GO-Global Application Publishing Service** を停止します。
2. `C:\ProgramData\GraphOn\GO-Global`で **MappedPrinterDrivers.xml** を見つけます。
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
5. **GO-Global Application Publishing Service** を起動します。

