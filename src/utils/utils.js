import { MAX_FILE_SIZE, types } from './../constants/constants';

export function checkFile(fileInput) {
    return new Promise(function (resolve, reject) {
        if (fileInput.files.length === 0) {
            resolve({
                ok: false, reason: 'No file uploaded'
            });
        }

        const file = fileInput.files[0];
        const fileSize = Math.round(file.size / 1024);

        if (!types.includes(file.type)) {
            resolve({
                ok: false, reason: 'File type not allowed'
            });
        }
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
                console.log(image.height);
                console.log(image.width);
                if (image.height === 1024 && image.width === 1024) {
                    resolve({
                        ok: true
                    });
                } else {
                    resolve({
                        ok: false, reason: 'incorrect dimensions'
                    });
                }
            }
        }, false);
        reader.readAsDataURL(file);
    });
}