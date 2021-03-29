const path=require('path');

module.exports = function(app){ 
    app.get("/", (req, res) => {
        // res.sendFile(path.join(__dirname + "./public/index.html"));
        res.sendFile(path.join(index.html));
    });
    app.get("/exercise",function (req,res){   
        res.sendFile(path.join(__dirname,"../exercise.html"));
    });
  
    app.get("/stats",function(req,res){   
        res.sendFile(path.join(__dirname,"../stats.html"));
    });
};