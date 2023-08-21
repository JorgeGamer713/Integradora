"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const pool = (0, promise_1.createPool)({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'pventas'
});
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('Conexión exitosa!');
});
exports.default = pool;
