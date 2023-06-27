const {Schema,model}=require("mongoose")
const celularSchema= new Schema({
    

    nombreCelular:String,
    camaraPosterior:String,  
    camaraFrontal:String,
    sizePantalla:String,
    sizeRam:String,
    sizeStorage:String,
    sizeBatery:String,
    nombreProcesador:String,
    imagen:String


})

module.exports=model("celularSchema",celularSchema)