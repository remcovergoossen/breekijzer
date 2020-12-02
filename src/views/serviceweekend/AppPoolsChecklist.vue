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
          <vs-th sort-key="device"> Device </vs-th>
          <vs-th sort-key="status"> Status </vs-th>
          <!-- <vs-th sort-key="id"> Action </vs-th> -->
          <vs-th sort-key="action"> Action </vs-th>
        </template>
        <template slot-scope="{ data }">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].device"> {{ tr.device }} </vs-td>
            <vs-td :data="data[indextr].status"> {{ tr.status }} </vs-td>
            <vs-td
              ><vs-button
                color="primary"
                type="border"
                icon="search"
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
    apppoolschecklist: [
      {
        id: 1,
        device: 'device1',
        status: 'OK'
      },
      {
        id: 2,
        device: 'device2',
        status: 'Error'
      }
    ],
    devices: [],

    title: 'BasicTable',
    basictable: false,
    defaulttable: false,

    stripedtable: false,
    statetable: false
  })
}
</script>
