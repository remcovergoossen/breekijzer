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
              <tr v-for="item in deployments" :key="item.id">
                <td>
                  <div class="d-flex align-items-center">
                    <div class>
                      <h5 class="m-b-0">{{ item.name }}</h5>
                    </div>
                  </div>
                </td>
                <td>8 December 2020 - 12:00</td>
                <td>11 December 2020 - 22:00</td>
                <td>
                  <label class="label label-danger">4/25</label>
                </td>
                <td>2</td>
                <td>
                  <h5 class="m-b-0">
                    <vs-progress :height="12" :percent="5" color="danger"
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
export default {
  name: 'basictable',
  data: () => ({
    deployments: [],
    devices: [],

    title: 'BasicTable',
    basictable: false,
    defaulttable: false,
    users: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info'
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
    ],
    stripedtable: false,
    statetable: false
  }),
  created() {
    fetch('http://localhost:3000/deployments')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        //this.deployments = data

        for (let prop in data) {
          fetch(
            'http://localhost:3000/devices/?' +
              new URLSearchParams({
                deploymentid: prop
              })
          )
            .then((response) => response.json())
            .then((data) => {
              this.devices = data

              //console.log(`Amount of devices = ${this.devices.length}`)

              this.deployments.push({
                id: prop,
                ratio: this.devices.length,
                name: prop[0].name,
                starttime: prop.starttime,
                deadline: prop.deadline
              })
              console.log(this.deployments)
            })
        }
      })
  }
}
</script>
