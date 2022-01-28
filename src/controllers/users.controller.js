const users = require("../models/user.model");

exports.addUsers = async (req, res, next) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;

    const newUsers = new users({
      firstName,
      lastName,
      userName,
      email,
      password,
    });

    await newUsers.save();
    return res.status(201).json({
      success: true,
      newUsers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error caught",
    });
  }
};
