<template>
  <vs-row vs-justify="center">
    <vs-col
      type="flex"
      vs-justify="center"
      vs-align="center"
      vs-lg="12"
      vs-xs="12"
    >
      <!--
        /////////////////
        Edit Data Table
        /////////////////
      -->
      <vs-card>
        <vs-table :data="manualcheck">
          <template slot="thead">
            <vs-th>Check</vs-th>
            <vs-th>Status</vs-th>
            <vs-th>Notes</vs-th>
            <vs-th>Nro2</vs-th>
          </template>

          <template slot-scope="{ data }">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="tr.email">
                {{ tr.email }}
                <template slot="edit">
                  <vs-input
                    v-model="tr.email"
                    class="inputx"
                    placeholder="Email"
                  />
                </template>
              </vs-td>

              <vs-td :data="tr.status">
                {{ tr.status }}
                <template slot="edit">
                  <vs-select label="Status" v-model="tr.status">
                    <vs-select-item
                      :key="index"
                      :value="item"
                      :text="item"
                      v-for="(item, index) in statuses"
                    />
                  </vs-select>
                </template>
              </vs-td>

              <vs-td :data="tr.notes">
                <vs-tooltip :text="tr.notes" position="left"> ? </vs-tooltip>
              </vs-td>

              <vs-td :data="tr.id">
                {{ tr.id }}
                <template slot="edit">
                  <vs-slider :max="20" v-model="tr.id" />
                </template>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-card>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: 'EditableTable',
  data: () => ({
    title: 'EditableTable',
    statuses: ['Complete', 'Incomplete'],
    manualcheck: [
      {
        id: 1,
        notes: 'ADC Replication',
        status: 'Incomplete',
        email: 'ADC Replicatie',
        website: 'hildegard.org'
      },
      {
        id: 2,
        notes: 'Scheduled task s0mbeh0019g tb phoenix',
        status: 'Antonette',
        email: 'Phoenix controle',
        website: 'anastasia.net'
      },
      {
        id: 3,
        notes: 'Topdesk Controles',
        status: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info'
      },
      {
        id: 4,
        notes: 'Patricia Lebsack',
        status: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz'
      },
      {
        id: 5,
        notes: 'Chelsey Dietrich',
        status: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info'
      },
      {
        id: 6,
        notes: 'Mrs. Dennis Schulist',
        status: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        website: 'ola.org'
      },
      {
        id: 7,
        notes: 'Kurtis Weissnat',
        status: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        website: 'elvis.io'
      },
      {
        id: 8,
        notes: 'Nicholas Runolfsdottir V',
        status: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        website: 'jacynthe.com'
      },
      {
        id: 9,
        notes: 'Glenna Reichert',
        status: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        website: 'conrad.com'
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        status: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        website: 'ambrose.net'
      }
    ],
    editdatatable: false
  })
}
</script>
