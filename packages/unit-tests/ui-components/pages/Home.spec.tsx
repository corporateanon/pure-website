import * as React from 'react';
import { create } from 'react-test-renderer';
import Home from '@pure-website/ui-components/pages/Home';
import { Artist, ArtistEventList } from '@pure-website/types/bandsInTownTypes';

describe('Home page', () => {
    it('should match snapshot', () => {
        const artist: Artist = {
            id: 'x',
            name: 'x',
            url: 'x',
            mbid: 'x',
            options: { display_listen_unit: false },
            image_url: 'x',
            thumb_url: 'x',
            facebook_page_url: 'x',
            tracker_count: 5,
            upcoming_event_count: 5
        };

        const eventsList: ArtistEventList = [
            {
                id: 'y',
                url: 'y',
                datetime: 'date',
                description: 'y',
                artist_id: 'y',
                on_sale_datetime: 'y'
            }
        ];

        const tree = create(
            <Home artist={artist} events={eventsList} />
        ).toJSON();
        expect(tree).toMatchInlineSnapshot(`
      Array [
        <article>
          <h3>
            x
          </h3>
          <p>
            <img
              src="x"
            />
          </p>
        </article>,
        <article>
          <p>
            <strong>
              y
            </strong>
          </p>
          <p>
            date
          </p>
        </article>,
      ]
    `);
    });
});
