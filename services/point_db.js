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

module.exports = {
    pointList
}
