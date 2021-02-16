+++
title = "GO-Global Updates"
description = ""
weight = 13
+++


There are three types of GO-Global Updates:

* Critical
* Recommended
* Optional

Critical updates are changes that are required for GO-Global to run on the latest releases of Microsoft Windows. Critical updates do not include functionality changes. They generally only replace a few binary files on the host. Recommended updates are changes that fix GO-Global defects and usability issues. They generally do not include user interface changes unless a user interface change is necessary to fix an important defect. Recommended updates generally replace all of GO-Global's binary files. Optional updates are changes that add new features and functionality to GO-Global. Optional updates include major upgrades and minor upgrades. Optional updates generally replace all of GO-Global's binary files.

GO-Global will only automatically download and install critical GO-Global Updates if the Windows Compatibility Assurance option is enabled. By default, GO-Global defers installation of Windows Updates until they have been certified by GraphOn.

### Installing a GO-Global Update GO-Global

displays the available GO-Global updates in the Updates tab of the Host Options dialog, and allows administrators to select an update and install it. To install an update

1. From the Admin Console, click Tools | Host Options.
2. Click the Updates tab.
3. Select an update from the list of available GO-Global updates.
4. Click the Install button.

After confirming installation of the updates, the following message is displayed:

![4-15-1](/images/4-15-1.png)

The installed updates will be enabled when the computer is restarted. GraphOn recommends restarting the computer at the first opportunity, when users will not be affected.

## Reviewing Pending and Installed Updates

When performing update checks, the Application Publishing Service looks for updates that support:

　a. the version of GO-Global that is installed on the computer,

　b. the version of the computer's operating system, and

　c. the type of updates that are approved to be downloaded and installed on the host.

When the Application Publishing Service finds a match, it downloads the update's installer and runs it. After the update's installer has been run, the update is pending but not yet fully installed. Pending updates are installed and activated the next time the computer is restarted. Administrators can view the pending and installed updates on the Updates tab of the Admin Console's **Host Options** dialog.

### To review pending and installed updates

1. From the Admin Console, click Tools | Host Options.
2. Click **Updates.**
3. **The following GO-Global updates will be enabled** the next time the computer restarts group box lists the updates that have been downloaded but are not yet fully installed.
4. **The following GO-Global updates have been installed** group box lists the updates that are installed and active on the host.
5. Click **OK.**

[Previous Windows Compatibility Assurance](https://gitbook.kitasp.com/go-global-6/go-global-admin-console/windows-compatibility-assurance) [Next クライアントマシンからのGO-Globalホストの管理](https://gitbook.kitasp.com/go-global-6/go-global-admin-console/kuraiantomashinkaranogo-globalhosutono)Last updated 10 months ago Was this page helpful?
