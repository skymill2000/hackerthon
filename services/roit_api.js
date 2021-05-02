const axios = require('axios');
const config = require('../config/apiConfig.json');
const apikey = config.APIKEY;
let puuid = "";
const fs = require('fs');


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
    puuid = userData.data.puuid;
    console.error(puuid);
    return userData.data;
}

const findUserData = async (myGameList) =>{
    // console.log(sampleData.info.participants);
    let onGameListResult = [];
    const findUser = "69kRXfbWSZ6wnnrVbvfbk20Lx6KFzFG1lH-t4I7k45m1Qredp_H4VLk-llvI-ccbbg4iWAhtdrAgOA"
    for (const myGame of myGameList) {
        const myData = myGame.info.participants.find((element)=>{
            if(element.puuid == findUser){
                return element;
            }
        })
        onGameListResult.push(myData);
    }
    console.log(onGameListResult);
    return onGameListResult;
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
    return await matchDetail.data;
}
const getChampionData = () =>{
    axios.get('http://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion.json').then((res)=>{
        console.log(JSON.stringify(res.data.data));
    })
}

const getUserMatchData = async (name) =>{
    try {
        let returnList = [];
        const user = await getSummonerData(name);
        const matchList = await getMatchV5(user.puuid,0,10);
        for await (const match of matchList) {
            const matchDetail = await getMatchDetail(match);
            returnList.push(matchDetail);
        }
        const userData = await findUserData(returnList);
        console.log(userData);
        return returnList;
    }
    catch (e) {
        console.error(e);
    }
};

const missionClear = () =>{

}

const JsontoFile = (list) => {
    let data = JSON.stringify(list);
    // fs.writeFileSync('../gameSamples.json', data);
}

const myOnGameData = async (gameList) => {
    const myOnGames = await findUserData(gameList)
}

const missionCheck = (game) => {

}

module.exports = {
    getUserMatch : getUserMatchData,
    getChampionData : getChampionData,
    JsontoFile : JsontoFile,
}
