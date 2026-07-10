const db = require("../config/db");

const createOrder = (req, res) => {

  const { user_id, total_amount, items } = req.body;

  console.log("user id",user_id);
   console.log("amount",total_amount);
    console.log("items",items);


  // Step 1: Insert order
  const orderSql =
    "INSERT INTO orders (user_id, total_amount) VALUES (?, ?)";

  db.query(
    orderSql,
    [user_id, total_amount],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          message: "Order creation failed",
          error: err
        });
      }

      const orderId = result.insertId;
      console.log("order id",orderId);


      // Step 2: Insert order items
      const itemSql =
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ?";


      const itemValues = items.map((item) => [
        orderId,
        item.product_id,
        item.quantity,
        item.price
      ]);


      db.query(
        itemSql,
        [itemValues],
        (err, itemResult) => {

          if (err) {
            return res.status(500).json({
              message: "Order items failed",
              error: err
            });
          }


          res.status(201).json({
            message: "Order created successfully",
            order_id: orderId
          });

        }
      );

    }
  );
};


module.exports = {
  createOrder
};