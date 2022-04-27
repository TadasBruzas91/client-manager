const express = require("express")
const router = express.Router()

// Get all clients
router.get("/", (req, res) => {
    res.json({ name: "Client" })
})

// Get one client
router.get("/:id", (req, res) => {
    res.json({ id: req.params.id })
})

// Add new client
router.post("/", (req, res) => {
    const client = req.body
    res.json(client)
})

// Edit client
router.post("/:id", (req, res) => {
    const { id } = req.params
    const client = req.body
    res.json({ ...client, id })
})

// Delete client
router.delete("/:id", (req, res) => {
    const { id } = req.params
    res.send(id)
})

module.exports = router