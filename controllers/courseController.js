const {Course} = require('../models')

module.exports.viewAll = async function(req, res){
    const course = await Course.findAll();
    res.render('course/view_all', {course})
}

module.exports.viewProfile = async function (req, res){
    const course = await Course.findByPk(req.params.id);
    res.render('course/profile', {course})
}