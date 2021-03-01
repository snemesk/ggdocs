---
title: "プリンタアプレット"
linkTitle: ""
weight: 10
type: "docs"
---

GO-Globalのプリンタアプレットを使うと、プリンタの追加と削除、プリンタのプロパティの編集、デフォルトプリンタの設定、プリンタドライバの選択、テストページの印刷ができます。プリンタアプレットはプログラムウィンドウからアクセスできます。構成されているすべてのクライアントプリンタと、ユーザがアクセスできるすべてのホストプリンタが一覧表示されます。プリンタのリストは、-acパラメータとprinterconfigパラメータだけでなく、Admin Consoleのプリンタドライバ設定によっても異なります。

プリンタアプレットのアイコンについては後述します。

![7-10-1](/img/7-10-1.png) 

ユーザが次回GO-Globalにサインインしたときに、プリンタアプレットで行った設定は保存されます。これらの設定はコマンドラインオプションよりも優先されます。プリンタアプレットで行ったプリンタの変更はすぐに有効になります。ユーザはセッションを再開する必要はありません。

# プリンタの追加と削除

プリンタは、プリンタアプレットを介して追加または削除されても、クライアントコンピュータに対して追加または削除されず、GO-Globalで使用するように設定されているプリンタのみが判断されます。

### クライアントプリンタを追加する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. **Add** ボタンをクリックします。
3. **Add Printer** ダイアログから目的のプリンタを選択し、 **Add** をクリックします。これにより、設定済みプリンタのリストにそのプリンタが追加され、使用可能になります。

{{% alert title="参照" color="info" %}}
プリンタがプリンタアプレットから追加されると、-acコマンドラインオプションやprinterconfigパラメータに関係なく、起動時にプリンタが設定されます。
{{% /alert %}}

### プリンタを削除する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. **Remove** ボタンをクリックします。

リストからプリンタを削除すると、次にユーザがGO-Globalセッションを開始したときにそのプリンタが設定されなくなります。**[追加]** ボタンをクリックしてリストから選択することで、プリンタをいつでもリストに追加できます。

# デフォルトプリンタの設定

ユーザは、プリンタアプレットでデフォルトのプリンタを指定できます。デフォルトプリンタは、黒い丸とプリンタ上のチェックマークで示されます。サーバプリンタを含むすべてのプリンタをデフォルトとして指定できます。

### デフォルトプリンタを設定する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. **Set Default** ボタンをクリックします。

# プリンタ設定の編集

プリンタアプレットを通じて、ユーザはレイアウトの向きや用紙サイズなどのプリンタ設定を編集できます。

### プリンタ設定を編集する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. **[Edit]** ボタンをクリックします。
4. 必要に応じてプロパティを編集し、**[OK]** をクリックします。

{{% alert title="参照" color="info" %}}
プリンタ設定は、ユーザのユーザプロファイルに保存されます。relay serverまたはロードバランサが使用されているマルチホスト環境では、ユーザのプリンタ設定がクラスタ内のすべてのホスト間で確実に複製されるように、移動プロファイルを有効にする必要があります。
{{% /alert %}}

# テストページの印刷

ユーザは、プリンタアプレットからテストページを印刷して、プリンタが正しく設定されていることを確認し、プリンタがグラフィックとテキストを正しく印刷しているかどうかを確認できます。テストページには、プリンタ名、モデル、ドライバソフトウェアのバージョンなどの情報も表示されます。これは、プリンタの問題のトラブルシューティングに役立つ場合があります。

### テストページを印刷する方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. **Test Page** ボタンをクリックします。

# プリンタドライバの変更

プリンタアプレットを通じて、ユーザは自分のプリンタ用に異なるドライバを選択できます。これは、ドライバが正しく機能していない場合や、ユーザがネイティブドライバとユニバーサルプリンタドライバを切り替えたい場合に便利です。

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. リストから目的のプリンタを選択します。
3. **[Driver]** ボタンをクリックして **[Select Printer Driver]** ダイアログを開き、GO-Globalホストマシンに現在インストールされているドライバを一覧表示します。
4. 新しいドライバを選択して **[OK]** をクリックします。これで、プリンタは新しいドライバで設定されました。

UniversalプリンタドライバのみがAdmin Consoleでドライバソースとして指定されている場合、ユーザはドライバを変更できません。ユーザはGO-GlobalのPreview PDFプリンタまたはサーバベースのプリンタのドライバを変更できません。

# プリンタ設定のリセット

ユーザはいつでも、設定やプリンタ設定など、プリンタデータをデフォルト設定にリセットできます。これは、プリンタが正しく設定されていない場合や、ユーザにプリンタの問題が発生している場合に便利です。

### プリンタの設定をリセットする方法

1. プログラムウィンドウから[File | Printer]の順にクリックします。
2. **[Reset Printers]** をクリックします。

プリンタ設定をリセットすると、セッションからすべてのプロキシプリンタが削除されます。クライアントプリンタに再度印刷するには、セッションを再開する必要があります。これにより、デフォルトプリンタが元のデフォルト設定にリセットされます。