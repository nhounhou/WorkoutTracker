
module.exports = function(app){ 
    app.get("/api/workouts", (req, res) => {
        db.notes.find({}, (error, data) => {
            if (error) {
            res.send(error);
            } else {
            res.json(data);
            }
        });
    });
    
    app.get("/api/workout/:id", (req, res) => {
        db.notes.findOne(
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
        db.notes.update(
            {
            _id: mongojs.ObjectId(req.params.id)
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
        db.notes.insert(
            {
            _id: mongojs.ObjectID(req.params.id)
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