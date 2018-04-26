const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/imooc-chat'

mongoose.connect(DB_URL)

const models = {
    user:{
        user:{type:String,require:true},
        pwd:{type:String,require:true},
        type:{type:String,require:true},
        //头像
        avatar:{type:String},
        //个人简介
        desc:{type:String},
        //职位名
        title:{type:String},
        //如果是BOSS， 还有2个字段
        company:{type:String},
        money:{type:String}
    },
    chat: {
        'chatid':{type:String,require:true},
        'read':{type:Boolean,require:true,default:false},
        'from':{type:String,require:true},
        'to':{type:String,require:true},
        'content':{type:String,require:true},
        'create_time':{type:Number,default:new Date().getTime()}
    }
}

for( let m in models) {
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel:(name) => {
        return mongoose.model(name)
    }
}