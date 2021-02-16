+++
title = "Upgrading GO-Global"
description = ""
weight = 1
+++

{{% alert title="Note" color="info" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。ライセンスのアップグレード申請を行う際にはきっとエイエスピー営業部までお問い合わせください。
{{% /alert %}}
{{% alert title="Note" color="warning" %}}
GO-Global version5から6へのアップグレード手順は以下の技術ノートを参照ください。
技術ノート KGTN 2019061901　技術ノート KGTN 2019071702
{{% /alert %}}

Before upgrading to version 6, you must upgrade the GO-Global license(s) by submitting a License Change Request via the [GraphOn portal](https://www.graphon.com/). The version 6 host installer will not upgrade a computer that does not have a version 6 GO-Global license. After signing in to the portal, click License Management then click License Change Request and complete the form.

After submitting the License Change Request form, a version 6 GO-Global license will be sent via email. Place the new license file in the directory where the existing version 5 license file is stored. (The default license folder for GO-Global version 5 is C:\Program Files\GraphOn\GO-Global\Programs.)

Remove all version 5 licenses from the Programs directory. Then restart the **GO-Global License Manager.**

### To restart the License Manager

1. Click Control Panel | Administrative Tools | Services.
2. Select **GO-Global License Manager**from the list of services.
3. Right-click and select Restart.

Restarting the License Manager will not affect existing sessions running on the GO-Global Host.

After restarting the License Manager, run the version 6 GO-Global host installer by doubleclicking gg-host.exe.

When upgrading to version 6, you will be prompted to restart the computer two times. The host installer will resume automatically after restarting. As part of the installation process, existing versions of GO-Global are removed, but Registry settings and files are saved.These files can be found in the **Program Files\GraphOn\GO-Global.backup**folder and in the Registry at HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global.backup. The installer also moves the new license file(s) from the Programs directory to the Licensing directory.

{{% alert title="Note" color="info" %}}
Customers will be unable to upgrade their version 5 license to version 6 if their Support contract has expired. To renew, contact your GO-Global reseller or sales@graphon.com.
{{% /alert %}}
