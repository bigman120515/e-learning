import express from "express";
import * as path from 'path';
import multer from "multer";

const __dirname = path.resolve();

import auth from "../middleware/auth.js";
import ApiError from "../middleware/apiError.js";
import Response from "../middleware/response.js";

const router = express.Router();


function getRandomInt() {
    var min = 0;
    var max = 25;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand() {
    var alphs = "abcdefghijklmnopqrstuvwxyz"
    var random = ""
    for (let i = 0; i < 6; i++) {
        random += alphs[getRandomInt()]
    }
    return random;
}

var fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
            cb(null, getPath(req.query.for));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + rand() + path.extname(file.originalname)) //Appending file extention like .jpg
    }
});

var documents = multer({
    storage: fileStorage,
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !=='.mp4' && ext !=='.mov' && ext !=='.mkv' && ext !=='.mpeg-2' 
        && ext !== '.jpeg'&& ext !== '.png' && ext !== '.pdf' &&  ext !== '.doc' 
        && ext !== '.docx' && ext !== '.xls' && ext !== '.xlsx' && ext !== '.ppt' && ext !== '.pptx') {
            return cb(ApiError.badRequest('Only JPG, PNG, PDF, Doc, Excel, MP4, MPEG, MOV, MKV & PPT files are allowed'));
        }
        cb(null, true)
    }
}).single('files');

//Controller with route
router.post('/', auth, function(req, res) {
    documents(req, res, function (err) {
        if (err) {
            return Response.error(res, err);
        }

        const file = req.file;

        if (!file || file === undefined)
            return Response.error(res, ApiError.badRequest('File is required'));

        try {


            var filePath = file.filename;
            var [filename, extension] = filePath.split('.').reduce((acc, val, i, arr) =>
                (i == arr.length - 1) ? [acc[0].substring(1), val] : [[acc[0], val].join('.')], []);

            let absolutePath = getPath(req.query.for);
            absolutePath = absolutePath.substring(absolutePath.indexOf("uploads") + 8).replace(/\\/g, "/");

            const fileNameWithPath = `${absolutePath}${filePath}`;

            var result = {
                file_path: fileNameWithPath,
                file_type: extension,
                file_size: file.size
            }
            return Response.success(res, 'File successfully Uploaded', result);

        } catch (err) {
            if (err instanceof ApiError)
                return Response.error(res, err);

            return Response.error(res, ApiError.internal(err));
        }
    });
})

function getPath(storageType) {
    if(storageType === 'ProfilePic')
        return path.join(__dirname, '/uploads/profile/');
    else if(storageType === 'Post')
        return path.join(__dirname, '/uploads/post/');
}

export default router;