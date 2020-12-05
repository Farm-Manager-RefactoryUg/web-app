import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Card from "@material-ui/core/Card"
import ProjectDialog from "./ProjectDialog"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Segoe UI",
    backgroundColor: "rgb(247, 249, 252)",
  },
  card: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 2.5, 2, 2.5),
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "0.8125rem",
    //fontWeight: 600,
    fontFamily: "Segoe UI",
    color: "rgba(0, 0, 0, 0.87)",
    textTransform: "uppercase",
  },
  text: {
    fontSize: "0.8125rem",
    fontFamily: "Segoe UI",
    color: "rgba(0, 0, 0, 0.87)",
  },
  headerText: {
    fontSize: "1.0625rem",
    fontWeight: "600",
    fontFamily: "Segoe UI",
    color: "rgba(0, 0, 0, 0.87)",
  },
}))

export default function Project() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography className={classes.headerText} component="h1">
          Project Details
        </Typography>

        <ProjectDialog />

        <Typography className={classes.label}>Title</Typography>
        <Typography className={classes.text}>Biyinzika Mukono II</Typography>
        <br />
        <Typography className={classes.label}>Description</Typography>
        <Typography className={classes.text}>
          Its a middle-sized farm which comprises of both livestock and crops.
          It has got buildings where different equipment such as tractors and
          supplies are stored.
        </Typography>
        <br />
        <Typography className={classes.label}>Status</Typography>
        <Typography className={classes.text}>In progress</Typography>
      </Card>
    </div>
  )
}
