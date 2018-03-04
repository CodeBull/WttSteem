function getSteemMarket() {
    setTimeout(getSteemMarket, 10000);

    steem.api.getOrderBook(1, function(err, result) {
        var ask = parseFloat(result['asks'][0]['real_price']).toFixed(6);
        $('#steemit_buy').text(ask);

        var bid = parseFloat(result['bids'][0]['real_price']).toFixed(6);
        $('#steemit_sell').text(bid);
    });
}

function getBlocktrades() {
    setTimeout(getBlocktrades, 30000);

    $.getJSON('price.php', { market: 'blocktrades', action: 'buy' }, function(data, textStatus) {
        var ask = parseFloat(data.price).toFixed(6);
        $('#blocktrades_buy').text(ask);
    });

    $.getJSON('price.php', { market: 'blocktrades', action: 'sell' }, function(data, textStatus) {
        var ask = parseFloat(data.price).toFixed(6);
        $('#blocktrades_sell').text(ask);
    });
}

function getBittrex() {
    setTimeout(getBittrex, 30000);

    $.getJSON('price.php', { market: 'bittrex', action: 'buy' }, function(data, textStatus) {
        var ask = parseFloat(data.price).toFixed(6);
        $('#bittrex_buy').text(ask);
    });
    $.getJSON('price.php', { market: 'bittrex', action: 'sell' }, function(data, textStatus) {
        var ask = parseFloat(data.price).toFixed(6);
        $('#bittrex_sell').text(ask);
    });
}

$(document).ready(function() {

    getSteemMarket();
    getBlocktrades();
    getBittrex();

});