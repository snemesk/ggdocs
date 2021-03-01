---
title: "最大色深度の設定"
linkTitle: ""
weight: 21
type: "docs"
---


GO-Globalセッションの色深度(または色品質)は、アプリケーションによっては画像の品質に影響を与える可能性があります。GO-Globalセッションは、最大値までクライアントシステムの色深度で実行されます。デフォルトでは、最大深度は1ピクセルあたり16ビットに設定されています。

GO-Globalセッションの最大色数を増減するには、ショートカットからGO-Globalを実行するときに–mxオプションを使用します。最大色数は、次のように-mx 32、-mx 24、-mx 16、-mx 8と指定できます。GO-Globalセッションは、-mxオプションの最小値とクライアントシステムの色数を使用します。たとえば、GO-Globalセッションを1ピクセルあたり32ビットで実行するには、-mx 32をコマンドラインに追加し、クライアントシステムを1ピクセルあたり32ビットで実行する必要があります。

例:"C:\Program Files\GraphOn\GO-Global\Client\gg-client.exe" -mx 32

![6-21-1](/image5/6-21-1.png) 

ハイパーリンクからGO-Globalを実行するときは、maxbppパラメータを8、16、24、32の値で使用します。次の例では、ハイパーリンクは最大色数を1ピクセルあたり24ビットに設定します。

[http://hostname/goglobal/logon.html?maxbpp=24](http://hostname/goglobal/logon.html?maxbpp=24)