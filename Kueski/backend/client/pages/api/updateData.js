import dbConnection from "@/db";

export default async function updateData(req,res){
  const dbconnection = await dbConnection();

  const {_id,
    _nombre,
    _primerApellido,
    _segudnodApellido,
    _fechaNacimiento,
    _nacionalidad,
    _estadoNacimeinto,
    _actividadEconomica,
    _telefono,
    _correo,
    _curp } = req.body;
  const query = `CALL sql9615348.REC_USER(
    '${_id}',
    '${_nombre}',
    '${_primerApellido}',
    '${_segudnodApellido}',
    '${_fechaNacimiento}',
    '${_nacionalidad}',
    '${_estadoNacimeinto}',
    '${_actividadEconomica}',
    '${_curp}',
    '${_telefono}',
    '${_correo}')`;
  
  await dbconnection.execute(query);
  dbconnection.end(); 
}
