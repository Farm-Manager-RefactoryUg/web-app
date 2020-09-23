import React from "react";
// import { useTheme } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",

  },

  title: {
    text: "Expenditure Distribution for the Month of August 2020.",
    align: "left",
    margin: 20,
    x: 10,
    y: 28,
    style: { fontFamily: "Segoe UI", fontWeight: "600", fontSize: "1.0625rem", color: "rgba(0, 0, 0, 0.87)" },
  },
  subtitle: {
    // text:(sum()),
    // floating: true,
    // y: 175,
  },
  tooltip: {
    pointFormat: "<b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "*",
    },
  },
  plotOptions: {
    pie: {
      showInLegend: false,
      innerSize: "0%",
      dataLabels: {
        enabled: true,
        distance: 5,

        style: {
          // fontweight: "thin",
          fontsize: 10,
        },
        // formatter: function () {
        //   return this.key + ": " + this.y + "/=";
        // },
      },
    },
  },
  series: [
    {
      // name: "Share",
      data: [
        { name: "Planting", y: 2000 },
        { name: "Spraying", y: 1500 },
        { name: "Weeding", y: 3000 },
        { name: "Harvesting", y: 1000 },
        { name: "Transportation", y: 2500 },
        { name: "Labour", y: 3000 },
      ],
    },
  ],
};



export default function Chart() {


  //   console.log(this.options.yData)

  return (
    <React.Fragment>

      <HighchartsReact highcharts={Highcharts} options={options} />

    </React.Fragment>
  );
}
