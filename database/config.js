const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CON_USERS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });

        console.log('database (TEST) on line');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la DB ver logs');
    }
}

module.exports = {
    dbConnection
}