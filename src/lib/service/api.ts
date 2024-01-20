import Axios from '../axios';

export const GET = async (data?: any) => {
    try {
        if (data) {
            const response = await Axios.get(`/${data}`);
            return response.data;
        }
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

export const POST = async <T>(data: T) => {
    try {
        const response = await Axios.post('/', data);
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

export const PUT = async <T>(id: string, data: T) => {
    try {
        const response = await Axios.put(`/${id}`, data);
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

export const DELETE = async <T>(id: string) => {
    try {
        const response = await Axios.delete(`/${id}`);
        console.log("🚀 ~ POST ~ response:", response)
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
