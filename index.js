const express = require('express');
const { connection } = require("./db");
const cors = require('cors');
const { userRouter } = require('./routes/User.routes');
const { auth } = require('./middleware/auth.middleware');
const { employeeRouter } = require('./routes/Employee.routes');
const app = express();
require("dotenv").config()


app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Basic API endpoint")
})

app.use("/", userRouter)

app.use(auth)

app.use("/employees", employeeRouter)



app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("Connected to the DB server")

    } catch (error) {
        console.log(error)
        console.log("Cann't connected to the DB server")
    }

    console.log(`Server is running at port ${process.env.PORT}`)
})