import axios from 'axios';
import { BASE_URL } from './../constants/constants';

async function uploadFileToServer(file) {
    let formData = new FormData();
    formData.append("file", file);

    return axios.post('http://localhost:5000/upload_test', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
async function getLinks(id) {
    return axios.get(`${BASE_URL}/image`, {
        params: {
            id
        }
    });
}
export {
    uploadFileToServer,
    getLinks
};