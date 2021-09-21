import newsSchema from "./NewsSchema/homenews.js";
import  {homedata}  from "./Data/homedata.js";

const defaultData = async()=>{
    try {
        await newsSchema.deleteMany({});
        await newsSchema.insertMany(homedata);
    } catch (error) {
        console.log(error)
    }
}

export default defaultData;