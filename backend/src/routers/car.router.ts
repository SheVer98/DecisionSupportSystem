import { Router } from "express";
import { cars } from "../data";
import asyncHandler from 'express-async-handler';
import { CarModel } from "../models/car.model";

const router = Router();

router.get("/seed", asyncHandler(
  async (req,res)=>{
    const carsCount = await CarModel.countDocuments();
    if(carsCount>0){
    res.send("Seed is already done!");
    return;
  }

  await CarModel.create(cars);
  res.send("Seed is done!");
}
))


router.get("/", asyncHandler(
  async (req,res)=>{
    const cars = await CarModel.find();
  res.send(cars);
}
))

router.get("/lista/:searchTerm", asyncHandler(
  async (req,res)=>{
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const cars = await CarModel.find({model: {$regex:searchRegex}})
    res.send(cars);
}
))

router.get('/fuel/:fuelType', asyncHandler(
  async (req, res) => {
    const fuelRegex = new RegExp(req.params.fuelType, 'i');
    const cars = await CarModel.find({paliwo: {$regex:fuelRegex}})
      res.send(cars);
    }
));


  
  router.get('/gearbox/:gearboxType', asyncHandler(
    async (req, res) => {
      const gearboxRegex = new RegExp(req.params.gearboxType, 'i');
      const cars = await CarModel.find({skrzynia: {$regex:gearboxRegex}})
      res.send(cars);
    }
  ));


  
  router.get('/fuel/:fuelType/gearbox/:gearboxType', asyncHandler(
    async (req, res) => {
      const fuelRegex = new RegExp(req.params.fuelType, 'i');
      const gearboxRegex = new RegExp(req.params.gearboxType, 'i');
      const cars = await CarModel.find({
        paliwo: {$regex:fuelRegex},
        skrzynia: {$regex:gearboxRegex}
      });
      res.send(cars);
    }
  ));




  router.get("/lista/:searchTerm/fuel/:fuelType", asyncHandler(
    async (req,res)=>{
      const searchRegex = new RegExp(req.params.searchTerm, 'i');
      const fuelRegex = new RegExp(req.params.fuelType, 'i');
      const cars = await CarModel.find({
        model: {$regex:searchRegex},
        paliwo: {$regex:fuelRegex}
      });
      res.send(cars);
  }
  ))


  router.get("/lista/:searchTerm/gearbox/:gearboxType", asyncHandler(
    async (req,res)=>{
      const searchRegex = new RegExp(req.params.searchTerm, 'i');
      const gearboxRegex = new RegExp(req.params.gearboxType, 'i');
      const cars = await CarModel.find({
        model: {$regex:searchRegex},
        skrzynia: {$regex:gearboxRegex}
      });
      res.send(cars);
  }
  ))


  router.get("/lista/:searchTerm/fuel/:fuelType/gearbox/:gearboxType", asyncHandler(
    async (req,res)=>{
      const searchRegex = new RegExp(req.params.searchTerm, 'i');
      const fuelRegex = new RegExp(req.params.fuelType, 'i');
      const gearboxRegex = new RegExp(req.params.gearboxType, 'i');
      const cars = await CarModel.find({
        model: {$regex:searchRegex},
        paliwo: {$regex:fuelRegex},
        skrzynia: {$regex:gearboxRegex}
      });
      res.send(cars);
  }
  ))



export default router;