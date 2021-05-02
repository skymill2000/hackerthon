const axios = require('axios');
const https = require('https')
let pki = require('node-forge').pki;
const appKey = ""
const appSecret = ""
const option = {
    method : "POST",
    url : "https://developer.wooribank.com/oai/wb/v1/finance/getAccBasicInfo",
    headers : {
        appKey : "l7xx3gHNFLVhjrk0FgQXgVUDqWkofx9NcADE",
    },
    json : {
        "dataHeader": {
            "UTZPE_CNCT_IPAD": "10.0.0.1",
            "UTZPE_CNCT_MCHR_UN": "3B5E6E7B"
        },
        "dataBody": {
            "INQ_ACNO": "1002123456789",
            "INQ_BAS_DT": "20190101",
            "INQ_CUCD": "KRW"
        }
    }
}


// or
