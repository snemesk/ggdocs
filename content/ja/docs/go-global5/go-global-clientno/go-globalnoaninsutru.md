+++
title = "GO-Globalのアンインストール"
description = ""
weight = 5
+++


GO-Globalのアンインストール方法はプラットフォームとブラウザによって異なります。

### WindowsのGO-Globalクライアントをアンインストールする方法

1. コントロールパネルを開きます。
2. **プログラムと機能**をダブルクリックします。
3. **GO-Globalクライアント**を選択します。
4. **変更**をクリックします。
5. **次**をクリックしてください。
6. **削除**を選択します。
7. **次**をクリックしてください。
8. **削除**をクリックします。

### Linux(Red Hat、CentOS、SuSE)のGO-Globalクライアントをアンインストールする方法

1. rootとしてLinuxコンソールを起動します。
2. **rpm -e gg-client.linux**と入力します。

### Linux(Ubuntu)のGO-Globalクライアントをアンインストールする方法

1. rootとしてLinuxコンソールを起動します。

* Ubuntu(x64)では **apt-get remove gg-client**と入力します。
* Ubuntu(x86)では **dpkg -r gg-client**と入力します。

### Mac OS のGO-Globalクライアントをアンインストールする方法

1. [Terminal] を開きます。
2. **root**でログオンします(**su**と入力して **Enter**キーを押し、次にrootパスワードを入力します)。
3. /Applications/ggw.app/Contents/Utils/ディレクトリに切り替えます。
4. **./Uninstall.sh**と入力してスクリプトを実行します。
5. [Terminal]を閉じます。

### FirefoxからGO-Globalクライアントをアンインストールする方法

1. Mozilla Firefoxを開きます。
2. Tools | Addonsをクリックします。
3. GraphOn GO-Globalセクションの **Uninstall**をクリックします。
4. Mozilla Firefoxを閉じます。

GO-Globalをアンインストールした後は、Firefoxブラウザのキャッシュを消去することをお勧めします。

### Linux用プラグインをアンインストールする方法

1. Linux コンソールを起動します。
2. 次のように入力して、Plug-in を削除します。

```
rm -rf ~/.mozilla/plugins/libnpg.so ~/.mozilla/plugins/libpbr.so > ~/.mozilla/ gg-client
```

プラグインを再インストールする予定の場合は、Firefoxブラウザのキャッシュをクリアすることをお勧めします。

### Internet ExplorerからGO-Globalクライアントをアンインストールする方法

1. Internet Explorerを起動します。
2. ツール | インターネットオプション | プログラム | アドオンの管理の順にクリックします。
3. GO-Global 5をクリックします。
4. **削除**をクリックします。もし **削除**ボタンがない場合(例：IE8)
  1. **GO-Global 5**をダブルクリックします。
  2. **詳細情報**をクリックします。
  3. **削除**をクリックします。

ActiveX Controlの再インストールや実行がうまくいかない場合は、ブラウザのキャッシュを削除してください。これには、Internet Explorer を起動して [ツール | インターネットオプション] の順にクリックします。 [**General**]タブをクリックして、 [**Temporary Internet Files**]の下にある [**Delete Files**]をクリックします。その後、コマンドプロンプトウィンドウで、コンフリクトを起こしているディレクトリがないか確認します。

### コンフリクトを起こしているディレクトリの確認方法

1. コマンドプロンプトウィンドウを開きます。
2. **ダウンロードしたプログラムファイル**の保存先フォルダ名を入力し、コンフリクトを起こしているディレクトリがないか確認します。もしあれば、そのディレクトリを削除します。
3. コマンドプロンプトウィンドウを閉じます。

### Apple SafariからGO-Globalクライアントをアンインストールする方法

1. [Terminal] を開きます。
2. **root**でログオンします(**su**と入力して **Enter**キーを押し、次にrootパスワードを入力します)。
3. /Applications/ggw.app/Contents/Utils/ ディレクトリに切り替えます。
4. **./Uninstall.sh** と入力してスクリプトを実行します。
5. [Terminal] を閉じます。

>GO-Globalの画面のスクロール速度が遅い場合は、ホストの[スムーズスクロール]オプションを無効にしてください。Internet Explorerの場合は、[Tools | Internet Options] の順に選択し、[Advanced]タブをクリックします。[Settings]ボックスの[Browsing]のところで、[Use smooth scrolling]を無効にしてください。