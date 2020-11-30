/* eslint-disable array-callback-return*/
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";
import API from "../api"

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
    type: "line",
  },

  title: {
    text: "Sales Distribution",
    align: "left",
    marginLeft: 20,
    x: 10,
    y: 28,
    style: {
      fontFamily: "Segoe UI",
      fontWeight: "600",
      fontSize: "1.0625rem",
      color: "rgba(0, 0, 0, 0.87)"
    },
  },

  credits: {
    enabled: false,
  },
  legend: {
    align: "right",
    verticalAlign: "middle",
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      x: 0,
    },
  },

  yAxis: {
    allowDecimals: false,
    title: {
      text: "Number",
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
              text: "Number",
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
      const response = await fetch(API.income);
      const jsondata = await response.json();
      const newArray = [...jsondata]
      newArray.map((item) => {
        var date = item.date;
        var amount = item.amountrecvd;
      
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
      ]

      setGraphOptions(options)
    }

    fetchData()

  }, [])

  return (
    <React.Fragment>
      <HighchartsReact highcharts={Highcharts} options={graphOptions} />
    </React.Fragment>
  )
}


