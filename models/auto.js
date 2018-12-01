var mongoose = require('mongoose');

let auto = new mongoose.Schema({
    nombre: String,
    uv: String,
    descripcion: String
});
module.exports = mongoose.model('auto',auto);