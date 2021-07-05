import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    async hendle(request: Request, response: Response) {
        const { username, name, password } = request.body;

        const authenticateUserUseCase = new CreateUserUseCase();

        const user = await authenticateUserUseCase.execute({
            username,
            name,
            password,
        });

        return response.json(user);
    };
};