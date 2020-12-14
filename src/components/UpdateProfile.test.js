import React from "react"
import ReactDOM from "react-dom"
import UpdateProfile from "./UpdateProfile"

it("Component UpdateProfile renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<UpdateProfile />, div)
  ReactDOM.unmountComponentAtNode(div)
})
