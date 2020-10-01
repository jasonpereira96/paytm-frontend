export const IMAGES_ADDED = 'IMAGES_ADDED';
export const FILE_CHANGED = 'FILE_CHANGED';
export const ERROR_OCCURED = 'ERROR_OCCURED';
export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const START_UPLOAD = 'START_UPLOAD';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';



export const imagesAdded = images => {
    return {
        type: IMAGES_ADDED,
        images
    };
};

export const fileChanged = file => {
    return {
        type: FILE_CHANGED,
        file
    };
}

export const errorOccured = error => {
    return {
        type: ERROR_OCCURED,
        error
    };
}
export const snackbarClose = () => {
    return {
        type: SNACKBAR_CLOSE
    };
}
export const startUpload = () => {
    return {
        type: START_UPLOAD
    };
}
export const uploadSuccess = (fileId, fileName) => {
    return {
        type: UPLOAD_SUCCESS,
        id: fileId,
        name: fileName
    };
}
export const uploadFailure = () => {
    return {
        type: UPLOAD_FAILURE
    };
}