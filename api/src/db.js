require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const fs = require('fs');
const path = require('path');
const GeneroModel = require('./models/Genres.js');
const VideogameModel = require('./models/Videogame.js');
const UserModel = require('./models/User.js');
const favoriteModel = require('./models/Favorites.js')

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
GeneroModel(sequelize);
VideogameModel(sequelize);
UserModel(sequelize);
favoriteModel(sequelize);
const { Videogame, Genero, User, favorite } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Videogame.belongsToMany(Genero,{through: 'videogame_genero'})
Genero.belongsToMany(Videogame, {through: 'videogame_genero'})


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
