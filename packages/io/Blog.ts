import Axios, { AxiosInstance } from 'axios';
import { User } from 'firebase';

export default class Blog {
    protected http: AxiosInstance;

    constructor(protected user: User) {
        this.http = Axios.create({
            baseURL: '/api'
        });
    }

    async example(): Promise<any> {
        const token = await this.user.getIdToken();
        if (!token) {
            throw new Error('Not authorized');
        }

        return (
            await this.http.get('/example', {
                headers: { 'x-auth': token }
            })
        ).data;
    }
}
