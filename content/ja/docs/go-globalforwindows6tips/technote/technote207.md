+++
title = "ウィンドウ枠の幅とパディングの変更"
description = ""
weight = 14
+++
ウィンドウの境界線の幅とパディングは、**Default WorkspaceProperties.xml** ファイルの **borderWidth** および **paddedBorderWidth** プロパティの値を変更することで調整できます。

| **0**           | Uses current hard-coded default values ( **borderWidth** =1; **paddedBorderWidth** =4)                                                                              |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1 or higher** | The value shown in the application will be the value specified in the .xml file                                                                          |
| **-1**          | The value shown in the application will be whatever the registry is set to, divided by -15. (The values in the registry are -15 times the actual value.) |

### 境界線のサイズとパディングを変更する方法

1. Application Publishing Serviceを停止します。
2. `C:\ProgramData\GraphOn\GO-Global`ディレクトリで **DefaultWorkspaceProperties.xml** ファイルを見つけます。
3. ワードパッドで **DefaultWorkspaceProperties.xml** を開き、 **borderWidth** および **paddedBorderWidth** の文字列を見つけます。
4. **borderWidth** と **paddedBorderWidth** を目的の値に設定します。
5. 編集した.xmlファイルを保存します。
6. **Application Publishing Service** を開始します。