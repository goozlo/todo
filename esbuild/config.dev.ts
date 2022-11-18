import Esbuild from "esbuild"
import express from "express"
import path from "path"
import { config } from "./config.prod"
import { EventEmitter } from "events"

const PORT = Number(process.env.PORT) || 3000

const app = express()
const emitter = new EventEmitter()

const pathToDist = path.resolve(__dirname, "..", "dist")
app.use(express.static(pathToDist))

app.get("/subscribe", (req, res) => {
    const headers = {
        "Content-Type": "text/event-stream",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache"
    }
    res.writeHead(200, headers)
    res.write("")

    emitter.on("refresh", () => {
        res.write("data: message \n\n")
    })
})

function sendMessage() {
    emitter.emit("refresh", "123123")
}

app.listen(PORT, () => console.log("Server started on http://localhost:" + PORT))

Esbuild.build({
    ...config,
    watch: {
        onRebuild(error) {
            if (error) {
                console.log(error)
            } else {
                console.log("build...")
                sendMessage()
            }
        }
    }
}).catch((error) => {
    console.log(error.message)
})
