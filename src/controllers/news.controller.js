// const News = require("../models/news.model");
const News = require("../models/news.model");
// const ObjectId = require('mongoose').Types.ObjectId;
// or
const mongoose = require("mongoose");
ObjectId = mongoose.Types.ObjectId;

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

// READ NEW FROM THE DATABASE
// find();
// findOne();
// findOneAndUpdate();
// findOneAndDelete();
// findByIdAndUpdate();

exports.fetchNews = async (req, res, next) => {
  try {
    const news = await News.find();
    return res.status(200).json({
      success: true,
      news,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.fetchSingleNews = async (req, res, next) => {
  try {
    // const id = req.params.id;
    const { desc } = req.params;
    console.log(desc);
    // if (!ObjectId.isValid(new_id)) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "BAD RESPONSE, Object Id is not Valid",
    //   });
    // }
    const singleNews = await News.findOne({ description: desc });
    if (!singleNews) {
      return res.status(404).json({
        success: false,
        message: "New Not Found!",
      });
    }
    return res.status(200).json({
      success: true,
      singleNews,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.changeNews = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const newsUpdate = await News.findOneAndUpdate({ _id: _id }, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      newsUpdate,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

exports.removeNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const removeNews = await News.findOneAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      removeNews,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
