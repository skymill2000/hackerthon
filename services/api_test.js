let roitApi = require('./roit_api');
const main = async () => {
    roitApi.getChampionData();
    let resultList = await roitApi.getUserMatch("그저그런녀석");
    console.log(resultList);
    for (const element of resultList) {
        console.log(element.data);
    }
}



main();
