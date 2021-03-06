---
title: "高解像度クライアントデバイス"
linkTitle: ""
weight: 18
type: "docs"
---
ディスプレイを拡大縮小するように設定されている高解像度クライアントデバイス上でGO-Global AppControllerを実行すると、AppControllerは、セッションで実行されているアプリケーションのテキストとコントロールが、クライアントデバイスでローカルに実行されているアプリケーションのテキストとコントロールと同じサイズになるように、GO-Globalセッションのグラフィカル出力を拡大しようとします。たとえば、クライアントコンピュータが表示を200％拡大するように設定されている場合、AppControllerはホストから受信したグラフィックスコマンド(テキスト文字や画像など)を200％拡大します。

クライアントが画像やテキストなどのグラフィックオブジェクトを引き伸ばすとき、それらの品質はオブジェクトが100％で描画されるときほど良くありません。たとえば、テキスト文字の端は、引き伸ばしたときほど滑らかではありません。文字がブロック状またはぼやけて見えることがあります。高解像度の画面(ディスプレイの拡大縮小が最も頻繁に有効になっている場合)では、これらの効果は通常あまり目立ちません。高解像度の画面（ディスプレイの拡大縮小が最も頻繁に有効になっている場合）では、これらの効果は通常あまり目立ちません。 ただし、低解像度の画面では、特に表示倍率が125％などの整数でない値に設定されている場合、影響が非常に顕著になります。 これらの影響が顕著な場合は、GO-Globalのスケーリング機能を次のように無効にすることができます。

* クライアントがショートカットから実行する時は、クライアントのコマンドラインに **-clientdpi 0** を追加します。
* クライアントがブラウザから実行されている場合は、URLに **＆clientdpi=false** を追加します。
* すべてのユーザに対してホスト上の機能を無効にするには、ホスト上の **HostProperties.xml** ファイルの **ClientDPIScalingEnabled** プロパティの値を「true」から「false」に変更します。

GO-Globalのスケーリング機能が無効になっていると、GO-Globalはホスト上のコントロールパネルのディスプレイアプレットでユーザに指定されたスケールファクタを使用してセッションをレンダリングします。この構成では、管理者は表示アプレットをユーザに公開することによってユーザにDPI設定の変更を許可することができます。

### 表示アプレットをユーザに公開する方法

1. ホスト上のコンソールに管理者としてサインインします。
2. 表示アプレットへのショートカットを作成します。<br> 
    a.**[スタート | コントロール]** の順にクリックしてます。<br>
    b. **[表示]** を右クリックします。 ショートカットがデスクトップに追加されます。<br>
    c.ショートカットをすべてのユーザがアクセスできるディレクトリ(例：C:\Users\Public\Desktop)にドラッグします。<br>
3. ユーザにショートカットを公開する。<br>
    a.Admin Consoleを実行し、 **[Application | Add]** の順にクリックします。<br>
    b. **[Display Name]** フィールドに「Display Setting」(または他のわかりやすい名前)と入力します。<br> 
    c. **[Executable Path]** フィールドにexplorer.exeへのパス(例：C:\Windows\explorer.exe)を入力します。<br>
    d. **[Command-Line Options]** フィールドに、手順2で作成したショートカットのパスを入力します(例C:\Users\Public\Desktop\Display.lnk)。<br>
    e. **[OK]** をクリックします。<br>

# Program Window を閉じるオプションを設定する

ProgramWindowCloseOption キーを編集することで、管理者は、ユーザが右上隅の X ボタンをクリックしたときにProgram Windowがどのように閉じるかを決定することができます。既定では、ProgramWindowCloseOptionは1に設定されています。ユーザが X ボタンをクリックすると、Sign outオプションが実行され、サインアウトの確認を求められます。なお、ユーザは[File | Disconnect]をクリックしても切断することができます。

ProgramWindowCloseOptionキーを編集するには
1. レジストリエディタ(regedit.exe)を実行します。
2. Locate the ProgramWindowCloseOption key: [HKEY_LOCAL_MACHINE_Software\GraphOn\GO-Global\AppServerProgramWindowsCloseOption]
3. エントリの値を以下のいずれかに設定します。

0: 切断 
Admin Console の [切断されたセッションを終了する] オプションが [しない] または [x 分後] に設定されている場合、ユーザーがプログラム ウィンドウの右上隅にある [X] ボタンをクリックすると、Program Windowsで[File | Sign out]オプションが実行されます。
ユーザには以下のダイアログが表示されます。再接続するまで、セッションとそのアプリケーションはホスト上で実行され続けます。
そうでない場合は、［切断されたセッションを終了する］オプションが［即時］に設定されていると、Program Windowsで[File | Sign out]オプションが実行され、次のようなダイアログが表示されます。あなたのセッションとアプリケーションが閉じられます。サインアウトしてもよろしいですか？

1: サインアウト 
ProgramWindowCloseOptionが1に設定されている場合、ユーザがXボタンをクリックすると、Program Windowsは[File | Sign out]オプションを実行し、以下のメッセージが表示されます。あなたのセッションとアプリケーションが閉じられます。本当にサインアウトしてもよろしいですか？

2: クローズ
ProgramWindowCloseOptionが2に設定されている場合、ユーザーがxボタンをクリックすると、Program Windowsは[File | Sign out]オプションを実行します。これによりProgram Windowは閉じますが、ユーザのアプリケーションはホスト上で実行され続けます。
4. レジストリエディタを閉じます。