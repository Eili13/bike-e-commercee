const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI)
        .then(con => {
            console.log(`MongoDB Database Connected with HOST: ${con.connection.host}`);
        })
        .catch(err => {
            console.error('MongoDB connection error:', err);
            process.exit(1); // Exit the process if connection fails
        });
}

module.exports = connectDatabase;
