const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})

// db.query('select 1', (err, result) => {
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(result);
// })
const sqlStr = 'delete from users where id = ?'
const id = 15
db.query(sqlStr, id, (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    if (result.affectedRows === 1) {
        console.log('删除成功');
    }
})