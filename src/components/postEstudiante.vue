<template>
  <div class="container">
    <h2>Agregar Estudiante</h2>
    <form @submit.prevent="agregarEstudiante">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="estudiante.nombre" required>
      </div>
      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="estudiante.apellido" required>
      </div>
      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" v-model="estudiante.fechaNacimiento" required>
      </div>
      <div class="form-group">
        <label for="provincia">Provincia:</label>
        <input type="text" id="provincia" v-model="estudiante.provincia" required>
      </div>
      <div class="form-group">
        <label for="genero">Género:</label>
        <input type="text" id="genero" v-model="estudiante.genero" required>
      </div>
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>
import { guardarFachada } from "../Clients/MatriculaClient.js";

export default {
  data() {
    return {
      estudiante: {
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        provincia: '',
        genero: ''
      }
    };
  },
  methods: {
    async agregarEstudiante() {
      try {
        const estudianteParaEnviar = { ...this.estudiante };
        estudianteParaEnviar.fechaNacimiento = `${this.estudiante.fechaNacimiento}T00:00:00`;
        estudianteParaEnviar.genero = this.estudiante.genero.toUpperCase();

        await guardarFachada(estudianteParaEnviar);
        alert('Estudiante guardado exitosamente');
        // Limpiar formulario
        this.estudiante = {
          nombre: '',
          apellido: '',
          fechaNacimiento: '',
          provincia: '',
          genero: ''
        };
      } catch (error) {
        alert('Error al guardar el estudiante');
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
  padding: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>