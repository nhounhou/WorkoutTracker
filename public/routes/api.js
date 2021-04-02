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
        const result = db.Workout.create(
            // { 
            // _id: mongojs.ObjectId(req.params.id)
            // },
            // {
            // $set: {
            //     title: req.body.title,
            //     note: req.body.note,
            //     modified: Date.now()
            // }
            // },
            // (error, data) => {
            // if (error) {
            //     res.send(error);
            // } else {
            //     res.send(data);
            // }
            // }
            req.body
        );
        res.json(result);
    });
    
    app.put("/api/workouts/:id", (req, res) => {
        console.log('id',req.params.id)
        db.Workout.updateOneinsert(
            {
            _id: req.params.id
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
};