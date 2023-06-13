
// services
const { cloudinaryService, postService } = require("../../services");

const getAll = async (req, res) => {
    try {
        const posts = await postService.getAll();
        
        if (posts.length === 0) return res.status(404).json({
            success: false,
            data: {
                message: 'posts not found',

            },
        });
        
        res.status(200).json({
            success: true,
            data: posts,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error,
        })
    }
};

const create = async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;

        const photoUrl = await cloudinaryService.uploadImage(photo);

        const newPost = await postService.createPost({
            name,
            prompt,
            photoUrl,
        });

        res.status(201).json({
            success: true,
            data: newPost,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            messaage: error,
        });
    }
}

module.exports = {
    getAll,
    create,
}