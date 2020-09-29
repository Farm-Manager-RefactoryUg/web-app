import React, {useEffect,useState} from "react";
// import { useTheme } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Navbar from "./Navbar";

const options = {
  chart: {
    type: "column",
  },

  title: {
    text: "Sales Distribution",
  },
  credits: {
    enabled: false,
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
    categories: [
      "Jan 2020",
      "Feb2020",
      "Mar2020",
      "Apr2020",
      "May2020",
      "Jun2020",
      "Jul2020",
      "Aug2020",
      "Sep2020",
      "Oct2020",
      "Nov2020",
      "Dec2020",
    ],
    labels: {
      x: 0,
    },
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: "Amount(UGX)",
    },
  },

  series: [
    {
      name: "Sales",
      data: [
        670000,
        2000000,
        3600000,
        150000,
        400000,
        320000,
        1000000,
        1200000,
        700000,
        550000,
        1300000,
        900000,
      ],
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
              text: "Amount",
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

export default function SalesBarGraph() {
  const [data, dataSet] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      try {
        const [data1, data2] = await Promise.all([
          fetch("https://farmmanager-api.herokuapp.com/api/expenditure/"),
          fetch("https://farmmanager-api.herokuapp.com/api/payroll/"),
        ]);
        console.log(data1, data2);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMyAPI();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <br></br>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <br></br>
    </React.Fragment>
  );
}
