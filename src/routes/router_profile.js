import express from "express"
import {controller_profile, controller_profile_delete} from "../controllers/controller_profile.js"

const router_profile = express.Router()

router_profile.patch("/", controller_profile)
router_profile.delete("/", controller_profile_delete)

export default router_profile