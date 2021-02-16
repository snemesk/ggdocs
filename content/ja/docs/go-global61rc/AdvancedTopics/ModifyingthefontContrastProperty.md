---
title: "fontContrastプロパティを変更する"
linkTitle: ""
weight: 19
type: "docs"
---

**DefaultWorkspaceProperties.xml** ファイルの **fontContrast** プロパティの値を変更することで、フォントとテキストの明瞭さを調整できます。 **fontContrast** の最大値は2200、最小値は1000です。このプロパティはデフォルトで1400に設定されています。

### fontContrastプロパティを変更する方法

1. **GO-Global Application Publishing Service** を停止します。
2. `C:\ProgramData\GraphOn\GOGlobal`ディレクトリで **DefaultWorkspaceProperties.xml** ファイルを見つけます。
3. ワードパッドで **DefaultWorkspaceProperties.xml** を開き、次のセクションを見つけます。

```
</property>
<property type="UINT32" group="Miscellaneous" id="fontContrast">
<value>1400</value>
</property>
```
4. 1400を希望の値に置き換えます。
5. 編集した.xmlファイルを保存します。
6. **GO-Global Application Publishing Service** を起動します。
