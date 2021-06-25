const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db_01'
})

const sqlStr = 'update users set status = ? where id = ?'
const query = { status: 1, id: 3 }
db.query(sqlStr, [query.status, query.id], (err, result) => {
    if (err) {
        return console.log(err.message);
    }
    if (result.affectedRows === 1) {
        console.log('删除成功');
    }
})