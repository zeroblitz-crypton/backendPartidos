require("./conection")
const express=require("express")
const partidoSchema=require("./models/partido")
const cors=require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.post("/partido",(req,res)=>{
    const partido= new partidoSchema({
        nombrePartido:req.body.nombrePartido,
        cuotaLocal:req.body.cuotaLocal,
        cuotaVisita:req.body.cuotaVisita,
        cuotaEmpate:req.body.cuotaEmpate,
        marcadorLocal:req.body.marcadorLocal,
        marcadorVisita:req.body.marcadorVisita,
    })
    partido.save()
    res.json(partido)
})

app.get("/partido",async(req,res)=>{
    const partido= await partidoSchema.find()
    res.json(partido)
})

app.delete("/partido/:id",async(req,res)=>{
    const partido = await partidoSchema.findOneAndRemove({_id: req.params.id})
    res.json({msg : "se elimino partido con exito"})
})

app.get("/partido/:id",async(req,res)=>{
    const partido = await partidoSchema.findById({_id:req.params.id})
    res.json(partido)
})


app.listen(3000,()=>{
    console.log("server  online");
})