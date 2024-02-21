const {appConfig} = require ('./package.json')
const express = require("express")
const libPath = require('path')
const app=express()

//middlewars
const {requestLogger} = require('./middlewares/requestLogger')

//routers
const {routerAPI} = require('./routers/routerAPI')
const {routerUI} = require('./routers/routerUI')

app.set('view engine', 'pug')

//in case you want to change view directory
//app.set('views', libPath.join(__dirname, '/templates'));

app.use(requestLogger)
//Api Router
app.use("/api",routerAPI)
//Web page
app.use(routerUI)
//Web page


app.listen(appConfig.port,()=>{
    console.log("[+]App is Running")
})



// node js specifire 

// 1)json token - manual generation
// 2)template engine
// 3)path specifier
// 4)Json 
// 5)Api Call on UI
