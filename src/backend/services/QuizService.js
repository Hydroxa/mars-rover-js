import * as QuizRepository from "../repositories/QuizRepository";

export async function getAll() {
    return await QuizRepository.getAll();
}