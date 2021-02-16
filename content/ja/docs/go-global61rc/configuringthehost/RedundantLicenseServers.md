---
title: "Redundant License Servers"
linkTitle: ""
weight: 10
type: "docs"
---

{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

If you wish to use redundant servers, select stable systems as server machines. Do not pick systems that are frequently rebooted or shut down. Redundant license server machines can be any supported GO-Global Host machines. These servers must have excellent communications on a reliable network and need to be located in the same subnet. Avoid configuring redundant servers with slow communications or dial-up links.

GO-Global supports two methods of redundancy:
- Via a set of three redundant license servers
- Via a license-file list in the LM_LICENSE_FILE environment variable 

{{% alert title="参照" color="info" %}}
The License Manager service should be disabled on secondary servers of Central License Servers and Three-Server Redundant License Servers.
{{% /alert %}}

## Three-Server Redundancy

With three-server redundancy, if any two of the three license servers are up and running, a “quorum” of servers is established, and the system is functional and serves its total complement of licenses.
Three-server redundancy is designed to provide hardware failover protection only and does not provide load-balancing. This is because with three-server redundancy, only one of the three servers is **"master"** and capable of issuing licenses.

Following is an example of a three-server redundant license file that GraphOn supplies after registering online. You must provide the hostnames of the three GO-Global Hosts as well as the hostids (Ethernet addresses, in most cases) for each. The port of the license server (e.g., 27000) must also be appended to each server line, if it is not already listed.

```
SERVER wilson 000476BA8EE9 27000
SERVER piper 00115B73383E 27000
SERVER caspian 000476BA8F74 27000
DAEMON blm
INCREMENT session blm 6.0 31-dec-2020 5 99E82D1B9A64 HOSTID=ANY
INCREMENT any_app blm 6.0 31-dec-2020 uncounted D1D222D031C4 \
HOSTID=ANY
```

The three-server license file needs to be copied to each of the three license servers.

Lastly, you must point the GO-Global Host to the license server. This can be done in two different ways, either by copying the license to each GO-Global Host and editing it to use USE_SERVER (see example below), or by adding each server to the environment variable.

```
SERVER wilson 000476BA8EE9 27000
SERVER piper 00115B73383E 27000
SERVER caspian 000476BA8F74 27000
USE_SERVER
```

With the second option, add each server to the environment variable, using commas to separate the servers. For example, `LM_LICENSE_FILE = 27000@wilson`,`27000@piper`,`27000@caspian`. Restart the **GO-Global Application Publishing Service** and the **GO-Global License Manager** on the "master" server first (wilson, in the example above), then on the secondary and tertiary servers.
We recommend running Flexera’s **lmtools** application to check the status of the redundant license servers once all three servers are up and running. Launch lmtools.exe and select the **Server Status** tab. Click on **Perform Status Enquiry** and verify that your servers are “UP.”
You can obtain lmtools from the Licensing directory (`\GO-Global\Licensing`) or from the Start menu. The lmtools application is included for diagnostic purposes. Any questions on its functionality should be directed to Flexera.

## License-File List Redundancy

As an alternative to three-server redundancy, license-file list redundancy is available when there is limited system administration available to monitor license servers, when load-balancing is required for applications located far apart (e.g., Chicago and Tokyo), or when two or more license servers are required.
With license-file redundancy, each one of a group of license servers serves a subset of the total licenses. As such, this method does not provide true redundancy in the way three-server redundancy does.

Set the **LM_LICENSE_FILE** environment variable to a list of license files, where each license file points to one of the license servers. GO-Global attempts a license checkout from each server in the list, in order, until it succeeds or gets to the end of the list.
The following example illustrates how license-file list redundancy works. If ten licenses are desired, you will need to request two Product Codes with a count of five for each. The actual licenses will be generated from the Product Codes. Unlike with three-server redundancy, the server machines can be physically distant. The license servers on both servers need to be running.

The sample license files will look like: 
```
License 1 for chicago:
SERVER chicago 00508BFE7FFE 27000 DAEMON blm INCREMENT session blm 6.0 permanent 5 DF9C8F5ADF34 HOSTID=ANY \
        user_info="Joe User joeu@mycompany.com" ISSUER="GraphOn \
        Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
        1996-2020 GraphOn Corporation. All Rights Reserved" ck=142 \
        SN=12865-AA
INCREMENT any_app blm 6.0 permanent 5 1DF84A360E8F HOSTID=ANY \
        user_info=" Joe User joeu@mycompany.com " ISSUER="GraphOn \
        Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
        1996-2020 GraphOn Corporation. All Rights Reserved" ck=84 \
        SN=12865-AA
```
```
License 2 for tokyo:
SERVER tokyo 00508BF77F7E 27000 DAEMON blm INCREMENT session blm 6.0 permanent 5 16BE40E1D98D HOSTID=ANY \
        user_info="Joe User joeu@mycompany.com" ISSUER="GraphOn \
        Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
        1996-2020 GraphOn Corporation. All Rights Reserved" ck=142 \
        SN=12865-AA
INCREMENT any_app blm 6.0 permanent 5 6DB6F3E402DF HOSTID=ANY \
        user_info=" Joe User joeu@mycompany.com " ISSUER="GraphOn \
        Corporation" ISSUED=17-feb-2020 NOTICE="Copyright (C) \
        1996-2020 GraphOn Corporation. All Rights Reserved" ck=84 \
        SN=12865-AA
```

The administrator of the chicago server should set **LM_LICENSE_FILE** to: 27000@chicago;27000@tokyo where 27000 represents the port that the license servers in Chicago and Tokyo are running. This will direct the license engine to first attempt license checkouts from **chicago.** If unsuccessful, it will attempt to checkout from **tokyo.**

The administrator of the tokyo server should set **LM_LICENSE_FILE** to: 27000@tokyo;27000@chicago. This will direct the license engine to first attempt license checkouts from **tokyo.** If unsuccessful, it will attempt to checkout from **chicago.**

### To change or set the LM_LICENSE_FILE variable

1. To view or change the current Environment Variables, right-click **My Computer** and select **Properties.**

![kit2-20-1](/img/kit2-20-1.png)

2. Select the **Advanced** tab and click **Environment Variables** below.

![kit2-20-2](/img/kit2-20-2.png)

3. Under **System variables,** select LM_LICENSE_FILE and click **Edit.**

![kit2-20-3](/img/kit2-20-3.png)

4. Change the **Variable value** from `C:\Program Files\GraphOn\GO-Global\Licensing` to reflect the new redundant servers. Separate the license server names with a semicolon(;).GO-Global will attempt the first server in the list. If that fails for any reason, the second server is tried.

![kit2-20-4](/img/kit2-20-4.png)
![kit2-20-5](/img/kit2-20-5.png)

5. Restart the **GO-Global Application Publishing Service.**

![kit2-20-6](/img/kit2-20-6.png)
![kit2-20-7](/img/kit2-20-7.png)
![kit2-20-8](/img/kit2-20-8.png)
![kit2-20-9](/img/kit2-20-9.png)
![kit2-20-10](/img/kit2-20-10.png)
![kit2-20-11](/img/kit2-20-11.png)

As with three-server redundancy, we recommend running **lmtools** to verify the status of the redundant license servers once all servers are up and running.

