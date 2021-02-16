+++
title = "GO-Global Webページの変更"
description = ""
weight= 3
+++

上記のHTMLページをそのまま使用して、サポートされているオペレーティングシステムとブラウザからGO-Globalのインストールと実行を行うことができます。これらのページをカスタマイズしたり、特定のニーズに合わせて新しいページを作成したりすることもできます。変更は、ページの外観、テキスト、画像を変更する単純で表面的な変更になります。あるいは、Webアプリケーションによって動的に生成されるページのように変更が複雑になることもあります。次の例は、GO-GlobalのWebページをカスタマイズする方法のいくつかを示しています。

* 例1：既存のページからプラットフォームと設定のオプションを削除する

### Linuxクライアントへのリンクを削除する方法

1. テキストエディタでallclients.htmlまたはclients.htmlを編集します。
2. ファイルから次の行を削除します。

```
<h3>Linux</h3>
<p>
<a href="installLinux.html">Linux Client</a><br>
Plug-in: <a href="logon.html?direct=true">Loose</a> | <a href="logon.html?direct=true&embed=true">Embedded</a><br>
</p>
```

3. ファイルを保存します。

### Internet Explorerを実行しているユーザに埋め込みウィンドウオプションが表示されないようにする方法

1. allclients.htmlまたはclients.htmlを編集します。
2. 次の行を修正してください。

```
Firefox: <a href="logon.html?direct=true">Loose</a> | <a href="logon.html?direct=true&embed=true">Embedded</a><br>
Internet Explorer: <a href="logon.html?direct=true">Loose</a> | <a href="logon.html?direct=true&embed=true">Embedded</a><br>
to:
Firefox: <a href="logon.html?direct=true">Loose</a><br>
Internet Explorer: <a href="logon.html?direct=true">Loose</a><br>
```

3. ファイルを保存します。

* 例2：特定のアプリケーションへのリンクを含むWebページを作成する

### ワードパッドとWindowsエクスプローラへのリンクを含むページを作成する方法

1. HTMLエディタで新規または既存のWebページを開きます。
2. エディタの [**ハイパーリンクの挿入**]オプションをクリックします。
3. ワードパッドドキュメントへのハイパーリンクを入力します。[http://hostname/goglobal/logon.html?mode=embed&app=C:\Program Files\Windows NT\Accessories\wordpad.exe&args=C:\Users\Public\Public Documents\welcome.rtf](http://hostname/goglobal/logon.html?mode=embed&app=C:/Program%20Files/Windows%20NT/Accessories/wordpad.exe&args=C:/Users/Public/Public%20Documents/welcome.rtf)
4. ハイパーリンクの表示テキストを「ようこそ」のように入力します。
5. Windowsエクスプローラへのリンクを作成するには、手順2〜4を繰り返します。[http://hostname/goglobal/logon.html?mode=embed&app=C:\Windows\System32\explorer.exe](http://hostname/goglobal/logon.html?mode=embed&app=C:/Windows/System32/explorer.exe)
6. ファイルを保存してWebサーバのパスに追加します。

この例では、GO-Globalオプションはlogon.htmlページへのハイパーリンクで指定されています。ユーザーがこれらのリンクをクリックすると、logon.htmlはハイパーリンクからこれらのオプションを読み取り、指定されたオプションを使用して適切なクライアントをロードします。

* 例3：特定のアプリケーションをロードするページを作成する

Logon.htmlを使用すると、ユーザは独自のハイパーリンクを作成し、好みのGO-Globalオプションを指定できます。場合によっては、ユーザにこの機能を持たせたくない場合があります。たとえば、ユーザがホストコンピュータ上のアプリケーションやファイルを開かないようにして、代わりに特定のアプリケーションに固定されたオプションのセットをロードするページを提供したくない場合があります。

アプリケーションを指定するときは、Cluster Managerに表示される表示名、またはアプリケーションへの完全修飾パスを使用できます。

### ユーザに特定のオプションを指定した特定のアプリケーションの実行のみを許可する方法

1. logon.htmlをテキストエディタで開きます。
2. Uncomment (remove the two "/" characters from) the following line: // controlArgs.set([ "app", "testapp1" ]);
3. testapp1を、Cluster Managerに表示されるアプリケーションの表示名に置き換えます。 例：var app = "Wordpad"; もしくはアプリケーションへの完全修飾パスを入力してください。 例："C:\Program Files\Windows NT\Accessories\wordpad.exe";
4. ファイルを保存します。
5. 必要に応じて、ファイルの名前を変更してください。(例：wordpad.html)

完全修飾パスを使用する場合は、アプリケーションがCluster Managerを介して公開されたかどうかにかかわらず、アプリケーション固有の引数をvar argsパラメーターを使用して指定する必要があります。

>Microsoftインターネットインフォメーションサービス(IIS)6.0がWindows Server 2008を実行しているGO-Globalホストにインストールされている場合、プラグインは、サーバ上のMIMEタイプが登録されていない拡張子を持つドキュメントを提供するようにIISを変更しない限り実行されません。詳細については、マイクロソフトサポート技術情報326965を参照してください。[https://support.microsoft.com/en-us/kb/326965#%2Fen-us%2Fkb%2F326965](https://support.microsoft.com/en-us/kb/326965#%2Fen-us%2Fkb%2F326965)
>
>GO-Globalの場合は、Windowsシステムの場合は「拡張子」ボックスに.xpiと入力し、Macシステムの場合は.dmgと入力します。[MIMEの種類]ボックスにapplication / octet-streamと入力します。この変更を加えたら、Webサーバー上のWorld Wide Web発行サービスを再起動します。

GO-Globalハイパーリンクパラメータとその指定方法についての詳細は、第5章に記載されています。
