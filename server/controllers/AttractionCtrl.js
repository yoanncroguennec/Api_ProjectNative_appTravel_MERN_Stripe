const AttractionModel = require("../models/Attraction");

const attractionCtrl = {
  getAttraction: async (req, res, next) => {
    try {
      const attraction = await AttractionModel.findById(req.params.id);
      res.status(200).json(attraction);
    } catch (err) {
      next(err);
    }
  },

  getAllAttractions: async (req, res, next) => {
    try {
      const attractions = await AttractionModel.find();
      res.status(200).json(attractions);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = attractionCtrl;
