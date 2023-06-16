const express = require('express')
const { Pool } = require('pg')
const app = express()
const dotenv = require('dotenv')
const PORT = process.env.PORT

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

app.use(express.static("public"))
app.use(express .json())

app.get('/gods', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gods')
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status.send('Internal server error.')
    }
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})