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

    putMenuById: async (req, res)=>{
        await Menu.findOneAndUpdate(
            
        )
    }
}