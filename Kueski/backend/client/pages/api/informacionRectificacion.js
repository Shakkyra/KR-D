import dbConnection from "@/db";

export default async function infoRect(req, res) {
    try {
      const dbconnection = await dbConnection();
        // Obtener el valor del parámetro de búsqueda
        const searchValue = req.query.searchValue || "";
        //console.log("Valor del parámetro de búsqueda en getData2.js:", searchValue);
        // Modificar la consulta para filtrar por el valor del parámetro de búsqueda
        //change query
        //const query = "SELECT ID_REQUEST, USER_ID, TYPE_REQUEST, FECHA FROM ARCO_REQUEST WHERE USER_ID LIKE ?";
        const {_id} = req.body;
        const query = `SELECT USER_NAME,FIRST_LAST_NAME,SECOND_LAST_NAME,BORN_DATE,NACIONALITY,STATE_OF_BIRTH,ECONOMIC_ACTIVITY,CURP,PHONE_NUMER,EMAIL FROM USERS WHERE USER_ID LIKE ${_id};`;
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
    
        res.status(200).json({ names: data }); 
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }