const env = process.env;

const config = {
    db: {
        host: 'leona-mania-db.cte21kjs7rgw.ap-northeast-2.rds.amazonaws.com',
        user: 'admin',
        password: 'dlgusals1234!',
        database: 'leonamania',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
