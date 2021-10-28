import express from "express";
import passport from "passport";
import * as QuizService from "../services/QuizService.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const quiz = await QuizService.getAll();
        res.send(quiz);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
})

export default router;