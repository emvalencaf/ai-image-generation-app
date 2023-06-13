import { cloudinaryApi } from "../../cloudinary";

const uploadImage = async (photo) => cloudinaryApi.upload(photo);

module.exports = {
    uploadImage,
};