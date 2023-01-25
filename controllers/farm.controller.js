const Farm = require('../models/farm.model');

//Post Method
const postFarm = async(req, res, next) => {
    // const data = new Farm ({
    //     name: req.body.name,
    //     address: req.body.address,
    //     description: req.body.description,
    //     profile_pic: req.body.profile_pic,
    //     rating: req.body.rating,
    //     produce: req.body.produce
    // })
    try {
        const newFarm = await Farm.create(req.body);
        res.status(201).json(newFarm)
    }
    catch (error) {
        next(error)
    }
}

//Get all Method
const getFarms = async (req, res, next) => {
    try{
        const data = await Farm.find();
        res.json(data)
    }
    catch(error){
        next(error)
    }
}

//Get by ID Method
const getFarm = async (req, res, next) => {
    try{
        const farm = await Farm.findById(req.params.id)
        res.status(200).json(result)
    }
    catch(error){
        next(error)
    }
}

//Update by ID Method
const updateFarm = async (req, res, next) => {
    try {
        const farm = await Farm.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
        res.status(200).json(farm);
      } catch (error) {
        next(error)
      }
}

//Delete by ID Method
const deleteFarm = async (req, res, next) => {
    try {
        const farm = await Farm.findByIdAndDelete(req.params.id);
        res.status(200).json(farm);
      } catch (error) {
        next(error)
      }
}

module.exports = {
    getFarms,
    getFarm,
    postFarm,
    updateFarm,
    deleteFarm,
  };