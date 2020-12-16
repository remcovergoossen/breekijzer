<template>
  <vs-row vs-justify="left">
    <vs-col vs-lg="8" vs-xs="8" vs-sm="8">
      <vs-card class="card-no-shadow">
        <div>
          <h3 class="card-title"></h3>
          <h5 class="card-subtitle font-weight-normal text-muted"></h5>
        </div>
        <CompliancyChart @setCompliancyComponentDetails="setFilterkeyForComponent" @updateDataTable="updateChildDataTable"></CompliancyChart>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow">
        <div>
          <CompliancyTable ref="componentTable"></CompliancyTable>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import CompliancyChart from '../serviceweekend/CompliancyChart'
import CompliancyTable from '../serviceweekend/CompliancyTable'

export default {
  components: {
    CompliancyChart,
    CompliancyTable
  },
  data() {
    return {
      quote: 'single'
    }
  },
  methods: {
    setFilterkeyForComponent(dataPointIndex, seriesIndex){
      this.$refs.componentTable.setChartFilterKey(dataPointIndex, seriesIndex)
    },
    updateChildDataTable(deployments, devices, vmrcs){

      this.$refs.componentTable.updateTable(deployments, devices, vmrcs)
    }
  }
}
</script>
