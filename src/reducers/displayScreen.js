import { IMAGE_TITLE_CLICK, RECEIVED_LINKS } from './../actions/actions';

let initialState = {
    id: null,
    record: null
};

const displayScreen = (displayScreen = initialState, action) => {
    switch (action.type) {
        case IMAGE_TITLE_CLICK: {
            return {
                ...displayScreen,
                id: action.id,
                record: null
            };
        }
        case RECEIVED_LINKS: {
            return {
                ...displayScreen,
                record: action.record
            };
        }
    }
    return displayScreen;
}

export default displayScreen;