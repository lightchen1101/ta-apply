// npm package: chart.js
// github link: https://github.com/chartjs/Chart.js

$(function() {
  'use strict';


  var colors = {
    primary        : "#6571ff",
    secondary      : "#7987a1",
    success        : "#05a34a",
    info           : "#66d1d1",
    warning        : "#fbbc06",
    danger         : "#ff3366",
    light          : "#e9ecef",
    dark           : "#060c17",
    muted          : "#7987a1",
    gridBorder     : "rgba(77, 138, 240, .15)",
    bodyColor      : "#000",
    cardBg         : "#fff"
  }

  var fontFamily = "'Noto Sans TC','Roboto', Helvetica, sans-serif"




  // Bar chart
  if($('#chartjsBar').length) {
    new Chart($("#chartjsBar"), {
      type: 'bar',
      data: {
        labels: [ "C1文學院", "C2理學院", "C3社科學院", "C4醫學院", "C7管理學院", "CB生科學院", "CO其他", "CGRE共同教育中心"],
        datasets: [
          {
            label: "Population",
            backgroundColor: [colors.primary, colors.danger, colors.warning, colors.success, colors.info, colors.light, colors.dark, colors.muted],
            data: [155564,760946,281633,56305,72600,72600,70470,82645],
          }
        ]
      },
      options: {
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: true,
              color: colors.gridBorder,
              borderColor: colors.gridBorder,
            },
            ticks: {
              color: colors.bodyColor,
              font: {
                size: 12
              }
            }
          },
          y: {
            grid: {
              display: true,
              color: colors.gridBorder,
              borderColor: colors.gridBorder,
            },
            ticks: {
              color: colors.bodyColor,
              font: {
                size: 12
              }
            }
          }
        }
      }
    });
  }



  // Doughnut Chart
  if($('#chartjsDoughnut').length) {
    new Chart($('#chartjsDoughnut'), {
      type: 'doughnut',
      data: {
        labels: [ "C1文學院", "C2理學院", "C3社科學院", "C4醫學院", "C7管理學院", "CB生科學院", "CO其他", "CGRE共同教育中心"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: [colors.primary, colors.danger, colors.warning, colors.success, colors.info, colors.light, colors.dark, colors.muted],
            borderColor: colors.cardBg,
            data: [155564,760946,281633,56305,72600,72600,70470,82645],
          }
        ]
      },
      options: {
        aspectRatio: 2,
        plugins: {
          legend: { 
            display: true,
            labels: {
              color: colors.bodyColor,
              font: {
                size: '13px',
                family: fontFamily
              }
            }
          },
        }
      }
    });
  }



});