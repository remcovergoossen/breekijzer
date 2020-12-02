<template>
  <vs-row vs-justify="left">
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow">
        <!-- <ManualCheckTable></ManualCheckTable> -->
        <ChecklistTodo></ChecklistTodo>
      </vs-card>
    </vs-col>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow">
        <div>
          <vs-tooltip
            text="Manual devices should be checked by hand, these cannot be processed for any reason (winrm issue / etc)."
            position="left"
          >
            <h3 class="card-title">Manual Devices</h3>
          </vs-tooltip>
        </div>
        Q
      </vs-card>
    </vs-col>
    <AppPoolsChecklist></AppPoolsChecklist>
    <ServicesChecklist></ServicesChecklist>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow"> Table? </vs-card>
    </vs-col>
    <vs-col vs-lg="12" vs-xs="12" vs-sm="12">
      <vs-card class="card-no-shadow"> Table? </vs-card>
    </vs-col>
  </vs-row>
</template>
<script>
// //////////////////////////////////////////
// Import Components Here
// //////////////////////////////////////////
import AppPoolsChecklist from '../serviceweekend/AppPoolsChecklist'
import ServicesChecklist from '../serviceweekend/ServicesChecklist'
import ChecklistTodo from '../serviceweekend/ChecklistTodo'
import ManualCheckTable from '../serviceweekend/ManualCheckTable'
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
    AppPoolsChecklist,
    ServicesChecklist,
    ChecklistTodo,
    ManualCheckTable,
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
    manualcheck: [
      {
        id: 1,
        check: 'Controle ditdatzuszo',
        status: 'Success',
        notes: 'Notitie',
        action: 'Knopjehier'
      }
    ],
    editdatatable: false,
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
    }
  }
}
</script>
