const express = require('express');
const router = express.Router();
const fs = require('fs');

function readRestaurants(){
    const restaurantData = fs.readFileSync('./data/restaurants.json');
    const parsedRestaurant = JSON.parse(restaurantData);
    return parsedRestaurant;
}

function writeRestaurants(data){
    const stringifiedRestaurant = JSON.stringify(data);
    fs.writeFileSync('./data/restaurants.json', stringifiedRestaurant);
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

router.post('/', (req, res) => {
    const restaurants = readRestaurants();
    console.log(req.body);
    const { name, display_phone, happyhour } = req.body;
    // if (!id || !title || !description){
    //     return res.status(400).json({ msg: 'Please fill required field'})
    // } 
    
    const newRestaurant = {
        id: "niMAmcUhY4Xpftsuh7pMvg",
        alias: "the-blues-burgers-hallandale-beach",
        name,
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/L_RAEOgqPeG-L_54y7ixqw/o.jpg",
        is_closed: false,
        url: "https://www.yelp.com/biz/the-blues-burgers-hallandale-beach?adjust_creative=Zx-z2xB8aasY5rTTG7LroA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Zx-z2xB8aasY5rTTG7LroA",
        review_count: 92,
        categories: [
            {
                alias: "burgers",
                title: "Burgers"
            },
            {
                alias: "sandwiches",
                title: "Sandwiches"
            },
            {
                alias: "bars",
                title: "Bars"
            }
        ],
        rating: 4.5,
        coordinates: {
            latitude: 25.9857,
            longitude: -80.1471
        },
        transactions: [
            "pickup",
            "delivery"
        ],
        price: "$$",
        location: {
            address1: "117 E Hallandale Beach Blvd",
            address2: "Ste 109-110",
            address3: null,
            city: "Hallandale Beach",
            zip_code: "33009",
            country: "US",
            state: "FL",
            display_address: [
                "117 E Hallandale Blvd",
                "Hallandale Beach, FL 33009"
            ]
        },
        phone: "+17542633294",
        display_phone,
        distance: 1028.2407439263286,
        happyhour,
    }
            

    restaurants.push(newRestaurant);

    writeRestaurants(restaurants);

    res.status(201).json(newRestaurant);
});

module.exports = router;