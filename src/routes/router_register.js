import express from "express"
import controller_register from "../controllers/controller_register.js"
const router_register = express.Router()

router_register.post("/", controller_register)

export default router_register