const { DataTypes } = require ('sequelize')

module.exports = (Sequelize) => {
    Sequelize.define('genero',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        games_count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image_background: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false})
}