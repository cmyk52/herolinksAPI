import express from "express"
import controller_get_user from "../controllers/controller_get_user.js"
const router_get_user = express.Router({ mergeParams: true }) 
// Debemos indicar que los parametros deben ser pasados hacia el router, en caso contrario no se envian al router



router_get_user.get("/", controller_get_user)


export default router_get_user