---
title: "Upgrading from GO-Global 6.0 to 6.1"
linkTitle: ""
weight: 02
type: "docs"
---

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。ライセンスのアップグレード申請を行う際にはきっとエイエスピー営業部までお問い合わせください。アップグレード手順については弊社技術支援センターまでお問い合わせください。
{{% /alert %}}

Before upgrading to version 6.1, you must upgrade the GO-Global license(s) by submitting a **License Change Request** via the GraphOn portal. The version 6.1 host installer will not upgrade a computer that does not have a version 6.1 GO-Global license.
After signing in to the portal, click License Management then click **License Change Request** and complete the form.
After submitting the **License Change Request** form, a GO-Global license will be sent via email. Place the new license file in the default license directory: C:\Program Files\GraphOn\GO-Global\Licensing. Optionally remove all older licenses from the **Licensing** directory.
After restarting the License Manager, run the version 6.1 GO-Global host installer by double-clicking **gg-host.exe.**
When upgrading to version 6.1, you will be prompted to restart the computer. The host installer will resume automatically after restarting.