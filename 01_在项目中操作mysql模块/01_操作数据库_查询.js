const mysql = require('mysql')
// 与数据建立连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})
// 测试mysql能否使用
// db.query('select 1', (err, result) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(result);
// })
var sqlStr = 'select * from users'
db.query(sqlInsert, (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(result);
})
db.query(sqlStr, (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    console.log(result);
})