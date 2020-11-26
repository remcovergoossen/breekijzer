<template lang="html">
  <div>
    <vs-table
      v-model="selected"
      search
      multiple
      :data="users"
      @selected="handleSelected"
      @dblSelection="doubleSelection"
    >
      <template slot="header">
        <h3>Server Compliancy</h3>
      </template>
      <template slot="thead">
        <vs-th sort-key="device"> Device </vs-th>
        <vs-th> Deployment </vs-th>
        <vs-th> SCCMState </vs-th>
        <vs-th> LocalState </vs-th>
        <vs-th> ID </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr v-for="(tr, indextr) in data" :key="indextr" :data="tr">
          <vs-td :data="data[indextr].device">
            {{ data[indextr].device }}
          </vs-td>

          <vs-td :data="data[indextr].deployment">
            {{ data[indextr].deployment }}
          </vs-td>

          <vs-td :data="data[indextr].sccm">
            {{ data[indextr].sccm }}
          </vs-td>
          <vs-td :data="data[indextr].local">
            {{ data[indextr].local }}
          </vs-td>

          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>
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
    users: [
      {
        id: 1,
        device: 'S0MDWT0001G',
        deployment: 'ServerPatching : 2012',
        sccm: 'InProgress',
        local: 'Installing'
      },
      {
        id: 2,
        device: 'S0MBEH0019G',
        deployment: 'ServerPatching : 2012',
        sccm: 'InProgress',
        local: 'PendingSoftReboot'
      },
      {
        id: 3,
        device: 'S0MBEH0021G',
        deployment: 'ServerPatching : 2012',
        sccm: 'InProgress',
        local: 'Downloading'
      }
    ]
  }),
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
