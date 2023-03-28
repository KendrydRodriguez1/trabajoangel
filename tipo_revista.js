$(document).ready(function (){
  $.ajax({
    type:"GET",
    url:"https://sga.unemi.edu.ec/api?a=apitotalareapublicacion",
    success:function (datos){

      areas=[]
      totales=[]
      for( e in datos) {

        areas.push(datos[e]["area"])
        totales.push(datos[e]["totalarticulos"])


        // tipo = datos[e]["area"]
        // revista = datos[e]["totalarticulos"]
        //  linea = "<tr> <td>"+codigo+"</td> <td>"+nombre+"</td> </tr>"
        // $(linea).appendTo("#dataTable tbody")
        //tipo = Object.keys(datos)
        //revista = Object.values(datos)
      }
      graficando_revistas(areas, totales)

    }


  })
})

function graficando_revistas(areas,totales){
    var ctx = document.getElementById("trends");
var myBarChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: areas,
    datasets: [{
      label: "Revenue",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: totales,
    }],
  },
  options: {
    maintainAspectRatio: false,
      layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0,
         indexAxis: 'y',
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: true,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 31,
          padding: 10,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return (value);
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + (tooltipItem.yLabel);
        }
      }
    },
  }
});
}