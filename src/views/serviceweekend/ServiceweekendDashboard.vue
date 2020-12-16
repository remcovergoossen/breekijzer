<template>
  <vs-row vs-justify="left">
    <vs-col vs-lg="5" vs-xs="5" vs-sm="5">
      <vs-card class="card-no-shadow">
        <div>
          <h3 class="card-title">Set Compliancy</h3>
        </div>
        <DeploymentsChart ref="deploymentsChart"></DeploymentsChart>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="7" vs-xs="7" vs-sm="7">
      <vs-card class="card-no-shadow">
        <div>
          <h3 class="card-title">Deployment Compliancy</h3>
        </div>
        <CompliancyChart
          @setCompliancyComponentDetails="setFilterkeyForComponent"
          @updateDataTable="updateChildDataTable"
        ></CompliancyChart>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow">
        <DeploymentsTable
          @setDeploymentDetails="setDeploymentDetails"
        ></DeploymentsTable>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow">
        <CompliancyTable ref="componentTable"></CompliancyTable>
      </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
// //////////////////////////////////////////
// Import Components Here
// //////////////////////////////////////////
import RecentNotification from '../widgets/other-widgets/recent-notifications/RecentNotifications'
import DeploymentsChart from '../serviceweekend/DeploymentsChart'
import CompliancyChart from '../serviceweekend/CompliancyChart'
import DeploymentsTable from '../serviceweekend/DeploymentsTable'
import CompliancyTable from '../serviceweekend/CompliancyTable'
import WalletBalance from '../widgets/chart-widgets/wallet-balance/WalletBalance'
import ReferralEarnings from '../widgets/chart-widgets/referral-earnings/ReferralEarnings'
import EstimatedSales from '../widgets/chart-widgets/estimated-sales/EstimatedSales'
import RealTimeVisits from '../widgets/chart-widgets/realtime-visits/RealTimeVisits'
import ActiveUsers from '../widgets/chart-widgets/active-users/ActiveUsers'
import DeviceVisits from '../widgets/chart-widgets/device-visit/DeviceVisit'
import RecentComments from '../dashboards/dashboard-components/recent-comments/RecentComments'
import RecentChats from '../dashboards/dashboard-components/recent-chats/RecentChats'
import CountryVisits from '../dashboards/dashboard-components/country-visit/CountryVisit'
import SellingProduct from '../dashboards/dashboard-components/selling-product/SellingProduct'
import App from 'vue-world-map'

// //////////////////////////////////////////
// Export Here
// //////////////////////////////////////////
export default {
  name: 'AnalyticalDashboard',
  components: {
    RecentNotification,
    DeploymentsChart,
    CompliancyChart,
    WalletBalance,
    ReferralEarnings,
    EstimatedSales,
    RealTimeVisits,
    ActiveUsers,
    DeviceVisits,
    RecentComments,
    RecentChats,
    CountryVisits,
    SellingProduct,
    App,
    DeploymentsTable,
    CompliancyTable
  },
  data: () => ({
    title: 'AnalyticalDashboard',
    // real time visits
    visits1: 0,
    visitsoptions1: [
      { text: 'Monthly', value: 0 },
      { text: 'Daily', value: 1 },
      { text: 'Weekly', value: 2 },
      { text: 'Yearly', value: 3 }
    ],
    // top selling
    selling1: 0,
    sellingoptions1: [
      { text: 'Monthly', value: 0 },
      { text: 'Daily', value: 1 },
      { text: 'Weekly', value: 2 },
      { text: 'Yearly', value: 3 }
    ],
    countryData: {
      US: 100,
      IN: 200
    },

    title: 'Avatar',
    defaultavatar: false,
    sizeavatar: false,
    coloravatar: false,
    badge1: 2,
    badge2: 10,
    badgeavatar: false,
    iconavatar: false
  }),
  methods: {
    increment() {
      this.badge1++
      this.badge2++
    },
    setFilterkeyForComponent(dataPointIndex, seriesIndex) {
      console.log('dataPointIndex', dataPointIndex)
      console.log('seriesIndex', seriesIndex)
      this.$refs.componentTable.setChartFilterKey(dataPointIndex, seriesIndex)
    },
    updateChildDataTable(deployments, devices) {
      this.$refs.componentTable.updateTable(deployments, devices)
    },
    setDeploymentDetails(deployments) {
      this.$refs.deploymentsChart.updateChart(deployments)
    }
  }
}
</script>
