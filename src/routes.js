const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");
const upload = multer(uploadConfig);
const routes = express.Router();

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

routes.post("/api/sessions", SessionController.store);

routes.get("/api/spots", SpotController.index);
routes.post("/api/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/api/dashboard", DashboardController.show);

routes.post("/api/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
