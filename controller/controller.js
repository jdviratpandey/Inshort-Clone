import newsSchema from "../NewsSchema/homenews.js";


export const getNews=async(req,res)=>{
 try {


    const data = await newsSchema.find();
  res.status(200).json(data);
 } catch (error) {
     res.send(error)
 }
}