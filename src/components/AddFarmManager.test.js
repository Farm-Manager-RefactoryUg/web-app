import React from "react"
import ReactDOM from "react-dom"
import AddFarmManager from "./AddFarmManager"

it("Component AddFarmManager renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<AddFarmManager />, div)
  ReactDOM.unmountComponentAtNode(div)
})
