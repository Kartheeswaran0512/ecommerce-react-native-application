const db = require("../config/db");

const getProducts = (req, res) => {

    const sql = "SELECT * FROM products";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        res.status(200).json(result);

    });

};

const getProductById = (req, res) => {

    const { id } = req.params;

    const sql = "SELECT * FROM products WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error"
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: "Product Not Found"
            });
        }

        res.status(200).json(result[0]);

    });

};



module.exports = {
    getProducts,
    getProductById
};