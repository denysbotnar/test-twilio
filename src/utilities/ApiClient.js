import axios from 'axios';

class ApiClient {

    query(type, { data, uri }) {

        if (data && type === 'delete') {
            return axios[type](`${this.apiUrl}/${uri}`, { data })
                .then(response => response.data);
        }

        if (data) {
            return axios[type](`${this.apiUrl}/${uri}`, data)
                .then(response => response.data);
        }

        return axios[type](`${this.apiUrl}/${uri}`)
            .then(response => response.data);
    }

    post(uri, data = {}) {
        return this.query('post', { uri, data });
    }

    get apiUrl() {
        return 'http://localhost:8080';
    }
}

export default new ApiClient();
