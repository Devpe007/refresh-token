import { client } from "../../prisma/client";

interface IUserRequest {
    name: string;
    password: string;
    username: string;
};

export class AuthenticateUserUseCase {
    async execute({ name, password, username }: IUserRequest) {
        const userAlreadyExists = await client.user.findFirst({
            where: {
                username,
            },
        });

        if(userAlreadyExists) {
            throw new Error('User already exists');
        };

        const user = await client.user.create({
            data: {
                name,
                password,
                username,
            },
        });
    };
};