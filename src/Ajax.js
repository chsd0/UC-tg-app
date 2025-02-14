'use strict';
import {useEffect, useState} from 'react';

const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';

class Ajax {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(endpoint, headers = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: GET,
                headers: {
                    'Content-type': 'application/json',
                    ...headers
                },
            });

            return await this.#handleResponse(response);
        } catch (error) {
            console.error('GET error:', error);
        }
    }

    async post(endpoint, data, headers = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: POST,
                headers: {
                    'Content-type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            });

            return await this.#handleResponse(response);
        } catch (error) {
            console.error('POST error:', error);
        }
    }

    async put(endpoint, data, headers = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: PUT,
                headers: {
                    'Content-type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            });

            return await this.#handleResponse(response);
        } catch (error) {
            console.error('PUT error:', error);
        }
    }

    async delete(endpoint, data, headers = {}) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method: DELETE,
                headers: {
                    'Content-type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(data)
            });

            return await this.#handleResponse(response);
        } catch (error) {
            console.error('DELETE error:', error);
        }
    }

    async #handleResponse(response) {
        if(!response.ok) {
            return { code: 400 };
        }

        return await response.json();
    }
}

const BACKEND_BASE_URL = 'http://localhost:8001'; /////////// сюда базовый урл https://exmaple.com/

const ajax = new Ajax(BACKEND_BASE_URL);

export const useFetch = (method=GET, data=null, endpoint) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        const controller = new AbortController();
        let response;
        const fetchData = async () => {
            switch(method) {
                case GET:
                    response = await ajax.get(endpoint);
                    break;
                case POST:
                    response = await ajax.post(endpoint, data);
                    break;
                case PUT:
                    response = await ajax.put(endpoint, data);
                    break;
                case DELETE:
                    response = await ajax.delete(endpoint, data);
                    break;
            }
            if(response.code) {
                setState({ data: null, loading: false, error: 'error'});
            }
            setState({ data: response, loading: false, error: null});
        }

        fetchData();
        return () => controller.abort();
    }, [endpoint]);

    return state;
}