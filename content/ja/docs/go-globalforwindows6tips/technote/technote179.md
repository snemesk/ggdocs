+++
title = "手動によるサンドボックスホワイトリストエントリの設定"
description = ""
weight = 10
+++
GO-Globalのサンドボックス機能により、管理者はGO-Globalホスト上のファイルおよびプログラムへのユーザアクセスを制限できます。これらの制限はユーザにのみ適用され、管理者または管理者グループのメンバには適用されません。この記事では、`C:\ProgramData\GraphOn\WorksacePropertyDefinitions.xml`ファイルを手動で編集して、ファイルおよびプログラムをサンドボックスホワイトリストに追加する方法について説明します。
サンドボックス機能を有効にするには、まずレジストリでサンドボックスドライバを有効にする必要があります。

### **サンドボックスのドライバを有効にする方法**

1. `[HKLM\Software\GraphOn\GO-Global\AppServer]`レジストリキーを見つけます。
2. **SandBox** という名前のDWORDレジストリ値を見つけます。
3. 値を0から1に変更します。
4. コンピュータを再起動します。

ホワイトリストエントリを指定する前に、ファイルやプログラムのサンドボックス機能を有効にする必要があります。

### **ファイルのサンドボックスを有効にする方法**

1. **Application Publishing Service** を停止します。
2. **WorkspacePropertyDefinitions.xml** を開きます。
3. **filesSandboxEnabled** プロパティIDを見つけて、値をtrueに設定します。

```
<propertygroup id="UserSandbox">
<property id="filesSandboxEnabled">
<label>User sandbox</label>
<description>Enables the user sandbox feature.</description>
<type>BOOL</type>
<defaultvalue>true</defaultvalue>
<constraints/>
```

4. ファイルを保存します。
5. **Application Publishing Service** を再起動します。

### **プログラムのサンドボックスを有効にする方法**

1. **Application Publishing Service** を停止します。
2. **WorkspacePropertyDefinitions.xml**を開きます。
3. **programsSandboxEnabled** プロパティIDを見つけて、値をtrueに設定します。

```
<property id="programsSandboxEnabled">
<label>Programs</label>
<description>Users may only run programs specified in the Programs white list.</description>
<type>BOOL</type>
<defaultvalue>true</defaultvalue>
<constraints/>
```

4. ファイルを保存します。
5. **Application Publishing Service** を再起動します。

ホワイトリスト **ファイル** は、完全修飾ディレクトリパスで指定されます。サンドボックスを使用すると、サブディレクトリを含め、ファイルのホワイトリストに記載されているディレクトリ内のすべてのファイルにアクセスできます。すべてのサブディレクトリを含むワークスペースプロファイルディレクトリ`%USERPROFILE%`は、セッションの開始時にファイルのホワイトリストに自動的に追加されます。

ホワイトリストに登録された **プログラム** は、完全修飾実行ファイルパスで指定されます。サンドボックスを使用すると、ユーザはプログラムのホワイトリストに記載されているすべてのプログラムを実行できます。パブリックデスクトップ`%PUBLIC%\Desktop`、またはプライベートワークスペースデスクトップ`%USERPROFILE%\Desktop`のいずれかのプログラムは、セッションの開始時に自動的にプログラムのホワイトリストに追加されます。これらのデスクトップにプログラムを追加する方法は4つあります。

