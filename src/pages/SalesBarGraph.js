import React, { useEffect, useState } from "react";
// import { useTheme } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Navbar from "./Navbar";
import _ from "lodash";

const ops = {
  jan: [0],
  feb: [0],
  mar: [0],
  apr: [0],
  may: [0],
  jun: [0],
  jul: [0],
  aug: [0],
  sep: [0],
  oct: [0],
  nov: [0],
  dec: [0],
};

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
  const [graphOptions, setGraphOptions] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://farmmanager-api.herokuapp.com/api/income/"
      );
      const jsondata = await response.json();
      const newArray = [...jsondata];
      console.log(newArray);
      // setItems(newArray);

      newArray.map((item) => {
        var date = item.date;
        var amount = item.amountrecvd;
        console.log(amount);
        if (date.startsWith("1")) {
          ops.jan.push(amount);
        }if (date.startsWith("2")) {
          ops.feb.push(amount);
        } if (date.startsWith("3")) {
          ops.mar.push(amount);
        } if (date.startsWith("4")) {
          ops.apr.push(amount);
        } if (date.startsWith("5")) {
          ops.may.push(amount);
        } if (date.startsWith("6")) {
          ops.jun.push(amount);
        } if (date.startsWith("7")) {
          ops.jul.push(amount);
        } if (date.startsWith("8")) {
          ops.aug.push(amount);
        } if (date.startsWith("9")) {
          ops.sep.push(amount);
        } if (date.startsWith("10")) {
          ops.oct.push(amount);
        } if (date.startsWith("11")) {
          ops.nov.push(amount);
        } else {
          ops.dec.push(amount)
        }
       
      });

      options.series[0].data = [
        _.sum(ops.jan),
        _.sum(ops.feb),
        _.sum(ops.mar),
        _.sum(ops.apr),
        _.sum(ops.may),
        _.sum(ops.jun),
        _.sum(ops.jul),
        _.sum(ops.aug),
        _.sum(ops.sep),
        _.sum(ops.oct),
        _.sum(ops.nov),
        _.sum(ops.dec),
      ];
      setGraphOptions(options)
      console.log(options)
    }
    fetchData();   
  }, []);

   

  return (
    <React.Fragment>
      <Navbar />
      <HighchartsReact highcharts={Highcharts} options={graphOptions} />
      <br></br>
    </React.Fragment>
  );
}

