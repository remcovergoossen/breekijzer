<template>
  <vs-row vs-justify="center">
    <vs-col
      type="flex"
      vs-justify="center"
      vs-align="center"
      vs-lg="12"
      vs-xs="12"
    >
      <vs-card>
        <h3 class="card-title d-flex">
          Deployments
          <vs-button class="ml-auto p-0" type="line" @click="basictable = true">
            <vs-icon icon="code"></vs-icon>
          </vs-button>
        </h3>

        <div class="table-responsive">
          <table class="table v-middle">
            <thead>
              <tr class>
                <th class="border-top-0">Name</th>
                <th class="border-top-0">Starttime</th>
                <th class="border-top-0">Deadline</th>
                <th class="border-top-0">Success Ratio</th>
                <th class="border-top-0">Patches</th>
                <th class="border-top-0">Compliancy %</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="deployment of deployments" :key="deployment.id">
                <td>
                  <div class="d-flex align-items-center">
                    <div class>
                      <h5 class="m-b-0">{{deployment.name}}</h5>
                    </div>
                  </div>
                </td>
                <td>{{deployment.starttime}}</td>
                <td>{{deployment.deadline}}</td>
                <td>
                  <label class="label label-danger">{{deployment.device_success}}/{{deployment.device_total}}</label>
                </td>
                <td>{{deployment.patches}}</td>
                <td>
                  <h5 class="m-b-0">
                    <vs-progress :height="12" :percent="deployment.compliancy" color="danger"
                      >success</vs-progress
                    >
                  </h5>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Code -->

        <!-- Code -->
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
// import axios from 'axios';
function getFullMonthName(numerical_month)
{
  var str_month = ''
  numerical_month = Number(numerical_month);
  switch(numerical_month) {
  case 1:
    str_month = 'January'
    break;
  case 2:
    str_month = 'February'
    break;
  case 3:
    str_month = 'March'
    break;
  case 4:
    str_month = 'April'
    break;
  case 5:
    str_month = 'May'
    break;
  case 6:
    str_month = 'June'
    break;
  case 7:
    str_month = 'July'
    break;
  case 8:
    str_month = 'August'
    break;
  case 9:
    str_month = 'September'
    break;
  case 10:
    str_month = 'October'
    break;
  case 11:
    str_month = 'November'
    break;
  case 12:
    str_month = 'December'
    break;
  default:
    str_month = "invalid month format"
  }
  return str_month;
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
        console.log('deployments', data)//deployment data goes here...
        this.cnt_loop1 = 0
        this.cnt_loop2 = 0
        for (let prop in data) {
          this.deployments.push({
            id: data[prop].id,
            name: data[prop].name,
            starttime: data[prop].starttime.substring(8, 10) + ' ' + getFullMonthName(data[prop].starttime.substring(5, 7)) + ' ' + data[prop].starttime.substring(0, 4) + ' ' + data[prop].starttime.substring(11, 19),
            deadline: data[prop].deadline.substring(8, 10) + ' ' + getFullMonthName(data[prop].deadline.substring(5, 7)) + ' ' + data[prop].deadline.substring(0, 4) + ' ' + data[prop].deadline.substring(11, 19),
            device_total:0,
            device_success:0,
            patches:0,
            compliancy:0
          })
          fetch(
            'http://localhost:3000/devices/?' +
              new URLSearchParams({
                deploymentid: data[prop].id
              })
          )
            .then((response) => response.json())
            .then((data) => {//data for devices
              this.deployments[this.cnt_loop1].device_total = data.length
              var device_success = 0;
              for(let prop in data){
                if(data[prop].status == "Success")
                  this.deployments[this.cnt_loop1].device_success = this.deployments[this.cnt_loop1].device_success + 1
              }
              this.deployments[this.cnt_loop1].compliancy = Math.floor(this.deployments[this.cnt_loop1].device_success * 100 / this.deployments[this.cnt_loop1].device_total)
                console.log('cnt_loop1', this.cnt_loop1)
              fetch(
                'http://localhost:3000/patches/?' +
                new URLSearchParams({
                  deploymentid: this.deployments[this.cnt_loop1].id
                })
              )
              .then((response) => response.json())
              .then((data) => {//data for patches
                console.log('cnt_loop2', this.cnt_loop2)
                console.log('patches',data)
                this.deployments[this.cnt_loop2].patches = data.length
                this.cnt_loop2++
              })
              this.cnt_loop1++;
              
              
              //console.log(`Amount of devices = ${this.devices.length}`)


              // console.log(this.deployments)
            })
        }
      })
  }
}
</script>
