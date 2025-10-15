import express from "express"
import {controller_profile_patch,  controller_profile_delete} from "../controllers/controller_profile.js"
import {middleware_profile_patch, middleware_profile_delete} from "../middlewares/middleware_profile.js"

const router_profile = express.Router()

router_profile.patch("/", middleware_profile_patch, controller_profile_patch)
router_profile.delete("/", middleware_profile_delete, controller_profile_delete)

export default router_profile