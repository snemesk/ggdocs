---
title: "ビデオサポート"
linkTitle: ""
weight: 26
type: "docs"
---

ビデオサポートが有効になっている場合、GO-Globalセッションで実行されているアプリケーションおよびWebブラウザは、ビデオコンテンツをGO-Globalクライアントにリダイレクトします。ビデオサポートはデフォルトで無効になっています。

管理者は、**DefaultWorkspaceProperties.xml** の **H264Video** プロパティID値を編集することにより、ビデオサポートを有効にできます。デフォルトでは、H264Videoプロパティは0に設定されており、ショートカットに追加されたコマンドライン引数や、ログオンHTMLページを開くハイパーリンクに関係なく、ビデオのサポートが無効になります。H264Videoを **1** に設定すると、コマンドライン引数に関係なくビデオサポートが有効になります。H264Videoが **2** に設定されている場合、ショートカットに **-video** が追加されるか、ハイパーリンクに **video=1** が追加されない限り、ビデオは無効になります。H264Videoが **3** に設定されている場合、ショートカットに **-novideo** が追加されているか、ハイパーリンクに **video=0** が追加されていない限り、ビデオは有効です。

H264Videoプロパティが2に設定されている場合、ユーザはコマンドライン引数 **-video** をGO-Globalショートカットに追加することにより、ビデオサポートを有効にできます。たとえば、`"C:\Program Files\GraphOn\AppController\AppController.exe" -h server1 -video`です。H264Videoプロパティが3に設定されている場合、ビデオサポートを無効にするには、ショートカットに **-novideo** を追加します。

### ビデオのサポートを有効/無効にする方法

1. Application Publishing Serviceを停止します。
2. **DefaultWorkspaceProperties.xml** ファイルを`C:\ProgramData\GraphOn\GO-Global`ディレクトリ内に配置してください。
3. WordpadでDefaultWorkspaceProperties.xmlを開き、次のセクションを探します。
```
</property> 
<property type="UINT32" group="Miscellaneous" id="H264Video">
<value>0</value> 
</property>
```
4. 0を希望の値に置き換えます(例:1、2、3)。
5. 編集した.xmlファイルを保存します。
6. **Application Publishing Service** を起動します。

ビデオサポートは、GO-Global AppControllerログオンページに **video=1** または **video=0** を追加することで有効または無効にすることもできます。
例えば：
`http://hostname/goglobal/?video=1`は、H264Videoワークスペースプロパティが2に設定されている場合にビデオサポートを有効にします。
`http://hostname/goglobal/?video=0`は、H264Videoワークスペースプロパティが3に設定されている場合にビデオサポートを無効にします。

