import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import getConfig from 'next/config';

module.exports = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:lookup',
        {
            idToken: req.headers['x-auth']
        },
        {
            params: {
                key: getConfig().publicRuntimeConfig.firebaseConfig.apiKey
            }
        }
    );
    res.send({ result: response.data });
};
