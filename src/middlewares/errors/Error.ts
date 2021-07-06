import { NextFunction, Request, Response } from "express";

export function middlewareError(error: Error, request: Request, response: Response, next: NextFunction) {
    return response.json({
        status: "Error",
        message: error.message,
    });
};