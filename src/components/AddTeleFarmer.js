import React from "react"
import Typography from "@material-ui/core/Typography"
import TeleFarmerTable from "./TeleFarmerTable"
import Card from "@material-ui/core/Card"
import TeleFarmerDialog from "./TeleFarmerDialog"

export default function AddTeleFarmer() {
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
        Manage Tele-Farmers
      </Typography>

      <TeleFarmerDialog />
      <TeleFarmerTable />
    </Card>
  )
}
