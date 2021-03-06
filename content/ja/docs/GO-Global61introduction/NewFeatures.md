﻿---
title: "GO-Global 6.1の新機能"
linkTitle: ""
weight: 04
type: "docs"
---
- **[Cloudライセンス](/docs/go-global61/go-globallicensing/overview):** Cloudライセンスは、GO-Globalのライセンスファイルに代わるシンプルで可用性の高いライセンスファイルであり、On-premisesのライセンスサーバや製品コードを必要とせず、ライセンスファイルの再発行、リホスト、またはアップグレードの必要性がありません。代わりに、管理者はホスト上でGO-Globalのアクティベーションウィザードを実行し、GraphOnアカウントにサインインして、ホストが使用するライセンスを選択するだけです。管理者はいつでもライセンスからホストを追加および削除することができます。Cloudライセンスには恒久ライセンスとサブスクリプションライセンスがあり、On-premisesとCloudベースのGO-Globalホストの両方で使用することができます。恒久CloudライセンスはOn-premisesライセンスと同様に、同時使用を購入したシート数に制限します。ただし、サブスクリプションCloudライセンスでは、実際に使用した最大同時使用シート数に対してのみ課金されます。Cloudライセンスを使用しているホストは、GraphOnのCloudライセンスサービスと通信ができなくなった場合、最大72時間まで運用を継続することができます。
- **[サードパーティ製のロードバランサの改善](/docs/go-global61/loadbalancing/supportforthird-partyloadbalancers):** サードパーティのロードバランサのサポートが改善され、管理者はサードパーティのロードバランサを介してアクセスされるホストとセッションを一元的に管理できるようになりました。管理者は新しいファームマネージャおよびファームホストロールを使用して、ファーム内のすべてのホストの設定を一度に構成したり、ファーム内の任意のホストで実行されているセッションを管理したり、シャドウイングしたりすることができます。さらに、これらの新しい役割により、サードパーティのロードバランサを介してGO-Globalホストに接続しているエンドユーザは、1つのデバイス(オフィスのコンピュータなど)でセッションを開始し、切断した後、別のデバイス(ホームコンピュータなど)からセッションに再接続することができます。GO-Globalは、ロードバランサがユーザのセッションが実行されているホストへのユーザの接続に失敗した場合でも、ユーザをセッションに自動的に再接続します。
- **[AppController](/docs/go-global61/runninggo-global/go-globalappcontroller):** AppControllerは、パソコンのデスクトップ、モバイル端末、Webブラウザから起動できるGO-Global Appの次世代型後継機です。
- **[強力な暗号化ウィザード](/docs/go-global61/go-globaladminconsole/strongencryptioncertificatewizard):** 強力な暗号化ウィザードにより、管理者はGO-Globalホストの信頼できるSSL証明書を簡単に生成して適用することができ、サードパーティの認証局から証明書を購入することなく、強力な暗号化とSSL/TLSセキュリティを実現することができます。 
- **[2要素認証](/docs/go-global61/go-globaladminconsole/two-factorauthentication):** 2要素認証(2FA)は、ユーザ名とパスワードに加えて、スマートフォンの認証アプリから6桁のコードを入力することをエンドユーザに要求することで、セキュリティの追加レイヤを提供します。これにより、ブルートフォースや辞書を使ったパスワード検索が不要になります。また2FAは、複雑なパスワードポリシを強制する負担を軽減します。
- **[Video Replay](/docs/go-global61/go-globaladminconsole/videoreplay):** Video Replayでは、GO-Globalセッションで実行されているアプリケーションおよびブラウザで、GO-Globalクライアント上のビデオコンテンツを再生することができます。
- **[ファイルオープンリダイレクション](/docs/go-global61/go-globaladminconsole/fileopenredirection):** ファイルオープンリダイレクションは、エンドユーザがクライアント上で実行されているアプリケーションで指定されたファイルタイプのファイルを開くことを可能にし、ワークフローを合理化します。管理者は、特定のファイルタイプ(.xlsx,.pdf,.docxなど)に対してこの機能を有効にすることができます。これにより、ユーザが直接サポートされていないホストアプリケーションから指定されたタイプのファイルにアクセスしようとした場合(例:Outlookで.xlsxを開く)、その代わりに関連するクライアントアプリケーション(例：Excel)でファイルを開くことができます。
- **[URLリダイレクト](/docs/go-global61/go-globaladminconsole/urlredirection):** この機能により、エンドユーザはホストの既定のブラウザではなく、クライアントの既定のブラウザで開くWebリンクをクリックすることができるため、エンドユーザはGO-Globalセッションで実行されている Webコンテンツや動画に効率的にアクセスすることができます。
- **[ブランディング](/docs/go-global61/branding):** ブランディングでは、エンドユーザインターフェース要素(Sign In dialog、Program Windowなど)にあるGraphOnのGO-Globalブランディングを、お客様の企業イメージ、ロゴ、名前に置き換えることができます。

