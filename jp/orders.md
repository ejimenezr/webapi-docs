---
layout: en
title: 注文
category: orders
permalink: orders/
weight: 5
---

### 概要

注文サービスにより、注文の登録・キャンセル・交換することができます。また、注文を登録する前に、費用とコミッションの情報も提供されます。

注文サービスも条件付き注文の送信もできます。

### サービスURI

`https://api.tradestation.com/v2/orders/{method}`

### 関数（Methods）

* [注文の登録](place-order) | 注文を実行するためのエンジンに注文を登録します。
* [注文のキャンセル](cancel-order) | 注文をキャンセルします。この注文はURIで提供されます。
* [注文の更新](update-order) | ある特定注文をキャンセルして、代わりにURIで提供されている注文を登録します。
* [いくつかの注文の送信](send-group-order) |  注文を実行するためのエンジンにいくつかの注文を登録します。
* [注文の確認](confirm-order) | 注文を登録せず、注文のための費用とコミッションの情報を提供します。
* [いくつかの注文の確認](confirm-group-order) | 注文を登録せず、いくつかの注文のための費用とコミッションの情報を提供します。


### 条件付き注文

条件付き注文を最初に設定するために、それらの注文を同時に登録する必要があります。

#### 注文をキャンセルするための注文 （Order Cancels Order, OCO）

OCO注文では、いくつかの注文の中のいずれかが満たされているか、または一部満たされている場合、ほかの残りの注文がキャンセルされます。

* OCA注文の定義
  * OCA注文が異なるアカウントで登録べきではないものです。
  * OCAの集まりの中で、注文数が無限です。

#### ブラケットOCO注文

ブラケット注文とはOCO (Order Cancel Order)の特別のインスタンスです。ブラケット注文は既存の建玉を終了するために、使われています。同時のストップと指し値注文で注文を「ブラケット」することにより、ロスを制限し、利益をロックすることために、作成されています。全てのブラケット注文は同じシンボルだけで使われているという制限があり、同じマーケットの目的、例えば全てが売るかカバーするために使われている制限もあり、また、閉じ取引だけで使われている制限もあります。これらのルールの理由は、いずれかの注文が一部満たされている場合、全ての注文がオートデクリメントされる必要があるためです。例えば、あるお客様が1000株の売り指し値注文と1000株の売りストップ注文があり、指し値が500株で一部満たされている場合、お客様はそのストップがまだ有効にしたいですが、残りの開いてる建玉に一致するために、500株まで自動的にデクリメントする必要があります。

#### 注文送信する注文　（Order Sends Order - OSO Orders）

OSO注文とは、注文のグループ（一つの注文か、いくつかの注文）の中で、主要な注文が完全に満たされている場合、二次の注文がマーケットに送られるものです。お客様が注文をして、最初の注文が満たされた後、ブラケットOCO注文（ロスの停止・利益の目的）を送りたい場合、OSO注文は、OCOまたはブラケットOCO注文と組み合わせて使用することができます。

* OSO注文
  * 一つの主要な注文
  * 1つか、またはそれ以上の二次注文
  * OSO注文は、任意ののレベルに入れ子にすることができます
  * 二次注文の場合、ブラケット注文かOCA注文になる可能性があります
  * OSO注文は異なるいくつかのアカウントで登録できます

#### トレール注文

* ストップマーケット型の受注のみで使用することができます
* ポイントは、整数値だけです
* パーセンテージは小数点以下2桁の最大値で送信することができます
* この注文のタイプを更新するとき、ユーザーが株のトレール量と数量を変更することができます

*エラー:*

* ４００メッセージ　＝　注文失敗。理由：　トレーリングストップは、ストップ注文のみ有効されています
* ４００メッセージ　＝　注文失敗。理由：　ストップリミット注文はオートリミット条件が必要です
* ４００注文の作成に失敗しました：　ポイントによるトレーリングストップの数が無効です
* ４００注文確認の作成に失敗しました：　割合によるトレーリングストップの数が無効です

ポイントまたはパーセントによって、トレーリングストップがストップマーケット注文のために登録できます。ポイントオプション付きトレーリングストップを設定する場合、ユーザーはポイント数のための整数値を入力します。

Points are calculated for a particular symbol by multiplying the [Display Type enumeration](../objects/quote/#display_type_options) in the quote object for the symbol, which maps to a particular decimal value, with the minMove value, which is also in the quote object.

シンボルの見積もりオブジェクトの中にあるディスプレイタイプ列挙を乗じることにより、ポイントはある特定のシンボルのために計算されています。



Ex. ESZ11 -> DisplayType = 3 which maps to .01 and MinMove = 25 so the point value will be .25. So 1 point maps to .25, 2 points map to .50.

When using the percentage option for trailing stops, the percentage value will be applied to the last price for the symbol and the price will be rounded to nearest valid price.

For Buy and BuyToCover trades, the estimated price will be rounded up to the nearest valid price.

For Sell and SellToShort trades, the estimated price will be rounded down to the nearest valid price.