import Axios, { AxiosInstance } from 'axios';
import { EpisodateSearchResult } from '@pure-website/types/episodateTypes';

export default class Episodate {
    protected http: AxiosInstance;
    protected readonly apiKey: string = 'bands_in_town';
    constructor() {
        this.http = Axios.create({
            baseURL: 'https://www.episodate.com/api'
        });
    }
    async search(q: string, page: number = 1): Promise<EpisodateSearchResult> {
        const response = await this.http.get(`/search`, {
            params: {
                q,
                page
            }
        });
        const { data } = response;
        if (data.total) {
            //hack, becuse the API has wrong type for total
            data.total = parseInt(data.total);
        }
        return response.data;
    }
}
