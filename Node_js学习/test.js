/**
 * 这是一个简单的mysql数据库连接代码
 */

const { Console } = require("console");
var mysql = require("mysql");
//创建一个数据库连接，这里配置参数项
var connection = mysql.createConnection({
    host: 'localhost',
    port: '8001',
    user: 'root',
    password: '123456',
    database: 'test'
});

//创建连接
connection.connect();

//一个数据库查询语句
var sql = 'SELECT * FROM websites';

connection.query(sql, function(err, result) {
    if(err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }
    console.log("-----------------------SELECT RESULT---------------------");
    Console,log(result);
    console.log('---------------------------------------------------------');
});


//以下是一个简单的更新数据的代码
var sql_update = 'UPDATE websites SET name = ?, url = ? WHERE id = ?';
var updateParams = ['菜鸟快递点', 'www.cainiao.com', 2];

//以下包含的参数分别是“数据库语句”，“更新的数据库参数”， “回调函数”
connection.query(sql_update, updateParams, function(err, result) {
    if(err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log("-----------------------UPDATE-----------------------------");
    console.log(result);
    console.log('-----------------------------------------------------------');
})

//其他简单的，例如增加或者删除的数据库中数据的代码参照上述代码即可

//连接结束
connection.end();
