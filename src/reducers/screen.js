import { BACK, IMAGE_TITLE_CLICK } from './../actions/actions';

let initialState = 'display';

const screen = (screen = initialState, action) => {
    switch (action.type) {
        case BACK: {
            return 'upload'
        }
        case IMAGE_TITLE_CLICK: {
            return 'display'
        }
    }
    return screen;
}

export default screen;