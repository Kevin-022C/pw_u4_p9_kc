<template>
  <div class="Estudiantes">
    <h1>Estudiantes</h1>
    <ConsultarUsuarios />
  </div>

</template>

<script>
import ConsultarUsuarios from '@/components/ConsultarUsuarios.vue';

export default {
    name: 'consultarUsuarios',
  components: {
    ConsultarUsuarios
  }

}
</script>

<style>

</style>