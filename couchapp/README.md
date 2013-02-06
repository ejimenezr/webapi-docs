# TradeStation Markdown Viewer for the WebAPI Documentation

## Usage

MAC OSX

    $ make

WINDOWS

    $ Invoke-psake ./default.ps1

Both

    $ couchapp push tradestation
        $ open http://127.0.0.1:5984/tradestation/_design/webapi-docs/_show/chapter/01-chapter1

## Requirements

* GNU Make OR Psake
* [Couchapp](http://couchapp.org/page/installing) OR [Erica](https://github.com/benoitc/erica)
