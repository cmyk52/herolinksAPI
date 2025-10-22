import express from "express"
import {controller_profile_patch,  controller_profile_delete, controller_profile_get} from "../controllers/controller_profile.js"
import {middleware_profile_patch, middleware_profile_delete, middleware_profile_get} from "../middlewares/middleware_profile.js"
import {auth_success} from "../middlewares/middleware_jwt.js"

const router_profile = express.Router()

router_profile.get("/", auth_success, middleware_profile_get, controller_profile_get)
router_profile.patch("/", middleware_profile_patch, controller_profile_patch)
router_profile.delete("/", middleware_profile_delete, controller_profile_delete)

export default router_profile