import mongoose from "mongoose";

const db=(url)=>{
 mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Database connected succesfully")
}).catch((err)=>{
    console.log(err);
})
}
export default db;
