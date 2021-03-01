---
title: "ビデオリプレイ"
linkTitle: ""
weight: 21
type: "docs"
---

ビデオリプレイが有効になっている場合、GO-Globalセッションで実行されているアプリケーションおよびWebブラウザは、ビデオコンテンツをGO-Globalクライアントにリダイレクトします。ビデオリプレイはデフォルトで無効になっています。

### ビデオ再生を有効にする方法

1. Admin Consoleで、[All Hosts]のリストから目的のホストを選択します。
2. [Tools | Host Options]をクリックします。
3. [Client Access]タブをクリックします。
4. [Video Replay]ドロップダウンメニューから [Always on]をクリックします。
5. [OK]をクリックします。

Off unless enabled on clientを選択すると、管理者は、コマンドライン引数-videoがショートカットに追加されるか、またはログオンHTMLページを開くハイパーリンクにvideo=1が追加されない限り、Video Replayを無効にすることができます。たとえば、http://hostname/goglobal/?video=1

逆に、On unless disabled on clientを選択すると、管理者はショートカットに -novideo が付加されていない限り、またはハイパーリンクに video=0 が付加されていない限り、Video Replay を有効にすることができます。たとえば、http://hostname/goglobal/?video=0