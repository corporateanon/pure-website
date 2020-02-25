import Axios, { AxiosInstance } from 'axios';
import { Artist, ArtistEventList } from '@pure-website/types/bandsInTownTypes';

export default class BandsInTown {
    protected http: AxiosInstance;
    protected readonly apiKey: string = 'bands_in_town';
    constructor() {
        this.http = Axios.create({
            baseURL: 'https://rest.bandsintown.com'
        });
    }
    async getArtist(artist: string): Promise<Artist> {
        const response = await this.http.get(
            `/artists/${encodeURIComponent(artist)}`,
            {
                params: {
                    app_id: this.apiKey
                }
            }
        );
        return response.data;
    }
    async getEvents(artist: string): Promise<ArtistEventList> {
        const { data: events } = await this.http.get(
            `/artists/${encodeURIComponent(artist)}/events`,
            {
                params: {
                    app_id: this.apiKey
                }
            }
        );
        return events;
    }
}
