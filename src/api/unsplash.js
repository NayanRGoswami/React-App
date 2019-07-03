import axios from 'axios';

axios.create({
    baseURL: 'https://api.unsplash.com',
    headers :{
        Authorization: 'Client-ID 4014205182d09c644dff1beb60df609dcd40b043ab608c2ae79d628f0dfb5caa'
    }
});
