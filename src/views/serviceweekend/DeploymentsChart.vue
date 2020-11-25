<template>
  <div id="chart">
    <apexcharts
      type="bar"
      height="350"
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
          data: [13, 26, 8, 80, 99]
        }
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            'ServerPatching : Server 2008',
            'ServerPatching : Server 2012',
            'ServerPatching : Server 2016',
            'ServerPatching : Server 2019',
            'ServerPatching : Pre-SW'
          ]
        }
      }
    }
  }
}
</script>
