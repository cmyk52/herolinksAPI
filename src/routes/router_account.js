import express from "express"
import {controller_account_patch, controller_account_delete} from "../controllers/controller_account.js"
import middleware_account from "../middlewares/middleware_account.js"
const router_account = express.Router()


router_account.patch("/", middleware_account, controller_account_patch)
router_account.delete("/", middleware_account, controller_account_delete)

export default router_account