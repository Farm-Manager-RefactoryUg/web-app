import React from "react"
import ReactDOM from "react-dom"
import AddTeleFarmer from "./AddTeleFarmer"

it("Component AddTeleFarmer renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<AddTeleFarmer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
