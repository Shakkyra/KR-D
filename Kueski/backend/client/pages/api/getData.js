import dbConnection from "@/db";

export default async function handler(req, res) {
    try{
        const dbconnection = await dbConnection();
        const query = "SELECT USER_ID, USER_NAME, FIRST_LAST_NAME, SECOND_LAST_NAME, PHONE_NUMBER, EMAIL FROM USERS";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        //console.log(data);

        res.status(200).json({ names: data })
    }catch (error) {
        res.status(500).json({error: error.message});
    }  
  }
  