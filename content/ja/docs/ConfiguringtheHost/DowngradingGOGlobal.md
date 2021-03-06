---
title: "GO-Globalのダウングレード"
linkTitle: ""
weight: 03
type: "docs"
---

以下では、設定のバックアップ、GO-Globalのアンインストールと再インストール、およびGO-Globalホストで公開されているアプリケーションとカスタム設定の復元について説明します。

### GO-Globalのレジストリ設定のバックアップ

1. registry.exeを開きます。
2. 次のレジストリキーを選びなさい:HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global
3. GO-Globalキーを右クリックし、エクスポートを選択します。

### Admin Consoleで作成したカスタム設定のバックアップ方法
Admin Consoleで作成したカスタム設定は、 **HostProperties.xml** ファイルと **DefaultWorkspacePropterties.xml** ファイルに保存されます。これらのファイルへのパスは以下の通りです。

`C:\ProgramDataGraphOn\GO-Global\HostProperties.xml`<br>
`C:\ProgramDataGraphOn\GO-Global\DefaultWorkspacePropterties.xml`<br>
上記のレジストリのエクスポートと一緒にこれらのファイルを保存します。

### サーバの鍵のをバックアップ
サーバの鍵は、以下のファイルに保存されています。

`C:\ProgramData\GraphOn\GO-Global\ks\ks.dat`

### ライセンスファイルまたはファイルのバックアップ

ライセンスファイルは、`C:Program Files\GraphOn\GO-GlobalLicensing`に保存されています。

**GO-Globalをアンインストールし、ホストを再起動してください。**

**GO-Globalホストソフトウェアをインストールし、ホストを再起動してください**
(ライセンスに関連する手順はスキップおよび/またはキャンセルしてください)。

### 設定を復元する方法

1. `C:Program Files\\GraphOn\GO-Global\Licensing` ディレクトリにライセンスファイルをコピーします。
2. バックアップされたGO-Globalレジストリキーファイルをダブルクリックしてインポートします。
3. バックアップしたHostProperties.xml及びDefaultWorkspaceProperties.xmlを`C:\ProgramData\GraphOn\GO-Global`ディレクトリにコピーし、既存のファイルを上書きしてください。
4. バックアップしたks.datを、`C:\ProgramData\GraphOn\GO-Global\ks`ディレクトリにコピーし、既存のファイルを上書きしてください。
5. **GO-Global License Manager** を再起動します。
6. **GO-Global Application Publishing Service** を再起動します。