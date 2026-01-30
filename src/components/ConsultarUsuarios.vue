<template>
  <div>
    <h1>Consultar todos los Estudiantes</h1>
    <button @click="consultarUsuarios">Consultar usuarios</button>

    <div v-if="showTable">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Cédula</th>
            <th>Fecha de Nacimiento</th>
            <th>Provincia</th>
            <th>Género</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.nombre }}</td>
            <td>{{ user.apellido }}</td>
            <td>{{ user.fechaNacimiento }}</td>
            <td>{{ user.provincia }}</td>
            <td>{{ user.genero }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { consultarTodosFachada } from '../Clients/MatriculaClient'

export default {
    name: 'ConsultarUsuarios',
    data() {
        return {
            users: [],
            showTable: false
        }
    },
    methods: {
        async consultarUsuarios() {
            console.log("Consultando todos los usuarios...");
            this.users = await consultarTodosFachada();
            this.showTable = true;
        }

    }


}
</script>

<style>
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
</style>