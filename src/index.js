import express from 'express'
import  {Router}  from 'express'
import cors from 'cors'

const api = express()

const routes = Router()

api.use(cors())
api.use(express.json())
// api.use(routes)

api.get("/teste", (req, res) => {
    return res.status(200).json({Mensagem: "Olá, OK!!"})
})

api.listen(3001, function(){
    console.log(" Api Running!")
})

export default api