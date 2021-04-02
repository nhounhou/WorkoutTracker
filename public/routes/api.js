const db = require("../../models")
const mongojs = require('mongojs')

module.exports = function(app){ 
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if (error) {
            res.send(error);
            } else {
            res.json(data);
            }
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}, (error, data) => {
            if (error) {
            res.send(error);
            } else {
            res.json(data);
            }
        });
    });
    
    app.get("/api/workout/:id", (req, res) => {
        db.Workout.findOne(
            {
            _id: mongojs.ObjectId(req.params.id)
            },
            (error, data) => {
            if (error) {
                res.send(error);
            } else {
                res.send(data);
            }
            }
        );
    });
    
    app.post("/api/workouts", (req, res) => {
        const result = db.Workout.create({}, (error,data) => {
            if (error) {
                res.send(error)
            } else {
                res.json(data)
            }
        });
    });
    
    app.put("/api/workouts/:id", (req, res) => {
        console.log('id',req.params.id)
        db.Workout.findByIdAndUpdate(  
            req.params.id,
            {$push:{exercises: req.body} },
            {new: true,runValidators:true }
           )
           .then(data => res.json(data))
           .catch(err => { 
               res.json(err)
           })
    });    
};