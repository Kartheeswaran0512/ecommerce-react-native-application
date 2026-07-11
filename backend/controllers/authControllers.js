const db = require("../config/db");
//const bcrypt=require("bcrypt");

//const jwt= require("jsonwebtoken");

const register = async(req, res) => {
  
  const { name, email, password } = req.body;
  console.log("data:",name,email,password);
 // const hashedPassword = await bcrypt.hash(password, 10);

//   const isMatch = await bcrypt.compare(password, result[0].password);

// if (!isMatch) {
//   return res.status(401).json({
//     message: "Invalid Password",
//   });
// }

// const token = jwt.sign(
//   {
//     id: result[0].id,
//     email: result[0].email,
//   },
//   process.env.JWT_SECRET,
//   {
//     expiresIn: "1d",
//   }
// );

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Registration Failed",
        error: err,
      });
    }

    res.status(201).json({
      message: "User Registered Successfully",
      
    });
  });
};

// const forgotPassword = async(req,res) =>{
//   const { email } = req.body;

// const [rows] = await db.query(             // promise used because aync and await 
//   "SELECT * FROM users WHERE email = ?",
//   [email]
// );

// const user = rows[0];
// if (!user) {
//   return res.status(404).json({
//     message: "Email not found",
//   });
// }
// }

const forgotPassword = (req, res) => {
  const { email } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Email not found",
      });
    }

    return res.status(200).json({
      message: "Reset link sent successfully",
    });
  });
};

const resetPassword = (req, res) => {
  const { email, newPassword } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "Email not found",
      });
    }

    const updateSql =
      "UPDATE users SET password = ? WHERE email = ?";

    db.query(
      updateSql,
      [newPassword, email],
      (err, updateResult) => {
        if (err) {
          return res.status(500).json({
            message: "Password update failed",
          });
        }

        res.status(200).json({
          message: "Password reset successfully",
        });
      }
    );
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    // Check if email exists
    if (result.length === 0) {
      return res.status(404).json({
        message: "Email not found",
      });
    }

    // Check password
    if (result[0].password !== password) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }
//     const isMatch = await bcrypt.compare(
//   password,
//   result[0].password
// );

// if (!isMatch) {
//   return res.status(401).json({
//     message: "Invalid Password",
//   });
// }

    res.status(200).json({
      message: "Login Successful",
      user: {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email,
      },
    });
//     res.status(200).json({
//   message: "Login Successful",
//   token: token,
//   user: {
//     id: result[0].id,
//     name: result[0].name,
//     email: result[0].email,
//   },
// });
  });
};

module.exports = { register,login,forgotPassword,resetPassword};