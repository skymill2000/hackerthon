const db = require('./db');
const helper = require('../lib/database/helper');
const config = require('../lib/database/config');

const missionList = async (userId) => {
    try {
        const rows = await db.query("SELECT * FROM user_has_hobby uhs JOIN hobby h ON h.id = uhs.hobby_id WHERE uhs.user_id = ?", [userId]);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

const todaysMission = async (userId) => {
    try {
        const rows = await db.query('SELECT * FROM user_today_mission utm JOIN mission m ON utm.mission_id = m.id WHERE utm.user_id = ?', [userId]);
        console.log(rows);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}


module.exports = {
    missionList,
    todaysMission
}
