const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistSchema = new Schema({
    userName:{
        type: String,
        required: true,
        default: null,
    },
    nama:{
        type: String,
        required: true,
        default: null,
    },
    jenis: {
        type: String,
        enum: ['Makanan', 'Minuman','Tidak'],
        default: ['Tidak'],
    },
    suhu:{
        type: String,
        enum: ['Panas', 'Dingin', 'Sedang'],
        default: null,
    },
    rasa:{
        type: String,
        enum: ['Pedas','Manis','Sedang','Pahit'],
        default: null,
    },
    ukuran:{
        type: String,
        enum: ['Jumbo','Sedang','Mini'],
        default: null,
    },
    Tambahan:{
        type: String,
        default: null,
    },
    jumlah:{
        type: Number,
        default: null
    }
},{
    timestamps: true
});

const HistoryData = mongoose.model('HistoryData', HistSchema);

module.exports = HistoryData;