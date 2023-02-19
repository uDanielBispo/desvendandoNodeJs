const Sequelize = require('sequelize');

// conexao com banco mysql
const sequelize = new Sequelize('LoginECadastro', 'root', '1234', {
    host: "localhost",
    dialect: 'mysql',

});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}