const db = require("./Db");

const Post = db.sequelize.define('registros', {
    nome: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
    },
    sexo: {
        type: db.Sequelize.STRING,
    },
    senha: {
        type: db.Sequelize.STRING,
    }
});

//Post.sync({force: true}); ja criado
module.exports = Post;