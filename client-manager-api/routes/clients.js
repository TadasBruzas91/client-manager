const express = require("express")
const router = express.Router()
const Client = require("../schemas/clientSchema")

// Get all clients
router.get("/", async (req, res) => {
    const { page, limit } = req.query
    const clients = await Client.paginate({}, { page, limit })
    res.json(clients)
})

// Count users put requirements in body json if body is emty return all users count
router.get("/count", async (req, res) => {
    const count = await Client.find(req.body).count()
    res.json(count)
})

// Get one client
router.get("/:id", async (req, res) => {
    const { id } = req.params
    const client = await Client.findById(id)
    res.json(client)
})

// Add new client
router.post("/", async (req, res) => {
    const client = new Client(req.body)
    const result = await client.save()
    res.json(result)
})

// Edit client
router.post("/:id", async (req, res) => {
    const { id } = req.params
    const client = await Client.findById(id)
    client.set({ ...client, ...req.body })
    const result = await client.save()
    res.json(result)
})

// Delete client
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    const result = await Client.findByIdAndDelete(id)
    res.send(result)
})

module.exports = router