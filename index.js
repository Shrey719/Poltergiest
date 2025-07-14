import express from "express";
import { createServer } from "node:http";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { join } from "node:path";
import { hostname } from "node:os";

const __dirname = process.cwd();
const app = express();

const publicPath = join(__dirname, "public");
app.use(express.static(publicPath));


const server = createServer();

app.use("/libcurl/", express.static(libcurlPath));
app.use("/baremux/", express.static(baremuxPath, {
    extensions: ['js'],
    index: 'index.js'
}));

app.use("/epoxy/", express.static(epoxyPath, {
    extensions: ['js'],
    index: 'index.js',
    type: 'application/javascript'
}));

app.get("/baremux/index.js", (req, res) => {
    res.sendFile(join(baremuxPath, "index.js"), { headers: { 'Content-Type': 'application/javascript' } });
});

app.get("/epoxy/index.js", (req, res) => {
    res.sendFile(join(epoxyPath, "index.js"), { headers: { 'Content-Type': 'application/javascript' } });
});

app.get("/libcurl/index.js", (req, res) => {
    res.sendFile(join(libcurlPath, "index.js"), { headers: { 'Content-Type': 'application/javascript' } });
});

app.get('/settings/', (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"))
})
app.get('/about/', (req, res) => {
    res.sendFile(join(__dirname, "public/index.html"))
})

server.on("request", (req, res) => {
    app(req, res);
});

let port = parseInt(process.env.PORT || "8080");

if (isNaN(port)) port = 3001;

server.on("listening", () => {
    const address = server.address();

    console.log("Listening on:");
    console.log(`\thttp://localhost:${address.port}`);
    console.log(`\thttp://${hostname()}:${address.port}`);
    console.log(
        `\thttp://${address.family === "IPv6" ? `[${address.address}]` : address.address
        }:${address.port}`
    );

});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
    console.log("SIGTERM signal received: closing HTTP server");
    server.close();
    process.exit(0);
}

server.listen({
    port,
});