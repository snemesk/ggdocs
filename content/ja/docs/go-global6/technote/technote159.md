+++
title = "クライアントファイルキャッシュの期限"
description = ""
weight = 5
+++


デフォルトでは、GO-Globalはファイルの内容をキャッシュし、60秒ごとに変更をチェックします。ファイルがGO-Globalの外部でローカルに変更されていて、60秒が経過する前にファイルが閉じられると、変更はGO-Globalに登録されません。DefaultWorkspaceProperties.xmlファイルの2つのプロパティを編集して、クライアントファイルのキャッシュタイムアウトを変更できます。

* **fileCacheAttribTimeout:**GO-Globalがファイル属性を無効にするまでのタイムアウト(ミリ秒)
* **fileCacheDirListTimeout:**GO-Globalがフォルダリストを無効にするまでのタイムアウト(ミリ秒)

### fileCachAttribTimeoutおよびfileCacheDirListTimeoutを設定する方法

1. 次のディレクトリでDefaultWorkspaceProperties.xmlファイルを見つけます。C:\ProgramData\GraphOn
2. ワードパッドでDefaultWorkspaceProperties.xmlを開き、次のセクションを見つけます
```
<property id="fileCacheAttribTimeout" group="ClientAccess" type="UINT32">
<value>60000</value>
</property>
<property id="fileCacheDirListTimeout" group="ClientAccess" type="UINT32">
<value>60000</value>
</property>
```

3. 値に必要なミリ秒数を入力します。(この値は1以上の整数でなければなりません。両方のプロパティーのデフォルト値は60000です。)
