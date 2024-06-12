import express  from "express"
import router from './router'
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencode({extended:true}))


const PORT = process.env.PORT || 3001;

app.get("/",(req,res) =>{
    console.log("express server");

    res.status(200).json({message:"Welcome to the express server"})
})

app.use("/api",router)


export default app