const express = require('express')
const utils = require('utility')

const Router = express.Router()

const model = require('./models')
const User = model.getModel('user')

const _filter = {pwd:0,__v:0}


Router.get('/info',(req,res) => {
    const { userid } = req.cookies
    if(!userid) {
        //没有用户登录信息
        return res.json({code:1})
    }
    
    User.findOne({'_id':userid},_filter,(e,d) => {
        if(e) {
            return res.json({code:1,msg:'后端出错了'})
        }
        return res.json({code:0,data:d})
    })
    
})
Router.post('/register',(req,res) => {
    // console.log('register****',req.body)
    const {user,pwd,type} = req.body
    User.findOne({user:user},(err,doc) => {
        if(doc) {
            return res.json({code:1,msg:'用户名重复'})
        }
        const userModel = new User({user,type,pwd:md5Pwd(pwd)})
        userModel.save((e,d) => {
            if(e) {
                return res.json({code:1,msg:'后端出错了'})
            }
            const {_id,user,type} = d
            return res.json({code:0,data:{_id,user,type}})
        })
        // User.create({user,type,pwd:md5Pwd(pwd)},(err,doc) => {
        //     if(err) {
        //         return res.json({code:1,msg:'后端出错了'})
        //     }
        //     return res.json({code:0})
        // })
    })
})
Router.post('/login',(req,res) => {
    // console.log('login***',req.body)
    const {user,pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,(e,d) => {
        if(e) {
            return res.json({code:1,msg:'后端出错了'})
        }
        if(!d) {
            return res.json({code:1,msg:'用户名或者密码错误'})
        }
        res.cookie('userid',d._id)
        return res.json({code:0,data:d})
        // console.log('%%%%',d)
    })
})



Router.get('/list',(req,res) => {
    // User.remove({},(err,doc) => {})
    User.find({},(err,doc) => {
        return res.json(doc)
    })
})



function md5Pwd(pwd) {
    const salt = 'imooc_is_asrt3qw43r423qw~'
    return utils.md5(utils.md5(pwd+salt))
}

module.exports = Router