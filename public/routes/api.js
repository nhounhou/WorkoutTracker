
const db = require('../../models');
console.log('DB',db)
module.exports = function(app){ 
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (error, data) => {
            console.log('data',data);
            if (error) {
            res.send(error);
            } else {
            console.log('data',data);
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
        db.Workout.update(
            {
            _id: req.params.id
            },
            {
            $set: {
                title: req.body.title,
                note: req.body.note,
                modified: Date.now()
            }
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
    
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.insert(
            req.body,
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