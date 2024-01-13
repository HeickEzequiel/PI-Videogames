const { DataTypes } = require ("sequelize")

module.exports = (Sequelize) => {
    Sequelize.define('favorite',{
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
          },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false
          },
        plataformas: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
          },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false
          },
        fechaDeLanzamiento: {
            type: DataTypes.DATEONLY,
            allowNull: false
          },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              min: 1,
              max: 10,
            }
        },
    }, { timestamps: false});    
}
