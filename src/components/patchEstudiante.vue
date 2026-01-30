<template>
  <div class="patch-estudiante">
    <h1>Actualización Parcial del Estudiante</h1>

    <!-- Step 1: Search for the student -->
    <div v-if="!estudiante" class="search-container">
      <label for="cedulaInput">Cédula del Estudiante:</label>
      <input id="cedulaInput" type="text" v-model="cedula" placeholder="Ingrese la cédula para buscar">
      <button @click="buscarEstudiante">Buscar</button>
    </div>
    <div v-if="searchError" class="error">{{ searchError }}</div>

    <!-- Step 2: Show form to update the student -->
    <form v-if="estudiante" @submit.prevent="actualizarEstudiantePatch">
      <h2>Editando a: {{ estudianteOriginal.nombre }} {{ estudianteOriginal.apellido }}</h2>
      <p>Modifique solo los campos que desea actualizar.</p>
      
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input id="nombre" type="text" v-model="estudiante.nombre">
      </div>

      <div class="form-group">
        <label for="apellido">Apellido:</label>
        <input id="apellido" type="text" v-model="estudiante.apellido">
      </div>

      <div class="form-group">
        <label for="fechaNacimiento">Fecha de Nacimiento:</label>
        <input id="fechaNacimiento" type="date" v-model="estudiante.fechaNacimiento">
      </div>

      <div class="form-group">
        <label for="provincia">Provincia:</label>
        <input id="provincia" type="text" v-model="estudiante.provincia">
      </div>

      <div class="form-group">
        <label for="genero">Género:</label>
        <select id="genero" v-model="estudiante.genero">
          <option :value="null" disabled>-- Seleccione --</option>
          <option value="MASCULINO">Masculino</option>
          <option value="FEMENINO">Femenino</option>
          <option value="OTRO">Otro</option>
        </select>
      </div>

      <button type="submit">Actualizar Parcialmente</button>
    </form>

    <div v-if="successMessage" class="success">{{ successMessage }}</div>
    <div v-if="updateError" class="error">{{ updateError }}</div>
  </div>
</template>

<script>
import { consultarPorIdFachada, actualizarParcialFachada } from '../Clients/MatriculaClient';

export default {
  name: 'patchEstudiante',
  data() {
    return {
      cedula: '',
      estudiante: null,
      estudianteOriginal: null,
      searchError: null,
      updateError: null,
      successMessage: null,
    };
  },
  methods: {
    async buscarEstudiante() {
      this.resetMessages();
      if (!this.cedula) {
        this.searchError = 'Por favor, ingrese un ID.';
        return;
      }
      try {
        const data = await consultarPorIdFachada(this.cedula);
        if (data) {
          if (data.fechaNacimiento) {
            data.fechaNacimiento = data.fechaNacimiento.split('T')[0];
          }
          this.estudiante = { ...data };
          this.estudianteOriginal = { ...data };
        } else {
          this.searchError = `No se encontró estudiante con la cédula ${this.cedula}.`;
        }
      } catch (err) {
        this.searchError = `Error al buscar el estudiante: ${err.message}`;
      }
    },
    async actualizarEstudiantePatch() {
      this.resetMessages();
      if (!this.estudiante) return;

      // For a PATCH, we should ideally send only the changed fields.
      // A simple approach is to compare the current form data with the original.
      const changes = {};
      for (const key in this.estudiante) {
        if (this.estudiante[key] !== this.estudianteOriginal[key]) {
          changes[key] = this.estudiante[key];
        }
      }

      if (Object.keys(changes).length === 0) {
          this.updateError = "No se ha modificado ningún dato.";
          return;
      }

      try {
        await actualizarParcialFachada(this.cedula, changes);
        this.successMessage = '¡Estudiante actualizado con éxito!';
        this.estudiante = null;
        this.cedula = '';
      } catch (err) {
        this.updateError = `Error al actualizar: ${err.message}`;
      }
    },
    resetMessages() {
      this.searchError = null;
      this.updateError = null;
      this.successMessage = null;
    }
  },
};
</script>

<style scoped>
.patch-estudiante {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
}
.search-container {
  margin-bottom: 20px;
}
.search-container input {
    margin: 0 10px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.form-group {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
  font-weight: bold;
}
input, select {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 15px;
  background-color: #ff8c00; /* Orange color for PATCH */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
}
button:hover {
  background-color: #cc7000;
}
.error {
  margin-top: 15px;
  color: #D8000C;
  background-color: #FFD2D2;
  border: 1px solid #D8000C;
  padding: 10px;
  border-radius: 4px;
}
.success {
  margin-top: 15px;
  color: #270;
  background-color: #DFF2BF;
  border: 1px solid #4F8A10;
  padding: 10px;
  border-radius: 4px;
}
</style>
