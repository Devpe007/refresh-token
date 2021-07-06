import { NextFunction, Request, Response } from "express";

import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).json({
            message: 'Token is missing',
        });
    };

    const [ , token ] = authToken.split(' ');

    try {
        verify(token, 'c3be3554-8553-4cff-b452-2e861ac5d78e');

        return next();
    } catch (error) {
        return response.status(401).json({
            message: 'Token invalid',
        });
    };
};