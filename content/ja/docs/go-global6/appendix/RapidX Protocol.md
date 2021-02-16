+++
title = "RapidX Protocol (RXP)"
description = ""
weight = 2
+++
# RapidX Protocol (RXP)

RXPは、GO-Globalのクライアント - ホスト間のすべてのデータ通信に使用される独自のプロトコルです。デフォルトでは、RXPはTCPポート491を介して動作しますが、互換性のある任意のデータポートを介して動作するようにすることもできます。RXPは標準のTCP / IPプロトコルスタックの一部として動作します。低帯域幅接続を処理するように設計および最適化されています。RXP表示プロトコルはほぼ完全に非同期です。つまり、ホストとクライアントがピアからの応答を待つことはめったにありません。

RXPは現在、56ビットDESから256ビットAESまでの暗号化レベルを処理するように設計されています。 TCPトランスポートが選択されると、GO-GlobalはGraphOnのDES(Data Encryption Standard)の実装を使用します。SSLトランスポートが選択されると、GO-GlobalはOpenSSLのトランスポート層セキュリティ(TLS)の実装とOpenSSLの選択された暗号の実装、例えばAdvanced Encryption Standard(AES)を使用します。
