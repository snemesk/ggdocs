---
title: "GMLogonTest"
linkTitle: ""
weight: 29
type: "docs"
---

## 変更履歴
[2018-10-18: 1.1.0]<br>
・VS2017で再構築<br>
・GGH5.0に対応<br>
・Windows Server 2012 R2 に対応<br>

[2010-07-13: 1.0.1]<br>
・画像をランダムに選択して表示するように修正

[2010-07-12: 1.0.0]<br>
・β版を作成

### 機能
このツールは，クライアント側でgg-client.exeを非同期に繰り返し起動するバッチと，サーバ側で負荷の重たい処理を実行し終了する(ログアウトする)アプリケーションから構成されます。「ログオン処理 → 高負荷な処理→ログアウト」を行うセッションを複数並行して行うことにより、擬似的に負荷試験を行うことが可能になります。

### 設置方法

サーバとクライアントにそれぞれGMLogonTest(Server Side)とGMLogonTest(Client Side)を配置。

### 使用方法
1. サーバ側で以下の作業を実施してください。<br>
1-1. GMLogonTest (Server Side) 中の Install.bat を実行します。<br>
1-2. “ユーザアカウント制御”のダイアログで「はい」 を選択します。<br>
1-3. “レジストリ エディタ”のダイアログでは「はい」(続行)を選択します。<br>
1-4. 実行完了後GO-Global Application Publishing Serviceを再起動します。<br>

![GMLogonTest1](/expackimage/GMLogonTest1.png)

2. gg-client.exeをインストールしてない場合はインストールをします。<br>
2-1. GMLogonTest(Client Side)をデスクトップにコピーします。<br>
2-2. GMLogonTest_wait_sub.bat をメモ帳で開き下記の項目を設定(変更)します。<br>
	- set host=GG サーバのIP アドレスまたはホスト名<br>
	- set user=試験に使用するアカウントのID<br>
	- set pass=試験に使用するアカウントのパスワード<br>
	- set app=GMLogonTest<br>
	- set GGDIR=Windows Client がインストールされたフォルダ<br>
2-3. GMLogonTest_sub.bat をダブルクリックして実行します。正常にログオン出来て、かつ画像が表示され、数秒後に全て終了することを確認して下さい。<br>
2-4. GMLogonTest.bat をメモ帳で開き下記の項目を設定(変更)します。<br>
	- set loop=ログオンの回数<br>
	- set wait=ログオンの間隔(秒)<br>
2-5. GMLogonTest.bat をダブルクリックして実行します。<br>

![GMLogonTest2](/expackimage/GMLogonTest2.png)

![GMLogonTest3](/expackimage/GMLogonTest3.png)

{{% alert title="参照" color="info" %}}
GMLogonTest.batはGMLogonTest_sub.bat を繰り返し起動します。GMLogonTest_sub.batは，非同期にgg-client.exeを起動しますので、ログオンの間隔の設定により、複数(多数)のセッションが同時に走ることになります。また、サーバ側のクラスタマネージャでGMLogonTest に数値の引数を与えると、その秒数後に終了するようになります。従って、クライアント側のログオンの間隔と、サーバ側のアプリケーション名の実行時間を調整することで、様々なシナリオを擬似的に試験することが出来ます。
{{% /alert %}}


{{% alert title="情報" color="green" %}}
- KGTN 2010070602
- KGTN 2010070701
{{% /alert %}}