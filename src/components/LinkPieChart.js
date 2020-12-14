import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import drilldown from "highcharts/modules/drilldown"

drilldown(Highcharts)

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },

  title: {
    text: "Expenditure Distribution",
    align: "center",
    margin: 20,
    x: 10,
    y: 28,
    style: {
      fontFamily: "Segoe UI",
      fontWeight: "600",
      fontSize: "1.0625rem",
      color: "rgba(0, 0, 0, 0.87)",
    },
  },

  tooltip: {
    pointFormat: "<b>{point.percentage:.1f}%</b>",
  },

  accessibility: {
    point: {
      valueSuffix: "*",
    },
  },

  plotOptions: {
    pie: {
      showInLegend: false,
      innerSize: "0%",
      dataLabels: {
        enabled: true,
        distance: 5,
        style: {
          fontsize: 10,
        },
      },
    },
  },

  series: [
    {
      name: "expenditure",
      data: [
        {
          name: "Capital",
          y: 500,
          drilldown: "Capital",
        },
        {
          name: "Administrative",
          y: 2500,
          drilldown: "Administrative",
        },
        {
          name: "Activity",
          y: 1500,
          drilldown: "Activity",
        },
      ],
    },
  ],

  drilldown: {
    series: [
      {
        name: "Capital",
        id: "Capital",
        data: [
          ["Fence construction", 200000],
          ["Coup construction", 135000],
          ["Maize miller purchase", 650000],
        ],
      },
      {
        name: "Administrative",
        id: "Administrative",
        data: [
          ["Accountants", 200000],
          ["Administrators", 135000],
          ["Security", 650000],
          ["Security", 100000],
        ],
      },
      {
        name: "Activity",
        id: "Activity",
        data: [
          ["Transportion", 205000],
          ["Harvesting", 435000],
          ["Spraying", 250000],
        ],
      },
    ],
  },
}

export default function Chart() {
  return (
    <React.Fragment>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </React.Fragment>
  )
}
