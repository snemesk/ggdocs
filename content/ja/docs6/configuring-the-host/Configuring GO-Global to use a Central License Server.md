+++
title = "セントラルライセンスサーバを使用するためのGO-Globalの構成"
description = ""
weight = 7
+++

>本項目の設定は推奨設定ではございませんのでご注意ください。

By default, the GO-Global License Manager service is installed together with the GO-Global Host, and the GO-Global Host is configured to use the GO-Global License Manager that is on the same computer as the GO-Global Host. Alternatively, one or more GO-Global Hosts can be configured to use a central GO-Global License Manager that is running on a different computer. You can configure a GO-Global Host to use a GO-Global License Manager on a different computer using either of the following methods.

We recommend stopping the GO-Global License Manager on the GO-Global Host before getting started. The License Manager should be disabled on all secondary servers of the Central License Server.

### To stop the GO-Global License Manager

1. Click Control Panel | Administrative Tools | Services.
2. Select GO-Global License Manager from the list of services.
3. Click the Stop button.

After stopping the GO-Global License Manager on the GO-Global Host, you can proceed with one of the following methods for configuring a central license server. In the examples below, LicenseServer1 is the name of the license server.

On the GO-Global Host, place port@host (e.g., 27000@LicenseServer1) in the LM_LICENSE_FILE environment variable instead of the path to the license file. FLEXnet Publisher's LMTOOLS.EXE reports that the license file on LicenseServer1 is being read correctly.

—or—

On the GO-Global Host, place USE_SERVER directly after the SERVER line in the license file on the GO-Global Host. This is essentially the same as the preceding method but the change to the environment variable is not required.

### To checkout licenses from the relay server

1. Stop the GO-Global Application Publishing Service.
2. Locate the file HostProperties.xml in the C:\ProgramData\GraphOn\GO-Global directory.
3. Open HostProperties.xml in WordPad and locate the ManageLicensesFrom property.
4. Set the ManageLicensesFrom property to Relay.
5. Save the file.
6. Restart the GO-Global Application Publishing Service.

The default value for the ManageLicensesFrom property is Host. If this property is changed to Relay on an independent host or if it is set to an invalid value, licenses will revert to being managed from the host.

Two alternative methods can be used for configuring GO-Global to use a license server serving multiple machines. In the following examples, LicenseServer1 is the name of the license server and HOST1 is the name of the GO-Global Host. We recommend stopping the GO-Global License Manager on the GO-Global Host before getting started. The License Manager should be disabled on all secondary servers of the Central License Server.

### To stop the GO-Global License Manager

1. Click Control Panel | Administrative Tools | Services.
2. Select GO-Global License Manager from the list of services.
3. Click the Stop button.

Once you have stopped the GO-Global License Manager on the GO-Global Host, you can proceed with one of the following methods for configuring a central license server:

On the GO-Global Host, place port@host (e.g., 27000@LicenseServer1) in the LM_LICENSE_FILE environment variable instead of the path to the license file. FLEXnet Publisher's LMTOOLS.EXE reports that the license file on LicenseServer1 is being read correctly.

—or—

On the GO-Global Host, place USE_SERVER directly after the SERVER line in the license file on the GO-Global Host. This is essentially the same as the preceding method but the change to the environment variable is not required.

For example, the permanent license file (e.g., license.lic) on GO-Global Host (HOST1) would appear as follows:

For example, the permanent license file (e.g., license.lic) on GO-Global Host would appear as follows:

SERVER LicenseServer1 00d0b74f4023
USE_SERVER

## Opening the License Manager Port in a Firewall

If there is a firewall between GO-Global hosts and the license server, the ports for FLEXnet (27000, by default) and for the license manager(BLM)need to be open in the firewall. For the license manager, add

port=<port#>

to the license on the license server for a specific port. (Unless you manually assign a specific port number, an ephemeral port number is used.)

EXAMPLE:

SERVER caspian 000476BA8F74 27000
DAEMON BLM port=5678
INCREMENT session blm 6.0 31-dec-2018 5 99E82D1B9A64 HOSTID=ANY
INCREMENT any_app blm 6.0 31-dec-2018 uncounted D1D222D031C4
HOSTID=ANY
