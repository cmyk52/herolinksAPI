import express from "express"
import env_options from "./config.js"
import cors from "cors"
import router from "./routes/index.js"

const app = express()

// Middlewares
const PORT = env_options.PORT 
app.use(express.json())
app.use(cors())


// Rutas
app.use(router)



app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})