import fetch from "node-fetch";
import ApiError from "../middleware/apiError.js";


class RestClient {
    async get(url, token) {
        const result = await execute('GET', url, token);
        return result;
    }

    async post(url, body, token) {
        const result = await execute('POST', url, token, body);
        return result;
    }
}

async function execute(method, url, token, body) {
    const options = {
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        method: method
    };

    if(token){
        options.headers.Authorization = `Bearer ${token}`;
    }

    if(body){
        options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const result = await response.json();
    if(!result)
        throw ApiError.badRequest('Not Valid request');
    if(result.error)
        throw ApiError.badRequest(result.error_description);
    return result;
}
export default new RestClient();