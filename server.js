const express = require('express')
const { Pool } = require('pg')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT

const pool = new Pool ({
    connectionString: process.env.DATABASE_URL
});

app.use(express.static("public"))
app.use(express.json())

app.get('/gods', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gods')
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status.send('Internal server error.')
    }
})

app.get('/gods/:name', async (req, res) => {
    const { name } = req.params;
    console.log(name)
    try {
        const result = await pool.query('SELECT * FROM gods WHERE name = $1', [name])
        console.log(result)
        if (result.rowCount === 0) {
            res.status(404).send('Not found make sure you spelled it correctly.')
        } else {
            res.status(200).send(result.rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error.')
    }
})

app.get('/pantheon/:name', async (req, res) => {
    const { name } = req.params
    try {
        const result = await pool.query('SELECT gods.name, gods.god_goddess_of, gods.info, gods.fun_facts, gods.pantheon_name, pantheon.description FROM gods INNER JOIN pantheon ON gods.pantheon_name = pantheon.name WHERE pantheon.name = $1', [name])
        res.status(200).send(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error.')
    }
})

app.post('/god', async (req, res) => {
    const { name, god_goddess_of, info, fun_facts, pantheon_name } = req.body
    try {
        const result = await pool.query('INSERT INTO gods (name, god_goddess_of, info, fun_facts, pantheon_name) VALUES ($1, $2, $3, $4, $5)', [name, god_goddess_of, info, fun_facts, pantheon_name])
        res.status(201).send('New god added.')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})



app.delete('/god/:name', async (req, res) => {
    const { name } = req.params
    try {
        const result = pool.query('DELETE FROM gods WHERE name = $1', [name])
        res.status(201).send('God has been deleted')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error.')
    }
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})