---
title: "Windows Compatibility Assurance"
linkTitle: ""
weight: 28
type: "docs"
---
{{% alert title="注意" color="secondary" %}}
本項目の設定は推奨設定ではございませんのでご注意ください。
{{% /alert %}}

{{% alert title="情報" color="green" %}}
本項目の設定については弊社から各代理店様宛に「【重要】きっとエイエスピー技術支援センターからのお知らせ 20yy年mm月のWindows Update互換性情報に関して」というご案内を出させておりますのでそちらをご参照ください。
{{% /alert %}}

To provide multi-user remote access on all versions of Windows, GO-Global must access internal functions and data structures in Windows. When a computer running the GO-Global Host starts, GO-Global analyzes some of the operating system's binary files and automatically identifies the addresses of the operating system functions and variables that GO-Global requires.

In most cases, GO-Global is able to identify the required operating system addresses regardless of the version of Windows and the Windows Updates that are installed on the computer. In rare cases, however, Windows Updates include changes to the operating system that either prevent GO-Global from locating a required address or are incompatible with GO-Global's interface to the operating system. When this happens, GO-Global is unable to start sessions on a computer. To prevent this from occurring, GO-Global v6 provides Windows Compatibility Assurance.

The Windows Compatibility Assurance feature gives administrators the option to automatically defer installation of Windows Updates until GraphOn has verified that the updates are compatible with GO-Global. To do this, GraphOn continuously monitors Microsoft's Windows Update service for new updates. When Microsoft releases one or more Windows Updates, GO-Global suspends installation of all Windows Updates on affected GO-Global hosts until GraphOn has verified that the newly released Windows Updates are compatible.

{{% alert title="参照" color="info" %}}
To ensure GO-Global Hosts do not download newly released Windows Updates during the short window of time between when Microsoft releases a new update and GraphOn detects that the update has been released, GO-Global controls when Windows Updates can be installed on GO-Global Hosts. On Windows 10 and later, GO-Global delays Windows Updates by the number of days specified by the value of the DelayWindowsUpdates property in the HostProperties.xml file. (This is set to 1 day, by default).

On earlier versions of Windows, GO-Global only allows Windows Updates to be installed during the time period specified by the value of the AllowWindowsUpdates property in the HostProperties.xml file. (The default value is 02:00-14:00 UTC, which means Windows Updates can install new updates between 6:00 p.m. and 6:00 a.m. PST.)
{{% /alert %}}

If an incompatibility is identified, GO-Global prevents installation of all Windows Updates on affected hosts until it has automatically downloaded and installed an update that is compatible with all Windows Update releases. GO-Global notifies the administrator when a compatibility update is downloaded and installed. After the compatibility update is successfully installed and the computer is restarted, GO-Global will resume Windows Updates.

When enabled, Windows Compatibility Assurance minimizes the risk of incompatibilities. Windows Compatibility Assurance is enabled by default, but can be disabled through the Host Options dialog. However, if a Windows Update is incompatible with GO-Global, and it is installed on the host, GO-Global and/or the host machine will stop working. GraphOn recommends that this option is not disabled. However, if GO-Global is running on a closed network, and is unable to communicate with GraphOn's Update server, this feature can be disabled to prevent warning messages from being displayed.

### To disable Windows Compatibility Assurance

1. From the Admin Console, click Tools | Host Options.
2. Click the Updates tab.
3. Click the checkbox next to Defer Windows Updates until they have been certified by GraphOn.

![4-16-1](/img/4-16-1.png) 

GO-Global displays messages describing an update's certification status when the Admin Console first opens and when selecting a host from the All Hosts list. Certification status messages display as follows:

|                                                                                                     | Message displayed:                                                                                                                                                                                        |
|-----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| If Windows Updates have been certified by GraphOn…                                                  | GO-Global is compatible with the latest Windows Updates, which were released on [date of release].                                                                                                        |
| If certification by GraphOn is pending…                                                             | GraphOn is testing Windows Updates released on [date of release]. GO-Global is delaying installation of Windows Updates until GraphOn certifies that these Windows updates are compatible with GO-Global. |
| If certification by GraphOn is pending, but the Windows Compatibility Assurance option is disabled… | GraphOn is testing Windows Updates released on [date of release] to see if they are compatible with GO-Global.                                                                                            |
| If GraphOn determines that Windows Updates are incompatible…                                        | GO-Global is incompatible with Windows Updates released on [date of release]. GO-Global is delaying installation of Windows Updates until a GO-Global Compatibility Update is available.                  |
| If Windows Updates are incompatible but the Windows Compatibility Assurance option is disabled…     | GO-Global is incompatible with Windows Updates released on [date of release]. If these Windows Updates are installed on this computer, GO-Global and/or this computer will stop working.                  |

GO-Global verifies that all the licenses the computer is using support the selected GO-Global update. If any of the licenses do not support the update, the GO-Global update will not be installed. For example, if the host is using a version 5 license and the selected GO-Global update is version 6, the GO-Global license(s) that this computer is using must be upgraded before the update can be installed. Contact your GO-Global reseller or sales@graphon.com to upgrade licenses.

