---
title: "Automatic Windows Update and Hotfix Compatibility"
linkTitle: ""
weight: 31
type: "docs"
---


>KitASPではこの設定を推奨しておりません。弊社から案内しています、Windows Update情報をご参照ください。

GO-Global supports High Priority Windows Updates, Windows Hotfixes, and Windows Service Packs. GraphOn tests GO-Global for compatibility with High Priority Windows Updates and Windows Service Packs. Certification testing begins as soon as the High Priority Windows Update or Service Pack is released and is usually completed within one day.

If GraphOn certifies that the Windows Update or Service Pack is compatible with the currently released version of GO-Global, Updates or Service Packs can safely be installed on GO-Global Hosts.

Microsoft does not release Windows Hotfixes from its Microsoft Update site and typically only provides Hotfixes to customers on an as-needed basis. Since Hotfixes are not universally available, GraphOn does not run compatibility tests on Windows Hotfixes.

GO-Global is expected to be compatible with nearly all future Windows Updates and Hotfixes. Windows Service Packs, however, contain more significant changes and may not be compatible with GO-Global. If a Windows Update, Hotfix, or Service Pack is incompatible with GO-Global, the Application Publishing Service will record an error in its log file and close. If this occurs, contact Customer Support. GraphOn will typically provide support for incompatible updates within one week.

GraphOn recommends that users install only Windows Updates and Service Packs on GO-Global Hosts that have been certified to be compatible with GO-Global. As such, GraphOn recommends that GO-Global Hosts be configured so they do not automatically install Windows Updates.

### To disable the automatic installation of Windows Updates

1. Click Start | Control Panel.
2. Click Automatic Updates.
3. In the Automatic Updates dialog, click one of the following options:▪ Download updates for me, but let me choose when to install them. ▪ Notify me but don't automatically download or install them. ▪ Turn off Automatic Updates.
4. Click OK.
