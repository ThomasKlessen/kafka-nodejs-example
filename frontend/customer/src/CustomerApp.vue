<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-toolbar-title>Customer App</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <ServiceOverview/>
    </v-main>
  </v-app>
</template>

<script>
import ServiceOverview from './components/ServiceOverview.vue'

export default {
  name: 'CustomerApp',
  components: {
    ServiceOverview
  }
}
</script>
