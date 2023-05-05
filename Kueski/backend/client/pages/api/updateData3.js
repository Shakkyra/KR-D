import dbConnection from "@/db";

export default async function updateData3(req,res){
  const dbconnection = await dbConnection();

  const {_id,
    _tipoIdentificacion,
    _numeroIdentificacion} = req.body;
  const query = `CALL sql9615348.REC_IDN(
    '${_id}',
    '${_tipoIdentificacion}',
    '${_numeroIdentificacion}')`;
  
  await dbconnection.execute(query);
  dbconnection.end(); 
}