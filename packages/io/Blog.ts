import Axios, { AxiosInstance } from 'axios';
import { auth } from 'firebase';

export default class Blog {
    protected http: AxiosInstance;

    constructor(protected auth: auth.Auth) {
        this.http = Axios.create({
            baseURL: ''
        });
    }

    async example(): Promise<any> {
        const token = await this.auth.currentUser?.getIdToken();
        if (!token) {
            throw new Error('Not authorized');
        }

        return (await this.http.get('/example', { params: { token } })).data();
    }
}
