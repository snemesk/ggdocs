---
title: "キャパシティプランニング"
linkTitle: ""
weight: 04
type: "docs"
---

## 概要

GO-Globalは、Windowsサーバ上の複数のユーザをサポートします。マルチユーザシステムは、シングルユーザシステムよりも多くのシステムリソースを必要とします。このセクションでは、ユーザを最適なパフォーマンスでサポートするためのハードウェア構成を決定するのに役立つ、システムサイズのガイドラインをいくつか示します。ほとんどの企業は、自分のユーザを一般ユーザとパワーユーザのどちらにも分類できると考えています。

- **一般的なユーザ**
一般的なユーザーは通常1つか2つのアプリケーションを使用します。通常は一度に1つだけです。実際のプログラムデータは、クライアントとサーバ間で転送されることはほとんどなく、ユーザがOLE(Object Linking and Embedding)を使用することはめったにありません。

- **パワーユーザ**
パワーユーザは、3つ以上のアプリケーションを使用し、同時に複数のアプリケーションを同時に使用する、より高度なユーザです。データはローカルアプリケーションとリモートアプリケーションの間でカットアンドペーストされることが多く、OLEは頻繁に使用されています。パワーユーザは通常のユーザよりも多くのリソースを消費します。経験則として、1人のパワーユーザは2人の典型的なユーザのプロセッサ使用率とRAM要件に相当します。

## メモリ計算例

基本的なGO-Globalホストは、次のようにメモリを割り当てます。

{{% alert title="参照" color="info" %}}
以降のアプリケーションメモリは、基本的なGO-Globalホスト設定に追加されることを認識することが重要です。
{{% /alert %}}

## 基本配分の例

次の例では、ログオンサービスやライセンスなどに基づいて、GO-Globalホストの総使用量とそれに続くユーザ割り当てを計算します。Microsoft Wordなどのサンプルアプリケーションは、最終的な計算式に組み込まれています。Word 2003を使用する場合、平均的なドキュメント用に追加で割り当てられるRAMは、1ユーザあたり最大25MBです。


上記の例は、サーバ上でMicrosoft Wordを使用している15人のユーザをサポートするには、合計529MBのRAMが必要であることを示しています。これらの数値は概数であり、特定のシステムおよびハードウェア構成に応じて変更されることがあります。これらの数値はGO-Globalのシステムサービスのみを反映しており、Webサーバなどの他のアプリケーションやシステムサービスは考慮に入れていません。標準のシステムオーバーヘッドは、GO-Globalサービスに加えて発生します。

## GO-Globalホストのサイズ設定

次のセクションでは、GO-Globalホストでサポートできる最大ユーザ数を決定するためのより高度な方法について説明します。

GO-Globalホストからサポートできるユーザの数は、以下のような多くの要因の影響を受けます。

- プロセッサの数と速度

- 物理メモリ量

- アプリケーションのメモリ要件

- アプリケーションのプロセッサ使用率要件

- ハードウェアデバイスのカーネルメモリ要件(たとえば、RAIDハードディスクコントローラ、ビデオカードなど)

これらの要素の組み合わせによって、通常、GO-Globalホストから効率的に実行できるユーザの数が決まります。このセクションでは、これらの要因によるスケーラビリティへの影響を評価し、GO-Globalホストからサポートできる最大ユーザ数を見積もる方法について説明します。

特定のGO-Globalホストでサポートできるユーザ数は、通常、以下のシステムリソースの1つ以上によって制限されます。

- プロセッサ(CPU)使用率：サーバのプロセッサが非アイドルスレッドを実行している時間の割合。

- 物理メモリ：コンピュータ上で実行されているプロセスによって使用されている物理メモリの量。

- コミットされたメモリ：ディスクページングファイルで予約されているスペースのメモリ量。

- ページプールメモリ：ページプール内に割り当てられたメモリの量。オペレーティングシステムや他のカーネルモードモジュールのデータを格納するために使用されるカーネルモードメモリの領域。

