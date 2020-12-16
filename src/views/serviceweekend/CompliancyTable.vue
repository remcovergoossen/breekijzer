<template lang="html">
  <div>
    <vs-table
      v-model="selected"
      search
      multiple
      :data="filtered_devices"
      @selected="handleSelected"
      @dblSelection="doubleSelection"
    >
      <template slot="header">
        <vs-col vs-lg="4" vs-xs="12" class="mb-4">
          <h3>Server Compliancy</h3>
        </vs-col>
        <vs-col vs-lg="8" vs-xs="12" class="mb-4">
          <code
            v-on:click="filterTableByDropdown('All')"
            v-bind:style="{ cursor: 'pointer' }"
            >All&nbsp;/&nbsp;</code
          >
          <code
            v-on:click="filterTableByDropdown('PendingSoftReboot')"
            v-bind:style="{ cursor: 'pointer' }"
            >PendingSoftReboot&nbsp;/&nbsp;</code
          >
          <code
            v-on:click="filterTableByDropdown(item)"
            v-for="item in filter_list"
            v-bind:style="{ cursor: 'pointer' }"
          >
            <span
              >{{ item }}
              <span v-if="item != filter_list[filter_list.length - 1]"
                >&nbsp;/&nbsp;</span
              >
            </span>
          </code>
        </vs-col>
      </template>

      <template slot="thead">
        <vs-th sort-key="device"> Device </vs-th>
        <vs-th> Info </vs-th>
        <vs-th> SCCMState </vs-th>
        <vs-th> LocalState </vs-th>
        <vs-th> Action </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
          <vs-td :data="data[indextr].device">
            {{ data[indextr].device }}
          </vs-td>

          <vs-td :data="data[indextr].name">
            {{ data[indextr].name }}
          </vs-td>

          <vs-td :data="data[indextr].sccmstate">
            {{ data[indextr].sccmstate }}
          </vs-td>
          <vs-td :data="data[indextr].localstate">
            {{ data[indextr].localstate }}
          </vs-td>

          <!--<vs-td :data="data[indextr].id">
            {{ data[indextr].id }}</vs-td>-->
          <vs-td
            ><vs-button
              color="primary"
              type="border"
              icon="desktop_windows"
              :href="{url: tr.url}"
            ></vs-button
          ></vs-td>
        </vs-tr>
      </template>
    </vs-table>

    <pre>{{ selected }}</pre>
  </div>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    devices: [],
    filtered_devices: [],
    deployments: [],
    filter_list: [],
    checkarray1: ['Luis'],
    selectedsccm: 0,
    selectdlocal: 0,
    sccmstates: [
      { text: 'All', value: 0 },
      { text: 'Unknown', value: 1 },
      { text: 'Inprogress', value: 2 }
    ],
    dataPointIndex: -1,
    seriesIndex: -1,
    vmrcs: []
  }),
  created() {
    //All / InProgress / Unknown / Error
    // fetch('http://localhost:3000/devices')
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((data) => {
    //     this.all_devices = data
    //     this.updateTable(-1, -1)
    //   })
    // console.log('devices', this.devices)
    // console.log('quites', this.$parent)
  },
  methods: {
    filterTableByDropdown(filter_key) {
      console.log('filtering table', filter_key)
      let filtered = []
      this.filtered_devices = []

      if (filter_key === 'All') {
        filtered = this.devices
      } else if (filter_key === 'PendingSoftReboot') {
        filtered = this.devices.filter(function (e) {
          return e.localstate == filter_key
        })
      } else {
        filtered = this.devices.filter(function (e) {
          return e.sccmstate == filter_key
        })
      }
      console.log(filtered)
      for (let i in filtered) {
        for(let k in this.vmrcs){
          if(filtered[i].device == this.vmrcs[k].device){
            this.filtered_devices.push({
              id: filtered[i].deploymentid,
              device: filtered[i].device,
              sccmstate: filtered[i].sccmstate,
              deployment: filtered[i].deployment,
              localstate: filtered[i].localstate,
              error: filtered[i].Error,
              name: filtered[i].Name,
              url: this.vmrcs[k].url
            })
            break
          }
        }

      }
    },
    updateTable(deployments, devices, vmrcs) {
      console.log('updating data inside CompliancyTable')
      this.deployments = deployments
      this.devices = devices
      this.filter_list = []
      this.vmrcs = vmrcs
      this.filterTableByChart() //show all data
      this.updateStatesKeys()
    },
    updateStatesKeys() {
      const devices = this.filtered_devices
      const states = [...new Set(devices.map((devices) => devices.sccmstate))]
      for (let i in states) {
        this.filter_list.push(states[i])
      }
    },
    handleSelected(tr) {
      this.$vs.notify({
        title: `Selected ${tr.username}`,
        text: `Email: ${tr.email}`
      })
    },
    doubleSelection(tr) {
      this.$vs.notify({
        title: `Double Selection ${tr.username}`,
        text: `Email: ${tr.email}`,
        color: 'success'
      })
    },
    filterTableByChart() {//lowest child
      this.filtered_devices = []

      console.log('filtering by ', this.dataPointIndex, this.seriesIndex)
      for (let i in this.deployments) {
        //------------filter data-------------//
        if (this.dataPointIndex >= 0 && i != this.dataPointIndex) continue

        for (let prop in this.devices) {
          if (this.deployments[i].id == this.devices[prop].deploymentid) {
            let will_skip = false
            if (this.seriesIndex >= 0) {
              will_skip = true
              switch (this.devices[prop].sccmstate) {
                case 'Success':
                  if (this.seriesIndex == 0) will_skip = false
                  break
                case 'InProgress':
                  if (this.seriesIndex == 1) will_skip = false
                  break
                case 'Error':
                  if (this.seriesIndex == 2) will_skip = false
                  break
                default:
                  if (this.seriesIndex == 3) will_skip = false
                  break
              }
            }
            if (will_skip) {
              continue
            }
            //-----------filtered data-----------//
            for(let k in this.vmrcs){

              if(this.devices[prop].device == this.vmrcs[k].device){
                this.filtered_devices.push({
                  id: this.devices[prop].deploymentid,
                  device: this.devices[prop].device,
                  sccmstate: this.devices[prop].sccmstate,
                  deployment: this.devices[prop].deployment,
                  localstate: this.devices[prop].localstate,
                  error: this.devices[prop].Error,
                  name: this.devices[prop].Name,
                  url: this.vmrcs[k].url
                })
                break
              }
            }

          }
        }
      }
    },
    setChartFilterKey(dataPointIndex, seriesIndex) {
      this.dataPointIndex = dataPointIndex
      this.seriesIndex = seriesIndex
      console.log(this.dataPointIndex, this.seriesIndex)
      this.filterTableByChart()
    }
  }
}
</script>
