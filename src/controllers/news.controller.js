// const News = require("../models/news.model");
const News = require("../models/news.model");

// exports.function = ()=> {

// }
exports.addNews = async (req, res, next) => {
  try {
    // code here
    // req.body
    // const title = req.body.title;
    // const description = req.body.description;
    // const date = req.body.date;
    const { title, description, date } = req.body;
    // await News.create({title, description, date});

    // await News.save({title, description, date});
    // create a new instance of news model
    const newUser = new News({ title, description, date });
    //
    await newUser.save();
    // const newUser = News.create({ title, description, date });
    return res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }

  //  create
  // save
};
