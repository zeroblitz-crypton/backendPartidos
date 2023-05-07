const {Schema,model}=require("mongoose")
const fichaAlumnoSchema= new Schema({
    apellidos:String,
    nombres:String,
    sexo:String,
    fechaNacimiento:Date,
    edad:Number,
    estadoCivil:String,
    documentoIdentidad:String,
    gradoInstruccion:String,
    tipoEstudio:String,
    institucionProcedencia:String,
    lugarInstitucionProcedencia:String,
    direccionRecidencia:String,
    distritoRecidencia:String,
    departamentoNacimiento:String,
    provinciaNacimiento:String,
    distritoNacimiento:String,
    lugarNacimiento:String,
    telefonoReferencia:String,
    celular:String,
    correo:String,
    //datos academicos
    ciclo:String,
    especialidad:String,
    modulo:String,
    turno:String,
    horario:String,
    duracion:String


})

module.exports=model("fichaAlumnoSchema",fichaAlumnoSchema)