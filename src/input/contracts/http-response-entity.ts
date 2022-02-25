import { ResourceNotFound } from "../../domain/errors/error";

export type HttpResponseEntity<T = any> = {
    statusCode: number,
    data: T
};

export const okResponseEntity = (data: any): HttpResponseEntity => ({
    statusCode: 200,
    data
})

export const errorResponseEntity = (error: Error): HttpResponseEntity => {
    if (error instanceof ResourceNotFound) {
        return {
            statusCode: 404,
            data: error.message
        };
    }
    return {
        statusCode: 500,
        data: error.message
    };
}