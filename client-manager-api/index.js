const cluster = require("cluster");
const totalCPUs = require("os").cpus().length;

if (cluster.isMaster) {
    console.log(`Number of CPUs is ${totalCPUs}`);
    console.log(`Master ${process.pid} is running...`);

    // Fork workers.
    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        console.log("Let's fork another worker!");
        cluster.fork();
    });
} else {
    const express = require("express");
    const PORT = 3000;
    const app = express();
    console.log(`Worker ${process.pid} started`);

    app.get("/", (_, res) => {
        const msg = `Server is running on ${totalCPUs} CPUs...`
        res.send(msg)
    })

    app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}...`);
    });
}

