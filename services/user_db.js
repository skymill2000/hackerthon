const db = require('./db');
const helper = require('../lib/database/helper');
const config = require('../lib/database/config');

const userPoint = async (userId) => {
    try {
        const rows = await db.query("select sum(point_point) as userPoint from point where user_id = ?", [userId]);
        const point = rows[0].userPoint;
        return point
    }
    catch (e) {
        console.error(e);
        throw err;
    }
}

module.exports = {
    userPoint
}
