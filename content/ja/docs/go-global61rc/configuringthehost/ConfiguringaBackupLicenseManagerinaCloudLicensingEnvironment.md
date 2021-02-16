---
title: "クラウドライセンス環境でのBackup License Managerの構成"
linkTitle: ""
weight: 13
type: "docs"
---

クラウドライセンスが採用されている場合、GraphOnのライセンスサーバへの接続が失われ、ホストが再起動された後も、ホストが予約済みシートを引き続き使用できるようにBackup License Managerを構成することをお勧めします。ホストがBackup License Managerを使用するように構成されていない場合、ユーザはホストの再起動後にセッションを開始できません。

### バックアップライセンスマネージャーを構成する方法

1. Admin Consoleで、**[Tools | Host Options]** の順にクリックします。
2. **[Configuration]** タブをクリックします。
3. **[Backup License Manager(s)]** フィールドに、指定したバックアップライセンスマシンの名前またはIPアドレスを入力します。
4. **OK** をクリックします。
5. **GO-Global Application Publishing Service** を再起動します。

![2-13-1](/img/2-13-1.png) 