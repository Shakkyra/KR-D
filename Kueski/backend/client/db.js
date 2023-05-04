import mysql from "mysql2/promise";

const dbConnection = async () => {
  const connection = await mysql.createConnection({
    host: 'sql9.freesqldatabase.com',
    database: 'sql9615348',
    user: 'sql9615348',
    password: 'ZTWkmRuMM2',
  });
  return connection;
};

export default dbConnection;