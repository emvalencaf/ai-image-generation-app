// models
import { PostModel } from '../../models';

const createPost = async ({ name, prompt, photoUrl }) => PostModel.create({
    name,
    prompt,
    photo: photoUrl.url,
});

module.exports = {
    createPost,
};