class CookBook {
    constructor () {
        this.recipes = [];

    }

    addRecipe(recipe) {
        this.recipes.push(recipe);
    }
    
    read (recipe){
        if (recipe) {
            let found;
            this.recipes.forEach(function(value){
                if(value.name == recipe){
                    found = value;
                }
            });
            if (found) {
                found.displayIngredients();
                found.displayDirections();
            } else {
                console.log("cant find your recipe.");
            }
            
        }else {
            this.recipes.forEach(function(recipe, idx){
                console.log(`${idx +1} | ${recipe.name}`)
            });
        }
    }
}


class Recipe {
    constructor(name, category, ingredients, duration, directions, servings) {
        this.name = name;
        this.category = category;
        this.ingredients = ingredients;
        this.duration = duration;
        this.directions = directions;
        this.servings = servings;
        this.rating = null;
    }
    rate(liked, total) {
        this.rating = `${liked}/${total}`;
    }
    displayIngredients() {
        this.ingredients.forEach (function (value) {
            console.log (`${value.measurement} of ${value.name}`);
        });
    }
    displayDirections() {
        console.log (this.directions);
        }
    }

let cookbook = new CookBook();
cookbook.addRecipe(new Recipe("pancakes", "breakfast",
 [{name: "milk", measurement: "2 cups"}, 
 {name:"eggs", measurement: "1"}, 
 {name: "flour", measurement: "2 cups"},
 {name: "sugar", measurement: "1/3 cups"},
 {namne: "salt", measurement: "1 tsp"},
 {name: "butter", measurement: "2 tbsp"},
 {name: "vanilla", measurement: "2 tsp"},
 {name: "lemon zest", measurement: "2 tsp"}], 
 "10 mins", 
 "These are the directions: mix dry ingredients together, add wet ingredients and whisk untill just combined, heat tryer pan and add a pat of butter, use 1/4 cup measurement to scoop mix onto frying pan, cook over medium heat and fip when bubbles appear, flip and cook for a minute or two",
 4)
);

cookbook.addRecipe(new Recipe("quick bread", "bread",
[{name: "flour", measurement: "3 cups"},
 {namne: "salt", measurement: "1 tsp"},
 {name: "sugar", measurement: "2 tsp"},
 {name: "yeast", measurement: "1/2 tsp"},
 {name: "water, hot water about 125°F", measurement: "1 1/2 cups"}],
 "4 hrs 10 mins", 
 "These are the directions: combine flour, salt, sugar and yeast, make a well and stirl in water until its combined, cover with plastic and let stand room tep for three hours, transfer to lightly flour countertop and sprinkle with flour, scraper fold dougher 10-14 times and shape into rough ball, place on parchment paper lined bowl and cover with towel, let stand on counter top for 35 minutes, while it sits put Dutch oven with lid in cold oven and prehead over to 450°F, when oven is warmed and bread is down sitting carefully remove Dutch oven and lift parchment paper with dough inside Dutch oven, cover and bake for 30 mins, remove the lid and parchment paper carefully and back for another 10 to 15 mins.", 
  "1 loaf")
);

cookbook.addRecipe(new Recipe("bourbon balls", "sweets",
[{name: "vanilla wafer cookies", measurement: "3 1/8 oz"},
 {namne: "chopped pecans", measurement: "4 1/2 oz"},
 {name: "powder sugar", measurement: "5 oz"},
 {name: "dark cocoa powder", measurement: "1/2 oz"},
 {name: "corn syrup", measurement: "1 oz"},
 {name: "bourbon", measurement: "2 oz"}],
 "1 hr", 
 "These are the directions: dissovle corn syrup in bourbon, crush wafter until fine, mix wafers with sugar, cocoa powder and pecans, add bourbon to dry ingredients, let sit for 30 mins in fridge, form into balls adn roll in powder sugar, keep chilled.", 
  "1 loaf")
);


 //cookbook.read()
 //cookbook.read ("pancakes")
 //cookbook.read ("quick bread")
 //cookbook.read ("bourbon balls")

class Pastry {
    constructor () {
        this.recipes = [];
    }

    addRecipe(recipe) {
        this.recipes.push(recipe);
    }
    
    read (recipe){
        if (recipe) {
            let found;
            this.recipes.forEach(function(value){
                if(value.name == recipe){
                    found = value;
                }
            });
            if (found) {
                found.displayIngredients();
                found.displayDirections();
            } else {
                console.log("cant find your recipe.");
            }
            
        }else {
            this.recipes.forEach(function(recipe, idx){
                console.log(`${idx +1} | ${recipe.name}`)
            });
        }
    }
}

let pastry = new CookBook();
cookbook.addRecipe(new Recipe("lemon bars", "pastry",
 [{name: "butter", measurement: "1/2 cup"}, 
 {name:"flour, sifted", measurement: "1 cup"}, 
 {name: "powder sugar", measurement: "1/4 cup"},
 {name: "eggs, well beaten", measurement: "2"},
 {namne: "sugar", measurement: "1 cup"},
 {name: "lemon juice", measurement: "3 tbsp"},
 {name: "flour", measurement: "2 tbsp"},
 {name: "baking powder", measurement: "1/2 tsp"},
 {name: "salt", measurement: "1/4 tsp"}], 
 "1 hr 10 mins", 
 "These are the directions:  Bottom layer: cream together butter, 1 cup sifter flour and powder sugar, press into ungreased 9 inch square pan, bake 350°F for 20 mins or until lightly brown. Top layer: combine eggs, sugar, lemon juice and ring, mix dry ingredients tand add to egg mixture, mix well, poor over baked bottom layer and bake at 350°F for another 30 mins, cool and sprinkle with powder sugar, cut into squared.",
 4)
);


// cookbook.read ("lemon bars")  // on console will this appear, Yoda I am


