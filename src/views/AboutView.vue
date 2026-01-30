<template>
  <div class="about">
    <h1>esta es la pagina de about</h1>
    <AboutComponent />
  </div>
</template>

<script>
import AboutComponent from '@/components/AboutComponent.vue'

export default {
  name: 'AboutView',
  components: {
    AboutComponent
  }
}
</script>
