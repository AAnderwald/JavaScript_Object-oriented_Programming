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
cookbook.addRecipe(new Recipe("pancakes", "breakfast", [{name: "milk", measurement: "1 cup"}, {name:"eggs", measurement: "2"}, {name: "flour", measurements: "1 cup"}], "10 mins", "these are the directions", 4
)
);

 cookbook.read()
 cookbook.read ("pancakes")

class Pastry {
    constructor() {

    }
}