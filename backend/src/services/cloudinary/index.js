const { cloudinaryApi } = require("../../cloudinary");

const uploadImage = async (photo) => cloudinaryApi.upload(photo);

module.exports = {
    uploadImage,
};