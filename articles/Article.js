const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false 
    }, body:{
        type: Sequelize.TEXT, 
        allowNull: false
    }
});

// Relations
Category.hasMany(Article);
Article.belongsTo(Category);

// Article.sync({force: true });    // (somente para criar a tabela, apos isso, remover )

module.exports = Article; 