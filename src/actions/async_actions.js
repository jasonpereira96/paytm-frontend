import { startUpload, uploadSuccess, uploadFailure, imagesAdded } from './actions';
import { requestLinksStarted, receivedLinks, receivedLinksError } from './actions';
import { getLinks, uploadFileToServer } from './../data/data';

export function uploadFile(file) {
    return async function (dispatch) {
        dispatch(startUpload());
        try {
            let response = await uploadFileToServer(file);
            let data = response.data;
            console.log(data);
            if (!data.error) {
                dispatch(uploadSuccess());
                dispatch(imagesAdded([{
                    id: data.id, name: data.name
                }]));
            } else {
                dispatch(uploadFailure());
                console.log('An error occured');
            }
        } catch (e) {
            console.log(e);
            dispatch(uploadFailure());
        }
    }
};

export function requestLinks(id) {
    return async function (dispatch) {
        dispatch(requestLinksStarted(id));
        try {
            let response = await getLinks(id);
            let data = response.data;
            console.log(data);
            if (!data.error) {
                dispatch(receivedLinks(data));
            } else {
                dispatch(receivedLinksError());
            }
        } catch (e) {
            dispatch(receivedLinksError());
        }
    }
}