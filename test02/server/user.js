const express = require('express')
const utils = require('utility')

const Router = express.Router()

const model = require('./models')
const User = model.getModel('user')


Router.get('/info',(req,res) => {
    res.json({code:1})
})
Router.post('/register',(req,res) => {
    console.log('register****',req.body)
    const {user,pwd,type} = req.body
    User.findOne({user:user},(err,doc) => {
        if(doc) {
            return res.json({code:1,msg:'用户名重复'})
        }
        User.create({user,type,pwd:md5Pwd(pwd)},(err,doc) => {
            if(err) {
                return res.json({code:1,msg:'后端出错了'})
            }
            return res.json({code:0})
        })
    })
})

Router.get('/list',(req,res) => {
    User.find({},(err,doc) => {
        return res.json(doc)
    })
})



function md5Pwd(pwd) {
    const salt = 'imooc_is_asrt3qw43r423qw~'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router