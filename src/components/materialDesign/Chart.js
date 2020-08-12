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
    text: "Expenditure Distribution Last Planting Season",
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
          return this.key + ": " + this.y + "%";
        },
      },
    },
  },
  series: [
    {
      name: "Share",
      data: [
        { name: "Planting", y: 61.41 },
        { name: "Spraying", y: 11.84 },
        { name: "Weeding", y: 10.85 },
        { name: "Harvesting", y: 4.67 },
        { name: "Transportation", y: 4.18 },
        { name: "Labour", y: 7.05 },
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