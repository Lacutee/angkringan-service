const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    cover:{
        type: String,
        default: null,
    },
    nama:{
        type: String,
        required: true,
        default: null,
        minlength: 3
    },
    harga: {
        type : Number,
        required: true,
        default: 0,
        minlength: 3
    },
    jenis: {
        type: String,
        enum: ['Makanan', 'Minuman','Tidak'],
        default: ['Tidak'],
    },
},{
    timestamps: true
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;