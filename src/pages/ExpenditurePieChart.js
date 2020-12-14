import React, { useEffect } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import ProjectAppBar from "../components/ProjectAppBar"
import { makeStyles } from "@material-ui/core/styles"

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },

  title: {
    text: "Expenditure Distribution Last Planting Season",
  },
  subtitle: {
    floating: true,
    y: 175,
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.y:.1f}/=</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "*",
    },
  },
  plotOptions: {
    pie: {
      showInLegend: true,
      innerSize: "50%",
      dataLabels: {
        enabled: true,
        distance: 14,

        style: {
          fontweight: "bold",
          fontsize: 10,
        },
        formatter: function () {
          return this.key + ": " + this.y + "/="
        },
      },
    },
  },
  series: [
    {
      name: "Share",
      data: [
        { name: "Planting", y: 2000 },
        { name: "Spraying", y: 1000 },
        { name: "Weeding", y: 1500 },
        { name: "Harvesting", y: 700 },
        { name: "Transportation", y: 2500 },
        { name: "Labour", y: 1000 },
      ],
    },
  ],
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  spacing: {
    margin: 0,
  },
  title: {
    flexGrow: 1,
  },
  grid: {
    margin: "0px !important",
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    marginTop: "60px",
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    justifyContent: "space-evenly",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 150,
  },
}))

export default function ExpenditurePieChart() {
  useEffect(() => {
    fetch("https://farmmanager-api.herokuapp.com/api/expenditure/")
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <React.Fragment>
        <ProjectAppBar />

        <main className={classes.content}>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </main>
      </React.Fragment>
    </div>
  )
}
