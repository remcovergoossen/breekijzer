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
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz'
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info'
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org'
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io'
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com'
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net'
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
