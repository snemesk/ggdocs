---
title: "GGPramEdit"
linkTitle: ""
weight: 30
type: "docs"
---

## 変更履歴
[2017-06-08: 1.0.0]<br>
・HostProperties.xmlおよびDefaultWorkspaceProperties.xmlをGUIで編集するツール<br>
・初版<br>

### 機能
![GGEasyUDPCheck1](/expackimage/GGPramEdit1.png)

C:\ProgramData\GraphOn\HostProperties.xml および C:\ProgramData\GraphOn\DefaultWorkspaceProperties.xmlを編集する際にGO-Global Application Publishing Serviceを止めてから編集をして再起動をする手順を踏まないと
設定は反映されない。管理者の中にはこの作業手順を忘れて編集を行い設定値が反映されない事を防ぐためのツール。


### 設置方法

設定変更したいサーバにGGPramEdit.exeを配置。

### 使用方法
1. 利用者がGGPramEdit.exeを配置したところで実行。<br>
2. GUI画面が起動しますので設定値を変更。
3．[保存]をクリックすると、GO-Global Application Publishing Serviceが自動的にOFFになり、C:\ProgramData\GraphOn\HostProperties.xml および C:\ProgramData\GraphOn\DefaultWorkspaceProperties.xmlの設定値が変更されGO-Global Application Publishing Serviceが自動的にONになります。

{{% alert title="参照" color="info" %}}
設定変更を行いたいサーバが複数ある場合はそれぞれのサーバで作業を行ってください。
{{% /alert %}}


{{% alert title="情報" color="green" %}}
- KGTN 2017060201
{{% /alert %}}