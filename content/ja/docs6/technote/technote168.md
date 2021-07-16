+++
title = "グループポリシーとログオンスクリプトの進捗メッセージ"
description = ""
weight = 9
+++
グループポリシーが有効になっている場合、またはログオンスクリプトが実行されている場合は、ログオンプロセスが非常に早く行われるため、これらの操作に関連する進行状況メッセージがユーザーに表示されません。

AppServerキーの下のレジストリ値SessionStartupProgressDisplayを0x00018481に変更すると、各起動メッセージが表示されてからさらに4秒が経過するため、グループポリシーとログオンスクリプトの進行状況メッセージがユーザーに表示されます。

1. GO-Global Application Publishing Serviceを停止します。
2. レジストリエディタ(regedit.exe)を実行します。
3. レジストリエディタから、HKEY_LOCAL_MACHINEキーを展開します。
4. SessionStartupProgressDisplayキーを見つけます。[SOFTWARE\GraphOn\GO-Global\AppServer.]
5. SessionStartupProgressDisplay値を18481に設定します。
6. レジストリエディタを閉じます。
7. GO-Global Application Publishing Serviceを起動します。
