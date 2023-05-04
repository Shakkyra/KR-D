import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const dbconnection = await dbConnection();
        // Obtener el valor del parámetro de búsqueda
        const searchValue = req.query.searchValue || "";
        //console.log("Valor del parámetro de búsqueda en getData2.js:", searchValue);
        // Modificar la consulta para filtrar por el valor del parámetro de búsqueda
        const query = "CALL sql9615348.ARCO_DELETE_USER(?);";
        //const query = "UPDATE USERS SET USERS.USER_NAME = NULL, USERS.FIRST_LAST_NAME = NULL,	USERS.SECOND_LAST_NAME = NULL, USERS.BORN_DATE = NULL, USERS.NACIONALITY = NULL, USERS.STATE_OF_BIRTH = NULL,	USERS.ECONOMIC_ACTIVITY = NULL,	USERS.CURP = NULL, USERS.PHONE_NUMER = NULL,	USERS.EMAIL = NULL,	USERS.IS_CLIENT = NULL,	USERS.IS_BLOCKED = NULL,	USERS.CREATED_AT = NULL,	USERS.UPDATE_AT = NULL,	USERS.DELETED_AT = CURRENT_TIMESTAMP() WHERE USERS.USER_ID = ?;"
        const values = [searchValue];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
    
        res.status(200).json({ names: data });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
  