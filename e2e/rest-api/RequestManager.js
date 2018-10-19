const axios = require('axios');
const config = require('../../testconfig.json');
axios.defaults.baseURL = config.base_url_api;
axios.defaults.headers.common['X-TrackerToken'] = config.api_token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

class RequestManager {
    static async postRequest(endpoint, body) {
        return await axios({
            method: 'POST',
            url: axios.defaults.baseURL.concat(endpoint),
            data: body,
            responseType: 'json'
        });
    }

    static async DelRequest(endpoint) {
        return await axios({
            method: 'DELETE',
            url: axios.defaults.baseURL.concat(endpoint),
        });
    }


    static async GetRequest(endpoint) {
        return await axios({
            method: 'GET',
            url: axios.defaults.baseURL.concat(endpoint),
            responseType: 'json'
        });
    }

}

module.exports = RequestManager;
