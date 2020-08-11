const db = require("./Db")

const Post = db.sequelize.define('produtos', {
    name: {
        type: db.Sequelize.TEXT
    },
    price: {
        type: db.Sequelize.STRING
    }
})

module.exports = Post