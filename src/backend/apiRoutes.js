import express from "express";
import QuotationsController from "./controllers/QuotationsController.js";
import LoginController from "./controllers/LoginController.js";
import RegistrationController from "./controllers/RegistrationController.js";

const router = express.Router();

router.use("/quotations", QuotationsController);
router.use("/login", LoginController);
router.use("/registration", RegistrationController);
router.use((_, res) => {
  res.sendStatus(404);
});

export default router;
