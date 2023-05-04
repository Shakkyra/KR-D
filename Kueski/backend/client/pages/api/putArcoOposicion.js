import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const dbconnection = await dbConnection();
      
      const query = "CALL sql9615348.OPP(?,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1);";
      dbconnection.execute(query, [searchValue]);
      dbconnection.end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }