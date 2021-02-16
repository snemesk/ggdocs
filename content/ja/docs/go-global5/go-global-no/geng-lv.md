+++
title = "変更履歴"
description = ""
weight= 3
+++
## GGH5.0.2 Patch 10 release (Version 5.0.2.27327)

GGH5.0.2 Patch 9 release (Version 5.0.2.26287) からの主な変更点は次の通りです．

* ホスト環境として Windows Server 2019 のサポート
* セキュアブート環境への対応
* Borland のアプリケーションでセッション開始に時間がかかる問題の修正
* Windows 10 (version 1803) で32 ビット版の Microsoft Office365 および Adobe Acrobat が起動した時に ホストがクラッシュする問題の修正
* GG のセッション上で Oracle Forms 6i が動作した時にホストがクラッシュする問題の修正
* GG のセッション上で PDFCreator が開始しない問題の修正

## GGH5.0.2 Patch 9 release (Version 5.0.2.26287)

GGH5.0.2 Patch 8 release (Version 5.0.2.26121) からの主な変更点は次の通りです．

* ホスト環境として Windows 10 feature release version 1803 のサポート
* iSCSI ドライブにインストールされた時APS が開始しない問題の修正
* クライアントの拡大表示が100%を越えて200%未満の環境でのテキスト表示の品質不良を修正 ※ 関連情報: KGTN#2018020701, CASE#51063 ※ クライアント側のアップグレードも必要です．

## GGH5.0.2 Patch 8 release (Version 5.0.2.26121)

GGH5.0.2 Patch 7 release (Version 5.0.2.25851) からの主な変更点は次の通りです．

* 稀にクライアント印刷機能が利用出来ない問題を修正
* ホストからクライアントへ連続して2 分以上データが送信された時にセッションが切断される可能性を修正

## GGH5.0.2 Patch 7 release (Version 5.0.2.25851)

GGH5.0.2 Patch 6 release (Version 5.0.2.25556) からの主な変更点は次の通りです．

* 2018 年1 月の更新プログラムのSpectre およびMeltdown の脆弱性の修正に対応
* スクリーンに直接かつ大量に描画するアプリケーションの動作が遅い問題を修正

## GGH5.0.2 Patch 6 release (Version 5.0.2.25556)

GGH5.0.2 Patch 5 release (Version 5.0.2.25362) からの主な変更点は次の通りです．

* クライアント環境として Ubuntu Linux 16.04 LTS (64-bit) への対応
* クライアント印刷で 「極めて希に」 他のプリンターへ出力される問題の修正

## GGH5.0.2 Patch 5 release (Version 5.0.2.25362)

GGH5.0.2 Patch 3 release (Version 5.0.2.25148) からの主な変更点は次の通りです．

* ホスト環境として Windows Server 2016 への対応
* ホスト環境として Windows 10 Fall Creators Update への対応
* クライアント環境として Oracle Linux 7 への対応
* PowerPoint のスライドショーが動作しない問題の修正 (CASE#49869)
* PrintersApplet.exe が存在すると切断した直後にセッションが終了する問題の修正 (CASE#50015)
* ＩＥ でツールチップが表示されない問題の修正 (CASE#49765)
* デスクトップ機能利用時にサインアウトした時にBSOD が発生する問題の修正 (CASE#49757)
* 5.0.24620 でホストがBSOD する問題の修正 ※ GGH5.0.2 Patch 4 release は，限定的にリリースされたため，一般には存在しません．

## GGH5.0.2 Patch 3 release (Version 5.0.2.25148)

5.0.2.24304 からの主な変更点は次の通りです．

* DPI 非対応アプリケーションへの高解像度ディスプレイ対応 ※クライアント側に5K 以上のモニターと新しいクライアント （ソフトウエア） が必要です．
* Desktop クライアントインストール時に Chrome のアドオンのページが開く問題の修正 ※サイレントモード cmd /c gg-client.desktop.exe /s /v"/qn での起動が必要です．
* ホスト機能の Windows 10 Creators Update (OS Build 15063) への対応  サービス GGAPS が稀にメモリを大量消費する問題の修正
* Windows 10 環境での更新プログラム KB4025342 のサポート
* 環境によりアップグレード時にディスプレイ・ドライバーが開始しない問題の修正
* Windows 10 Creators Update 環境での Norton AntiVirus のサポート
* Windows 10 Creators Update 環境での Avast Antivirus のサポート
* Windows 10 Creators Update 環境での Symantec Endpoint Protection 14 のサポート  Windows 10 Creators Update 環境でクライアント・サウンドが動作しない問題の修正
* Sophos Anti-Virus がインストールされた環境でログオンダイアログの表示までに２分要する問題の修正
* F-Secure Server Security / F-Secure DeepGuard がインストールされた環境でクライアントの接続時にクラッシュする問題の修正

## GGH5.0.2 Patch 2 release (Version 5.0.2.24304)

5.0.2.23814 からの主な変更点は次の通りです．

* サーバー環境としての Windows 10 Creators Update (OS Build 15063) への対応．
* ユーザーID とパスワードを指定してログオンした時，環境変数 CLIENTCOMPUTERNAME 等が正しくない問題 の修正
* Windows クライアントインストール時に Chrome のアドオンのページが開く問題の修正 ※ gg-client.windows.exe のみの対応で， gg-client.desktop.exe ではアドオンのページが開きます．
* セッションが終了しない，セッションを強制終了できない等の現象が発生する問題の修正
* プリンター名のカスタマイズで変数 %I が unknown になる問題の修正
* 環境変数 USERNAME が設定されない問題の修正
* APS ログに "Keep-alive not received..." が繰り返し記録される問題の修正

## GGH5.0.0～GGH5.0.1 の主な変更点

GGH5.0.0～GGH5.0.1の主な変更点(修正点)は、以下の通りです．

* ホスト環境での32 ビットWindows （Windows Server 2003 / Windows XP） のサポート終了．
* iOS クライアントの改良 （新しいユーザー インターフェイス，操作性向上，タスク切り替え） ．
* Android クライアントの改良 （新しいユーザー インターフェイス，操作性向上，タスク切り替え）．
* モバイルクライアント環境 （iOS/Android） での hopTo MAX のサポート （オプション） ．
* ホスト環境での自動更新機能の追加．
* Windows 更新プログラムによる非互換性の低減．
* クライアント環境での Mac OS X 10.11 El Capitan のサポート．
* サーバー環境での安定性の向上 （Watchdog Timer でのBSOD 等） ．
* Microsoft Office 2016 のサポート．