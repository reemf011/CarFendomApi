const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    postID:{
        type:'int',
        required: true
    },
    custID:{
        type:'int',
        required: true
    },
    carID:{
        type:'int',
        required: true
    }

});