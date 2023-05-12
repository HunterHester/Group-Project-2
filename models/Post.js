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
        numComments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        user_id: {

        },
        is_public: {

        },
        allow_comments: {

        },
    },
    {
        hooks: {
            beforeCreate: async (newBlogData) => {
            newBlogData.password = await bcrypt.hash(newBlogData.password, 10);
            return newBlogData;
            },
            beforeUpdate: async (updatedBlogData) => {
            updatedBlogData.password = await bcrypt.hash(updatedBlogData.password, 10);
            return updatedBlogDBlog
            },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
        }
    );
    
module.exports = Post;