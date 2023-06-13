// models
const { PostModel } = require('../../models');

const create = async ({ name, prompt, photoUrl }) => PostModel.create({
    name,
    prompt,
    photo: photoUrl.url,
});

const getAll = async () => PostModel.find({});

module.exports = {
    create,
    getAll,
};