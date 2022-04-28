import axios from "axios";
import { config } from "../../utils/configLoader";

const apiUrl = `${config.api.url}:${config.api.port}/api/clients`

export class Clients {
    constructor() {
        // functions
        this.sendDataToUi = null
        this.navigate = null

        // variables
        this.dataFromDbRequested = false

        // pagination
        this.page = 1
        this.pageSize = 10
    }

    setupDataSenderToUi(func) {
        this.sendDataToUi = func
    }

    setupNavigate(func) {
        this.navigate = func
    }

    async loadDataFromDb() {
        if (!this.dataFromDbRequested && this.sendDataToUi) {
            this.dataFromDbRequested = true
            const { data } = await axios.get(`${apiUrl}?page=${this.page}&limit=${this.pageSize}`)
            this.dataFromDbRequested = false
            // console.log(this.sendDataToUi)
            this.sendDataToUi(data.docs)
        }
    }




}

export const clients = new Clients()