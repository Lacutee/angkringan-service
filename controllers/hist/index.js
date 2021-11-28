const Hist = require('../../models/hist.model');

module.exports = {
    
    getHist: async (req, res)=>{
        await Hist.find()
                    .then(data=>{res.send(data)})
                    .catch(err=>{res.send(err)})
    },

    postHist: async (req, res)=>{
        const userName = req.body.userName;
        const nama = req.body.nama;
        const suhu = req.body.suhu;
        const jenis = req.body.jenis;
        const rasa = req.body.rasa;
        const ukuran = req.body.ukuran;
        const Tambahan = req.body.Tambahan;
        const jumlah = req.body.jumlah;

        const NewHist = new Hist({
            userName,
            nama,
            jenis,
            suhu,
            rasa,
            ukuran,
            Tambahan,
            jumlah
        })

        await NewHist.save()
                        .then(()=>{res.json('User has been added')})
                        .catch(err =>{res.send(err)})
    }
}