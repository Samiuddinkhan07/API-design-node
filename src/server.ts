import express  from "express"

const app = express();


const PORT = process.env.PORT || 3001;

app.get("/",(req,res) =>{
    console.log("express server");

    res.status(200).json({message:"Welcome to the express server"})
})


export default app