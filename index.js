require("./conection")
const express=require("express")
const celularSchema=require("./models/celulares")
const cors=require("cors")
const app = express()
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    
    next();
})
app.use(express.json())
app.use(cors())



app.post("/registroCelular", async(req,res)=>{
    const celular= new celularSchema({
        nombreCelular:req.body.nombreCelular,
        camaraPosterior:req.body.camaraPosterior,  
        camaraFrontal:req.body.camaraFrontal,
        sizePantalla:req.body.sizePantalla,
        sizeRam:req.body.sizeRam,
        sizeStorage:req.body.sizeStorage,
        sizeBatery:req.body.sizeBatery,
        nombreProcesador:req.body.nombreProcesador,
        imagen:req.body.imagen

    })
    await celular.save()
    res.json(celular)
})

app.get("/registroCelular",async(req,res)=>{
    const celular= await celularSchema.find()
    res.json(celular)
})

app.delete("/registroCelular/:id",async(req,res)=>{
    const celular = await celularSchema.findOneAndRemove({_id: req.params.id})
    res.json({msg : "se elimino el registro con exito"})
})

app.get("/registroCelular/:id",async(req,res)=>{
    const celular = await celularSchema.findById({_id:req.params.id})
    res.json(celular)
})

app.listen(3000,()=>{
    console.log("server  online");
})