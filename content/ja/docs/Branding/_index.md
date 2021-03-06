---
title: "ブランディング"
linkTitle: ""
weight: 07
type: "docs"
---

ブランディングでは、管理者は、**Sign In** ダイアログ、Program Window、二要素認証ダイアログ、WebInterface AppControllerでエンドユーザが表示するテキスト、ラベル、画像を編集やカスタマイズすることができます。

# Sign Inダイアログをブランディング

Sign Inダイアログでは、ダイアログのタイトルバー、フィールドラベル、ボタン、テキスト、画像をすべてブランディングまたはローカライズできます。

![4-18-1](/img/4-18-1.png)

### Sign Inダイアログをブランディングする方法

1. Admin Consoleから、[Tools | Branding]をクリックします。
2. [Sign In]をクリックします。
3. 次のいずれかを編集します。
* **Title bar** のテキスト
* **Sign in to** のテキスト
* **User name field** のラベル
* **Sign In** ボタンのラベル
* **Cancel** のラベル
4. 新しい画像を参照するには、**[Image]** ボタンをクリックします。次の形式.jpg、.jpeg、.bmp、.ico、.png、.gif、.tifがサポートされています。代替画像は40x40ピクセルにリサイズされます。
5. **[Display host name in sign in to]** テキストをクリックすると、ユーザーがサインインするホスト名が非表示になります。デフォルトでは、ログオンダイアログにホスト名が表示されます。
6. **[Clear all to restore defaults]** ボタンをクリックすると、元のテキストと画像に戻ります。
7. **[OK]** をクリックします。

![4-18-2](/img/4-18-2.png)

以下の例では、タイトルバーのテキスト、「Sign In」テキスト、ユーザ名とパスワードのラベル、Sign Inボタンとキャンセルボタン、および画像がすべてブランド化され、ローカライズされています。

![4-18-3](/img/4-18-3.png)

# 2要素認証ダイアログのブランディング化

2要素認証を有効にしたときにユーザに表示される4つのダイアログもブランド化することができます。

### 2要素認証ダイアログをブランディング化する方法

1. Admin Consoleから、[Tools | Branding]をクリックします。
2. [TwoーFactor Auth.Dialogs] タブをクリックします。
3. 以下のいずれかを編集します。
* **Title bar** のテキスト
* **Register**のテキスト
* ステップ1のテキスト
* ステップ2のテキスト
* 6桁のコードのテキスト
* 登録のテキスト
* 認証完了のテキスト
* Next ボタンのラベル
* OK ボタンのラベル
* Back ボタンのラベル
* Cancel ボタンのラベル
* Submit ボタンのラベル
* Canselボタンのラベル
4. [Restore defaults]ボタンをクリックして、元のテキストと画像に戻します。
5. [OK] をクリックします。
次の 2 要素認証ダイアログのタイトル バー、テキスト、および画像は、ブランド化してローカライズすることができます。
以下の例では、二要素認証ダイアログがブランド化され、ローカライズされています。

# Program Windowのブランディング

Program Windowは、GO-Globalを介してアプリケーションを起動するためのユーザインターフェイスを含むアプリケーションです。Program Windowには、ユーザが実行を許可されているWindowsアプリケーションのリストが表示されます。

### Program Windowをブランディングする方法

1. Admin Consoleから、[Tools | Branding] をクリックします。
2. **[Program Window]** タブをクリックします。
3. 次のいずれかを編集します。
* Program Windowのタイトルバーのテキスト。
* **メニューオプション** のテキスト(例:「Widgitsについて」)。
* **ダイアログのタイトルバー** に表示されるテキスト。
4. **Display host name in title bar** をクリックすると、ユーザがサインインするホスト名が非表示になります。デフォルトでは、ホスト名はProgram Windowのタイトルバーに表示されます。
5. 新しいタイトルバーアイコンを参照するには、**[Title bar]** ボタンをクリックします。これは.icoファイルでなければなりません。
6. 新しい背景画像を参照するには、**[Background Image]** ボタンをクリックします。次の形式がサポートされています。.jpg、.jpeg、.bmp、.ico、.png、.gif、および.tifです。背景画像の位置は、Horizontal alignmentドロップダウンメニューを使って左、中央、右に配置することができます。
7. Vertical alignmentドロップダウンメニューを使用して、画像を上、中央、下に配置することもできます。
8. **[Help Topics]** メニュー項目をクリックして、メニューからヘルプトピックを削除します。デフォルトでは、ヘルプトピックが表示されています。
9. **[Restore defaults]** ボタンをクリックして、元のテキストと画像に戻します。
10. **[OK]** をクリックします。

下の例では、Program Windowには、ブランド化されたタイトルバーのテキスト、タイトルバーのアイコン、背景画像が表示されています。

![4-19-1](/img/4-19-1.png) 

デフォルトでは、ユーザはProgram Windowで独自の表示オプションを設定できます。ユーザが独自の表示オプションを設定できないようにするには、**[Allow users to set their options]** チェックボックスをオフにします。

Program Windowタブの **[View Options]** ボタンをクリックすると、Program Windowのデフォルト表示を表示したり、カスタマイズしたりすることができます。タイトルバー、メニュー、ツールバー、ステータスバーのオン/オフを切り替えたり、これらのオプションを選択したりすることができます。

