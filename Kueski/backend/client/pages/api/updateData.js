import dbConnection from "@/db";

export default async function updateData(req,res){
  const dbconnection = await dbConnection();

  const { nombre, PApellido, SApellido, FNacimiento, nacionalidad } = req.body;
  const sql = `UPDATE USERS
  SET 
  USERS.USER_NAME = '${nombre}'
  WHERE 
  USERS.USER_ID = 1;`;

  dbconnection.end();
}
