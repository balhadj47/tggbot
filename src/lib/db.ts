import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'bolt',
  password: 'bolt',
  database: 'bolt',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function query<T>(sql: string, params: any[] = []): Promise<T> {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows as T;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export default {
  query
};
