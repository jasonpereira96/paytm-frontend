import { startUpload, uploadSuccess, uploadFailure as _uploadFailure, imagesAdded, snackbarClose } from './actions';
import { requestLinksStarted, receivedLinks, receivedLinksError } from './actions';
import { getLinks, uploadFileToServer } from './../data/data';
import { SNACKBAR_CLOSE_TIME } from '../constants/constants';

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
                dispatch(uploadFailure(data.error));
            }
        } catch (e) {
            dispatch(uploadFailure(e));
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

export function uploadFailure(error) {
    return function (dispatch) {
        dispatch(_uploadFailure(error)); //synchronous action
        setTimeout(() => {
            dispatch(snackbarClose());
        }, SNACKBAR_CLOSE_TIME);
    }
}