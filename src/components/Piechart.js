import React, { useEffect, useState } from "react"
import axios from "axios"
// import { useTheme } from "@material-ui/core/styles";
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

export default function PieChart() {
  const [items, setItems] = useState("")
  useEffect(() => {
    axios
      .get("https://farmmanager-api.herokuapp.com/api/expenditure/")
      .then((response) => {
        setItems(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
    },

    title: {
      text: "Expenditure Distribution for Last Season",
      style: {
        fontFamily: "Segoe UI",
        fontWeight: "600",
        fontSize: "1.0625rem",
        color: "green",
      },
    },
    subtitle: {
      // text:(sum()),
      floating: true,
      y: 175,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
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
    // items && items.map((item) => item.product)
    series: [
      {
        name: "Share",
        data: [
          //  items && items.map((item) => item.product),

          { name: items.product, y: 3000 },
          { name: "Spraying", y: 1500 },
          { name: "Weeding", y: 3000 },
          { name: "Harvesting", y: 1000 },
          { name: "Transportation", y: 2500 },
          { name: "Labour", y: 3000 },
        ],
      },
    ],
  }
  //   console.log(this.options.yData)

  return (
    <React.Fragment>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </React.Fragment>
  )
}
