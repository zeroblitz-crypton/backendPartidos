const mongoose=require("mongoose")
const uri='mongodb://127.0.0.1:27017/partidos'

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection
db.on('open',_=>{
    console.log("DB conected");
})