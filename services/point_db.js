const db = require('./db');
const helper = require('../lib/database/helper');
const config = require('../lib/database/config');

const pointList = async (userId) => {
    try {
        const rows = await db.query("SELECT * FROM `point` p JOIN mission m ON m.id = p.point_contents WHERE p.user_id = ?", [userId]);
        return rows;
    }
    catch (e) {
        console.error(e);
        throw e;
    }
}

const pointSum = async (userId) => {
    try {
        let sql = "SELECT point_datetime, SUM(point_point) FROM point WHERE user_id = ? GROUP BY point_datetime"
        const rows = await db.query(sql,[userId]);
        return rows;
    }
    catch (e) {
        console.error(e)
        throw e;
    }
}

module.exports = {
    pointList,
    pointSum
}
