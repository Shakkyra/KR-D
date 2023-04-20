import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "empresa",
        user: "root",
    });
    try{
        const query = "SELECT EMP_NUM, EMP_LNAME, EMP_FNAME FROM employee";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        res.status(200).json({ names: data })
    }catch (error) {
        res.status(500).json({error: error.message});
    }
    
  }
  