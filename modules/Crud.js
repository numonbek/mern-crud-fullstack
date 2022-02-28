// import mysql2 from 'mysql2';
import mysql2 from 'mysql';
const db = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_contact',
});

export default db;
