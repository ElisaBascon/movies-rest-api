const { Schema, model } = require('mongoose');

const moviesSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        director: {
            type: String
        },
        duration: {
            type: String
        },
        synopsis: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
      }
);

const Movie = model('Movie', moviesSchema);

module.exports = Movie ;