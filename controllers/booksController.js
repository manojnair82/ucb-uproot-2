const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllUsers: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateUsers: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeUsers: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByIdUsers: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

 findAllNodes: function(req, res) {
    db.Comp
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

findAllLinks: function(req, res) {
    db.Link
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findComponents: function(req, res){
    db.Book
      .find(function(error, results){
        if (error) {
          console.log("Mongo error");
        }
        else {

          for(var i =0; i<results.length;i++)
          {
            db.Comp.create(
              {_id: i,
                nodes:   results[i].summary,

              upsert: true 
              }
            ).catch(err => res.status(422).json(err));
            
            for(var j = 0;j<results[i].component.length;j++)
            {
              for(var k = 0; k<results.length; k++)
              {                                
                { for(var m = 0;m<results[k].component.length; m++)
                  { 
                    if(results[i].title != results[k].title)
                    {
                      if(results[i].component[j]===results[k].component[m])
                      {
                        console.log ("Issue "+i+": "+results[i].title+" is linked to "+k+":"+results[k].title+" by component: " + results[i].component[j]);
                          var idm = i.toString()+k.toString();
                          db.Link.create(
                            {_id: idm,
                              target: k,
                              source: i,
                            upsert: true 
                            }
                          ).catch(err => res.status(422).json(err));
                      }
                    } 
                  }
                }
                
              }
            }
            // console.log(results[i].component);
            // console.log(results[i].summary);


          }
        }
    })
  }
}
