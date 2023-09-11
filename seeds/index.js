const sequelize = require("../config/connection");

const seedUsers = require('./newUserData');
const seedPosts = require('./newPostData');

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');
        await seedsPosts(); 
        console.log('\n----- POST SEEDED -----\n');

        process.exit(0);
    }   catch (err) {
        console.log(err);
    }
};

seedAll();