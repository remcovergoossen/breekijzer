<template lang="html">
  <div>
    <vs-table
      v-model="selected"
      search
      multiple
      :data="devices"
      @selected="handleSelected"
      @dblSelection="doubleSelection"
    >
      <template slot="header">
        <h3>Server Compliancy</h3>
        <p class="card-subtitle">
          Filter: <code>All / InProgress / Unknown / Error</code>
        </p>
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
    devices: []
  }),
  created() {
    fetch('http://localhost:3000/devices')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        for (let prop in data) {
          this.devices.push({
            id: data[prop].deploymentid,
            device: data[prop].device,
            sccmstate: data[prop].sccmstate,
            deployment: data[prop].deployment,
            localstate: data[prop].localstate,
            error: data[prop].Error,
            name: data[prop].Name
          })
        }
      })
    console.log(this.devices)
  },
  methods: {
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
    }
  }
}
</script>
