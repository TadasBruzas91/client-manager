import axios from "axios";
import { config } from "../../utils/configLoader";

const apiUrl = `${config.api.url}:${config.api.port}/api/clients`

class Dashboard {
    constructor() {
        // functions
        this.setAllClientsCount = null

        // variables
        this.dataFromDbRequested = false
    }

    setupSetAllClientsCount(func) {
        this.setAllClientsCount = func
    }

    async getAllClientsCount() {
        if (!this.dataFromDbRequested) {
            this.dataFromDbRequested = true
            const { data } = await axios.get(`${apiUrl}/count`)
            this.dataFromDbRequested = false
            if (this.setAllClientsCount) this.setAllClientsCount(data)
        }
    }
}


export const dashboard = new Dashboard()