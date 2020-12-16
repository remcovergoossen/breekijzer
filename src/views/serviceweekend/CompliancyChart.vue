<template>
  <div class="example">
    Compliancy per Set
    <apexcharts
      width="750"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series"
      @dataPointSelection="dataPointSelectionHandler"
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
      deployments:[],
      series: [
        {
          name: 'Success',
          data: []
        },
        {
          name: 'InProgress',
          data: []
        },
        {
          name: 'Error',
          data: []
        },
        {
          name: 'Unknown',
          data: []
        }
      ],
      devices: [],
      chartOptions: {
        colors: ['#22bb33', '#5bc0de', '#bb2124', '#aaaaaa'],
        chart: {
          events: {
            dataPointSelection: function (event, chartContext, config) {
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
          categories: ['asdf', 'asdfaf', 'asdfafsd', 'asdfasf', 'asdfasfd']
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
      },
      vmrcs: []
    }
  },
  created(){
        fetch('http://localhost:3000/vmrc')
        .then((response) => response.json())
        .then((data) => {
          this.vmrcs = data
        })

    this.updateAxis()

  },
  mounted() {

  },
  methods: {
    updateAxis(){
      fetch(
        'http://localhost:3000/deployments'
      )
        .then((response) => response.json())
        .then((data) => {
          let categories = []
          data.forEach(element => {
            categories.push( element.name)
          })
          this.chartOptions = {
            xaxis:{
              categories:categories
            }
          }
          this.deployments = data
          this.updateSeries()
        })
    },
    updateSeries(){
      fetch('http://localhost:3000/devices')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          this.devices = data
          let success = []
          let inprogress = []
          let error = []
          let unknown = []
          for (let i in this.deployments){
            let cnt_success = 0
            let cnt_inprogress = 0
            let cnt_error = 0
            let cnt_unknown = 0
            for (let prop in data) {
              if(this.deployments[i].id == data[prop].deploymentid){
                switch (data[prop].sccmstate) {
                  case 'Success':
                    cnt_success++
                    break;
                  case 'InProgress':
                    cnt_inprogress++
                    break;
                  case 'Error':
                    cnt_error++
                    break;
                  default:
                    cnt_unknown++
                    break;
                }
              }
            }
            success.push(cnt_success)
            inprogress.push(cnt_inprogress)
            error.push(cnt_error)
            unknown.push(cnt_unknown)
          }
          this.series = [
            {
              name: 'Success',
              data: success
            },
            {
              name: 'InProgress',
              data:inprogress
            },
            {
              name: 'Error',
              data: error
            },
            {
              name: 'Unknown',
              data: unknown
            }
          ]
          this.$emit("updateDataTable", this.deployments, this.devices, this.vmrcs)

        })

    },
    dataPointSelectionHandler(e, chartContext, config) {
      this.$emit("setCompliancyComponentDetails", config.dataPointIndex, config.seriesIndex)
    }
  }
}
</script>
