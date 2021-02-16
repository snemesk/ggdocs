---
title: "スマートカードのサポート"
linkTitle: ""
weight: 25
type: "docs"
---

GO-Globalは、Windows上でのみスマートカード文書の署名をサポートします。スマートカード文書の署名は、Admin Consoleの**[Host Options]** ダイアログの**[Client Access]** タブにある**[Smart card]** オプションを使用して、クライアントに接続されたスマートカードへのアクセスをアプリケーションに許可することで有効になります。SafeSign、SafeNet、Aladdinをクライアントにインストールする必要があります。

### スマートカード文書の署名を有効にする方法

1. Admin Consoleを起動します。
2. [Tools | Host Options | Security]をクリックします。
3. **Smart card**をクリックします。
4. **OK**をクリックします。

スマートカード文書の署名をサポートするためには、Aladdin、SafeSafeSafe、またはSafeNetがクライアントにインストールされている必要があります。

### Aladdinスマートカードを設定する方法

1. 上記のように **スマートカード** を有効にします。
2. クライアントとホストにAladdinソフトウェアをインストールします(SafeNetAuthenticationClient-x32-x64-8.1-SP2.exe)。
3. GO-Globalホストに以下のレジストリ設定を追加します。

[HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-GlobalAppServer]
**"SmartCardOptimization"** =dword:00000000

[HKEY_LOCAL_MACHINESOFTWARE\MicrosoftWindows\CurrentVersion\WinlogonNotify\ScCertProp]
**"Enabled"** =dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\SafeNetAuthentication\SAC\CertStore]
**"PropagateUserCertificates"** =dword:00000000
**"PropagateCACertificates"** =dword:00000000

[HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\System\Run\LocalMachine]
**"SafeNetCertMngr"** =dword:00000000

[HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\System\Processes]
**"SACMonitor.exe"** =dword:00000000

4. GO-Globalホストを再起動します。

### SafeSignスマートカードを設定する方法

1. 上記のように **スマートカード** を有効にします。
2. クライアントとホストに **SafeSign** ソフトウェアをインストールします。
64ビットOSの場合：gemccid_en-us_64.msi
-或いは
32 ビットOSでは。SafeSign-Identity-Client-3.0.45-admin-eval.exe
64 ビットOSでは。SafeSign-Identity-Client-x64-3.0.45-admin-eval.exe
(ユーザevalパッケージではなく、必ずadmin evalパッケージをインストールしてください)。
3. GO-Globalホストを再起動します。

### SafeNetスマートカードを設定する方法

1. 上記のように **スマートカード** を有効にします。
2. クライアントとホストに **SafeNet** ソフトウェアをインストールします。SafeNet High Assurance(x32)2.7.005.exe
64ビットOSではSafeNet High Assurance(x64)2.7.005.exe
3. GO-Globalホストにこれらのレジストリ設定を追加してください。

[HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-GlobalAppServer]
**"SmartCardOptimization"** =dword:00000000

[HKEY_LOCAL_MACHINESOFTWARE\MicrosoftWindows\CurrentVersion\WinlogonNotify\ScCertProp]
**"Enabled"** =dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\SafeNetAuthentication\SHAC\CertStore]
**"PropagateUserCertificates"** =dword:00000000
**"PropagateCACertificates"** =dword:00000000

[HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\System\Run\LocalMachine]
**"SHACMonitor"** =dword:00000000

[HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\System\Processes]
**"SHACMonitor.exe"** =dword:00000000

4. ホストを再起動します。
