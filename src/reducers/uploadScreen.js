import { combineReducers } from 'redux';
import uploadPanel from './uploadPanel';
import listPanel from './listPanel';
import { UPLOAD_SUCCESS } from './../actions/actions';

let initialState = {
    uploadPanel: {
        error: null,
        uploading: false,
        file: null
    },
    listPanel: {
        images: []
    }
};

const uploadScreen = function (state = initialState, action) {
    if (action.type === UPLOAD_SUCCESS) {
        state.listPanel.images = state.listPanel.images.concat({
            id: action.id,
            name: action.name
        });
    }
    return {
        uploadPanel: uploadPanel(state.uploadPanel, action),
        listPanel: listPanel(state.listPanel, action)
    };
}

// export default uploadScreen;

export default combineReducers({
    uploadPanel, listPanel
});