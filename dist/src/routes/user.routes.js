"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const UseRepository_1 = require("../modules/user/repositories/UseRepository");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
const useRepository = new UseRepository_1.UseRepository();
userRoutes.post('/sign-up', (request, response) => {
    useRepository.create(request, response);
});
userRoutes.post('/sign-in', (request, response) => {
    useRepository.login(request, response);
});