- システムページテーブルエントリ(PTE)：システムページテーブルエントリ(PTE)領域、カーネルスタックを格納するためにオペレーティングシステムによって使用されるカーネルモードメモリの領域、およびデバイスドライバ(たとえば、 RAIDハードディスクコントローラ、ビデオカードなど) デバイス固有のデータのビューをカーネルアドレス空間にマッピングするため。

### 特定のサーバから効率的に実行できるユーザーの数を判断する方法

1. 平均的なユーザーに必要な上記の各リソースの量を決定します。
2. 各リソースのうち最初にサーバコンピュータで使用可能な量を決定します。
3. 手順1と2からの情報を使用してユーザ制限を計算します。
4. 実稼働環境で計算結果を確認してください。

このプロセスの詳細は以下のページで説明されています。

## **1.ユーザリソース要件の決定** 
ユーザのリソース要件は、通常、ユーザがサーバ上で実行するアプリケーションによって決まります。アプリケーションサプライヤがGO-Globalを使用してアプリケーションをテストした場合、それらはそのアプリケーションのユーザごとのリソース要件を提供できる可能性があります。それ以外の場合、ユーザの要件を判断するための最善の方法は、一般的なユーザがサーバ上で実行する操作をシミュレートするマルチユーザテストを実行することです。

### 特定のアプリケーションセットに対するユーザごとのリソース要件を判断する方法

1. サーバコンピュータを再起動します。
2. Windowsパフォーマンスモニタを使用してシステムリソースの記録を開始する。<br>
a. 別のWindowsコンピュータで、Windowsパフォーマンスモニタを起動します。<br>
b. Performance Logs とAlerts\Counter Logsを右クリックします。<br>
c. 新規ログ設定を選択します。<br>
d. ログの名前を入力してください。<br>
e. 追加をクリックします。<br>
f. [コンピュータからカウンタを選択する]フィールドにサーバコンピュータの名前を入力します。<br>
g. 以下のカウンタを追加してください。<br>

	1. \Processor\% Processor Time
	2. \Memory\Available Bytes
	3. \Memory\Committed Bytes
	4. \Memory\Pool Paged Bytes
	5. \Memory\Free System Page Table Entries

  h. サンプル間隔を10秒に設定します。<br>
  i. ログファイルタブを選択します。<br>
  j. ログファイルの種類をテキストファイル .CSVに変更します。<br>
  k. OKをクリックします。<br>
  l. 新しいログのアイコンを右クリックして、「開始」を選択します。<br>

3. GO-Globalホストに10人のユーザをログオンさせます。各ユーザは別々のクライアントコンピュータで実行する必要があります。
4. 各セッションで、通常のセッション中にユーザが実行すると予想されるすべてのプログラムを起動します。各セッションで、一般的なユーザのアプリケーションとのやり取りをシミュレートします。これは、各セッションを実行しているライブユーザ、またはサードパーティの自動テストツールを使用して各クライアントで記録および再生されるスクリプトを使用して行うことができます。
5. 15〜30分間テストを実行します。
6. パフォーマンスモニタログを停止します。
7. ログのアイコンを右クリックして、「停止」を選択します。
8. Microsoft Excelなどのスプレッドシートプログラムでログファイルを開き、結果をグラフ化します。
9. 次のように、データからユーザごとのリソース要件を決定します。<br>
a. ユーザ辺りの平均プロセッサー使用率<br>
```
AverageProcessorUtilizationPerUser =（AveragePercentProcessorTime * NumberOfProcessors）/ 10
```
ここで、AveragePercentProcessorTimeは、Processor\％Processorの平均値です。一般的なユーザ操作がシミュレートされた期間中の合計カウンタ NumberOfProcessorsは、コンピュータに取り付けられているプロセッサの数です。<br>
b. ユーザごとに必要な物理メモリ<br>
```
PhysicalMemoryPerUser =（InitialAvailableBytes - MinimumAvailableBytes）/ 10
``` 
InitialAvailableBytesとMinimumAvailableBytesは、それぞれ Memory Available Bytesカウンタの初期値と最小値です。<br>
c. ユーザごとに必要なコミット済みメモリ<br>
```
CommittedMemoryPerUser =（MaximumCommittedBytes - InitialCommittedBytes）/ 10 
```	
MaximumCommittedBytesとInitialCommittedBytesは、それぞれ Memory  Committed Bytesカウンタの最大値と初期値です。<br>
d. ユーザごとに必要なページプールメモリ　
```
PagedPoolMemoryPerUser =（MaximumPagedPoolBytes - InitialPagedPoolBytes）/ 10
```	
MaximumPagedPoolBytesとInitialPagedPoolBytesは、それぞれ Memory Pool Paged Bytesカウンタの最大値と初期値です。<br>
e. ユーザごとに必要なシステムPTEの数 
```
SystemPTEsPerUser =（InitialFreeSystemPTEs - MinimumFreeSystemPTEs）/ 10
```	
InitialFreeSystemPTEおよびMinimumFreeSystemPTEは、それぞれ Memory Free System Page Tableエントリエントリの初期値および最小値です。<br>

