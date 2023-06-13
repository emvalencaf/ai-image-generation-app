
require('dotenv').config();

const app = require('./app');
const connectDB = require('./mongodb');

const PORT = process.env.PORT || 5000;

const main = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })      
    } catch (error) {
        console.log(error);
    }
};

main();