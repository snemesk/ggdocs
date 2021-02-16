---
title: "画像圧縮の無効化"
linkTitle: ""
weight: 22
type: "docs"
---


デフォルトでは、GO-Globalはすべての画像を1画像あたり最大256色に圧縮します。その結果、複雑な画像は鮮明さを失う可能性があります。GO-Globalクライアントで画像圧縮を無効にするには、次のようにショートカットに-qt 0を追加します。

"C:\Program Files\GraphOn\GO-Global\Client\gg-client.exe" -qt 0

ハイパーリンクからGO-Globalを実行する場合は、quantizeパラメータをfalseに設定してイメージ圧縮を無効にします

設定例: [http://hostname/goglobal/logon.html?quantize=false](http://hostname/goglobal/logon.html?quantize=false)

画像圧縮の機能を無効にすると、GO-Globalホストから送信されるデータの帯域幅が大幅に増加する可能性があるので注意して下さい。
