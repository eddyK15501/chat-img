const { model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}


postMessage.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len:[1],
            },
        },
        content: {
            type: Datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        user_id: {
            types: Datatypes.STRING,
            references: {
                model:'user',
                Key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        ModelName: 'post',
    },
),


Module.exports = Post;
