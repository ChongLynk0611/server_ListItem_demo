var db = require('../db');

const getToDo = async (req, res) => {
    var todo = db.get('todo');
    res.json(todo);
}

const finish = async (req, res) => {
    const id = req.body.params;
    var item = db.get('todo')
        .find({id:id})
        .assign({idFinish:true})
        .write()

    console.log(item)
    res.json("finish");
}

module.exports = {
    getToDo,
    finish
}