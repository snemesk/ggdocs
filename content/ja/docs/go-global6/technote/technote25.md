+++
title = "クライアントプリンタの設定後にスクリプトを実行する"
description = ""
weight = 1
+++

Program WindowsはPW_InitializePrintersEarlyというDWORDレジストリ変数をサポートしています。これによりGO-Globalはクライアントプリンタの設定後にスクリプトを実行することができます。 管理者はこの変数を手動でレジストリに追加する必要があります。

### クライアントプリンタを設定した後にスクリプトを実行する方法

1. レジストリエディタ(regedit.exe)を実行します。
2. レジストリエディタから、HKEY_LOCAL_MACHINEキーを展開します。
3. Locate the AppServer key: [SOFTWARE\GraphOn\Bridges\1.0.0\AppServer]
4. PW_InitializePrintersEarlyという名前の新しいDWORD値を作成します。
5. PW_InitializePrintersEarlyを右クリックして[変更]を選択します。
6. 値のデータフィールドに1を入力します。
7. レジストリエディタを閉じます。

レジストリ変数PW_InitializePrintersEarlyがない場合、または0(ゼロ)に設定されている場合、プログラムウィンドウは従来どおりに動作します。つまり、印刷コンポーネントをセットアップする前に補助アプリケーションを起動します。ただし、PW_InitializePrintersEarly値がレジストリに存在し、0以外の値が割り当てられている場合、プログラムウィンドウは、印刷コンポーネントを設定した後で補助アプリケーションを起動します。管理者は自分のスクリプトを「補助アプリケーション」として確立し、PW_InitializePrintersEarlyをレジストリに追加し、それをゼロ以外の値に設定する必要があります。 1が推奨されます。

補助アプリケーションを確立するには、管理者は2つのレジストリ変数をそれぞれ独自のキーの下に手動で追加する必要があります。1つ目はGraphOnキーの下に配置するDWORD、2つ目はMicrosoftキーの下に配置するストリングです。

候補として2組のキーを提供します。

The first pair:

```
GraphOn: HKEY_CURRENT_USER
SOFTWARE\\GraphOn\\Bridges\\1.0.0\\System\\Run\\CurrentUser
Microsoft: HKEY_CURRENT_USERSOFTWARE
SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run
```

The second pair:

```
GraphOn: HKEY_LOCAL_MACHINE
SOFTWARE\\GraphOn\\Bridges\\1.0.0\\System\\Run\\LocalMachine
Microsoft: HKEY_LOCAL_MACHINE
SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run
```

GO-Globalの検索アルゴリズムを満たすには、管理者は上記で指定したいずれかのGraphOnキーの下にDWORD変数を追加する必要があります。その変数の名前は任意ですので例えばPrinterScriptという名前でも構いません。その値は無関係です。次に管理者は、対応するMicrosoftキーの下に同じ名前(この例ではPrinterScript)の文字列変数を追加し、その値を目的のアプリケーションの完全修飾パスにする必要があります。
