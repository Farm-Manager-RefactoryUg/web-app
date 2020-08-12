// @flow

import React, { useState, useEffect } from "react";
import { Pie, Bar } from "react-chartjs-2";
import axios from "axios";

import '../css/index.css'

const ExpenditurePieChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    var empSal = [];
    var empName = [];

    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log(res);

        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empName.push(dataObj.employee_name);
        }

        console.log(empName);
        console.log(empSal);

        setChartData({
          labels: empName,

          datasets: [
            {
              label: "Employee Name",
              data: empSal,
              backgroundColor: [
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
                "rgba(25, 66, 123, 0.6",
                "rgba(54,1 66, 89, 0.6",
                "rgba(75, 87, 12, 0.6",
              ],
              borderWidth: 1,
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
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h3 className='salary-heading'>Salaries Expenditure Graph</h3>
            <div>
              <Pie
                data={chartData}
                options={{
                  responsive: true,
                  title: { text: `Salaries`, display: true },
                  legend: { display: false },
                }}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <Bar />
            </div>
          </div>
        </div>
    </div> <br/>
          

    </>
  );
};

export default ExpenditurePieChart;
