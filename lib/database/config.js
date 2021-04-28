const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'root',
        password: env.DB_PASSWORD || '1q2w3e4r',
        database: env.DB_NAME || 'hackerthon',
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;
