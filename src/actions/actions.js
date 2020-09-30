export const IMAGES_ADDED = 'IMAGES_ADDED';


export const imagesAdded = images => {
    return {
        type: IMAGES_ADDED,
        images
    };
};