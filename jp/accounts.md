---
layout: jp
title: アカウント
category: accounts
permalink: accounts/
weight: 3
---

### 概要

アカウントサービスは、ある特定のアカウントの差額（バランス）、建玉（ポジション）、または、注文の情報を提供致します。


### サービスURI

`https://api.tradestation.com/v2/accounts/{accountkey}/{method}`

### Method（関数）

* [差額](balances) | あるアカウントの差額情報を取り出します。
* [建玉](positions) | あるアカウントの建玉情報を取り出します。
* [注文](orders) | あるアカウントの注文情報を取り出します。