const router = require("express").Router();
// CONTROLLERS
const attractionCtrl = require("../controllers/AttractionCtrl");

router.route("/").get(attractionCtrl.getAllAttractions);

router.route("/:id").get(attractionCtrl.getAttraction);

module.exports = router;
