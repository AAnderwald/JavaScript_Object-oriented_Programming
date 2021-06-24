
var seasons = ["Spring", "Summer", "Fall", "Winter"]; 

let jacket1 = {
    color: "blue",
    season: "Spring",
    size: "M",
    outOfStyle: true,
    price: 19.99
};
let jacket2 = {
    color: "black",
    season: "Winter",
    size: "L",
    outOfStyle: true,
    price: 79.99
};
let jacket3 = {
    color: "tan",
    season: "Summer",
    size: "XXL",
    outOfStyle: false,
    price: 69.99
};
let jacket4 = {
    color: "red",
    season: "Summer",
    size: "M",
    outOfStyle: false, 
    price: 39.99
};
let jacket5 = {
    color: "black",
    season: "W\winter",
    size: "S",
    outOfStyle: true,        //boolean value
    price: 500.99
};

console.log(jacket1.toString()); // this will pint out [object Object]

// want to create a prototype. have a model for every jacket. they will all have a color, season etx

let jacket = {
    color: null,
    season: null,
    size: null,
    outOfStyle: null,
    price: null
};

//so create a new jacket
let londonFog1 = Object.create(jacket);  

londonFog1.color = "red"  // and assign all the values
londonFog1.season = "Spring"


//so if want to create new objects from the jacket and assign values need to create a functin:

function Jacket(color, season, size, current, price) {
    let obj = Object.create(jacket);

    obj.color = color;
    obj.season = season;
    obj.size = size;
    obj.current = current;
    obj.price = price;

    return obj;
}

let londonFog = Jacket ("black", "Spring", "M", true, 19.99);
let northFace = Jacket ("blue", "Summer", "L", true, 29.99);
let colombia = Jacket ("black", "Spring", "M", true, 19.99);
let nike = Jacket ("black", "Spring", "M", true, 19.99);
let polo = Jacket ("black", "Spring", "M", true, 19.99);

let inventory = {
    products: [],
    length: 0,
    addProduct: function (product) {
        this.products.push(product);
        this.length++;
    },
    displayProducts: function (){
        this.products.forEach(function (value) {
        console.log(`| ${value.color} | ${value.size} | ${value.season} | ${value.curretn} | ${value.price}`);
    });
},
};

//easeier to use classes 
//to create a class
class Jacket {
    constructor(color, season, size, current, price) {         //this is the methody body between {}
        this.season = season;
        this.size = size;
        this.color = color;
        this.current = current;
        this.price = price;
    }
}
class Inventory {
    constructor () {
    this.products = [];
    this.length = 0;
    }
    addProduct(product) {
        this.products.push(product);
        this.length++;
    }

    displayProducts (){
        this.products.forEach(function (value) {
        console.log(`| ${value.color} | ${value.size} | ${value.season} | ${value.curretn} | ${value.price}`);
    });
}
}
