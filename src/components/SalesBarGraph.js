import React, { useEffect, useState } from "react";
// import { useTheme } from "@material-ui/core/styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Navbar from "./Navbar";
import _ from "lodash";

const ops = {
  jan: [],
  feb: [],
  mar: [],
  apr: [],
  may: [],
  jun: [],
  jul: [],
  aug: [],
  sep: [],
  oct: [],
  nov: [],
  dec: [],
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
  const [items, setItems] = useState([]);
  const [graphOptions, setGraphOptions] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://farmmanager-api.herokuapp.com/api/income/"
      );
      const jsondata = await response.json();
      const newArray = [...jsondata];
      console.log(newArray);
      setItems(newArray);

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
    }

    fetchData();
    items.map((item) => {
      var date = item.date;
      var amount = item.amountrecvd;
      console.log(amount);
      if (date.startsWith("9")) {
        ops.sep.push(amount);
      } else {
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      {items.map((item) => (
        <div key={item.id}>
          {/* {() => {
            var date = item.date;
            var amount = item.amountrecvd;
            console.log(amount)
            if (date.startsWith("9")) {
              ops.sep.push(amount);
            }             
          }} */}
          <span>{item.date}</span>
          <span>{item.total}</span>
        </div>
      ))}

      <HighchartsReact highcharts={Highcharts} options={options} />
      <br></br>
    </React.Fragment>
  );
}
