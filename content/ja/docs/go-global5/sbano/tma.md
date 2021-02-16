+++
title = "テーマ"
description = ""
weight= 9
+++

Windows 7以降では、GO-Globalはホストで指定されているテーマを使用してアプリケーションを表示します。Windows Server 2008 R2では、Windowsのテーマはデフォルトで有効になっていません。

### Windows Server 2008 R2でテーマを有効にする方法

1. デスクトップエクスペリエンスをインストールする([http://technet.microsoft.com/en-us/library/cc742809.aspx](http://technet.microsoft.com/en-us/library/cc742809.aspx))。
2. ホストを再起動したら、Themesサービスを起動します。
3. クラスタマネージャでグループポリシーを有効にします。
  a. クラスタマネージャで、[ツール]メニューから[ツール | ホストオプション]をクリックします。
  b. **Session Startup**タブをクリックします。
  c. **Apply Group Policy**を有効にする。
4. グループポリシーを介してすべてのユーザに対してテーマを有効にします。
  a. mmcを実行
  b. [**ファイル | スナップインの追加と削除...**]をクリックします。
  c. **グループポリシーオブジェクト**を選択
  d. **追加**をクリックします。
  e. **完了**をクリックします。
  f. ユーザーの構成\ポリシー\管理用テンプレート\コントロールパネル\個人用設定に移動します。
  g. **「特定のビジュアルスタイルファイルを強制するかWindows Classicを強制する」**をダブルクリックします。
  h. **有効**をクリックします。
  i. [**ビジュアルスタイルへのパス**]で、パスを入力します。%windir%\resources\Themes\Aero\ aero.msstyles
