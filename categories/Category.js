const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories', {
    title: { 
        type: Sequelize.STRING,
        allowNull: false},
    slug:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Category.sync({force: true }); // (somente para criar a tabela, apos isso, remover )
module.exports = Category;