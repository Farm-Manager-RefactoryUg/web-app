import React from "react"
import ReactDOM from "react-dom"
import LinkPieChart from "./LinkPieChart"

it("Component LinkPieChart renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<LinkPieChart />, div)
  ReactDOM.unmountComponentAtNode(div)
})
