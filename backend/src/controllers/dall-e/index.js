// services
const { dallEService } = require('../../services/index')

const generateImage = async (req, res) => {
    try {
        // getting data from frontend
        const {
            prompt
        } = req.body;

        const image = await dallEService.generateImage(prompt);

        if (!image) res.status(500).json({
            success: false,
            message: 'server could not generate a image',
        });

        res.status(200).json({
            success: true,
            data: {
                photo: image,
            },
        });

    } catch (error) {
        console.log(error?.response?.data?.error?.message);
        res.status(500).send({
            success: false,
            message: error?.response?.data?.error?.message || 'server internal error',
        });
    }
}

module.exports = {
    generateImage,
}