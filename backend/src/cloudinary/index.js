const cloudinary = require('cloudinary').v2;

// config cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const cloudinaryApi = cloudinary.uploader;

module.exports = {
    cloudinaryApi,
}