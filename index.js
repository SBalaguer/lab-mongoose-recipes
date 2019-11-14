const mongoose = require('mongoose');

// Import Recipe model
const Recipe = require('./models/Recipe');

// Import data
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipeApp';

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('Connected to Mongo!');
    Recipe.create({
      title: "Asian Glazed Chicken Thighs",
      level: "Amateur Chef",
      ingredients: [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs"
      ],
      cuisine: "Asian",
      dishType: "Dish",
      image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      duration: 40,
      creator: "Chef LePapu"
  })
    .then(recipe =>{
      console.log(recipe.title)
      return Recipe.insertMany(data)
    })
    .then((manyThings) => {
      //console.log(recipie.title);
      return Recipe.updateOne({title: "Rigatoni alla Genovese" },{duration:100})
    })
    .then((update)=>{
      console.log('I have successfully updated a duration.')
      return Recipe.deleteOne({title: "Carrot Cake"})
    })
    .then(() =>{
      console.log('Carrot Cake has been deleted!')
    })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  })
  .connection.close();
});




