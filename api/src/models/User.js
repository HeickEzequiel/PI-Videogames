const { DataTypes } = require('sequelize');

module.exports = (Sequelize) => {
    Sequelize.define( 'user', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false}
        
    );
}