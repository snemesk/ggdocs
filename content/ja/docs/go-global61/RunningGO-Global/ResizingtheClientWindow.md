---
title: "クライアントウィンドウのサイズ変更"
linkTitle: ""
weight: 07
type: "docs"
---

コマンドライン引数–fを使用すると、コマンドライン引数–geometryを使用してクライアントウィンドウのサイズを変更できます。コマンドラインに-geometryを指定しないと、クライアントウィンドウは最大化されます。GO-Globalをルーズウィンドウモードで実行した場合、-geometryは効果がありません。クライアントウィンドウのサイズを変更するには、GO-Globalクライアント実行可能ファイルに–geometryを追加し、その後に目的の幅と高さを続けます。

例：Windows
`"C:\Program Files\GraphOn\AppController\AppController.exe" -f -geometry=800x600`

Linux: 
`./AppController -h 196.125.010.222 -f -geometry=800x600`

Mac: 
`./AppController -h 196.125.010.222 -f -geometry=800x600`
