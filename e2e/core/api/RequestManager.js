const axios = require('axios');
const config = require('../../../config.json');
axios.defaults.baseURL = config.base_url_api;
axios.defaults.headers.common['X-TrackerToken'] = config.api_token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class RequestManager {
    static async post(endpoint, body) {
        return await axios({
            method: 'POST',
            url: axios.defaults.baseURL.concat(endpoint),
            data: body,
            responseType: 'json'
        });
    }
    static async delete(endpoint) {
        return await axios({
            method: 'DELETE',
            url: axios.defaults.baseURL.concat(endpoint),
        });
    }
    static async get(endpoint) {
        return await axios({
            method: 'GET',
            url: axios.defaults.baseURL.concat(endpoint),
            responseType: 'json'
        });
    }

}

module.exports = RequestManager;
