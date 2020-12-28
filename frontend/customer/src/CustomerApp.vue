<template>
  <div id="app">
    <ServiceOverview/>
  </div>
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
