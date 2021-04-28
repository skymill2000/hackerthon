const axios = require('axios');
const config = require('../../config/apiConfig.json');
const apikey = config.APIKEY;
const testId = "그저그런녀석";

console.log(apikey);

const getSummonerData = async (username) =>{
    let option = {
        method : 'GET',
        url : 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+encodeURI(username),
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": apikey,
        }
    }
    let userData = await axios(option);
    return userData.data.puuid;
}

const getMatchV5 = async (puuid, start, count) =>{
    let url = 'https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/'+puuid+'/ids?start='+start+'&count='+count;
    let option = {
        method : 'GET',
        url : url,
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": apikey,
        }
    }
    const matchList = await axios(option);
    return matchList.data;
}

const getMatchDetail = async (matchId) => {
    let url = 'https://asia.api.riotgames.com/lol/match/v5/matches/'+matchId;
    let option = {
        method : 'GET',
        url : url,
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": apikey,
        }
    }
    const matchDetail = await axios(option);
    return matchDetail;
}

const getUserMatchData = async (name) =>{
    try {
        const userPuuid = await getSummonerData(name);
        const matchList = await getMatchV5(userPuuid,0,100);
        for (const match of matchList) {
            const matchDetail = await getMatchDetail(match);
            console.log(matchDetail);
        }
        return matchDetail.data;
    }
    catch (e) {
        console.error(e);
    }
};



module.exports = {
    getUserMatch : getUserMatchData
}
