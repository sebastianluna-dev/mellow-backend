import express from "express"
const app = express()
const PORT = "8080"

import { routerUsers } from "./routes/users.routes.js"

app.use(express.json())
app.use("/users", routerUsers)

app.listen(PORT, () => console.log(`SERVER INITIALIZED IN PORT ${PORT}`))