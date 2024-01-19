import Axios from '../axios';

export const GET = async () => {
    try {
        const response = await Axios.get('/');
        return response.data;
    } catch (error: any) {
        if (error.response) {
            // The request was made, but the server responded with a non-2xx status code
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
        } else if (error.request) {
            // The request was made, but no response was received
            console.error(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
        }
        console.error(error.config);
    }
};
