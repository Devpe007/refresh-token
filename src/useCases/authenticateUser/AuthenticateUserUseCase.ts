import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';

import { client } from "../../prisma/client";

interface IRequest {
    username: string;
    password: string;
};

export class AuthenticateUserUseCase {
    async execute({ username, password }: IRequest) {
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username,
            },
        });

        if(!userAlreadyExists) {
            throw new Error('User or password incorrect');
        };

        const passwordMatch = await compare(password, userAlreadyExists.password);

        if(!passwordMatch) {
            throw new Error('User or password incorrect');
        };

        const token = sign({}, 'c3be3554-8553-4cff-b452-2e861ac5d78e', {
            subject: userAlreadyExists.id,
            expiresIn: '20s',
        });

        return { token };
    };
};