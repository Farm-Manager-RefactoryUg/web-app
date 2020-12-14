import React from "react"
import ReactDOM from "react-dom"
import "./css/index.css"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"
import * as serviceWorker from "./serviceWorker"

// ReactDOM.render(<App/>,document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
