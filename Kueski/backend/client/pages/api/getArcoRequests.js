import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const dbconnection = await dbConnection();
        // Obtener el valor del parámetro de búsqueda
        const searchValue = req.query.searchValue || "";
        //console.log("Valor del parámetro de búsqueda en getData2.js:", searchValue);
        // Modificar la consulta para filtrar por el valor del parámetro de búsqueda
        //change query
        //const query = "SELECT ID_REQUEST, USER_ID, TYPE_REQUEST, FECHA FROM ARCO_REQUEST WHERE USER_ID LIKE ?";
        const query = "SELECT USERS.USER_ID, USERS.FIRST_LAST_NAME, USERS.SECOND_LAST_NAME, USERS.USER_NAME, ARCO_REQUEST.TYPE_REQUEST, ARCO_REQUEST.FECHA FROM USERS JOIN ARCO_REQUEST WHERE USERS.USER_ID LIKE ?;";
        const values = [searchValue];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
    
        res.status(200).json({ names: data });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
  