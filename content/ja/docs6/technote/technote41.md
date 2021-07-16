+++
title = "LMGRD UTILITY IS CONSUMING 100% CPU WHEN THREE-SERVER REDUNDANCY IS USED"
description = ""
weight = 2
+++
{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

### Resolution:
1. Stop the GO-Global Application Publishing Service and the GO-Global License Manager on all three redundant GOGlobal Hosts.
2. Add the same port number on each server line in the license file. For example.And please use the same license file on all three hosts. 

```
SERVER piper 000C29750Ac6 28001
SERVER harpua 0002A5C8219D 28001
SERVER wilson 000C29C7B953 28001
```
3. Please use the same license file on all three hosts.
4. Add an environment variable for each server, using commas to separate the servers. For example, LM_LICENSE_FILE = 28001@piper,28001@harpua,28001@wilson
5. Restart the Application Publishing Service and the License Manager on the "master" server first (piper, in the example above), then on the secondary and tertiary servers (e.g., harpua and wilson, respectively).

{{% alert title="参照" color="info" %}}
Registering the Windows Shell to run in the background of a GO-Global session adds significant overhead. Sessions will take longer to start and will consume more memory. Additional overhead can also result from other processes that are registered to run when the Shell starts up.

Care should be taken to ensure that unnecessary processes are not registered in users' Startup folders or under the various Run commands in the Registry (e.g., HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run).
{{% /alert %}}