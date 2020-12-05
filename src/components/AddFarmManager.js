import React from "react"
import Typography from "@material-ui/core/Typography"
import FarmManagerTable from "./FarmManagerTable"
import Card from "@material-ui/core/Card"
import FormDialog from "./FarmManagerDialog"

export default function AddFarmManager() {
  return (
    <Card style={{ padding: "16px" }}>
      <Typography
        component="h6"
        variant="h5"
        style={{
          fontWeight: "600",
          color: "rgba(0,0,0,0.87)",
          fontSize: "1.0625rem",
          fontFamily: "Segoe UI",
          marginBottom: "20px",
        }}
      >
        Manage Farm Managers
      </Typography>

      <FormDialog />
      <FarmManagerTable />
    </Card>
  )
}
