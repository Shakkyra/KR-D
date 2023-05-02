import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
        host: 'sql9.freesqldatabase.com',
        database: 'sql9615348',
        user: 'sql9615348',
        password: 'ZTWkmRuMM2',
    });
    try{
        const query = "SELECT USER_ID, USER_NAME, FIRST_LAST_NAME, SECOND_LAST_NAME, PHONE_NUMER, EMAIL FROM USERS;";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        //console.log(data);

        res.status(200).json({ names: data })
    }catch (error) {
        res.status(500).json({error: error.message});
    }  
  }
  