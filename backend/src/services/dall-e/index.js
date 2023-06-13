const { openaiAPI } = require("../../openai");

const generateImage = async (prompt) => {
    const aiResponse = await openaiAPI.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
    });
    return aiResponse?.data?.data[0]?.b64_json;

};

module.exports = {
    generateImage,
}