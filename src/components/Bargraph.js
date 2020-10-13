import React from "react";
// import { useTheme } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
  },
  credits: {
    enabled: false,
  }, 

  title: {
    text: "Sales Distribution for the Year 2020.",
    align: "left",
    margin: 50,
    x: 10,
    y: 28,
    style: { fontFamily: "Segoe UI", fontWeight: "600", fontSize: "1.0625rem", color: "green" },
  },

  // subtitle: {
  //   text: "Resize the frame or click buttons to change appearance",
  // },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  xAxis: {
    categories: ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    labels: {
      x: 0,
    },
    title: {
      text: "Months",
    }
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: "Shillings",
    },
  },

  series: [
    {
      name: "Sales",
      data: [670000, 2000000, 3600000,150000, 400000, 320000, 1000000, 1200000, 700000, 550000, 1300000,900000],
    },
   
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            align: "center",
            verticalAlign: "bottom",
            layout: "horizontal",
          },
          yAxis: {
            labels: {
              align: "left",
              x: 0,
              y: -5,
            },
            title: {
              text: "Shillings",
            },
          },
          subtitle: {
            text: null,
          },
          credits: {
            enabled: false,
          },
        },
      },
    ],
  },
};

export default function Bargraph() {
  return (
    <React.Fragment>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </React.Fragment>
  );
}
