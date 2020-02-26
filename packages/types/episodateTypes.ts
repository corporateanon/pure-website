export interface EpisodateShow {
    id: number;
    name: string;
    permalink: string;
    start_date: string;
    end_date: string;
    country: string;
    network: string;
    status: string;
    image_thumbnail_path: string;
}
export interface EpisodateSearchResult {
    total: number;
    page: number;
    pages: number;
    tv_shows: Array<EpisodateShow>;
}
