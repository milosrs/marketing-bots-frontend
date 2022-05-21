import type { ServiceInfo } from '../botomania/service/serviceInfo'
import { get, RequestResolver } from './base'

export const GetServiceInfo = async () => {
    const resolvers: RequestResolver = {
        success: (x: Response) => {
            console.log('Success! Data:', x)
        },
        failure: (x: Response) => {
            console.log('Failed to execute request. Data: ', x)
        },
    }

    get('/service/info', resolvers)

    console.log('Nosse')
}
