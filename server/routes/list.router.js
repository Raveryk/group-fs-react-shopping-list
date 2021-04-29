const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET route to get all the grocery items from the database
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM items ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got groceries back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })

})

// POST route to add new grocery items to the database
router.post('/', (req, res) => {
    const groceryItem = req.body;
    const sqlText = `INSERT INTO items (name, quantity, unit)
                    VALUES ($1, $2, $3)`;
    // The $1, $2, $3 gets substituted with the values from the array below
    pool.query(sqlText, [groceryItem.name, groceryItem.quantity, groceryItem.unit])
        .then((result) => {
            console.log(`Added food item to the database`, groceryItem);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
})

module.exports = router;