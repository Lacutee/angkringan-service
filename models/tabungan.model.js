const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TabunganSchema = new Schema({
    masuk:{
        type: Number,
        required: true,
        default: 0,
    },
    keluar:{
        type: Number,
        required: true,
        default:0
    },
    GoL:{
        type: Number,
        required: true,
        default:0
    },
    total:{
        type: Number,
        required: true,
        default:0
    }
},{
    timestamps: true
});

const Tabungan = mongoose.model('Tabungan', TabunganSchema);

module.exports = Tabungan;