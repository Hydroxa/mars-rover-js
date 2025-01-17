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
    doesUserExist(body.name);
  } catch (error) {
    console.log(error);
  }
  await UserRepository.addUserToDatabase(
    body.name,
    body.username,
    body.email,
    passHash
  );
  res.sendStatus(201);
});
function doesUserExist(name) {
  const search = database.any(
    `SELECT username FROM users WHERE preferred_name = '${name}'`
  );
  if (search === undefined) {
    return true;
  } else {
    return false;
  }
}

export default router;
