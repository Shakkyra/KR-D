import dbConnection from "@/db";

export default async function updateData(req,res){
  const dbconnection = await dbConnection();

  const { _nombre, _PApellido, _SApellido, _FNacimiento, _nacionalidad, _estdoNacimiento, _actividadEconomica, _telefono, _correo, _curp } = req.body;
  const query = `CALL sql9615348.REC_USER(1,'${_nombre}','${_PApellido}','${_SApellido}','${_FNacimiento}','${_nacionalidad}','${_estdoNacimiento}','${_actividadEconomica}','${_curp}','${_telefono}','${_correo}');`;

  const data = await dbconnection.execute(query);
  console.log(data);

  dbconnection.end(); 
}
