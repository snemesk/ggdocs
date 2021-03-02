---
title: "変更履歴"
weight: 02
type: "docs"
---

# Version 6.1.1.30272のトピックス

1. バージョン 6.1.1では、Video Replayはデフォルトで無効になっています。管理者は、Admin Consoleの[Host Options]ダイアログの[Client Access]タブでVideo Replayを有効にすることができます。

# Version 6.1.0.30001のトピックス

1. GO-Global6.1は、バージョン6.0のライセンスでは使用できません。以前のバージョンからGO-Global6.1にアップグレードする場合は、新しいバージョン6.1のライセンスファイルが必要になります。カスタマーポータルのライセンス変更要求(LCR)ページから、新しいライセンスファイルを要求できます。
2. GO-Global Appは、顧客自身の企業ブランドでパーソナライズできるアプリケーションであるAppControllerに置き換えられました。
3. [Host Options]ダイアログには、次の変更が含まれています。
- [Use client’s time zone]オプションが[Client Access]タブに移動しました。
- [Shared account]オプションが[Session Shutdown]タブに移動しました。
- [General]タブが削除されました。
- GO-Globalホストのサーバーロールを指定するための[Configuration]タブが追加されました。
4. GO-Global 6.1ホストは、Windows 7、Windows 8、Windows 8.1、Windows Server 2008 R2、またはWindows10バージョン1803以前をサポートしていません。
5. GO-Globalは、VMware ESXi、Microsoft Hyper-V、CitrixHypervisorなどのハイパーバイザ製品によって管理されるゲストオペレーティングシステムにインストールして実行できます。GO-Globalは、Hyper-Vの役割または機能が有効になっているコンピュータではサポートされていません。
6. バージョン6.1より前のバージョンでは、GO-Globalはデフォルトで依存ホストからのライセンスを管理していました。これにより、管理者は中央のライセンスマネージャを使用するように各依存ホストを構成する必要がありました。バージョン6.1では、GO-Globalはデフォルトでリレーサーバからのライセンスを管理します。これにより、管理者は、ライセンス構成を変更することなく、依存ホストをリレーサーバに追加したり、リレーサーバから削除したりできます。
6.1では、リレーサーバはリレーロードバランサと呼ばれるようになり、[Host Options]ダイアログの新しい[Configuration]タブで構成されることに注意してください。
