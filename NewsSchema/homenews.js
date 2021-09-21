import  mongoose from "mongoose";

const news = mongoose.Schema({
    img:{
        type:String,
        required:true
    },
    heading:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    newscontent:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }

});

const newsSchema = mongoose.model('homeNews',news);

export default newsSchema;