module.exports.requestLogger = (req,res,next)=>{
    console.log(`[+] Incoming Request ${req.originalUrl}`)
    next()
}