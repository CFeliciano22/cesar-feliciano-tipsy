const express = require('express');
const router = express.Router();
const fs = require('fs');

function readRestaurants(){
    const restaurantData = fs.readFileSync('./data/restaurants.json');
    const parsedRestaurant = JSON.parse(restaurantData);
    return parsedRestaurant;
}

router.get('/', (req, res)=>{
    const parsedData = readRestaurants();
    res.json(parsedData);
});

router.get('/:id',(req, res)=>{
    const restaurants =readRestaurants();
    const singleRestaurant = restaurants.find((restaurant) => restaurant.id === req.params.id)
    if (!singleRestaurant){
        return res.status(404).send(`No restaurant with id of ${req.params.id}`)
    }
    res.json(singleRestaurant);
});

module.exports = router;