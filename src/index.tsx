import React from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"

const RootElement = document.getElementById("root")

if (!RootElement) {
    const Element = document.createElement("h3")
    Element.innerHTML = "<h1>Что-то пошло не так. Мы очень сожалеем. Вернитесь позже, спасибо!</h1>"
    document.body.append(Element)
} else {
    const root = createRoot(RootElement)
    root.render(
        // <React.StrictMode>
        <App/>
        // </React.StrictMode>
    )
}





