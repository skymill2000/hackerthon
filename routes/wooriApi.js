const express = require("express");
const router = express.Router();
const axios = require("axios");

let host = "https://openapi.wooribank.com:444";
let accountTransPath = "/oai/wb/v1/finance/getAccTransList";
let accountInfoPath = "/oai/wb/v1/finance/getAccBasicInfo";

let axiosConfig = {
  headers: {
    appkey: "l7xx3gHNFLVhjrk0FgQXgVUDqWkofx9NcADE",
    token: "2RYsdj27cCHIO0ztb0ItU3Ygzeiz6sW4",
  },
};
let createAccountTransParam = (accountNo, startDateStr, endDateStr) => {
  return {
    dataHeader: {
      UTZPE_CNCT_IPAD: "",
      UTZPE_CNCT_MCHR_UNQ_ID: "",
      UTZPE_CNCT_TEL_NO_TXT: "",
      UTZPE_CNCT_MCHR_IDF_SRNO: "",
      UTZ_MCHR_OS_DSCD: "",
      UTZ_MCHR_OS_VER_NM: "",
      UTZ_MCHR_MDL_NM: "",
      UTZ_MCHR_APP_VER_NM: "",
    },
    dataBody: {
      INQ_ACNO: accountNo,
      INQ_STA_DT: startDateStr,
      INQ_END_DT: endDateStr,
      NEW_DT: "20140522",
      ACCT_KND: "P",
      CUCD: "KRW",
    },
  };
};

let createAccountInfoParam = (accountNo, dateStr) => {
  return {
    dataHeader: {
      UTZPE_CNCT_IPAD: "",
      UTZPE_CNCT_MCHR_UNQ_ID: "",
      UTZPE_CNCT_TEL_NO_TXT: "",
      UTZPE_CNCT_MCHR_IDF_SRNO: "",
      UTZ_MCHR_OS_DSCD: "",
      UTZ_MCHR_OS_VER_NM: "",
      UTZ_MCHR_MDL_NM: "",
      UTZ_MCHR_APP_VER_NM: "",
    },
    dataBody: {
      INQ_ACNO: accountNo,
      INQ_BAS_DT: dateStr,
      ACCT_KND: "P",
      INQ_CUCD: "KRW",
    },
  };
};

router.get("/getAccountTransList", (req, res) => {
  let param = createAccountTransParam("1002123456789", "20210101", "20210310");

  try {
    axios
      .post(`${host}${accountTransPath}`, param, axiosConfig)
      .then((data) => res.status(200).json(data.data.dataBody))
      .catch((err) => res.send(err));
  } catch (e) {
    console.error(e);
  }
});

router.get("/getAccountInfo", (req, res) => {
  let param = createAccountInfoParam("1002123456789", "20210220");

  try {
    axios
      .post(`${host}${accountInfoPath}`, param, axiosConfig)
      .then((data) => res.status(200).json(data.data.dataBody))
      .catch((err) => res.send(err));
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
