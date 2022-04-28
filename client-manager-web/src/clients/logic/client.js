import axios from "axios";
import { Clients } from "./clients";
import { config } from "../../utils/configLoader";

const apiUrl = `${config.api.url}:${config.api.port}/api/clients`

class Client extends Clients {
    constructor() {
        super()

        // functions
        this.setFormValue = null

        // variables

    }

    setupSetFormValue(func) {
        this.setFormValue = func
    }

    async loadClientFromDb(id) {
        const client = await axios.get(`${apiUrl}/${id}`)
        return client ? client : null
    }

    async addNewClient(client) {
        const { data } = await axios.post(apiUrl, client)
        if (data) this.navigate("/clients")
    }

    async updateClient(id, client) {
        const { data } = await axios.post(`${apiUrl}/${id}`, client)
        if (data) this.navigate("/clients")
    }

    async deleteClient(id, e) {
        e.preventDefault()
        const { data } = await axios.delete(`${apiUrl}/${id}`)
        if (data) this.navigate("/clients")
    }

    handleSubmit(id, client) {
        if (id) this.updateClient(id, client)
        else this.addNewClient(client)
    }

    async setInputFields(id) {
        if (id && !this.dataFromDbRequested) {
            this.dataFromDbRequested = true
            const { data: client } = await this.loadClientFromDb(id)
            if (this.setFormValue && client) {
                this.dataFromDbRequested = false
                for (let key in client) {
                    if (key !== "_id" && key !== "__v")
                        this.setFormValue(key, client[key])
                }
            }
        }
    }
}

export const client = new Client()