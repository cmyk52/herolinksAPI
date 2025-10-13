import express from "express"
import controller_register from "../controllers/controller_register.js"
import middleware_register from "../middlewares/middleware_register.js"
const router_register = express.Router()

router_register.post("/", middleware_register, controller_register)

export default router_register