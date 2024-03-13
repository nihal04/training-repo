const express = require("express");
const controller = require("../controllers/flightController");
const router = express.Router();
const { VerifyTokenMiddleware } = require("../auth/auth");

router.get("/flights", controller.GetFlights);
router.post("/flights", controller.AddFlights);
router.delete("/flights/:flightNumber", controller.DeleteFlights);
router.put("/flights/:flightNumber", controller.modifyFlight);
router.get("/flight", controller.searchFlight);
router.get("/flightNo/:flightNumber", controller.searchFlightNo);
router.get("/flights/bydate/:date", controller.searchOnDate);

module.exports = router;