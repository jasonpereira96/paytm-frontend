import {
    FILE_CHANGED, ERROR_OCCURED, SNACKBAR_CLOSE,
    UPLOAD_SUCCESS, UPLOAD_FAILURE, START_UPLOAD
} from './../actions/actions';

let initialState = {
    error: null,
    uploading: false,
    file: null
};
const uploadPanel = (uploadPanel = initialState, action) => {
    switch (action.type) {
        case FILE_CHANGED: {
            return {
                ...uploadPanel,
                file: action.file
            };
        }
        case ERROR_OCCURED: {
            return {
                ...uploadPanel,
                error: action.error
            };
        }
        case SNACKBAR_CLOSE: {
            return {
                ...uploadPanel,
                error: null
            };
        }
        case START_UPLOAD: {
            return {
                ...uploadPanel,
                uploading: true
            };
        }
        case UPLOAD_SUCCESS: {
            return {
                ...uploadPanel,
                uploading: false
            }
        }
        case UPLOAD_FAILURE: {
            return {
                ...uploadPanel,
                error: action.error || "File wasn't uploaded",
                uploading: false
            };
        }
    }
    return uploadPanel;
}

export default uploadPanel;