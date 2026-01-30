<template>
  <div class="delete-estudiante">
    <h1>Eliminar Estudiante</h1>

    <!-- |-->
    <div v-if="!estudiante" class="search-container">
      <label for="cedulaInput">Cédula del Estudiante:</label>
      <input id="cedulaInput" type="text" v-model="cedula" placeholder="Ingrese el ID del estudiante">
      <button @click="buscarEstudiante">Buscar</button>
    </div>
     <div v-if="searchError" class="error">{{ searchError }}</div>

    <!-- || -->
    <div v-if="estudiante" class="confirmation-container">
        <p>¿Está seguro de que desea eliminar permanentemente al siguiente estudiante?</p>
        <div class="estudiante-info">
            <strong>Nombre:</strong> {{ estudiante.nombre }} {{ estudiante.apellido }} <br>
            <strong>Cédula:</strong> {{ estudiante.cedula }}
        </div>
        <button @click="confirmarEliminacion" class="delete-button">Sí, Eliminar Permanentemente</button>
        <button @click="cancelarEliminacion" class="cancel-button">Cancelar</button>
    </div>

    <div v-if="successMessage" class="success">{{ successMessage }}</div>
  </div>
</template>

<script>
import { consultarPorIdFachada, borrarFachada } from '../Clients/MatriculaClient';

export default {
  name: 'deleteEstudiante',
  data() {
    return {
      cedula: '',
      estudiante: null,
      searchError: null,
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
          this.estudiante = data;
        } else {
          this.searchError = `No se encontró estudiante con ID ${this.cedula}.`;
          this.cedula = '';
        }
      } catch (err) {
        this.searchError = `Error al buscar el estudiante: ${err.message}`;
      }
    },
    async confirmarEliminacion() {
        this.resetMessages();
        if(!this.estudiante) return;

        try {
            await borrarFachada(this.estudiante.cedula);
            this.successMessage = `¡El estudiante ${this.estudiante.nombre} ${this.estudiante.apellido} ha sido eliminado con éxito!`;
            this.estudiante = null;
            this.cedula = '';
        } catch (err) {
            this.searchError = `Error al eliminar el estudiante: ${err.message}. Es posible que el estudiante tenga matrícula y no pueda ser borrado.`;
        }
    },
    cancelarEliminacion() {
        this.estudiante = null;
        this.cedula = '';
        this.resetMessages();
    },
    resetMessages() {
        this.searchError = null;
        this.successMessage = null;
    }
  },
};
</script>

<style scoped>
.delete-estudiante {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.search-container {
  margin-bottom: 20px;
}
.search-container input {
    margin: 0 10px;
}
.confirmation-container {
    padding: 15px;
    border: 1px solid #ffc107;
    background-color: #fff3cd;
    border-radius: 4px;
}
.estudiante-info {
    margin: 15px 0;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #eee;
}
button {
  padding: 10px 15px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
button.delete-button {
  background-color: #dc3545;
}
button.delete-button:hover {
  background-color: #c82333;
}
button.cancel-button {
    background-color: #6c757d;
}
button.cancel-button:hover {
    background-color: #5a6268;
}
.search-container button {
    background-color: #007BFF;
}
.search-container button:hover {
    background-color: #0056b3;
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
