import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const SalesBarGraph = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let empSal = [];

    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);
        for (var i = 0; i < 13; i++) {
          for (const dataObj of res.data.data) {
            empSal.push(parseInt(dataObj.employee_salary));
          }
        }

        setChartData({
          labels: [
            "Jan 2019",
            "Feb 2019",
            "Mar 2019",
            "Apr 2019",
            "May2019",
            "Jun 2019",
            "Jul 2019",
            "Aug 2019",
            "Sep 2019",
            "Oct 2019",
            "Nov 2019",
            "Dec 2019",
           
          ],
          datasets: [
            {
              label: "Sales",
              data: empSal,
              backgroundColor: "rgba(10, 99, 0)",
              borderWidth: 1,
              fill: false,
              color: "black",
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(empSal);
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div
      className="sales-bar-graph col-md-5"
      style={{ width:"50%", marginRight:'0px',display:"inline",float:"left",paddingLeft:"0px", }}
    >
      <h3 style={{margin:"5px"}}>Sales Performance Graph</h3>
      <div>
        <Bar
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Sales Trend - Last 12 months", display: true },
            scales: {
              yAxes: [
                {
                  // ticks: {
                  //   autoSkip: true,
                  //   maxTicksLimit: 10,
                  //   beginAtZero: true,
                  // },
                  gridLines: {
                    display: true,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Amounts(UGX)",
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Months",
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default SalesBarGraph;
