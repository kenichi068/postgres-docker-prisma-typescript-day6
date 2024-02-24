import express from "express";

const app = express()

app.use(express.json())

import userRoutes from "./routes/userRoutes"

app.use("/users",userRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

