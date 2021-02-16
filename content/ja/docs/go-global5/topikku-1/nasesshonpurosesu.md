---
title: "Advanced Session Process Configuration"
linkTitle: ""
weight: 25
type: "docs"
---


>この項目はKitASPでのサポート項目ではございません

This section covers some of the advanced configuration options that can be set for processes running within GO-Global sessions. These settings can be applied to specific executable (.exe) applications or as default settings applied to applications without specific configurations. Care should be taken when making any changes discussed in this section. An incorrect configuration can affect the startup of a process, make a process incompatible with GO-Global, or have fatal consequences during suspend/resume operations. Most applications that run within a GO-Global session will have GO-Global libraries loaded within them to perform redirection in order to obtain desired behavior. There are two levels of redirection that these libraries can initialize. The first level configures application and system modules to behave in a particular way. Most applications will need one or more level one settings enabled. Level one settings include Client Time Zone, Client Printing, and altered Windows API behavior. The second level creates a communications channel between the application and client for duplex transmission of session related information. For the highest level of application compatibility with GO-Global, level two settings should be enabled in as few applications as possible. Level two settings include Client Sound and Client Serial and Parallel Ports. The different configuration settings employed by the GO-Global libraries that redirect session processes are controlled by hexadecimal bit values within the registry. The desired bit values are logically ORed together to create a QWORD registry value. Here is the documented list of process redirector bits and a description of what they configure.

**0x0000000000000001 ***- _Prohibit a process from running within a session_

**_0x0000000000000002_** _- Disable the loading of GO-Global libraries. All redirection will be disabled. The time required to perform the redirection operations is generally a small percentage of the time required to launch typical Windows applications, but it can be a large percentage of the time required to launch and run simple console applications. Some console applications do not require redirection and performing these tasks can significantly extend the time required to execute logon scripts. Including this bit allows administrators to bypass redirection of a process. Applications execute faster since the GO-Global libraries are not loaded and initialized. This bit can also be used for applications that, for one reason or another, are incompatible with some or all of the GO-Global redirection settings._

**0x0000000000000004** - Disable Client Time Zone. This bit can be used for applications that, for one reason or another, are incompatible with the GO-Global Client Time Zone redirection settings. _- Disable Client Time Zone. This bit can be used for applications that, for one reason or another, are incompatible with the GO-Global Client Time Zone redirection settings._

**_0x0000000000000008_** _- Disable Client Printing. This bit can be used for applications that, for one reason or another, are incompatible with the GO-Global Client Printing redirection settings._

**_0x0000000000000040*_** - Enable the Windows ProcessIdToSessionId() API to return the GO-Global session ID.

**0x0000000000000200** - Disable Client Sound. This bit can be used for applications that, for one reason or another, are incompatible with the GO-Global Client Sound redirection settings.

**0x0000000000000400** - Disable client Serial and Parallel Ports. This bit can be used for applications that, for one reason or another, are incompatible with the GO-Global Client Serial and Parallel Ports redirection settings.

**0x0000000000000800*** _- Enable the Windows GetComputerName() API to return the client computer name. See also: Obtaining the Name of the Client Computer. Disable the updating of the client environment variables (CLIENTCOMPUTERNAME and CLIENTCOMPUTERIPADDRESS) when a client reconnects to a suspended session._

**_0x0000000000001000*_**- Disable, for optimization purposes, some of the normal processing performed when Explorer.exe is launched. This bit prevents Explorer.exe from launching processes listed under the HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run, RunOnce and RunOnceEx registry keys. This reduces the system resources needed to run Explorer in a session.

**0x0000000080000000*** - Enable application produced with Delphi to use the Client Serial and Parallel Ports feature. Applications built with Delphi do not properly process all return values from the Windows GetOverlappedResult() API. This bit prevents the returning of WAIT_TIMEOUT and instead returns WAIT_OBJECT_0.

**0x0000000800000000*** - Enable the NtQuerySystemInformation function to return the GO-Global session ID. This option may be required for .NET applications that make use of the Windows Session ID.

*Indicates advanced options that should only be used if instructed to by your support contact.

>All the unlisted bits are purposely undocumented and reserved for internal GraphOn use only. Do not alter any registry values that contain any unlisted bits and do not apply any unlisted bits to any registry values you add. GO-Global Host operation will be compromised if this is done.

These bits can be combined to customize the redirector settings of specific applications or to change the default settings used by applications that do not have a registry entry. In either case always include the default value bits set by the initial install of GO-Global, unless instructed otherwise by a support engineer.

### To add custom redirector settings for a specific application

