import { MAX_FILE_SIZE, ALLOWED_FILE_HEIGHT, ALLOWED_FILE_WIDTH } from './../constants/constants';

export function checkFile(fileInput) {
    return new Promise(function (resolve, reject) {
        if (fileInput.files.length === 0) {
            resolve({
                ok: false, reason: 'No file selected'
            });
        }

        const file = fileInput.files[0];
        const fileSize = Math.round(file.size / 1024);

        if (fileSize > MAX_FILE_SIZE) {
            resolve({
                ok: false, reason: 'File too big'
            });
        }
        resolve({
            ok: true
        });
    }).then(data => {
        if (!data.ok) {
            return data;
        } else {
            return checkFileDimensions(fileInput);
        }
    });
}

export function checkFileDimensions(fileInput) {
    let file = fileInput.files[0];

    return new Promise(function (resolve, reject) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            var image = new Image();
            image.src = reader.result;
            image.onload = function () {
                if (image.height === ALLOWED_FILE_WIDTH && image.width === ALLOWED_FILE_HEIGHT) {
                    resolve({
                        ok: true
                    });
                } else {
                    resolve({
                        ok: false, reason: `Incorrect dimensions. Should be ${ALLOWED_FILE_WIDTH} x ${ALLOWED_FILE_HEIGHT}`
                    });
                }
            }
        }, false);
        reader.readAsDataURL(file);
    });
}