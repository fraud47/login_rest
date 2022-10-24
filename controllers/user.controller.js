const db = require("../models/index.js");
const Profile = db.Profile;

exports.allAccess = (req, res) => {
  res.status(200).send("Public  Content.");
};


exports.serviceWorkers = (req, res) => {
  Profile.find({role: 'worker'})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error  occured while retrieving workers.",
      });
    });
};


exports.search = (req, res) => {

  str = req.params.str
  Profile.find({ fullname:{$regex: str}})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error  occured while retrieving workers.",
      });
    });



    
};


exports.filter = (req, res) => {

  str = req.params.str
  min =req.body.min
  max =req.body.max

if(min>max) return res.status(500).json({message: "wrong filter parameters"})
if(min==null) {
  Profile.find({fullname:{$regex: str}, price:{ $lte:max}})
.then((data) => {
  res.json(data);
})
.catch((err) => {
  res.status(500).json({
    message: err.message || "Some error  occured while retrieving workers.",
  });
});}

if(max==null) {
  Profile.find({fullname:{$regex: str}, price:{ $gte:min}})
.then((data) => {
  res.json(data);
})
.catch((err) => {
  res.status(500).json({
    message: err.message || "Some error  occured while retrieving workers.",
  });
});}

  Profile.find({ fullname:{$regex: str}, price:{ $gte:min, $lte:max}})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Some error  occured while retrieving workers.",
      });
    });



    
};





exports.delete = (req, res) => {
  const id = req.params.id;
  Profile.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Job with id=${id}. Maybe User was not found!`,
        });
      } else {
        res.send({
          message: "User was  deleted successfully!",
        });
      }
    })

    .catch((err) => {
      res.status(500).send({
        message: "Could not delete category with id=" + id,
      });
    });
};