const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        post_body: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: '',
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        is_public: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        allow_comments: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        numComments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);
    
module.exports = Post;