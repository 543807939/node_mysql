const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})
// 测试数据库有没有连接成功
// db.query('select 1 ', (err, result) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(result);
// })

// 插入数据
const user = { username: 'zmz', password: 'echeng' }
let sqlStr = 'insert into users (username,password) values (?,?)'
db.query(sqlStr, [user.username, user.password], (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    if (result.affectedRows === 1) {
        console.log('插入数据成功');
    }
})