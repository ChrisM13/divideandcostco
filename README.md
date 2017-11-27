
# Divide and Costco

Divide and Costco is an app that allows Costco shoppers to connect for savings. It allows two customers to connect shopping lists to split large quantity products. That way you reduce waste while also saving money on the items you need. 

Built utilizing the Yelp and Google Map API's, you can use your map to navigate to the closest Costco's in your area, see what lists have been created there, and decide accordingly which one you would like to shop at. If one location's customer has more items you wish to split you have the option to decide to go there instead.

Divide and Costco reduces the waste created by bigbox wholesale stores while allowing customers who would not normally purchase certain things to have access to it. By splitting cost and quantity you are able to purchase the food items usually reserved for customers buying in bulk. Finally you have access to the 24 avocados you felt bad buying.

# Ways to Use

This app is best deployed while planning a trip to Costco. Select your desired location, post a list, and select a customer with a comparable list. The following link will take to the site [Divide and Costco](https://divide-and-costco.herokuapp.com). Or you can clone the github repo. 

# Planning

This app was planned using [Trello](https://trello.com/b/kxgHzXn6/pineapple-dream) and Google Documents.

# Models
## User Model
```javascript
var listSchema = new mongoose.Schema(
    {
        products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
        zipCode: Number,
        isActive: {type: Boolean, default: true},
        connectedList: mongoose.Schema.Types.ObjectId
    },
    {
        timestamps: true
    }
);

var userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        avatar: String,
        googleId: String,
        lists: [listSchema]
    },
    {
        timestamps: true
    }
);
```

## Product Model
```javascript
var productSchema = new mongoose.Schema (
    {
        name: String,
        quantity: Number,
        price: Number,
        category: {
            type: String,
            enum: ['Grocery', 'Home/Kitchen', 'Bath', 'Misc']
        }
    },
    {
        timestamps: true
    }
);
```

# Screenshots

![Screen01](/divideandcostcoscreens/map.png)
![Screen02](/divideandcostcoscreens/map2.png)
![Screen03](/divideandcostcoscreens/list.png)
![Screen04](/divideandcostcoscreens/connect.png)
![Screen05](/divideandcostcoscreens/connect2.png)

# Technologies Used

This app was built using Javascript and HTML/CSS. It uses a MEN stack (MongoDB, Express, Node). It utilizes the Yelp API and Google Maps API.

# Installation

1. Clone the repo to you terminal ```https://github.com/alexw14/divideandcostco.git```
2. Move into the directory. 
3. Install the npm packages using ```npm install```
4. Create a .env file in the directory and add the following tokens:
```javascript
DATABASE_URL=<your m-lab database url>
GOOGLE_CLIENT_ID=<your google client id>
GOOGLE_SECRET=<your google secret>
GOOGLE_CALLBACK=<your google callback>
YELP_TOKEN=<your yelp token>
GOOGLE_MAP_KEY=<your google map key>
```
5. Run ```npm start```
6. Navigate to ```localhost:3000``` in your browser.

# Next Steps

We would like to continue adding more user functionality. A more complete connection page that allows for a customer to have better access to the person they are connected to. More editable user profiles. A more graphically pleasing user experience.

# Authors

Alex Wong
Chris Mosier
Dylan Corbett
Michael Goode, Esq.


