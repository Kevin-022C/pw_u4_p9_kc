
<template>
  <div>
    <h1>About Component</h1>
    <button @click="consultarUsuarios">Consultar usuarios</button>
    <button @click="actualizarEstudiantePatch">actualizar estudiante patch</button>
    <button @click="crearEstudiante">crear estudiante post</button>
    <button @click="actualizarEstudiantePut">actualizar estudiante put</button>
    <button @click="consultarEstudiantePorId">Consultar estudiante por id</button>
    <button @click="eliminarEstudiante">Eliminar estudiante</button>
  </div>
</template>

<script>
import {
  consultarTodosFachada,
  guardarFachada,
  actualizarFachada,
  consultarPorIdFachada,
  actualizarParcialFachada,
  borrarFachada
} from '../Clients/MatriculaClient'

export default {
  name: 'AboutComponent',
  methods: {
    async consultarUsuarios() {
      console.log("Consultando todos los usuarios...");
      const data = await consultarTodosFachada();
      console.log("Usuarios:", data);
    },
    async consultarEstudiantePorId() {
      const id = 1; // ID de ejemplo
      console.log(`Consultando estudiante con ID: ${id}...`);
      const data = await consultarPorIdFachada(id);
      console.log("Estudiante:", data);
    },
    async crearEstudiante() {
      const estudiante = {
        nombre: "Juan",
        apellido: "Perez",
        cedula: "1234567890"
      };
      console.log("Creando estudiante...", estudiante);
      const data = await guardarFachada(estudiante);
      console.log("Estudiante creado:", data);
    },
    async actualizarEstudiantePut() {
      const id = 1; // ID de ejemplo
      const estudiante = {
        nombre: "Juan Modificado",
        apellido: "Perez Modificado",
        fechaNacimiento: "2000-01-01",
        provincia: "Provincia Ejemplo",
        genero: "Masculino"
      };
      console.log(`Actualizando (PUT) estudiante con ID: ${id}...`, estudiante);
      const data = await actualizarFachada(id, estudiante);
      console.log("Estudiante actualizado (PUT):", data);
    },
    async actualizarEstudiantePatch() {
      const id = 1; // ID de ejemplo
      const estudiante = {
        nombre: "Juan Parcial"
      };
      console.log(`Actualizando (PATCH) estudiante con ID: ${id}...`, estudiante);
      const data = await actualizarParcialFachada(id, estudiante);
      console.log("Estudiante actualizado (PATCH):", data);
    },
    async eliminarEstudiante() {
      const id = 1; // ID de ejemplo
      console.log(`Eliminando estudiante con ID: ${id}...`);
      const data = await borrarFachada(id);
      console.log("Estudiante eliminado:", data);
    }
  }
}
</script>