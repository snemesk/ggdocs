---
title: "プリンタードライブマッピング"
linkTitle: ""
weight: 13
type: "docs"
---


管理者は、MappedPrinterDrivers.xmlを編集してプリンタドライバをマップできます。 ほとんどのGO-Global展開では、管理者はこのファイルを編集する必要はありません。 これは、ホストのドライバ名がクライアントの名前と完全に一致しない場合、または管理者がネイティブドライバを上書きしてクライアントに別のプリンタドライバまたはユニバーサルプリンタドライバを使用させたい場合に使用するドライバを指定するために使用されます。

### 別のプリンタドライバを指定する方法

1. C:¥ProgramData¥GraphOnまたはC:¥Documents and Settings¥All Users¥Application Data¥GraphOnでMappedPrinterDrivers.xmlを探します。
2. ワードパッドでファイルを開き、クライアントプリンタドライバの名前を検索します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

3.値フィールドからドライバ名を削除します。上記の例では、HP LaserJet 2100 Series PSを削除し、  目的のプリンタドライバと交換します。
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

3.値フィールドからドライバ名を削除します。上記の例では、HP LaserJet 2100 Series PSを削除し、それをユニバーサルリモートプリンタに置き換えます。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>Universal Remote Printer</value> 
</property>
```

　4.ファイルを保存します。

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

3.追加のドライバを指定してください。たとえば、HP LaserJet 2100 Series PSをリストに追加します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2200 Series PS;HP LaserJet 2100 Series PS</value> 
</property>
```

4.ファイルを保存します。

管理者は、無制限の数のドライバ名を値に追加できます。 GO-Globalは、指定された順序でドライバを使用してクライアントプリンタを設定しようとします。セミコロンで区切られたドライバは、プロキシプリンタをインストールするときに使用されるドライバの優先順位を指定します。

### プリンタドライバマッピングを削除する方法

1. テキストエディタでMappedPrinterDrivers.xmlを開き、変更された行全体を削除します。たとえば、次のように削除します。

```
<property id="HP LaserJet 2100 Series PS" type="STRING"> 
<value>HP LaserJet 2100 Series PS</value> 
</property>
```

2.ファイルを保存します。

MappedPrinterDrivers.xmlファイルを削除して、以前の変更を削除することができます。ユーザがホストにサインインすると、ファイルが再作成されます。

>クライアントプリンタは、クライアントのセッション中に一時的にGO-Globalホストにインストールされます。プリンタドライバは恒久的にインストールされています。管理者は、GO-GlobalホストのPrintersフォルダにあるプリンタとドライバのリストを表示できます。
>
>すべての新規ユーザにデフォルトのプリンタを追加するには、次の記事を参照してください。
>https://support.microsoft.com/en-us/kb/252388#%2Fen-us%2Fkb%2F252388