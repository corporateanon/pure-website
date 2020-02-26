import * as React from 'react';
import { create } from 'react-test-renderer';
import Home from '@pure-website/ui-components/pages/Home';

describe('Home page', () => {
    it('should match snapshot', () => {
        const searchResult = {
            total: 1,
            page: 1,
            pages: 1,
            tv_shows: [
                {
                    id: 3283,
                    name: 'Doctor Who',
                    permalink: 'doctor-who-1963',
                    start_date: '1963-11-23',
                    end_date: null,
                    country: 'UK',
                    network: 'BBC One',
                    status: 'Ended',
                    image_thumbnail_path:
                        'https://static.episodate.com/images/tv-show/thumbnail/3283.jpg'
                }
            ]
        };

        const tree = create(
            <Home
                searchResult={searchResult}
                actionSearch={() => {}}
                searchQuery="hello world!"
            />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
