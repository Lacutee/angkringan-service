const Menu = require('../../models/menu.model');

module.exports = {
    
    getAllMenu: async (req, res)=>{
        await Menu.find()
                    .then((data)=>{
                        res.send(data)
                    }).catch((err)=>{
                        res.send(err.message)
                    })
    },
    delMenuById: async (req,res)=>{
        const id = req.params.id;
        Menu.findByIdAndDelete(id)
                .then(()=>{res.send('dihapus')})
                .catch(err=>{res.send(err.message)})
    },
    postMenu: async (req, res)=>{
        const cover = req.body.cover;
        const nama = req.body.nama;
        const harga = req.body.harga;
        const jenis = req.body.jenis;

        const NewMenu = new Menu({
            cover,
            nama,
            harga,
            jenis,
        })

        await NewMenu.save()
                        .then(()=>{res.json('User has been added')})
                        .catch(err =>{next(err)})
    },
    putMenuById: async (req, res)=>{
        const {id: _id} = req.params;
        const cover = req.body.cover;
        const nama = req.body.nama;
        const harga = req.body.harga;
        const jenis = req.body.jenis;
        
        const newMenu = {
            cover,
            nama,
            harga,
            jenis,
        }

        await Menu.findByIdAndUpdate(
            _id,
            newMenu,
            {new: true},
            (err, newMenu)=>{
                if (err) {
                    res.json({
                      newMenu,
                      success: false,
                      msg: 'Failed to update User'
                    })
                  } else {
                    res.json({newData, success: true, msg: 'User hase been updated'})
                  }
                }
        )
    }
}