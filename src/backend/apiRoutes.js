import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import LoginController from "./controllers/LoginController.js";
import RoverController from "./controllers/RoverController.js";

const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/login", LoginController);
router.use("/rovers", RoverController);

router.use((_, res) => {
    res.sendStatus(404);
});

export default router;