## **2.利用可能なリソースの決定**

目的のアプリケーションのセットに対するユーザの要件がわかったら、次のステップは、アプリケーションの実行に使用されるコンピュータの利用可能なリソースを測定することです。これは次のようにして行うことができます。

1. まだインストールされていない場合は、サーバコンピュータにGO-Globalをインストールします。
2. コンピュータを再起動してください。
3. Windowsパフォーマンスモニタを使用して、次のパフォーマンスカウンタの初期値を取得します。
   a. \Memory\Available Bytes<br>
   b. \Memory\Committed Bytes<br>
   c. \Memory\Commit Limit<br>
   d. \Memory\Pool Paged Bytes<br>
   e. \Memory\Free System Page Table Entries<br>
4. このデータを使用して、コンピュータで利用可能な次のリソースを計算します。<br>
   a. 利用可能な処理能力:
   ```
   AvailableProcessorUtilization = (NumberOfProcessors  ProcessorSpeed  MaximumPercentUtilizationAllowed) / BaseProcessorSpeed      
   ```
   NumberOfProcessorsはサーバにインストールされているプロセッサの数、ProcessorSpeedはサーバのプロセッサのMHz単位の速度、BaseProcessorSpeedは上記のステップ1.8.aでAverageProcessorUtilizationPerUserを決定するために使用されるプロセッサの速度です。MaximumPercentUtilizationは、通常の操作中に発生するはずのプロセッサ使用率の最大パーセンテージです。 MaximumPercentUtilizationの推奨値は0.80（80％）です。<br>
   b. 利用可能な物理メモリ:
   ```
   AvailablePhysicalMemory = InitialAvailableBytes - MinimumAvailableBytesAllowed
   ```
   ここで、InitialAvailableBytesは Memory Available Bytesカウンタの初期値で、MinimumAvailableBytesAllowedは通常の操作中に使用可能な物理メモリの最小バイト数です。MinimumAvailableBytesAllowedの推奨値は41943040バイト(40 MB)です。<br>

