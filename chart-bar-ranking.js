$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://sga.unemi.edu.ec/api?a=apirankingautorespublicacion",
        data: {},
        success: function (data) {
            nombres=[]
            valores=[]
            data.forEach(element => {
                nombre = element.autor
                valor= element.totalarticulos
                nombres.push(nombre);
                valores.push(valor);
            });
            crearGraficoRanking(nombres,valores)
        }
    });
});

function crearGraficoRanking(nombres, valores) {
    var ctx = document.getElementById("myResearchRanking");
    var myLineChart = new Chart(ctx, {
        type: 'bar',
        data:{
            labels: nombres,
            datasets: [{
              label: "Total de articulos",
              data: valores,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1
            }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          legend: {
            display: false
          }
        },
    });
}