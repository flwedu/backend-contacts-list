type HttpResponseEntity<T = any> = {
    statusCode: number,
    data: T
};

export const ok = (data: any): HttpResponseEntity => ({
    statusCode: 200,
    data
})

export const notFound = (error: Error): HttpResponseEntity => ({
    statusCode: 404,
    data: error.message
})

export const serverError = (error: Error): HttpResponseEntity => ({
    statusCode: 500,
    data: error.message
})

export interface Controller {
    handle(): Promise<HttpResponseEntity>;
}