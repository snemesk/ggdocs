---
title: "GO-Globalのアップデート"
linkTitle: ""
weight: 29
type: "docs"
---
{{% alert title="情報" color="green" %}}
本項目の設定は以下の技術ノートを参照ください。
- KGTN 20200040702
- KGTN 20200040801
- KGTN 20200040802
{{% /alert %}}
GO-Global アップデートには 3 つのタイプがあります。

- Critical
- Recommended
- Optional

重要な更新は、Microsoft Windows の最新リリースで GO-Global を実行するために必要な変更です。重要な更新には機能の変更は含まれていません。一般的には、ホスト上のいくつかのバイナリファイルを置き換えるだけです。推奨更新は、GO-Global の不具合やユーザビリティの問題を修正するための変更です。重要な欠陥を修正するためにユーザー インターフェイスの変更が必要な場合を除き、通常、ユーザー インターフェイスの変更は含まれません。推奨更新は通常、GO-Global のすべてのバイナリ ファイルを置き換えます。オプションの更新は、GO-Global に新しい機能と機能を追加する変更です。オプションの更新には、メジャー アップグレードとマイナー アップグレードが含まれます。オプションの更新は通常、GO-Global のすべてのバイナリ ファイルを置き換えます。

GO-Global は、Windows 互換性保証オプションが有効になっている場合にのみ、重要な GO-Global 更新プログラムを自動的にダウンロードしてインストールします。デフォルトでは、GO-GlobalはWindows更新プログラムのインストールを、グラフオンによって認証されるまで延期します。

### GO-Globalアップデートのインストール GO-Global

GO-Global では、[ホスト オプション] ダイアログの [更新] タブに利用可能な GO-Global 更新プログラムが表示され、管理者は更新プログラムを選択してインストールすることができます。次の例では、利用可能な GO-Global の更新プログラムは 2 つあります：host_6.1.0.29711.msi と web_6.1.0.29711.msi です。どちらも推奨されるアップデートです。
![4-17-1](/img/4-17-1.png)

1. 管理者コンソールから、[ツール] > [ホストオプション] をクリックします。
2. 更新] タブをクリックします。
3. 利用可能な GO-Global アップデートのリストからアップデートを選択します。
4. インストール] ボタンをクリックします。
5. はい] をクリックして確認します。

更新プログラムのインストールを確認すると、次のメッセージが表示されます。

![4-17-2](/img/4-17-2.png)

インストールされているアップデートは、コンピュータを再起動すると有効になります。グラフオンでは、ユーザーが影響を受けないタイミングで再起動することをお勧めします。

## 保留中のアップデートとインストールされているアップデートの確認

アップデート チェックを実行するとき、アプリケーション パブリッシング サービスは、以下をサポートするアップデートを探します。

　a. コンピュータにインストールされている GO-Global のバージョン。

　b. コンピュータのオペレーティングシステムのバージョン、および

　c. ホストにダウンロードしてインストールすることが承認されている更新プログラムの種類。

アプリケーション公開サービスが一致するものを見つけると、更新プログラムのインストーラーをダウンロードして実行します。更新プログラムのインストーラーが実行されると、更新プログラムは保留中ですが、まだ完全にはインストールされていません。保留中の更新プログラムはインストールされ、次回のコンピュータの再起動時に有効になります。管理者は、管理者コンソールの**ホストオプション**ダイアログの[更新]タブで、保留中の更新プログラムとインストール済みの更新プログラムを表示できます。

### 保留中のアップデートやインストールされているアップデートを確認するには

1. 管理者コンソールから、[ツール] > [ホストオプション] をクリックします。
2. 更新」をクリックします。
3. **次の GO-Global 更新プログラムが有効になります*** 次回のコンピュータの再起動時に、グループボックスには、ダウンロードされたがまだ完全にインストールされていない更新プログラムが一覧表示されます。
4. **次の GO-Global 更新プログラムがインストールされています** グループボックスには、ホストにインストールされ、有効になっている更新プログラムが一覧表示されます。
5. OK] をクリックします。
