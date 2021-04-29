const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/list', (req, res) => {

    const sqlText = `SELECT * FROM items ORDER BY purchased, name;`;
    pool.query(sqlText)
            .then(result => {
                console.log('Retrieving stuff from GET:', result);
                res.send(result.rows)
            })
            .catch(err => {
                console.log('Something went wrong GETting list:', err);
                res.sendStatus(500);
            })

});


module.exports = router;