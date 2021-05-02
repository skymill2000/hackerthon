let roitApi = require('./roit_api');
let sampleData = require('./sample.json');

const findUser = async () =>{
    // console.log(sampleData.info.participants);
    const findUser = "69kRXfbWSZ6wnnrVbvfbk20Lx6KFzFG1lH-t4I7k45m1Qredp_H4VLk-llvI-ccbbg4iWAhtdrAgOA"
    const myData = sampleData.info.participants.find((element)=>{
        if(element.puuid == findUser){
            return element;
        }
    })
    console.log(myData);
}

const main = async () => {
    // let resultList = await roitApi.getUserMatch("그저그런녀석");
    // console.log(resultList);
    // for (const element of resultList) {
    //     console.log(element.data);
    //
    // }

    findUser();
}



main();
