const fs = require('fs')
const express = require('express')

const app = express()

// default url = health check
// /health-check
// 200 is success or no issue
app.get('/', (req, res) => {
    res.status(200).json({
        "status": "Success",
        "message": "Application is running good..."
    })
})

// if url is /tegar
app.get('/tegar', (req, res) => {
    // 200 is success or no issue
    res.status(200).json({
        "message": "Ping Successfully"
    })
}) 

// middleware or handler for url didn't work / access
// make middleware = our own middleware
// 404 for if url doesn't exist, data doesn't exist, or resource doesn't exist
app.use((req, res, next) => {
    res.status(404).json({
        "status": "Failed",
        "message": "API not exist !!"
    })
})

app.listen("3000", () => {
    console.log("Server running on port 3000")
})