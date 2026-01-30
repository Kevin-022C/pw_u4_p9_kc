<template>
  <div class="consultar-id">
    <h1>Consultar Estudiante por ID</h1>
    <div class="input-container">
      <label for="cedulaInput">ID Estudiante:</label>
      <input id="cedulaInput" type="text" v-model="cedula" placeholder="Ingrese el id del estudiante">
      <button @click="consultarEstudiantePorId">Consultar</button>
    </div>

    <div v-if="estudiante" class="estudiante-tabla">
      <h2>Datos del Estudiante</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>genero</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ estudiante.nombre }}</td>
            <td>{{ estudiante.apellido }}</td>
            <td>{{ estudiante.genero }}</td>
          </tr>
        </tbody>
      </table>
    </div>
     <div v-if="error" class="error">
        <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { consultarPorIdFachada } from '../Clients/MatriculaClient';

export default {
  name: 'ConsultarEstudianteId',
  data() {
    return {
      cedula: '',
      estudiante: null,
      error: null,
    };
  },
  methods: {
    async consultarEstudiantePorId() {
      this.estudiante = null;
      this.error = null;
      if (!this.cedula) {
          this.error = "Por favor, ingrese una id.";
          return;
      }
      try {
        const data = await consultarPorIdFachada(this.cedula);
        if(data) {
            this.estudiante = data;
        } else {
            this.error = `No se encontró ningún estudiante con el id ${this.cedula}.`;
        }
      } catch (err) {
          this.error = `Error al consultar el estudiante: ${err.message}`;
          console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.consultar-id {
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.input-container {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.input-container label {
  margin-right: 10px;
  font-weight: bold;
}

.input-container input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.input-container button {
  padding: 8px 12px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.input-container button:hover {
  background-color: #0056b3;
}

.estudiante-tabla {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
.error {
    margin-top: 15px;
    color: #D8000C;
    background-color: #FFD2D2;
    border: 1px solid #D8000C;
    padding: 10px;
    border-radius: 4px;
}
</style>
