import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const dbconnection = await dbConnection();
        // Obtener el valor del parámetro de búsqueda
        const searchValue = req.query.searchValue || "";
        console.log("Valor del parámetro de búsqueda en getData2.js:", searchValue);
        // Modificar la consulta para filtrar por el valor del parámetro de búsqueda
        //const query = "CALL sql9615348.USER_INFO(?);"
        const query ="SELECT USERS.USER_NAME, USERS.FIRST_LAST_NAME, USERS.SECOND_LAST_NAME, USERS.STATE_OF_BIRTH, USERS.BORN_DATE, USERS.NACIONALITY, USERS.ECONOMIC_ACTIVITY, USERS.CURP, USERS.EMAIL, USERS.PHONE_NUMER,ADDRESSES.COUNTRY,ADDRESSES.STATE, ADDRESSES.CITY, ADDRESSES.NEIGHBORHOOD, ADDRESSES.STREET, ADDRESSES.EXT_NUMBER, ADDRESSES.INT_NUMBER, ADDRESSES.ZIP_CODE,IDENTIFICATIONS.IDENTIFICATION_TYPE,IDENTIFICATIONS.IDENTIFICATION_NUMBER FROM USERS LEFT JOIN ADDRESSES USING (USER_ID) LEFT JOIN IDENTIFICATIONS USING(USER_ID) WHERE USER_ID = ?;";
        //const query2 = "INSERT INTO ARCO_REQUEST (USER_ID, TYPE_REQUEST, COMMENTARIOS, PREV_VALUE, NEW_VALUE, FECHA) VALUES (ID, 1, "Acceso a datos personales", NULL, NULL, CURRENT_TIMESTAMP());";
        const values = [searchValue];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();
        res.status(200).json({ names: data });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
  }
  