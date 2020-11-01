
const notFound=(req,res,next)=>{
    const err= new Error("Page Not Found")
    res.status(404)
    next(err)
}
const mainErrorHandler=(err,req,res,next)=>{
    res.status(res.statusCode===200?500:res.statusCode)
    res.json({message:err.message})
}

export {notFound,mainErrorHandler}