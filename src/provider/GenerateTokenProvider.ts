import { sign } from "jsonwebtoken";

export class GenerateTokenProvider {
    async execute(userId: string) {
        const token = sign({}, 'c3be3554-8553-4cff-b452-2e861ac5d78e', {
            subject: userId,
            expiresIn: '20s',
        });

        return token;
    };
};