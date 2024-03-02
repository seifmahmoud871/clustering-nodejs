import os from "os"
import cluster from "cluster"
import { dirname } from "path"
import { fileURLToPath } from "url"



const __dirname = dirname(fileURLToPath(import.meta.url))


const cpuCount = os.cpus().length;

console.log(`number of CPUs = ${cpuCount}`);
console.log(`primary id = ${process.pid}`);

cluster.setupPrimary({
    exec: __dirname + '/index.js'
})


for (let i = 0; i < cpuCount; i++) {
    cluster.fork();

}


cluster.on("exit", (Worker, code, signal) => {
    console.log(`worker ${Worker.process.pid} killed`);
    console.log(`start new worker`);
    cluster.fork()
})