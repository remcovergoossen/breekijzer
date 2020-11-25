<template>
  <vs-row vs-justify="left">
    <vs-col vs-lg="8" vs-xs="8" vs-sm="8">
      <vs-card class="card-no-shadow">
        <div>
          <h3 class="card-title"></h3>
          <h5 class="card-subtitle font-weight-normal text-muted"></h5>
        </div>
        <CompliancyChart></CompliancyChart>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow">
        <div>
          <CompliancyTable></CompliancyTable>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import CompliancyChart from '../widgets/chart-widgets/compliancy/CompliancyChart'
import CompliancyTable from '../serviceweekend/CompliancyTable.vue'

export default {
  components: {
    CompliancyChart,
    CompliancyTable
  },
  data() {
    return {
      quote: 'single'
    }
  }
}
</script>
