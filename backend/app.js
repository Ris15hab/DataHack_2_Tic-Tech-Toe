const express = require('express');
require('dotenv').config();
require('./config')

const app = express()

app.use(express.json())

//importing routes
const lawyerRouter = require('./routes/lawyer')
const userRouter = require('./routes/user')

//setting routes
app.use('/lawyer',lawyerRouter)
app.use('/user',userRouter)

//error handling
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})

const PORT = process.env.PORT || 8000

//setting server
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})