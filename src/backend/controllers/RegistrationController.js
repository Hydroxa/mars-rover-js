import express from "express";
import UserService from "../services/UserService";
import * as UserRepository from "../repositories/UserRepository";
import { secret } from "../config";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;

  const passHash = UserService.hashString(body.password);

  await UserRepository.addUserToDatabase(body.name, body.username, body.email, passHash);

  res.sendStatus(201);
});

export default router;