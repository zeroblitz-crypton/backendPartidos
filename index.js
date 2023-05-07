require("./conection")
const express=require("express")
const fichaAlumnoSchema=require("./models/fichaAlumno")
const cors=require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.post("/registroAlumno", async(req,res)=>{
    const fichaAlumno= new fichaAlumnoSchema({
        apellidos:req.body.apellidos,
        nombres:req.body.nombres,
        sexo:req.body.sexo,
        fechaNacimiento:req.body.fechaNacimiento,
        edad:req.body.edad,
        estadoCivil:req.body.estadoCivil,
        documentoIdentidad:req.body.documentoIdentidad,
        gradoInstruccion:req.body.gradoInstruccion,
        tipoEstudio:req.body.tipoEstudio,
        institucionProcedencia:req.body.institucionProcedencia,
        lugarInstitucionProcedencia:req.body.lugarInstitucionProcedencia,
        direccionRecidencia:req.body.direccionRecidencia,
        distritoRecidencia:req.body.distritoRecidencia,
        departamentoNacimiento:req.body.departamentoNacimiento,
        provinciaNacimiento:req.body.provinciaNacimiento,
        distritoNacimiento:req.body.distritoNacimiento,
        lugarNacimiento:req.body.lugarNacimiento,
        telefonoReferencia:req.body.telefonoReferencia,
        celular:req.body.celular,
        correo:req.body.correo,
        //datos academicos
        ciclo:req.body.ciclo,
        especialidad:req.body.especialidad,
        modulo:req.body.modulo,
        turno:req.body.turno,
        horario:req.body.horario,
        duracion:req.body.duracion
    })
    await fichaAlumno.save()
    res.json(fichaAlumno)
})

app.get("/registroAlumno",async(req,res)=>{
    const fichaAlumno= await fichaAlumnoSchema.find()
    res.json(fichaAlumno)
})

app.delete("/registroAlumno/:id",async(req,res)=>{
    const partido = await fichaAlumnoSchema.findOneAndRemove({_id: req.params.id})
    res.json({msg : "se elimino partido con exito"})
})

app.get("/registroAlumno/:id",async(req,res)=>{
    const fichaAlumno = await fichaAlumnoSchema.findById({_id:req.params.id})
    res.json(fichaAlumno)
})

app.listen(3000,()=>{
    console.log("server  online");
})