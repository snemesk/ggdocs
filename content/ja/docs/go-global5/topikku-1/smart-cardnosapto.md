---
title: "Smart cardのサポート"
linkTitle: ""
weight: 28
type: "docs"
---


GO-Globalは、Smart cardの文書署名とSmart card認証のサポートを提供します。これらの機能は、Windowsクライアントでのみサポートされています。

## Smart card認証

Smart card認証は、デフォルトでは無効になっています。Smart card認証は、Cluster Managerの[Host Options]ダイアログの[Security]タブで有効になります。

### Smart card認証を有効にする方法

1. Cluster Managerを起動します。
2. [Tools | Host Options | Security]をクリックします。
3. **Smart card Authentication**をクリックします。
4. **OK**をクリックします。
5. コンピュータを再起動します。(Smart card認証は、コンピュータが再起動されるまで有効になりません)。

Smart card認証を有効にすると、GO-Globalサインインダイアログではなく、標準のWindowsセキュリティダイアログでサインインするように求められます。

### Smart card文書署名

Smart cardの文書署名は、デフォルトで無効になっています。 Smart cardの文書署名は、クラスタマネージャの[**Host Options**]ダイアログの[**Client Access**]タブにある **Smart card**オプションを使用して、クライアントに接続されたSmart cardへのアプリケーションアクセスを許可することで有効になります。

1. Cluster Managerを起動します。
2. [Tools | Host Options | Client Access]をクリックします。
3. **Smart card**をクリックします。
4. **OK**をクリックします。