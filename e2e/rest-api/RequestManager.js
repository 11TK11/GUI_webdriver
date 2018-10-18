const axios = require('axios');
const config = require('../../testconfig.json');
axios.defaults.baseURL = config.base_url_api;
axios.defaults.headers.common['X-TrackerToken'] = config.api_token;
axios.defaults.headers.post['Content-Type'] = 'application/json';
class RequestManager {
    static async PostRequest(endpoint, body) {
        try {
            const response = await axios({
                method: 'POST',
                url: axios.defaults.baseURL.concat(endpoint),
                data: body,
                responseType: 'json'
            });
            return response;
        } catch (error) {

        }

    }

    static async DelRequest(endpoint) {
        try {
            const response = await axios({
                method: 'DELETE',
                url: axios.defaults.baseURL.concat(endpoint),
            });
            return response
        } catch (error) {
        }
    }


    static async GetRequest(endpoint){
        try {
            const response = await axios({
                method: 'GET',
                url: axios.defaults.baseURL.concat(endpoint),
                responseType: 'json'
            });
            return response
        } catch (error) {
        }
    }

}
module.exports = RequestManager;
