require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bucketodo_db',
    password : process.env.db_password
});

module.exports = connection;

//create table wishes(
//   id int auto_increment primary key,
//   title varchar(200) not null,
//   is_done boolean default false,
//   created_at timestamp default current_timestamp
//   );