* 実際のプログラム実行可能モジュールをデスクトップフォルダに置きます(例:`C:\Users\Public\Desktop\ExampleApp.exe`)。
* デスクトップフォルダにプログラム実行可能モジュールへのショートカットを配置する(例:`C:\Users\ExampleUser\Desktop\ExampleApp.lnk`)。
* 関連付けられたプログラムを含む文書をデスクトップフォルダに配置する (例:`C:\Users\Public\Desktop\ExampleDoc.doc`)。
* 関連付けられたプログラムを含む文書へのショートカットをデスクトップフォルダに配置する(例:@C:\Users\ExampleUser\Desktop\ExampleDoc.lnk`)。

{{% alert title="参照" color="info" %}}
デスクトップフォルダにないホワイトリストファイルの関連プログラムは、自動的にプログラムホワイトリストに追加されません。
{{% /alert %}}

以下に説明するように、WorkspacePropertyDefinitions.xmlファイルを編集したら、変更内容をDefaultWorkspaceProperties.xmlファイルに伝播する必要があります。**GO-Global Application Publishing Service** を停止し、`C:\ProgramData\GraphOn\DefaultWorkspaceProperties.xml`ファイルを削除してから、**GO-Global Application Publishing Service** を再起動します。これにより、DefaultWorkspaceProperties.xmlファイルがWorkspacePropertyDefinitions.xmlファイルから再作成されます。

{{% alert title="参照" color="info" %}}
サンドボックス機能が有効になっていると、ホワイトリストに登録されているプログラムのみが実行を許可されます。既定のサンドボックス構成では、ユーザはコマンドプロンプト(cmd.exe)を実行できますが、プログラムがホワイトリストに追加されていない限り、cmd.exeからプログラムを起動することはできません。これはログオンスクリプトをサポートするための仕様です。
{{% /alert %}}

### **OEMのお客様への考慮事項**

OEMのお客様は、WorkspacePropertyDefinitions.xmlファイル内の既定のプロパティ値を自分の製品に適した値に編集する必要があります。このファイルはOEMのインストールに含まれるべきです。インストール後、Application Publishing ServiceはWorkspacePropertyDefinitions.xmlファイルの値からDefaultWorkspaceProperties.xmlファイルを生成します。Application Publishing Serviceは、DefaultWorkspaceProperties.xmlファイルから設定を取得します。

システム管理者は、DefaultWorkspaceProperties.xmlを次のように編集して追加の変更を加えることができます。

1. **Application Publishing Service** を停止します。
2. **DefaultWorkspaceProperties.xml** を開きます。
3. ファイルを保存します。
4. **Application Publishing Service** を再起動します。

### **ファイルのホワイトリストを編集する方法**

`C:\ProgramData\GraphOn\WorkspacePropertyDefinitions.xml`ファイルで、"filesWhiteList"プロパティを探します。

```
<property id = "filesWhiteList">
<label>Files</label>
<description>Files and directories that users are allowed to access from the workspace.</description>
<type>STRING</type>
<defaultvalue>
</defaultvalue>
<constraints></constraints>
</property>
```

<defaultvalue>タグの間には、1行に1つのパスを使用し、二重引用符で囲み、先頭にスペースを入れずに、カンマとセミコロン(、;)で終わる複数のディレクトリパスを追加できます。拡張可能な環境変数を含めることができます。例えば、

```
<property id = "filesWhiteList">
<label>Files</label>
<description>Files and directories that users are allowed to access from the workspace.</description>
<type>STRING</type>
<defaultvalue>
"C:\Departments\Accounting\Templates",;
"%ALLUSERSPROFILE%\ExampleApp",;
</defaultvalue>
<constraints></constraints>
</property>
```

### **プログラムのホワイトリストを編集する方法**

`C:\ProgramData\GraphOn\WorkspacePropertyDefinitions.xml`ファイルで、"programsWhiteList"プロパティを探します。

```
<property id = "programsWhiteList">
<label>Programs</label>
<description>Programs that users are allowed to run from the workspace.</description>
<type>STRING</type>
<defaultvalue>
</defaultvalue>
<constraints></constraints>
</property>
```

1行に1つのパスを二重に囲んで使用して、<defaultvalue>タグ間に複数の実行可能ファイルパスを追加できます。セミコロン(;)で終わる引用符、先行する空白はありません。拡張可能な環境変数を含めることができます。例えば、

```
<property id = "programsWhiteList">
<label>Programs</label>
<description>Programs that users are allowed to run from the workspace.</description>
<type>STRING</type>
<defaultvalue>
"C:\ExampleApp\bin\ExampleApp.exe";
"%SystemRoot%\regedit.exe";
</defaultvalue>
<constraints></constraints>
 </property>
```