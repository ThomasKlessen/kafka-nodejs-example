<template>
  <h1 @click="loadData">Dienstübersicht laden</h1>
</template>

<script>
import request from '../libs/request'

export default {
  name: "ServiceOverview",
  methods: {
    loadData() {
      console.log('Lade Daten')
      request('http://localhost:8080/sales')
          .then(console.log)
    }
  }
}
</script>

