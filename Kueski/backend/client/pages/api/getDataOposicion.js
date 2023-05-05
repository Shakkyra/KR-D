import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const dbconnection = await dbConnection();
      // Obtener el valor del parámetro de búsqueda
      const searchValue = req.query.searchValue || "";
      // Modificar la consulta para filtrar por el valor del parámetro de búsqueda
      const query = "SELECT OPPOSITION_TYPE_1, OPPOSITION_TYPE_2, OPPOSITION_TYPE_3, OPPOSITION_TYPE_4, OPPOSITION_TYPE_5, OPPOSITION_TYPE_6, OPPOSITION_TYPE_7,OPPOSITION_TYPE_8, OPPOSITION_TYPE_9, OPPOSITION_TYPE_10, OPPOSITION_TYPE_11, OPPOSITION_TYPE_12, OPPOSITION_TYPE_13, OPPOSITION_TYPE_14, OPPOSITION_TYPE_15, OPPOSITION_TYPE_16,  OPPOSITION_TYPE_17  FROM OPOSICION WHERE USER_ID = ?;";
      const [data] = await dbconnection.execute(query, [searchValue]);
      dbconnection.end();
      res.status(200).json({ names: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }