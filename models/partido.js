const {Schema,model}=require("mongoose")
const partidoSchema= new Schema({
    nombrePartido:String,
    cuotaLocal:Number,
    cuotaVisita:Number,
    cuotaEmpate:Number,
    marcadorLocal:Number,
    marcadorVisita:Number,
    Fecha:{
        type:Date,
        default:Date.now()
    }
})

module.exports=model("partidoSchema",partidoSchema)