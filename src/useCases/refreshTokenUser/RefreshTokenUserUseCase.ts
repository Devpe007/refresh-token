import { client } from "../../prisma/client";

import { GenerateTokenProvider } from "../../provider/GenerateTokenProvider";

export class RefreshTokenUserUseCase {
    async execute(refresh_token: string) {
        const refreshToken = await client.refreshToken.findFirst({
            where: {
                id: refresh_token,
            },
        });

        if(!refreshToken) {
            throw new Error('Refresh token invalid');
        };

        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(refreshToken.userId);

        return { token };
    };
};