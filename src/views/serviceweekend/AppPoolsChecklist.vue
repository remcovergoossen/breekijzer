<template>
  <vs-col vs-lg="6" vs-xs="6" vs-sm="6">
    <vs-card class="card-no-shadow">
      <vs-tooltip
        text="Application pools are automatically restarted during the check, so if any are in this list, there are (serious?) issues."
        position="left"
      >
        <h3 class="card-title d-flex">
          Application Pools
          <vs-button
            class="ml-auto p-0"
            @click="defaultcards = true"
            type="line"
          >
            <vs-icon icon="sort"></vs-icon>
          </vs-button>
        </h3>
      </vs-tooltip>
      <p class="card-subtitle">
        Filter: <code>all / problems / problemschecklist</code>
      </p>
      <vs-table search :data="apppoolschecklist">
        <template slot="thead">
          <vs-th sort-key="name"> Name </vs-th>
          <vs-th sort-key="device"> Device </vs-th>
          <vs-th sort-key="status"> Status </vs-th>
          <!-- <vs-th sort-key="id"> Action </vs-th> -->
          <vs-th sort-key="action"> Action </vs-th>
        </template>
        <template slot-scope="{ data }">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].name"> {{ tr.name }} </vs-td>
            <vs-td :data="data[indextr].device"> {{ tr.device }} </vs-td>
            <vs-td :data="data[indextr].state"> {{ tr.state }} </vs-td>
            <vs-td
              ><vs-button
                color="primary"
                type="border"
                icon="laptop"
                :href="{url: tr.url}"
              ></vs-button
            ></vs-td>
            <!--<vs-td :data="data[indextr].id"> data[indextr].id </vs-td>-->
          </vs-tr>
        </template>
      </vs-table>
    </vs-card>
  </vs-col>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'basictable',
  data: () => ({
    apppoolschecklist: [],
    devices: [],

    title: 'BasicTable',
    basictable: false,
    defaulttable: false,

    stripedtable: false,
    statetable: false
  }),
  created() {
    fetch('http://localhost:3000/pools')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.apppoolschecklist = []
        for(let i in data){
          this.apppoolschecklist.push({
              name: data[i].name,
              device: data[i].Device,
              state: data[i].state,
              url: ""
          })
        }
        fetch('http://localhost:3000/vmrc')
        .then((response) => response.json())
        .then((data) => {
          this.vmrcs = data
          for(let i in this.apppoolschecklist){
            for(let j in data)
            {
              if(data[j]['device'] == this.apppoolschecklist[i]['device']){
                this.apppoolschecklist[i]['url'] = data[j]['url']
                break
              }
            }
          }
        })

      })
  }
}
</script>
