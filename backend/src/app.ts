import express from 'express'
import { Request } from "express";
import { general_module_router } from './routes/general_module_router'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors<Request>())
app.use(general_module_router)



export default app