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
          return this.key + ": " + this.y + "/=";
        },
      },
    },
  },
  series: [
    {
      name: "Share",
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
