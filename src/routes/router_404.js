import express from "express"
const router_404 = express.Router()


router_404.use((req, res) => {
    res.status(404).json({
        message: "Route not found" })
})

export default router_404