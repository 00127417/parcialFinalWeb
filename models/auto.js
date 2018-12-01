var mongoose = require('mongoose');

let auto = new mongoose.Schema({
    num: Number,
    nombre: String,
    uv: String,
    descripcion: String
});
module.exports = moongose.model('auto',auto);