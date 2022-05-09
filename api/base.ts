import process from 'process'

export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RequestResolver {
    success: (req: Response) => any,
    failure: (req: Response) => any,
}

const sendRequest = async (url: string, method: HTTPMethod, body: any, resolvers?: RequestResolver) => {
    console.log(process.env)
    const req = fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}${url}`, {
        method,
        body: body ? JSON.stringify(body) : null,
    });

    if (resolvers) {
        req.then(resolvers.success, resolvers.failure)
    }

    return req
}

export const get = (url: string, resolvers?: RequestResolver) =>
    sendRequest(url, 'GET', null, resolvers)

export const post = (url: string, body: any, resolvers?: RequestResolver) =>
    sendRequest(url, 'POST', body, resolvers)

export const put = (url: string, body: any, resolvers?: RequestResolver) =>
    sendRequest(url, 'PUT', body, resolvers)

export const patch = (url: string, body: any, resolvers?: RequestResolver) =>
    sendRequest(url, 'PUT', body, resolvers)

export const deleteReq = (url: string, resolvers?: RequestResolver) =>
    sendRequest(url, 'DELETE', null, resolvers)