　 c. 利用可能なコミット済みメモリ(すなわち、ディスクページングファイル内の利用可能なスペース):
   ```
   AvailableCommittedMemory = CommitLimit - InitialCommittedBytes - MinimumAvailableCommittedBytesAllowed
   ```
   ここで、CommitLimitとInitialCommittedBytesは、それぞれ Memory Commit LimitとMemory Committed Bytesカウンタの値です。MinimumAvailableCommittedBytesAllowedは、通常の操作中に使用可能なコミット済みメモリの最小バイト数です。MinimumAvailableCommittedBytesAllowedの推奨値は、コミット限度の0.20倍です。<br>

   d. 利用可能なページプールメモリ:
   ```
   AvailablePagedPoolMemory = SizeOfPagedPool - InitialPagedPoolBytes - MinimumAvailablePagedPoolBytesAllowed
   ```
   SizeOfPagedPoolはバイト単位のページプールのサイズ(通常、Windows 2000サーバでは0x0A000000(167772160)バイト)で、InitialPagedPoolBytesは Memory Pool Paged Bytesカウンタの初期値です。MinimumAvailablePagedPoolBytesAllowedは、通常の操作中に利用可能であるべきページプールの最小バイト数です。MinimumAvailablePagedPoolBytesAllowedの推奨値は1048576バイト(10 MB)です。<br>

{{% alert title="参照" color="info" %}}
ページプールの実際のサイズは、次のようにカーネルデバッガを使用して決定できます。

1. デバッガに侵入します。
2. !vmと入力します。次にENTERを押します。
3. コンピュータの仮想メモリに関する情報が表示されます。ページプールのサイズは、PagedPool Maximumとして表示されます。
カーネルデバッガの使用方法については、マイクロソフトサポート技術情報の記事151981を参照してください。
{{% /alert %}}
<br>
    e. 利用可能なシステムPTE:<br>
    ```<br>
    AvailableSystemPTEs = InitialFreeSystemPTEs - MinimumAvailableSystemPTEsAllowed<br>
    ```<br>
    ここで、InitialFreeSystemPTEsはMemory Free System Page Tableエントリエントリの値であり、MinimumAvailableSystemPTEsAllowedは通常の操作中に利用可能であるべきSystemPTEの最小数です。MinimumAvailableSystemPTEsAllowedの推奨値は4000です。

## **3.ユーザ制限の計算**

ステップ1と2で取得した値を使用して、コンピュータのユーザ制限を次のように見積もることができます。

1. 各コンピュータのリソースでサポートできる最大ユーザ数を計算します。
a. コンピュータのプロセッサでサポートできる最大ユーザ数を計算します。
```
ProcessorUserLimit = AvailableProcessorUtilization / AverageProcessorUtilizationPerUser
```
b. コンピュータの利用可能な物理メモリでサポートできる最大ユーザー数を計算します。
```
PhysicalMemoryUserLimit = AvailablePhysicalMemory / PhysicalMemoryPerUser
```       
c. コンピュータの使用可能なコミット済みメモリでサポートできる最大ユーザ数を計算します。
```
CommittedMemoryUserLimit = AvailableCommittedMemory / CommittedMemoryPerUser
```      
d. コンピュータの利用可能なページプールメモリでサポートできる最大ユーザ数を計算します。
```
PagePoolMemoryUserLimit = AvailablePagedPoolMemory / PagedPoolMemoryPerUser
```
e. コンピュータの利用可能なシステムPTEでサポートできる最大ユーザ数を計算します。
```
SystemPTEUserLimit = AvailableSystemPTEs / SystemPTEsPerUser
```
2. 以下の式を使用して、コンピュータの最大ユーザ数を計算します。
```
MaximumNumberOfUsers = Minimum ( ProcessorUserLimit, PhysicalMemoryUserLimit, CommittedMemoryUserLimit, PagePoolMemoryUserLimit, SystemPTEUserLimit)
```
3. 最大ユーザ数が必要数より少ない場合は、制限されているリソースの可用性を高めるためにコンピュータの構成を変更します。
a. プロセッサ使用率がリソースを制限している場合は、サーバの数を増やすか、またはより高速のプロセッサやより多数のプロセッサを搭載したサーバを使用します。
b. 物理メモリがリソースを制限している場合は、コンピュータにメモリを増設します。 Windows 2000サーバにインストールできる最大メモリ容量は4 GBです。
c. コミットメモリがリソースを制限している場合は、ディスクページングファイルのサイズを大きくします。

