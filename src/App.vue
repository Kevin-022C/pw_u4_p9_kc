<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/postEstudiante">Agregar Estudiante</router-link> |
    <router-link to="/consultarUsuarios">Estudiantes</router-link> |
    <router-link to="/idEstudiante">Estudiante ID</router-link> |
    <router-link to="/putEstudiante">Estudiante PUT</router-link> |
    <router-link to="/patchEstudiante">Estudiante PATCH</router-link> |
    <router-link to="/deleteEstudiante">Estudiante DELETE</router-link> |
    

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
