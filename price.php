<?php
function getJson($url) {

    if (!function_exists('curl_init')) {
        die('Sorry cURL is not installed!');
    }

    $curl = curl_init();
    $useragent = 'Mozilla/5.0 (Windows NT 6.2; WOW64; rv:17.0) Gecko/20100101 Firefox/17.0';

    curl_setopt_array($curl, array(
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_URL => $url,
        CURLOPT_USERAGENT => $useragent,
        CURLOPT_HTTPHEADER => array(

        )
    ));

    $response = json_decode(curl_exec($curl), true);

    curl_close($curl);

    return $response;
}

if(isset($_GET['market'])) {

    $market = trim($_GET['market']);

    switch ($market) {
        case 'bittrex':
            $sbd_data = getJson('https://bittrex.com/api/v1.1/public/getticker?market=BTC-SBD');
            $steem_data = getJson('https://bittrex.com/api/v1.1/public/getticker?market=BTC-STEEM');

            if(@$_GET['action'] === 'sell') {
                $price = ($steem_data['result']['Bid']/$sbd_data['result']['Ask']);
            } else {
                $price = ($steem_data['result']['Ask']/$sbd_data['result']['Bid']);
            }

            $response = array(
                'market' => 'bittrex',
                'price' => $price
            );

            echo json_encode($response);
            
            break;
        
        case 'blocktrades':
            
            if(@$_GET['action'] === 'sell') {
                $data =  getJson('https://blocktrades.us/api/v2/estimate-output-amount?inputAmount=1&inputCoinType=steem&outputCoinType=sbd');
                $price = $data['outputAmount'];
            } else {
                $data =  getJson('https://blocktrades.us/api/v2/estimate-input-amount?outputAmount=1&inputCoinType=sbd&outputCoinType=steem');
                $price = $data['inputAmount'];
            }


            if( empty($data['error']) ) {
                $response = array(
                    'market' => 'blocktrades',
                    'price' => $price
                );
            } else {
                $response = array('error' => $data['error']['message']);
            }

            echo json_encode($response);

            break;
    }
}
?>