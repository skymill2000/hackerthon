let roitApi = require('./roit_api');
let sampleData = require('./sample.json');
let smapleGamesData = require('../gameSamples.json');

const main = async () => {
    let resultList = await roitApi.getUserMatch("그저그런녀석");
    console.log(resultList);
    // roitApi.JsontoFile(resultList); //샘플데이터 만들기
    // findUser();
}



main();
