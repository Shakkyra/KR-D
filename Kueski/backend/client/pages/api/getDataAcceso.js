import dbConnection from "@/db";

export default async function handler(req, res) {
  try {
    const dbconnection = await dbConnection();
    // Obtener el valor del parámetro de búsqueda
    const searchValue = req.query.searchValue || "";
    // Modificar la consulta para filtrar por el valor del parámetro de búsqueda
    //const query = "SELECT USER_NAME, FIRST_LAST_NAME FROM USERS WHERE USER_ID = ?";
    const query = "CALL sql9615348.USER_INFO(?);";
    const [data] = await dbconnection.execute(query, [searchValue]);
    dbconnection.end();
    res.status(200).json({ names: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}