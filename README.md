# Where to Trade STEEM (WttSteem)

The web page helps users to learn how much they will be paying if they are buying or in the case of selling how much they will get on [Steemit Market](http://steemit.com/market), [Blocktrades.us](http://blocktrades.us/), and [Bittrex](https://bittrex.com/Home/Markets) exchanges for 1, 10, 50, and 100 STEEMs.

## Why this project?

Steemit.com users are constantly buying STEEM to power up or keep liquid STEEM with Steem Blockchain Dollar (SBD) they earned by interacting in the community. As a frugal user I noticed that there are very little difference in price among the exchanges, and considering time of the day I can save a bit doing transaction on different exchanges. If I am going exchange 100s STEEM that little bit counts. So, I made this simple web project.

## How to use?

Project's web page if pretty self-explanatory. On the left side we have prices in SBD for buying 1 to 100 STEEMs on 3 different exchanges. On the right we have SBD revenue for selling 1 to 100 STEEMs on those exchanges.

## How I get the numbers?

Steemit Market data are gathered through SteemJS, Blocktrades and Bittrex data are gather via their respective API. Blocktrades has direct STEEM to SBD and SBD to STEEM conversion. So for Blocktrades it was easy. But Bittrex doesn't have direct SBD to STEEM convertion. So, to get buying data I used the BID price for [BTC-SBD](https://bittrex.com/Market/Index?MarketName=BTC-SBD), and ASK price for [BTC-STEEM](https://bittrex.com/Market/Index?MarketName=BTC-STEEM), for selling data the process was reversed.

I found Blocktrades.us is usually more expensive than others but convenience has a price. Bittrex process I cumbersome and time consuming. but if you want to save a bit and doing large transaction it may worth the effort. Steemit Market is also a great option.

## Demo: https://wttsteem.herokuapp.com/
