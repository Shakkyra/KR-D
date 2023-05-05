import dbConnection from "@/db";

export default async function updateData2(req,res){
  const dbconnection = await dbConnection();

  const {_id,
    _pais,
    _colonia,
    _numeroExterior,
    _estado,
    _calle,
    _numeroInterior,
    _ciudad,
    _codigoPostal} = req.body;
  const query = `CALL sql9615348.REC_ADDRES(
    '${_id}',
    '${_pais}',
    '${_estado}',
    '${_ciudad}',
    '${_colonia}',
    '${_codigoPostal}', 
    '${_calle}',
    '${_numeroExterior}',
    '${_numeroInterior}')`;
  
  await dbconnection.execute(query);
  dbconnection.end(); 
}