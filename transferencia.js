var url = 'https://api.blockcypher.com/v1/bcy/test/faucet';
var token = 'f559581fbebb412b9379cd5752bcae49'
var completeUrl = url + '?token=' + token;
var amount = 10000000 //10^7 que corresponde a 0,1 BTC

const axios = require('axios');

module.exports = {
    initBcyTransfer(){
        console.log('iniciando');
        return axios.post(completeUrl, {
                        address: 'C3qXd3YYRBrZZod5D9GLGhpDNnVfAwpbe2',
                        amount: amount
                    })
                .then(res => {
                    console.log(res.status);
                    console.log(res.data);
                    return res.data;
                })
                .catch(error => {
                    return 'Error';
                });
    }
};
