const mongoose=require("mongoose")
const uri='mongodb://0.0.0.0:27017/registroAlumno'

mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection
db.on('open',_=>{
    console.log("DB conected");
})