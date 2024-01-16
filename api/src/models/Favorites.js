const { DataTypes } = require ("sequelize")

module.exports = (Sequelize) => {
  Sequelize.define('favorite',{
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    background_image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
         min: 1,
        max: 10,
      }
    },
    genres:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
  }, { timestamps: false});    
}
