
+++
title = "Automatic Host Updates"
description = ""
weight = 12
+++

>本項目の設定は推奨設定ではございませんのでご注意ください。

Administrators can configure GO-Global hosts to automatically download and install GO-Global updates using the Cluster Manager's Updates tab.

![4-12-1](/image5/4-12-1.png)

## Specifying the Types of GO-Global Updates to Download and Install

There are three types of GO-Global Updates: Mandatory updates, Recommended updates and Optional updates. Mandatory updates are changes that are required for GO-Global to run on the latest releases of Microsoft Windows. Mandatory updates do not include functionality changes. They generally only replace a few binary files on the host. Recommended updates are changes that fix GO-Global defects and usability issues. They generally do not include user interface changes unless a user interface change is necessary to fix an important defect. Recommended updates generally replace all of GO-Global's binary files. Optional updates are changes that add new features and functionality to GO-Global. Optional updates include major upgrades and minor upgrades. Optional updates generally replace all of GO-Global's binary files.

### To specify the types of updates to download and install

1. From the Cluster Manager, click Tools | Host Options.
2. Click **Updates.**
3. In the **Automatically download and install** group box, click the box beside the desired type or types of updates to download and install automatically.
4. Click **OK.**

## Specifying the Frequency of Update Checks

When one or more types of updates are checked in the Automatically download and install group box, the Application Publishing Service periodically connects to a GraphOn web site and checks for newly released updates. Administrators can specify how frequently the Application Publishing Service checks for updates.

### To specify the frequency of update checks

1. From the Cluster Manager, click Tools | Host Options.
2. Click **Updates.**
3. In the **Check for updates every __ hours** edit box, type the desired number of hours between update checks.
4. Click **OK.**

## Reviewing Pending and Installed Updates

When performing update checks, the Application Publishing Service looks for updates that support a) the version of GO-Global that is installed on the computer, b) the version of the computer's operating system, and c) the type of updates that are approved to be downloaded and installed on the host. When the Application Publishing Service finds a match, it downloads the update's installer and runs it. After the update's installer has been run, the update is pending but not yet fully installed. Pending updates are installed and activated the next time the computer is restarted. Administrators can view the pending and installed updates on the Updates tab of the Cluster Manager's Host Options dialog box.

### To review pending and installed updates

1. From the Cluster Manager, click Tools | Host Options.
2. Click **Updates.**
3. **The following updates will be enabled the next time the computer restarts** group box lists the updates that have been downloaded but are not yet fully installed.
4. **The following updates have been installed** group box lists the updates that are installed and active on the host.
5. Click **OK.**

[Previous セッションのシャットダウンオプション](https://gitbook.kitasp.com/go-global-5/cluster-manager/untitled-23) [Next クライアントマシンからのGO-Globalホストの管理](https://gitbook.kitasp.com/go-global-5/cluster-manager/untitled-27)Last updated 11 months ago Was this page helpful?Contents [Specifying the Types of GO-Global Updates to Download and Install](https://gitbook.kitasp.com/go-global-5/cluster-manager/automatic-host-updates#specifying-the-types-of-go-global-updates-to-download-and-install) [Specifying the Frequency of Update Checks](https://gitbook.kitasp.com/go-global-5/cluster-manager/automatic-host-updates#specifying-the-frequency-of-update-checks) [Reviewing Pending and Installed Updates](https://gitbook.kitasp.com/go-global-5/cluster-manager/automatic-host-updates#reviewing-pending-and-installed-updates)
