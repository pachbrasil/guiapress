const express = require('express');
const Sequelize = require('sequelize');

const connection = new Sequelize('guiaprex', 'root', ''{
	host: 'localhost',
	dialect: 'mysql'
});


module.export = connection;
