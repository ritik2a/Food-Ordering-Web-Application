import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://ritikvishnoi:9634818@cluster0.y1zbsmj.mongodb.net/foodorderingsystem').then(()=>console.log("DB Connected"));
}