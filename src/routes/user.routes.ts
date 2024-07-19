import { Router, request, response } from "express";
import { UseRepository } from "../modules/user/repositories/UseRepository"
import { login } from "../middleware/login";

const userRoutes = Router();
const useRepository = new UseRepository()

userRoutes.post('/sign-up', (request , response) => {
    useRepository.create(request , response);
})

userRoutes.post('/sign-in', (request , response) => {
    useRepository.login(request , response);
})

userRoutes.get('/get-user', login , (request , response) => {
    useRepository.getUser(request , response);
})

export { userRoutes };