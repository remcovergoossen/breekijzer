<template>
  <vs-col vs-lg="6" vs-xs="6" vs-sm="6">
    <vs-card class="card-no-shadow">
      <vs-tooltip
        text="Services are automatically restarted during the check, so if any are in this list, there are (serious?) issues."
        position="left"
      >
        <h3 class="card-title">Services</h3>
      </vs-tooltip>
      <p class="card-subtitle">
        Filter: <code>all / problems / problemschecklist</code>
      </p>
      <vs-table search :data="serviceschecklist">
        <template slot="thead">
          <vs-th sort-key="device"> Device </vs-th>
          <vs-th sort-key="username"> Status </vs-th>
          <!-- <vs-th sort-key="id"> Action </vs-th> -->
          <vs-th sort-key="action"> Action </vs-th>
        </template>
        <template slot-scope="{ data }">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].device"> tr.device </vs-td>
            <vs-td :data="data[indextr].status"> tr.status </vs-td>
            <vs-td>X Y O</vs-td>
            <!--<vs-td :data="data[indextr].id"> data[indextr].id </vs-td>-->
          </vs-tr>
        </template>
      </vs-table>
    </vs-card>
  </vs-col>
</template>

<script>
// import axios from 'axios';
function getFullMonthName(numerical_month) {
  var str_month = ''
  numerical_month = Number(numerical_month)
  switch (numerical_month) {
    case 1:
      str_month = 'January'
      break
    case 2:
      str_month = 'February'
      break
    case 3:
      str_month = 'March'
      break
    case 4:
      str_month = 'April'
      break
    case 5:
      str_month = 'May'
      break
    case 6:
      str_month = 'June'
      break
    case 7:
      str_month = 'July'
      break
    case 8:
      str_month = 'August'
      break
    case 9:
      str_month = 'September'
      break
    case 10:
      str_month = 'October'
      break
    case 11:
      str_month = 'November'
      break
    case 12:
      str_month = 'December'
      break
    default:
      str_month = 'invalid month format'
  }
  return str_month
}
export default {
  name: 'basictable',
  data: () => ({
    deployments: [],
    devices: [],

    title: 'BasicTable',
    basictable: false,
    defaulttable: false,

    stripedtable: false,
    statetable: false
  }),
  created() {
    fetch('http://localhost:3000/deployments')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.cnt_loop1 = 0
        this.cnt_loop2 = 0
        for (let prop in data) {
          this.deployments.push({
            id: data[prop].id,
            name: data[prop].name,
            starttime:
              data[prop].starttime.substring(8, 10) +
              ' ' +
              getFullMonthName(data[prop].starttime.substring(5, 7)) +
              ' ' +
              data[prop].starttime.substring(0, 4) +
              ' ' +
              data[prop].starttime.substring(11, 19),
            deadline:
              data[prop].deadline.substring(8, 10) +
              ' ' +
              getFullMonthName(data[prop].deadline.substring(5, 7)) +
              ' ' +
              data[prop].deadline.substring(0, 4) +
              ' ' +
              data[prop].deadline.substring(11, 19),
            device_total: 0,
            device_success: 0,
            patches: 0,
            compliancy: 0
          })
          fetch(
            'http://localhost:3000/devices/?' +
              new URLSearchParams({
                deploymentid: data[prop].id
              })
          )
            .then((response) => response.json())
            .then((data) => {
              //data for devices
              this.deployments[this.cnt_loop1].device_total = data.length
              var device_success = 0
              for (let prop in data) {
                if (data[prop].sccmstate == 'Success')
                  this.deployments[this.cnt_loop1].device_success++
              }
              this.deployments[this.cnt_loop1].compliancy = Math.floor(
                (this.deployments[this.cnt_loop1].device_success * 100) /
                  this.deployments[this.cnt_loop1].device_total
              )
              fetch(
                'http://localhost:3000/patches/?' +
                  new URLSearchParams({
                    deploymentid: this.deployments[this.cnt_loop1].id
                  })
              )
                .then((response) => response.json())
                .then((data) => {
                  //data for patches
                  this.deployments[this.cnt_loop2].patches = data.length
                  this.cnt_loop2++
                })
              this.cnt_loop1++
            })
        }
      })
  }
}
</script>
