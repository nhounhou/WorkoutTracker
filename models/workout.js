const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date().setDate(new Date().getDate())
  },
  exercises: Array
});

const Workout = mongoose.model('Workouts', workoutSchema);
module.exports = Workout;