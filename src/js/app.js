function getSteemMarket() {
    setTimeout(getSteemMarket, 10000);

    steem.api.getOrderBook(1, function(err, result) {
        var ask = parseFloat(result['asks'][0]['real_price']).toFixed(6);
        $('#steemit_buy').text(ask);
        $('#steemit_buy_10').text(Number(ask * 10).toFixed(3));
        $('#steemit_buy_50').text(Number(ask * 50).toFixed(3));
        $('#steemit_buy_100').text(Number(ask * 100).toFixed(3));

        var bid = parseFloat(result['bids'][0]['real_price']).toFixed(6);
        $('#steemit_sell').text(bid);
        $('#steemit_sell_10').text(Number(bid * 10).toFixed(3));
        $('#steemit_sell_50').text(Number(bid * 50).toFixed(3));
        $('#steemit_sell_100').text(Number(bid * 100).toFixed(3));
    });
}

function getBlocktrades() {
    setTimeout(getBlocktrades, 30000);

    $.getJSON('price.php', { market: 'blocktrades', action: 'buy' }, function(data, textStatus) {
        var price = parseFloat(data.price).toFixed(6);
        $('#blocktrades_buy').text(price);
        $('#blocktrades_buy_10').text(Number(price * 10).toFixed(3));
        $('#blocktrades_buy_50').text(Number(price * 50).toFixed(3));
        $('#blocktrades_buy_100').text(Number(price * 100).toFixed(3));
    });

    $.getJSON('price.php', { market: 'blocktrades', action: 'sell' }, function(data, textStatus) {
        var price = parseFloat(data.price).toFixed(6);
        $('#blocktrades_sell').text(price);
        $('#blocktrades_sell_10').text(Number(price * 10).toFixed(3));
        $('#blocktrades_sell_50').text(Number(price * 50).toFixed(3));
        $('#blocktrades_sell_100').text(Number(price * 100).toFixed(3));
    });
}

function getBittrex() {
    setTimeout(getBittrex, 30000);

    $.getJSON('price.php', { market: 'bittrex', action: 'buy' }, function(data, textStatus) {
        var price = parseFloat(data.price).toFixed(6);
        $('#bittrex_buy').text(price);
        $('#bittrex_buy_10').text(Number(price * 10).toFixed(3));
        $('#bittrex_buy_50').text(Number(price * 50).toFixed(3));
        $('#bittrex_buy_100').text(Number(price * 100).toFixed(3));
    });
    $.getJSON('price.php', { market: 'bittrex', action: 'sell' }, function(data, textStatus) {
        var price = parseFloat(data.price).toFixed(6);
        $('#bittrex_sell').text(price);
        $('#bittrex_sell_10').text(Number(price * 10).toFixed(3));
        $('#bittrex_sell_50').text(Number(price * 50).toFixed(3));
        $('#bittrex_sell_100').text(Number(price * 100).toFixed(3));
    });
}

$(document).ready(function() {

    getSteemMarket();
    getBlocktrades();
    getBittrex();

});