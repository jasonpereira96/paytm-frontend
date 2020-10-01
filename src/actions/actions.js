export const IMAGES_ADDED = 'IMAGES_ADDED';
export const FILE_CHANGED = 'FILE_CHANGED';
export const ERROR_OCCURED = 'ERROR_OCCURED';
export const SNACKBAR_CLOSE = 'SNACKBAR_CLOSE';
export const UPLOAD_FILE = 'UPLOAD_FILE';
export const START_UPLOAD = 'START_UPLOAD';
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE';
export const BACK = 'BACK';
export const IMAGE_TITLE_CLICK = 'IMAGE_TITLE_CLICK';
export const REQUEST_LINKS = 'REQUEST_LINKS';
export const REQUEST_LINKS_STARTED = 'REQUEST_LINKS_STARTED';
export const RECEIVED_LINKS = 'RECEIVED_LINKS';
export const RECEIVED_LINKS_ERROR = 'RECEIVED_LINKS_ERROR';


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
export const uploadFailure = (error) => {
    return {
        type: UPLOAD_FAILURE,
        error
    };
}
export const back = () => {
    return {
        type: BACK
    };
}
export const imageTitleClick = id => {
    return {
        type: IMAGE_TITLE_CLICK,
        id
    };
}
export const requestLinksStarted = () => {
    return {
        type: REQUEST_LINKS_STARTED
    };
}
export const receivedLinks = record => {
    return {
        type: RECEIVED_LINKS, 
        record
    };
} 
export const receivedLinksError = () => {
    return {
        type: RECEIVED_LINKS_ERROR
    };
}