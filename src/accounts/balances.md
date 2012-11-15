-- Balance Resources --
Balances
GET /accounts/{accountkey}/balances{?oauth_token}
> Accept: application/json
< 200
< Content-Type: application/json
[
{
    "__type":"EquityAccount:#TradeStation.Web.Services.DataContracts",
    "Alias":"",
    "BODEquity":50000000.0000,
    "BODNetCash":50000000.0000,
    "ClosedPositions":[],
    "DisplayName":"2213568 QA",
    "Key":243557,
    "MarketValue":0,
    "Name":"2213568 QA",
    "RealTimeAccountBalance":50000000.0000,
    "RealTimeBuyingPower":50000000.000000,
    "RealTimeEquity":50000000.000000,
    "RealTimeRealizedProfitLoss":0.0000,
    "RealTimeUnrealizedGains":0.000000,
    "RealTimeUnrealizedProfitLoss":0,
    "Status":"A",
    "StatusDescription":"Active",
    "Type":"C",
    "TypeDescription":"Cash",
    "UnclearedDeposit":0.0000,
    "BODAccountBalance":50000000.0000,
    "BODDayTradingMarginableEquitiesBuyingPower":50000000.0000,
    "BODOptionBuyingPower":50000000.0000,
    "BODOptionValue":0.0000,
    "BODOvernightBuyingPower":50000000.0000,
    "CanDayTrade":true,
    "Commission":0,
    "DayTrades":0,
    "DayTradingQualified":true,
    "OptionApprovalLevel":5,
    "PatternDayTrader":false,
    "RealTimeCostOfPositions":0.0000,
    "RealTimeDayTradingMarginableEquitiesBuyingPower":50000000.000000,
    "RealTimeOptionBuyingPower":50000000.0000,
    "RealTimeOptionValue":0.0000000000,
    "RealTimeOvernightBuyingPower":50000000.000000,
    "UnsettledFund":0.0000
}
]