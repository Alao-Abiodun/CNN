const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const CNN_TOKEN = process.env.CNN_TOKEN;

// const {CNN_TOKEN} = process.env;

exports.createAnAccount = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, email, password, role } = req.body;

    if (!firstName || !lastName || !userName || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "Please fill all the required field",
      });
    }

    let emailExist = await User.findOne({ email: email });
    if (emailExist) {
      return res.status(401).json({
        success: false,
        message:
          "Email already exist, Please login or create a new account with a new email",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // console.log(token);
    const newUsers = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashPassword,
      role,
    });

    const payload = {
      id: newUsers._id,
      email: newUsers.email,
      role: newUsers.role,
    };

    const token = await jwt.sign(payload, CNN_TOKEN, { expiresIn: "1h" });

    await newUsers.save();
    return res.status(201).json({
      success: true,
      newUsers,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error caught",
    });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const emailExist = await User.findOne({ email });
    if (!emailExist) {
      return res.status(401).json({
        success: false,
        message: "Email does not exist, please create an account",
      });
    }
    let isPasswordExist = await bcrypt.compare(password, emailExist.password);
    console.log(isPasswordExist);
    if (!isPasswordExist) {
      return res.status(401).json({
        success: false,
        message: "Password Not Correct",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User login successfully",
    });
    // console.log(emailExist);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "error caught",
    });
  }
};
