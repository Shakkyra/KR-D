import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const dbconnection = await dbConnection();
      const{
        _id,
        _oposicion1
      } = req.body;
      const query2 = `CALL sql9615348.OPP_SINGLE('${_id}','${_oposicion1}');`;
      const query = "CALL sql9615348.OPP(1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1);";
      console.log("Valor oposicion en endpoint ",_oposicion1);
      dbconnection.execute(query2);
      dbconnection.end();
      res.status(200).json({ Status: "Success!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }