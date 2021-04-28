var express = require('express');
var router = express.Router();
let dbconn = require('./database');
let common = require('../lib')
let auth = require('../lib/auth')
let user_db = require('../services/user_db');
let mission_db = require('../services/mission_db');
let point_db = require('../services/point_db');


let dummyData = [
    {
        title : '배달의 민족',
        description : '레오나를 자주 플레이하는 사람들의 67% 가 이용중',
        image : '',
    },
    {
        title : '쿠팡 이츠',
        description : '서포터를 자주플레이하는 사람들의 86% 이용',
        image : '',
    },
]

router.post('/',auth, (req, res) => {

});

router.post('/main',auth, async (req, res) => {
    let userId = req.decoded.userId;
    let resultObj = {
        point : 0,
        missions : undefined,
        choice : dummyData,
    }
    try {
        const point = await user_db.userPoint(userId);
        const missions = await mission_db.missionList(userId);
        resultObj.point = point;
        resultObj.missions = missions;
        res.json(resultObj);
    }
    catch (e) {
        console.error(e);
        throw err;
    }
});

router.post('/missions', auth, async (req, res) => {
    let userId = req.decoded.userId;
    let resultObj = {
        todayMission : undefined,
    }
    try {
        const todayMission = await mission_db.todaysMission(userId);
        res.json(todayMission)
    }
    catch (e) {
        console.error(e);
        throw err;
    }
})

router.post('/points', auth, async (req, res) => {
    let userId = req.decoded.userId;
    let resultObj = {
        pointList : [],
    }
    try {
        const pointList = await point_db.pointList(userId);
        resultObj.pointList = pointList;
        res.json(resultObj)
    }
    catch (e) {
        console.error(e);
        throw err;
    }
});




module.exports = router;
