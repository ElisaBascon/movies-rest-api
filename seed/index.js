require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const movies = [
  {
    "title": "Home Alone",
    "year": 1990,
    "director": "Chris Colombus",
    "duration": 103,
    "synopsis": "A kid is left alone at home while his family travels to Paris for Christmas. He then has to face two burglars with much creativity.",
    "image": "https://m.media-amazon.com/images/I/81EWrTadiJL._AC_SY679_.jpg"
  },
  {
    "title": "The Goonies",
    "year": 1985,
    "director": "Richard Donner",
    "duration": 114,
    "synopsis": "A group of children who call themselves 'the Goonies' gather for a final weekend together.",
    "image": "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Goonies.jpg"
  },
  {
    "title": "The Neverending Story",
    "year": 1984,
    "director": "Wolfgang Petersen",
    "duration": 102,
    "synopsis": "To escape from his dull life and bullies at school, Bastain takes refuge in an old book store.",
    "image": "https://pics.filmaffinity.com/die_unendliche_geschichte_the_neverending_story-636909335-mmed.jpg"
  },
  {
    "title": "E.T",
    "year": 1982,
    "director": "Steven Spielberg",
    "duration": 105,
    "synopsis": "An alien is left behind on Earth and is saved by young Elliot who decides to keep him hidden..",
    "image": "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/45/51/20200813.jpg"
  }
]

mongoose.connect(process.env.MONGO_URL)
  .then(x => console.log(`Connected to ${x.connection.name}`))
  .then(() => {
    return Movie.create(movies)
  })
  .then(() => {
    console.log('Seed done 🌱');
  })
  .catch(e => console.log(e))
  .finally(() => {
    console.log('Closing connection');
    mongoose.connection.close();
  })