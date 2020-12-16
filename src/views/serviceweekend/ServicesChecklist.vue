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
          <vs-th sort-key="name"> Name </vs-th>
          <vs-th sort-key="Device"> Device </vs-th>
          <vs-th sort-key="state"> Status </vs-th>
          <!-- <vs-th sort-key="id"> Action </vs-th> -->
          <vs-th sort-key="action"> Action </vs-th>
        </template>
        <template slot-scope="{ data }">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].name"> {{tr.name}} </vs-td>
            <vs-td :data="data[indextr].device"> {{tr.device}} </vs-td>
            <vs-td :data="data[indextr].state"> {{tr.state}} </vs-td>
            <vs-td><vs-button
                color="primary"
                type="border"
                icon="laptop"
                :href="{url: tr.url}"
                ></vs-button>
              </vs-td>
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
    serviceschecklist: [],
    vmrcs: [],
    devices: [],

    title: 'BasicTable',
    basictable: false,
    defaulttable: false,

    stripedtable: false,
    statetable: false
  }),
  created() {
    fetch('http://localhost:3000/services')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.serviceschecklist = []
        for(let i in data){
          this.serviceschecklist.push( {
              name: data[i].Name,
              device: data[i].Device,
              state: data[i].State,
              url: ""
          })
        }
        
        fetch('http://localhost:3000/vmrc')
        .then((response) => response.json())
        .then((data) => {
          this.vmrcs = data
          for(let i in this.serviceschecklist){
            for(let j in data)
            {
              if(data[j]['device'] == this.serviceschecklist[i]['device']){
                this.serviceschecklist[i]['url'] = data[j]['url']
                break
              }
            }
          }
        })

      })
  }
}
</script>
