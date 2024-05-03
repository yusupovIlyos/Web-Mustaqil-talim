const { Router, json } = require("express");
const pool = require("../config/db");
const router = Router();

router.get('/all', async (req, res) => {
    try {
        const buildings = await pool.query(
            "SELECT * FROM building"
        );
        res.status(200).json(buildings.rows);
    } catch (error) {
        res.status(500).json(`{message: ${error.message} }`);
    }
});

router.post('/add', async (req, res) => {
    try {
        const { images, title, price, text1 } = req.body;
        const building = await pool.query(
            "INSERT INTO building (images, title, price, text1) VALUES ($1, $2, $3, $4) RETURNING *",
            [images, title, price, text1]
        );
        res.status(200).json(building.rows[0]);
    } catch (error) {
        res.status(500).json(`{message: ${error.message} }`);
    }
});

router.delete('/del/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM building WHERE id = $1", [id]);
        res.status(200).json("Ma'lumot o'chirildi");
    } catch (error) {
        res.status(500).json(`{message: ${error.message} }`);
    }
});

module.exports = router