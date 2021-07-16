---
title: "あるホストから別のホストへの構成設定の手動コピー"
linkTitle: ""
weight: 11
type: "docs"
---
アプリケーションホストマネージャ(Relay Load BalancerまたはFarm Manager)を使用すると、クラスター内のすべてのホストで設定の変更が自動的に行われます。ただし、アプリケーションホストマネージャを使用しない場合は、ブランド設定ダイアログで指定したものなどのホスト構成設定を、あるコンピュータから別のコンピュータに手動でコピーできます。

### 構成設定を手動でコピーする方法

1. 必要に応じて、サンプルホストですべての設定を構成します。
2. 次のレジストリキーをエクスポートします。`HKEY_LOCAL_MACHINE\Software\GraphOn\GO-Global`
3. ターゲットホストで **Application Publishing Service** を停止します。
4. 次のファイルをサンプルホストからターゲットホストにコピーします。<br>
	`％PROGRAMDATA％\Graphon\GO-Global\HostProperties.xml`<br>
 	`％PROGRAMDATA％\Graphon\GO-Global\DefaultWorkspaceProperties.xml`<br>
	`％PROGRAMDATA％\Graphon\GO-Global\images\*.*`<br>
5. 手順2で作成した.regファイルを実行します。
6. ターゲットホストで **Application Publishing Service** を再起動します。
7. 他のホストについて、手順2〜6を繰り返します。






