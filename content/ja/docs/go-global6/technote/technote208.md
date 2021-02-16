+++
title = "Androidデバイスでクラッシュレポートを生成する"
description = ""
weight = 15
+++
1. WindowsマシンのWindows用SDKプラットフォームツールを次からダウンロードします。 [https://developer.android.com/studio/releases/platform-tools。](https://developer.android.com/studio/releases/platform-tools%E3%80%82) プラットフォームツールはAndroid SDKのコンポーネントであり、adb、fastboot、systrayなどのさまざまなツールが含まれています。
2. USBケーブルを使用して、AndroidデバイスをWindowsマシンに接続し、WindowsマシンからAndroidデバイスにアクセスできることを確認します。
3. Androidデバイスから、[設定]に移動し、[開発者オプション]をクリックします。 [開発設定を許可する]確認メッセージで[OK]をクリックします。 USBデバッグを有効にします。 [USBデバッグの確認メッセージを許可する]で[OK]をクリックします。
4. Windowsマシンで管理者としてコマンドプロンプトを開き、SDKプラットフォームツールパッケージが解凍されたディレクトリを参照します。(例：c： platform tools)
5. 次のコマンドを実行します。
``` 
adb logcat AndroidRuntime：E *：I 
```
このコマンドは、実行時エラーやその他の警告を記録します。
6. Androidデバイスで[USBデバッグの確認を許可する]メッセージで[OK]をクリックします。 RSAキーフィンガープリントが表示されたら、[OK]をクリックします。
7. GO-Globalホストに接続し、クラッシュを再現します。
8. GO-Globalがクラッシュしたら、コンソールからテキスト全体をコピーしてテキストドキュメントに貼り付け、分析のためにKitASPのサポートにメールで送信します。

クライアントがクラッシュすると、アプリケーションの起動時に「GO GLOBAL ANDROID：64ビット」または「GO-GLOBAL ANDROID：32ビット」というエントリが出力に含まれます。これが表示されない場合は、他の構成の問題がある可能性があります。