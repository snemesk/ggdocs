---
title: "Upgrading from GO-Global 4.8.2 and 5.0"
linkTitle: ""
weight: 03
type: "docs"
---
{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。ライセンスのアップグレード申請を行う際にはきっとエイエスピー営業部までお問い合わせください。アップグレード手順については弊社技術支援センターまでお問い合わせください。
{{% /alert %}}

{{% alert title="情報" color="green" %}}
5.0から6.0へのアップグレードの設定は以下の技術ノートを参照ください。<br>

* KGTN 2018120801<br>
* KGTN 2019061901<br>
* KGTN 2019061904<br>
* KGTN 2019081402<br>
{{% /alert %}}

Before upgrading to version 6.1, you must upgrade the GO-Global license(s) by submitting a **License Change Request** via the GraphOn portal. The version 6.1 host installer will not upgrade a computer that does not have a version 6.1 GO-Global license. After signing in to the portal, click **License Management** then click **License Change Request** and complete the form.
After submitting the **License Change Request** form, a version 6.1 GO-Global license will be sent via email. Place the new license file in the directory where the existing version 5 license file is stored. (The default license folder for GO-Global version 5 is `C:\Program Files\GraphOn\GO-Global\Programs.`)
Remove all older licenses from the Programs directory. Then restart the **GO-Global License Manager.**

### To restart the License Manager

1. Click Control Panel | Administrative Tools | Services.

![kit2-8-1](/img/kit2-8-1.png)
![kit2-8-2](/img/kit2-8-2.png)
![kit2-8-3](/img/kit2-8-3.png)

2. Select **GO-Global License Manager** from the list of services.

![kit2-8-4](/img/kit2-8-4.png)
![kit2-8-5](/img/kit2-8-5.png)

3. Right-click and select **Restart.**

![kit2-8-6](/img/kit2-8-6.png)

{{% alert title="参考" color="info" %}}
Restarting the License Manager will not affect existing sessions running on the GO-Global Host.
{{% /alert %}}

After restarting the License Manager, run the version 6.1 GO-Global host installer by double-clicking **gg-host.exe.**

When upgrading to version 6.1, you will be prompted to restart the computer two times. The host installer will resume automatically after restarting. As part of the installation process, existing versions of GO-Global are removed, but Registry settings and files are saved. These files can be found in the `Program Files\GraphOn\GO-Global.backup` folder and in the Registry at `HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global.backup.` The installer also moves the new license file(s) from the **Programs** directory to the **Licensing** directory.

{{% alert title="参考" color="info" %}}
Customers will be unable to upgrade their version 5 license to version 6.1 if their Support contract has expired. To renew, contact your GO-Global reseller or sales@graphon.com.
{{% /alert %}}