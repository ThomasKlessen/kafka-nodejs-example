<template>
  <v-container>
    <h1 @click="loadData">Dienstübersicht laden</h1>
    <table>
      <tr
          v-for="sale in sales"
          :key="sale.id"
      >
        <td>{{sale.id}}</td>
        <td>{{sale.total}}</td>
      </tr>
    </table>
  </v-container>
</template>

<script>
import request from '../libs/request'

export default {
  name: "ServiceOverview",
  data () {
    return {
      sales: []
    }
  },
  methods: {
    loadData() {
      request('http://localhost:8080/sales')
          .then(sales => {
            this.sales = sales
          })
    }
  }
}
</script>

