+++
title = "Running the 30-Day Trial Version"
description = ""
weight = 3
+++
![](/images/2-3-1.png)
>本項目の設定は推奨設定ではございませんのでご注意ください。GO-Globalの評価を行う際にはきっとエイエスピー営業部までお問い合わせください。

GO-Global's 30-day trial version can be downloaded from GraphOn's web site. The Activation Wizard runs during the GO-Global trial installation, and is accessible from the Start menu after installing the host. It configures the computer to use a GraphOn product license, then activates GO-Global on the computer. GO-Global can be activated on a computer with a trial license only once.

### To run the Activation Wizard

1. When the Activation Wizard opens, follow the prompts. Sign in using your GraphOn account. Create an account if you do not have one. Then click the **Sign in** button.
2. If applicable, select a GraphOn customer account.

{{% alert title="Note" color="info" %}}
GO-Global cloud trial licenses can only be used on computers that have direct access to the internet. If a computer does not have access to the internet (e.g., if it accesses the internet via a proxy server), the Activation Wizard will notify you that GO-Global is unable to communicate with GraphOn's online license service. If you see this message, you can request an on-premises trial license as described below.
{{% /alert %}}

3. Select the license you would like the computer to use. If there are no available licenses, click **Start New Trial**. Specify a description for the license, then click **OK.**
4. Click **Accept**to accept the GO-Global License Agreement.
5. Click **Activate** to enable GO-Global on this computer.

After installing GO-Global and running the Activation Wizard, you must **restart** the computer.

{{% alert title="Note" color="info" %}}
If a license is grayed out, it is not an active license, and cannot be used.
{{% /alert %}}

### Activating GO-Global using an on-premises license

For computers without direct access to the internet, or if a cloud trial license cannot be established, GraphOn will generate an on-premises, Flexera-based trial license, which will be sent via email.

### To activate GO-Global using an on-premises license

1. Determine the computer's **Host Name** and **Host ID** (Physical Address).
  a. Open the Command Prompt window by clicking Start | (All) Programs | Accessories | Command Prompt.
  b. Type **ipconfig /all** and press the **Enter** key.
  c. Locate the computer's **Host Name** and **Physical Address.**
2. Email sales@graphon.com with the computer's Host Name, Host ID (Physical Address), and number of seats.
3. When you receive the license file from GraphOn:
  a. Copy the .lic file into c:\Program Files\GraphOn\GO-Global\Licensing directory.
  b. Start the **GO-Global License Manager Service.**
  c. Restart the **GO-Global Application Publishing Service.**
