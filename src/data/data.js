import axios from 'axios';

async function uploadFileToServer(file) {
    let formData = new FormData();
    formData.append("file", file);
    
    return axios.post('http://localhost:5000/upload_test', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export {
    uploadFileToServer
};