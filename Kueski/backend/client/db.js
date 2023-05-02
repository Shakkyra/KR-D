import mysql from "mysql2/promise";

const dbConnection = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "kueskiarco",
    user: "root",
  });
  return connection;
};

export default dbConnection;