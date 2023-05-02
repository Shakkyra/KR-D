import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "kueskiarco",
    user: "root",
  });
  try {
    // Obtener el valor del parámetro de búsqueda
    const searchValue = req.query.searchValue || "";
    console.log("Valor del parámetro de búsqueda en getData2.js:", searchValue);

    // Modificar la consulta para filtrar por el valor del parámetro de búsqueda
    const query = "SELECT USER_ID, FIRST_LAST_NAME, SECOND_LAST_NAME, PHONE_NUMBER, EMAIL FROM USERS WHERE USER_ID LIKE ?";
    const values = [`%${searchValue}%`];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ names: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}