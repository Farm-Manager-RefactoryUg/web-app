import React, {useState, useEffect} from "react";
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
    text: "Sales Distribution",
    align: "left",
    margin: 50,
    x: 10,
    y: 28,
    style: { 
      fontFamily: "Segoe UI", 
      fontWeight: "600", 
      fontSize: "1.0625rem", 
      color: "rgba(0, 0, 0, 0.87)" 
    },
  },

  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
  },

  xAxis: {
    categories: ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
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

  const [data, dataSet] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
     try {
       const [data1, data2] = await Promise.all([
         fetch("https://farmmanager-api.herokuapp.com/api/expenditure/"),
         fetch("https://farmmanager-api.herokuapp.com/api/payroll/"),
       ]);
       console.log(data1.json());      
       console.log(data2.json());

     } catch (err) {
       console.log(err);
     }
    }

    fetchMyAPI();
  }, []);
  return (
    <React.Fragment>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </React.Fragment>
  );
}