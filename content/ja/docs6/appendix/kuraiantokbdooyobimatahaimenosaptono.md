+++
title = "クライアントキーボード/IME 用サポートの設定"
description = ""
weight = 6
+++

Windowsでは、入力言語、キーボードレイアウト、言語入力システム(IME)、コードページを使用して、キーボード上の各キーを画面上の文字にマッピングします。クライアントキーボード上でキーを押すと、GO-Globalからホストにキーコードが送信します。ホストはセッションの有効なキーボードレイアウトを使用して、キーコードをWindowsの入力メッセージに変換します。GO-Globalのセットアップでは、ホストと同じオペレーティングシステム、キーボードおよびIMEを使用するクライアントをサポートするようにホストを設定します。GO-Globalは、キーボードマッピングファイルを使用して、さまざまなオペレーティングシステムとキーボードを持つクライアントをサポートします。

次のセクションでは、ホストシステムと異なるクライアントコンピュータ上のセッションにおいてキーボードやIMEを管理するためのしくみと手順を説明します。