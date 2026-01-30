<template>
  <div class="post-estudiante">
    <postEstudiante />
  </div>
</template>

<script>
// @ is an alias to /src
import postEstudiante from '@/components/postEstudiante.vue'

export default {
  name: 'postEstudianteView',
  components: {
    postEstudiante
  }
}
</script>