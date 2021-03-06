---
title: "印刷"
linkTitle: ""
weight: 01
type: "docs"
---

GO-Globalは、すべてのクライアントでクライアント側の印刷をサポートします。デフォルトでは、GO-Globalは、ユーザがGO-Globalホストにサインインすると、クライアントのデフォルトプリンタ情報を自動的に検出します。これには、デフォルトのプリンタのポートとプリンタドライバが含まれます。プリンタドライバがGO-Globalホストにインストールされていない場合、GO-Globalはドライバを見つけて自動的にインストールしようとします。

GO-Globalホスト上でアプリケーションを実行すると、ネットワークプリンタやコンピュータに直接接続されているプリンタ(シリアルポート、パラレルポート、USBポートなど)で印刷できます。

管理者は、 **-ac**および **printerconfig**のGO-Global起動パラメータを使用して、使用可能なプリンタを制御できます。

ショートカットからGO-Globalを実行する場合は、GO-Globalホスト上で実行されているアプリケーションから"all"、"none"、"default"を指定して-acパラメータを使用します。例えば全てのプリンタを使用できるようにするには、ターゲットを次のように指定してショートカットを作成します。

```
"C：¥Program Files¥GraphOn¥GraphOn\AppController\AppController.exe" -ac all
```

と指定したターゲットでショートカットを作成します。

同様に、ハイパーリンクからGO-Globalを実行する場合は、**printerconfig**パラメータに "all"、 "none"、 "default"を指定します。たとえば、次のハイパーリンクを使用すると、すべてのプリンタが使用可能になります。

```
http://hostname/goglobal/logon.html?printerconfig=all
```

オプションを指定しない場合、GO-Globalは自動的にユーザのデフォルトプリンタのみを設定します。

{{% alert title="参照" color="info" %}}
クライアントプリンタを設定するには、 **印刷スプーラサービス**がGO-Globalホスト上で実行されている必要があります。
{{% /alert %}}