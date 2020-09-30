import { IMAGES_ADDED } from './../actions/actions';

let initialState = {
    images: [],
    loading: false
};

const listPanel = (listPanel = initialState, action) => {
    if (action.type === IMAGES_ADDED) {
        return {
            ...listPanel,
            images: listPanel.images.concat(action.images),
            loading: true
        };
    } else {
        return listPanel;
    }
}

export default listPanel;