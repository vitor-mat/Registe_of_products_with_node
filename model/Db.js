const Sequelize = require("sequelize")
const sequelize = new Sequelize("cadastro_de_produtos", "root", "MySql123!", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize,
    sequelize
}