ⅰ. マイコンピュータを右クリックして、プロパティを選択します。<br>
ⅱ. 詳細をクリックします。<br>
ⅲ. パフォーマンスオプション変化する。<br>
ⅳ. ページングファイルの最大サイズを増やします。<br>
ⅴ. 設定をクリックします。<br>

{{% alert title="警告" color="danger" %}}
ディスクページングファイルの推奨サイズは、通常、コンピュータに搭載されている物理メモリの2倍以下です。ページングファイルのサイズを推奨サイズより大きくするときは注意してください。コミットされたメモリの量が物理メモリの量をはるかに超えることが許可されている場合、システムはページングファイルからデータを取得するために過剰な数のディスクI / O操作を実行し始める可能性があります。これはシステムのパフォーマンスを著しく低下させる可能性があります。

次の情報は、Windowsレジストリを開いて操作することを含みます。ここで説明した以外の操作を実行すると、設定エラーが発生し、システムが使用できなくなる可能性があります。レジストリで作業するときはいつでも細心の注意を払ってください。
{{% /alert %}}

d. ページプールメモリがリソースを制限している場合は、ページプールのサイズを大きくします。

ⅰ. スタートを選択します。実行します。<br>
ⅱ. regeditと入力し、Enterキーを押します。<br>
ⅲ. 次のレジストリ値を選択してください。\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\SystemPages.<br>
ⅳ. 編集を選択します。修正します。<br>
ⅴ. 値のデータフィールドに0を入力します。これにより、システムPTEの数がシステムのデフォルト値まで減少し、ページプールのサイズが大きくなります。<br>
ⅵ. OKをクリックしてください。<br>
ⅶ. コンピュータを再起動してください。<br>

{{% alert title="参照" color="info" %}}
次のように、ユーザがホストにログオンするために必要なページプールメモリの最小量を指定します。 
1. サーバ上でレジストリエディタ(regedit)を実行します。 
2. 次のレジストリ値を選択します。\HKEY_LOCAL_MACHINE\Software\GraphOn\Bridges\1.0.0\AppServer\SessionPaged PoolMemory. 
3. [編集 | 修正]をクリックします。修正します。 
4. 16進数を選択します。 
5. [値のデータ]フィールドに、セッションを開始するために必要なバイト数を入力します(例：10000)。 
6. OKをクリックします。
{{% /alert %}}

e. システムPTEの数が制限リソースである場合は、システムPTEの数が最大になるようにシステムが構成されていることを確認してください。<br>
<br>
ⅰ. 次のレジストリ値をダブルクリックします。\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management\SystemPages.<br>
ⅱ. 16進数を選択します。<br>
ⅲ. 値を確認してください。FFFFFFFFです。GO-Global Setup Programは、製品のインストール時にこのフィールドをこの値に設定します。その後値が変更された場合は、FFFFFFFFに再設定してください。<br>
ⅳ. PagedPoolSize値(やはりMemory Managementキーの下にあります)の値を確認してください。それはゼロ(0)であるはずです。 <br>
ⅴ. システムがシステムPTEの数を最大にするように構成されている場合は、コンピューターに取り付けられているハードウェア装置の要件を確認してください。RAIDディスクコントローラやビデオカードなどの一部のデバイスは、多数のSystem PTEを消費する可能性があります。そのようなデバイスがサーバにインストールされている場合はそれが必要であることを確認し、必要でない場合はそのデバイスをアンインストールします。<br>
ⅵ. 上記のステップ3.3で設定を変更した場合は、影響を受ける利用可能なリソース、リソースユーザの制限、およびサーバコンピュータの最大ユーザ制限を再計算してください。<br>

## **4.結果を確認する**
手順1〜3で概説した手順の結果は、特定のGO-Globalホストでサポートできる最大ユーザ数の見積もりです。この結果に達するためにいくつかの仮定がなされている。たとえば、マルチユーザリソース要件テスト中に実行される操作は、実環境で製品を使用するときに実際のユーザが実行する操作を表していると想定されます。テストで測定されたシステムリソースの1つによってユーザ数が制限されることも想定されています。

