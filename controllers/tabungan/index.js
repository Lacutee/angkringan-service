const Tabungan = require('../../models/tabungan.model');

module.exports = {
    
    getTabungan: async (req, res)=>{
        await Tabungan.find()
                    .then(data=>{res.send(data)})
                    .catch(err=>{res.send(err.message)})
    },

    postTabungan: async (req, res)=>{
        const masuk = req.body.masuk;
        const keluar = req.body.keluar;
        const GoL = req.body.GoL;
        const total = req.body.total;
        
        const NewTabungan = new Tabungan({
            masuk,
            keluar,
            GoL,
            total
        })

        await NewTabungan.save()
                        .then(()=>{res.json('User has been added')})
                        .catch(err =>{next(err)})
    
    }
}