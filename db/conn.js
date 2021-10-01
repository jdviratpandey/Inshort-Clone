import mongoose from "mongoose";

const db=()=>{
 mongoose.connect("mongodb+srv://virat:pandey@cluster0.yqj0l.mongodb.net/home_News?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Database connected succesfully")
}).catch((err)=>{
    console.log(err);
})
}
export default db;
