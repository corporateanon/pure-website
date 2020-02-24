import Axios, { AxiosInstance } from 'axios';

export interface ArtistOptions {
    display_listen_unit: boolean;
}

export interface Artist {
    id: string;
    name: string;
    url: string;
    mbid: string;
    options: ArtistOptions;
    image_url: string;
    thumb_url: string;
    facebook_page_url: string;
    tracker_count: number;
    upcoming_event_count: number;
}

export interface ArtistEventVenue {
    country: string;
    city: string;
    latitude: string;
    name: string;
    region: string;
    longitude: string;
}

export interface ArtistEventOffer {
    type: string;
    url: string;
    status: string;
}

export interface ArtistEvent {
    id: string;
    url: string;
    datetime: string;
    description: string;
    venue?: ArtistEventVenue;
    lineup?: string[];
    offers?: ArtistEventOffer[];
    artist_id: string;
    on_sale_datetime: string;
}

export type ArtistEventList = Array<ArtistEvent>;

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
