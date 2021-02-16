
+++
title = "Automatic Client Updates"
description = ""
weight = 6
+++

>本項目の設定は推奨設定ではございませんのでご注意ください。

Administrators can configure GO-Global to automatically update the GO-Global Client when users connect to a GO-Global Host that is running a newer version.

### To enable Automatic client updates

1. Install the GO-Global Client on client computers using the **gg_client.windows.exe** setup program. (The Automatic client update feature is only available for Windows computers.)
2. From the Cluster Manager, click Tools | Host Options.
3. Click the **Client Access tab**.
4. Enable **Automatically update clients.**
5. Click **OK.**

Mac and Linux users can download the updated client file by connecting to the GO-Global client installation page (e.g. [http://hostname/goglobal/clients.html](http://hostname/goglobal/clients.html)) and installing the appropriate client.

Users who have installed the Plug-in with Mozilla Firefox, can update the Plug-in via Firefox's Add-on manager.

### To update the Plug-in

1. In Firefox, select Tools | Add-ons
2. Click the **Find Updates button.**
3. Install the update.

When **Automatically update clients** is selected in the Cluster Manager and a user signs in to the host from a Windows computer, GO-Global compares the version of the GO-Global Client installed on the client computer to the version in the Updates directory on the Host. If the files in the Updates directory are newer, GO-Global copies the newer files to a temporary directory on the client computer. Then, when the GO-Global Client closes, the **GO-Global Update Client**service installs the new files so they can be used in subsequent GO-Global sessions. Users will be updated on the screen when the new updates have completed installing.

In summary, a new GO-Global Client will be installed via the update client service when the following conditions are met:

* **Automatically update clients**is enabled in the Cluster Manager.
* The **GO-Global Update Client**service is installed and enabled on the client computer.
* A newer version of the client is available in the Updates directory on the host.
* All of the files in the new version have been downloaded to the client computer.
* The user has signed out of his or her GO-Global Client session.

>The default location for the Updates folder is C:\Program Files\GraphOn\GO-Global\Updates which is defined in the registry key: HKEY_LOCAL_MACHINE\SOFTWARE\GraphOn\GO-Global\Updates.

Users are not required to perform any upgrade tasks. They can, however, prevent updates from being installed by disabling the GO-Global Update Client service on the client computer.

### To disable the GO-Global Update Client service

1. Right-click My **Computer.**
2. Click **Manage.**
3. Click Computer Management | Services and Applications | Services.
4. Select **GO-Global Update Client.**
5. Click **Properties.**
6. Under **Startup type**, select **Disabled.**
7. Click **Stop.**
8. Click **OK.**