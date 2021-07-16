+++
title = "fontContrastプロパティを変更する"
description = ""
weight = 14
+++

DefaultWorkspaceProperties.xmlファイルのfontContrastプロパティの値を変更することで、フォントとテキストの明瞭さを調整できます。 fontContrastの最大値は2200、最小値は1000です。このプロパティはデフォルトで1400に設定されています。

### fontContrastプロパティを変更する方法

1. GO-Global Application Publishing Serviceを停止します。
2. C:\ProgramData\GraphOn\GOGlobalディレクトリでDefaultWorkspaceProperties.xmlファイルを見つけます。
3. ワードパッドでDefaultWorkspaceProperties.xmlを開き、次のセクションを見つけます。

```
</property>
<property type="UINT32" group="Miscellaneous" id="fontContrast">
<value>1400</value>
</property>
```
4. 1400を希望の値に置き換えます。
5. 編集した.xmlファイルを保存します。
6. GO-Global Application Publishing Serviceを起動します。
