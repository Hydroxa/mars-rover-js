import express from "express";
import UserService from "../services/UserService";
import * as UserRepository from "../repositories/UserRepository";
import { secret } from "../config";
import database from "../repositories/database";
import { errors } from "pg-promise";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  const passHash = UserService.hashString(body.password);
  try {
    checkExistance(body.name)
  } catch (error) {
    res.send(errors)
  }
  await UserRepository.addUserToDatabase(
    body.name,
    body.username,
    body.email,
    passHash
  );

  res.sendStatus(201);
});

function checkExistance(name) {
  const search = database.any(`SELECT username FROM users WHERE preferred_name = ${name}`)
  if (name != search) {
    return true;
  } else {
    res.send("Username exists");
  }
}

export default router;