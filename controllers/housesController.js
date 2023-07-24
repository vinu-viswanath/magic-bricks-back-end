//import house collection
const houses = require ('../models/housesSchema')

//Define logic to resolve client request


//Get all houses

exports.getAllHouses = async (req, res) => {
    try{
        //get all houses from houses collection in mongodb
        const allHouses = await houses.find()
        res.status(200).json(allHouses)
    }
    catch(error){
        res.status(401).json(error)
    }
}


//get house product from an id
exports.viewHouses = async (req, res)=>{
    //get productId from request
    const product_id = req.params.product_id
    //logic
    try{
        //check id is present in mongodb
        const house = await houses.findOne({product_id})
        if(house){
            res.status(200).json(house)
        }
        else{
            res.status(404).json("Product not found")
        }
    }
    catch(error){
        res.status(404).json(error)
    }

}