* **One-Click Activation of Any Item:** マウスのワンクリックでアイテムを開きます。
* **One-Click Activation of Selected Item:** マウスのワンクリックで選択したアイテムを開きます。
* **Hot-Track Selection:** カーソルがアイテムの上に置かれると、自動的にアイテムが選択されます。

![4-19-2](/img/4-19-2.png) 

詳細表示で項目を表示する際に、以下のオプションを表示することができます。

* **Column Header:** 列のヘッダーを表示します。
* **Drag-and-Drop Column Reordering:** ドラッグ＆ドロップで列の並び替えを有効にします。
* **Full Row Selection:** 項目が選択されているときに、項目の全行をハイライトします。
* **Gridlines:** アイテムやサブアイテムの周りにグリッドラインを表示します。

Program Windowの背景とテキストのデフォルトの色を選択するには、**[Background]** ボタンまたは **[Text]** ボタンをクリックして、色のパレットを含むダイアログボックスにアクセスします。
また、Program Windowのデフォルトの **[View]** を選択して、アイテムを大きなアイコン、小さなアイコン、小さなアイコンを含むリスト、または詳細なリストとして表示することもできます。

**[Arrange Items]** オプションを使用すると、Program Windowでアイテムのデフォルトの並べ替え順序を選択することができます。アイテムを以下の順序でソートします。

* **By Name:** 名前をアルファベット順に並べ替えます。
* **By Location:** アイテムを場所別に並べ替えます。
* **By Type:** アイテムをタイプ別に並べ替えます。
* **By Size:** サイズが小さいものから大きいものまで、サイズでソートします。
* **By Date Accessed:** 最後にアクセスした日付でアイテムをソートします。
* **By Date Created:** アイテムを作成日順に、最も古いものから最新のものまで並べ替えます。
* **By Date Modified:** 最後に変更された日付でアイテムをソートします。

終了したら、**[OK]** ボタンをクリックしてオプションダイアログを閉じ、選択した内容を有効にします。**Cancel** ボタンをクリックすると、変更を保存せずにダイアログを閉じます。**[Refresh]** ボタンは最近保存した設定に戻り、**[Defaults]** ボタンはレジストリに保存された設定に戻ります。
Program Windowの **[View Options]** ダイアログへの変更は、GO-Globalにまだサインインしていないユーザにのみ適用されます。これらの変更は、すでにサインインしていて、既存のGO-Globalユーザプロファイルを持っているユーザには適用されません。
Program Windowを実行しているとき、ユーザは[View | Options]をクリックしてProgram Windowの表示をカスタマイズできます。
ただし、**[Allow users to set their options]** が無効になっている場合、すべてのユーザのProgram Windowの **View** は、Admin Consoleで指定されたものになります。ユーザがProgram Windowを実行すると、メニューバーに **View** オプションが表示されず、右クリックコンテキストメニューに表示オプションも表示されません。

# GO-Globlal AppController Web Interfaceのブランディング

AppControllerは、コンピュータのデスクトップ、モバイルデバイス、またはWebブラウザから起動できる、ブランド化されていないカスタマイズ可能なアプリケーションです。AppController の Web インターフェースはローカライズされ、顧客の名前やロゴでブランディングすることができます。

### AppControllerのブランディング

1. Admin Consoleから、[Tools | Branding] をクリックします。
2. **AppController** タブをクリックします。
3. 次のいずれかをパーソナライズします。
* Company Name
* Product Name
* インストーラのプレフィックス(既定では、インストーラの名前はGO-Global AppController.exeです。インストーラーのプレフィックスがGO-Globalに置き換わります)。
4. Colorsボタンをクリックして、AppControllerをブラウザウィンドウ内で実行したときの背景色を選択します。カラーピッカーダイアログから色を選択しOKをクリックします。
5. AppControllerのインストール手順をInstall instructionsフィールドで編集します。
6. 新しい製品ロゴを参照するには、browseボタンをクリックします。次の形式がサポートされています。.jpg、.jpeg、.png。
7. AppControllerインストール用ウェブページのBackgroundを選択するには、browseボタンをクリックします。次の形式がサポートされています。.jpg、.jpeg、.png。ブラウザのウィンドウに合わせて画像のサイズを変更するには、[Scale image]をクリックします。画像の解像度を保持し、ブラウザウィンドウの中央に表示するには、[Center image]をクリックします。
8. **[Clear all to restore defaults]** ボタンをクリックして、元のテキストと画像に戻します。
9. **[OK]** をクリックします。


以下は、ブランド化されローカライズされた AppController ウェブインターフェースの例です。製品ロゴと背景画像がブランド化され、会社名、製品名、インストーラのプレフィックス、AppController のインストール方法が変更されています。
![]()


![4-20-1](/img/4-20-1.png)

ブランディングオプションは、group="Branding"の下の`C:\ProgramData\GraphOn\GO-Global\HostProperties.xml`ファイルに保存されます。画像は`C:\ProgramData\GraphOn\GO-Global\images`に保存されます。
Relay Load BalanceまたはFarm Managerを使用すると、クラスタ内のすべてのホストで設定の変更が自動的に行われます。Relay Load BalanceまたはFarm Managerを使用しない場合、ブランドオプションをコンピュータ間で手動でコピーできます。詳細については、[あるホストから別のホストへの構成設定の手動コピー](/docs/go-globalrc61/advancedtopics/configuringafarmhost/#あるホストから別のホストへの構成設定の手動コピー)を参照してください。
