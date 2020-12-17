<template>
  <vs-row vs-justify="left">
    <vs-col vs-lg="8" vs-xs="8" vs-sm="8">
      <vs-card class="card-no-shadow">
        <div>
          <h3 class="card-title"></h3>
          <h5 class="card-subtitle font-weight-normal text-muted"></h5>
        </div>
        <DeploymentsChart ref="deploymentsChart"></DeploymentsChart>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow">
        <div>
          <DeploymentsTable></DeploymentsTable>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
import DeploymentsChart from '../serviceweekend/DeploymentsChart'
import DeploymentsTable from '../serviceweekend/DeploymentsTable'

export default {
  components: {
    DeploymentsChart,
    DeploymentsTable
  },
  data() {
    return {
      quote: 'single'
    }
  }
}
</script>
