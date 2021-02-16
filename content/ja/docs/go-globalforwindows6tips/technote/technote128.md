+++
title = "APPLICATIONは、一度に1つだけのGO-Globalセッションで実行されます"
description = ""
weight = 4
+++

### **背景**

セッションごとにプロセスのインスタンスが1つだけ実行されるように、アプリケーションはセッションIDを使用することがよくあります。GO-Globalセッションは、システムのセッションIDをゼロ(0)で共有します。

### **解決策**

システムのセッションIDではなくGO-GlobalセッションIDを必要とするアプリケーションがある場合、管理者はレジストリキーの下に実行可能ファイルの名前を追加できます。

**`HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\Compatibility\ProcessIdToSessionId`** のDWORD値を作成して0x00000001の値にします。

このレジストリキーの下にリストされたデータ値が0x00000001の名前のいずれかと一致する実行可能ファイルが **ProcessIdToSessionId** を呼び出すたびに、指定されたセッションIDバッファはセッションIDゼロ(0)ではなくGO-GlobalセッションIDで埋められます。

Windows ProcessIdToSessionId APIを呼び出すときにシステムのセッションIDではなくGO-GlobalセッションIDを取得するアプリケーションのリストにアプリケーションを追加するには、以下の手順を実行します。

1. レジストリエディタ(regedit.exe)を実行します。
2. **互換性キー** を見つけます。 `HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\Compatibility`
3. 必要に応じて、 **ProcessIdToSessionId** という名前のサブキーを作成します。
4. 実行可能ファイル(example.exe)の **DWORD** エントリを作成します。
5. 新しいエントリの値を **0x00000001** に設定します。
6. レジストリエディタを閉じます。