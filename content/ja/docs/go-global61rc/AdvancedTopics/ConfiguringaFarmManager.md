---
title: "ファームマネージャの構成"
linkTitle: ""
weight: 03
type: "docs"
---

ファームマネージャは、ファームホストのクラスタを集中管理するために使用されるGO-Globalホストです。Relay Load Balancerとは異なり、ファームマネージャはファームホストへの接続の負荷を分散せず、クライアントとファームホストの間でデータを中継しません。ファームマネージャは、サードパーティのロードバランサを使用してファームホストへの接続を管理します。ファームホストを構成する前に、ファームマネージャを構成する必要があります。

### ファームマネージャを構成する方法

1. Admin Consoleで、 **[Tools | Host Options]** の順にクリックします。
2. **[Configuration]** タブをクリックします。
3. **[Application Host Manager]** をクリックします。
4. **[Farm Manager]** をクリックします。
5. **OK** をクリックします。
6. **GO-Global Application Publishing Service** を再起動します。

