const db = require("../config/db");

const createPayment = (req, res) => {

  const { order_id, payment_id, payment_status } = req.body;


  const sql =
    "INSERT INTO payments (order_id, payment_id, payment_status) VALUES (?, ?, ?)";


  db.query(
    sql,
    [order_id, payment_id, payment_status],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          message: "Payment failed",
          error: err
        });
      }


      res.status(201).json({
        message: "Payment saved successfully",
        payment_id: result.insertId
      });

    }
  );
};


module.exports = {
  createPayment
};