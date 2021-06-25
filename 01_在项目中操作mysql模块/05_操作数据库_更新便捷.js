const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})

// db.query('select 1', (err, result) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(result);
// })
const sqlStr = 'update users set ? where id = ?'
const user = { id: 6, username: 'wwww', password: 'wwww123456' }
db.query(sqlStr, [user, user.id], (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    if (result.affectedRows === 1) {
        console.log('更新成功');
    }
})