これらの前提の正確性と最終結果を確実にするために、サーバ構成は、通常は上で計算したユーザ数へのパイロット展開の一環として、実稼働環境でテストする必要があります。この展開中は、Windowsパフォーマンスモニタを使用してシステムリソースを監視する必要があります。また、ユーザは自分が観察した問題の性質と時間を報告するように求められます。上記のリソースのパフォーマンスカウンタに加えて、次のパフォーマンスカウンタも監視する必要があります。

 **System Processor Queue Length:** Processor Queue Lengthは、使用可能だが他のアクティブスレッドのために実行できないアクティブスレッドの数です。プロセッサのボトルネックを明確に示す指標の1つは、プロセッサあたり1〜3スレッドを超える持続的なプロセッサキュー長です。一般に、プロセッサ使用率が高い場合はプロセッサキューの長さが長くなりますが、プロセッサ使用率が90％をかなり下回る場合にはプロセッサキューの長さが長くなることがあります。

 **Memory Pages/sec:** Pages/secパフォーマンスカウンタは、ハードページフォルトを解決するためにディスクから読み書きされたページ数を測定します。ハードページフォールトは、メモリをディスクページングファイルから読み書きする必要があるときに発生します。 CPU使用率が低くても、ハードページフォールトの数が多いと、システム全体のパフォーマンスが低下する可能性があります。


## トラブルシューティング
問題が報告された場合：

1. 問題が発生したときにWindowsパフォーマンスログのデータを調べて、問題の原因となっているリソースを特定します。<br>
a. ユーザがパフォーマンスの低下を報告した場合は、次の点を確認してください。<br>
ⅰ. %プロセッサ使用率：90%を超えると、コンピュータのプロセッサがボトルネックになる可能性があります。 <br>
ⅱ. プロセッサキュの長さ：長期間にわたってプロセッサあたり1〜3スレッドを超える場合、コンピュータのプロセッサがボトルネックになる可能性があります。<br>
ⅲ. 利用可能なバイト数：この値が小さい場合(例えば、インストールされている物理メモリの10％未満)、Pages / secカウンタを確認してください。Pages / secの値が通常よりもかなり高い場合、システムは頻繁にディスクとの間でメモリを交換しています。この問題は一般に、不十分な物理メモリがあることが原因で発生します。<br>
b. ユーザがサーバに接続できないことを報告した場合、またはアプリケーションの実行中にエラーを報告した場合は、次の点を確認してください。<br>
ⅰ. Available Bytes：Available Physical Memoryが20MB未満の場合、GO-Globalは新しいユーザがサーバに接続するのを防ぎます。<br>
ⅱ. Committed Bytes：このカウンタの値がCommit Limitに近いと、すべてのセッションでランダムエラーが発生する可能性があります。また、Committed Memoryの高い値は、多くの場合、高いディスクページング(Pages / second)値およびパフォーマンスの低下と同時に発生します。<br>
ⅲ. ページプールバイト数：最大値(Windows 2000サーバでは0x0A000000(167772160)バイト)に近い場合、システムはページプールメモリを使い果たしている可能性があります。この場合、実行中のすべてのセッションでランダムエラーが発生します。<br>
ⅳ. 空きシステムページテーブルエントリ：空きシステムPTEの数が2000未満の場合、GO-Globalは新規ユーザがサーバに接続できないようにします。空きシステムPTEの数が1000を下回ると、実行中のすべてのセッションでランダムエラーが発生します。<br>
2. 問題の原因となっているリソースを特定したら、<br>
a. ステップ3.3で説明されているようにリソースの可用性を高めることを試みます

   －または－ 

b. 指定されたリソースの最大ユーザ数を安全な値に減らします。



