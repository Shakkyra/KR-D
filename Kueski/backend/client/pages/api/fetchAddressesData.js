import dbConnection from "@/db";

export default async function handler(req, res) {
    try {
      const connection = await dbConnection();
      const [data] = await connection.execute("SELECT * FROM ADDRESSES");
      connection.end();
      res.status(200).json({ names: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}