<template>
  <div class="example">
    Compliancy per Set
    <apexcharts
      width="750"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',

  components: {
    apexcharts: VueApexCharts
  },
  data: function () {
    return {
      series: [
        {
          name: 'Success',
          data: [44, 55, 57, 56]
        },
        {
          name: 'InProgress',
          data: [76, 85, 155, 98]
        },
        {
          name: 'Error',
          data: [35, 41, 36, 26]
        },
        {
          name: 'Unknown',
          data: [1, 1, 2, 0]
        }
      ],

      chartOptions: {
        colors: ['#22bb33', '#5bc0de', '#bb2124', '#aaaaaa'],
        chart: {
          events: {
            dataPointSelection: function (event, chartContext, config) {
              console.log(config.seriesIndex)
              console.log(config.dataPointIndex)
            }
          },
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['ServerPatching : 2008R2', '2012', '2016', '2019']
        },
        yaxis: {
          title: {
            text: '# Devices'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return +val + ' Devices'
            }
          }
        }
      }
    }
  },
  mounted() {
    console.log(this.series)
  }
}
</script>
