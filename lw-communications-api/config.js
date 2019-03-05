const config = {
    app: {
        port: 3000
    },
    mongodb: {
        host: 'localhost',
        port: 27017,
        name: 'lw-communications'
    },
    mysqldb: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'leasewallet'
    }
};

module.exports = config;