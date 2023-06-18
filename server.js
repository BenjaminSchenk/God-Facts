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

app.post('/gods', async (req, res) => {
    const { name, god_goddess_of, info, fun_facts, pantheon_name } = req.body
    try {
        const result = await pool.query('INSERT INTO gods (name, god_goddess_of, info, fun_facts, pantheon_name) VALUES ($1, $2, $3, $4, $5)', [name, god_goddess_of, info, fun_facts, pantheon_name])
        res.status(201).send('New god added.')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})

app.put('/gods/:name', async (req, res) => {
    const { name } = req.params
    const { god_goddess_of, info, fun_facts, pantheon_name } = req.body
    try {
        if (god_goddess_of, info, fun_facts, pantheon_name) {
            const result = await pool.query('UPDATE gods SET god_goddess_of = $1, info = $2, fun_facts = $3, pantheon_name = $4 WHERE name = $5', [god_goddess_of, info, fun_facts, pantheon_name, name])
            if (result.rowCount === 0) {
                res.status(404).send('No God found matching that name.')
            } else {
                res.status(201).send('Info on God sucessfully updated.')
            }
        } else {
            res.status(400).send('Missing some info please fill out everything.')
        }
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error.')
    }
}) 

app.delete('/gods/:name', async (req, res) => {
    const { name } = req.params
    try {
        const result = await pool.query('DELETE FROM gods WHERE name = $1', [name])
        res.status(201).send('God has been deleted')
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error.')
    }
})

app.listen(PORT, () => {
    console.log('Listening on port', PORT)
})