import multer from "multer";

const Storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'postPictures/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

export const upload = multer({ storage: Storage });