import express from "express"
const router = express.Router()

import router_auth from "./router_auth.js"
import router_register from "./router_register.js"
import router_account from "./router_account.js"
import router_get_user from "./router_get_user.js"
import router_profile from "./router_profile.js"
import router_404 from "./router_404.js"

router.use("/auth", router_auth)
router.use("/register", router_register)
router.use("/account", router_account)
router.use("/users/:user", router_get_user)
router.use("/profile", router_profile)
router.use( router_404)

export default router