1. Click Start | Run.
2. Type Regedit.
3. Browse to the registry key: HKEY_LOCAL_MACHINE\GraphOn\GO-Global\Loader\Processes.
4. Click Edit | New | QWORD value.
5. Type the name of the application's executable file. (For example, Beeps.exe.) The application's name can be specified as either a fully qualified path or as the file's base name and extension.
6. Select the new registry value.
7. Click Edit | Modify.
8. Verify that the Base selection is Hexadecimal.
9. Type the combined bits in the **Value data** edit box.
10. Click **OK.**

### To change the default redirection settings

1. Click Start | Run
2. Type Regedit.
3. Browse to the registry key: HKEY_LOCAL_MACHINE\GraphOn\GO-Global\Loader\Processes.
4. Select the existing **DefaultLoaderOptions** registry value.
5. Click Edit | Modify.
6. Verify that the Base selection is Hexadecimal.
7. Type the new setting in the **Value data** edit box.
8. Click **OK.**

Example Configuration

A GO-Global host has the following applications installed and registered in the Cluster Manager.

* DataDownloader.exe
* DataProcessor.exe
* DataViewer.exe

The DataDownloader.exe executable is a Windows application that reads data from a serial device and saves it to a file. Client Sound is needed for error conditions alerts that can be signaled while data is being downloaded. Client Files Access will be used to store the data file on the client system. The Windows GetComputerName() API must be redirected so that the client computer name can be used to indicate the source of the data within the data file.

Because the serial device that contains the data is connected to the client computer, Client Serial and Parallel Ports will need to be enabled. Because this is the only process that will access Client Serial and Parallel Ports on this system, a registry entry specifically for DataDownloader.exe has been added. This minimizes the risks and overhead associated with this level two redirector setting by disabling Client Serial and Parallel Ports in all other applications.

The settings for this application are calculated as follows:

0x0000000000000100 - These are the bits originally set in DefaultLoaderOptions.

0x0000000000000800 - This is the bit that enables the Windows GetComputerName() API redirection. 0x0000000000000900 – This is the hexadecimal QWORD to be set in the DataDownloader.exe registry value. The DataProcessor.exe executable is a console application that needs Client File Access to read in the serial data file from the client and write out the processed data file to the client. It will also use Client Time Zone to properly process the times recorded in the serial data file. All other settings will be disabled to minimize the risks and overhead associated with redirector settings. The settings for this application are calculated as follows:

0x0000000000000100 - These are the bits originally set in DefaultLoaderOptions.

0x0000000000000008 - This is the bit that disables Client Printing.

0x0000000000000200 - This is the bit that disables Client Sound.

0x0000000000000400 - This is the bit that disables Client Serial and Parallel Ports.

0x0000000000000708 – This is the hexadecimal QWORD to be set in the DataProcessor.exe registry value.

The DataViewer.exe executable is a Windows application that displays the data so that it can be analyzed. It needs Client File Access to read in the processed data file from the client. It needs Client Sound so that application sounds can be heard. It needs Client Printing so that the analyzed data can be printed on paper. These are some of the settings needed by most applications, so the DefaultLoaderOptions registry value is used for the calculation below.

The default setting will be changed to disable the Client Serial and Parallel Ports. This can be done because the only application that uses Client Serial and Parallel Ports, DataDownloader.exe, has its own registry setting that specifically enables it.

0x0000000000000100 These are the bits originally set in DefaultLoaderOptions.

0x0000000000000400 - This is the bit that disables Client Serial and Parallel Ports.

0x0000000000000500 – This is the hexadecimal QWORD to be set in the DefaultLoaderOptions registry value.

This example demonstrates how a combination of application specific and the default settings can be used to minimize the risk of application incompatibilities and allow an optimal environment to run in.

### Running the Windows desktop (explorer.exe) in the background of GO-Global sessions

Some Windows applications use features and services that are provided by the Windows desktop (explorer.exe). Most applications run without the desktop, but some fail to start or run properly when the desktop is not running in the same session as the application. By default, the desktop does not run in GO-Global sessions. If an application fails to start or work properly in a GO-Global session, it may have a dependency on the desktop.

### To register the Windows desktop (explorer.exe) to run in GO-Global sessions

1. From the Registry Editor, expand the HKEY_LOCAL_MACHINE key.
2. Expand \SOFTWARE\GraphOn\GO-Global\System\Run\LocalMachine.
3. Create a DWORD value and name it explorer.exe.
4. Set the value to

With this configuration, the desktop will run in GO-Global sessions but will not be visible.

>Registering the Windows desktop to run in the background of a GO-Global session adds significant overhead. Sessions will take longer to start and will consume more memory. Additional overhead can also result from other processes that are registered to run when the desktop starts up. Care should be taken to ensure that unnecessary processes are not registered in users' Startup folders or under the various Run commands in the Registry (e.g., HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run).
>
>Starting in GO-Global 4.8.2, explorer.exe will run in the session the first time that a user signs on to a host. This is done to fully initialize the user profile. Explorer.exe will not run in subsequent sessions started by the same user on the same host, unless configured to do so as described above.