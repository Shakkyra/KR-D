import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const dbconnection = await dbConnection();
      const{
        _id,
        _oposicion1,
        _oposicion2,
        _oposicion3,
        _oposicion4,
        _oposicion5,
        _oposicion6,
        _oposicion7,
        _oposicion8,
        _oposicion9,
        _oposicion10,
        _oposicion11,
        _oposicion12,
        _oposicion13,
        _oposicion14,
        _oposicion15,
        _oposicion16,
        _oposicion17,
      } = req.body;
      const query2 = `CALL sql9615348.OPP(
        '${_id}',
        '${_oposicion1}',
        '${_oposicion2}',
        '${_oposicion3}',
        '${_oposicion4}',
        '${_oposicion5}',
        '${_oposicion6}',
        '${_oposicion7}',
        '${_oposicion8}',
        '${_oposicion9}',
        '${_oposicion10}',
        '${_oposicion11}',
        '${_oposicion12}',
        '${_oposicion13}',
        '${_oposicion14}',
        '${_oposicion15}',
        '${_oposicion16}',
        '${_oposicion17}');`;
      const query = "CALL sql9615348.OPP(1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1);";
      dbconnection.execute(query2);
      dbconnection.end();
      res.status(200).json({ Status: "Success!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }