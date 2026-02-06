
<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <label for="username">Usuario:</label>
      <input type="text" id="username" v-model="usuario" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" v-model="contraseña" required>

      <button type="submit" @click="login">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
     usuario: '',
    contraseña: ''
    }
  },
  methods: {
    login() {
      // Lógica de autenticación con token
      if (this.usuario === 'admin' && this.contraseña === '123456') {
        // Si las credenciales son válidas, generar un token
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImFkbWluIiwiZ3JvdXBzIjpbImFkbWluIl0sImlhdCI6MTc3MDMzNjYwMiwiZXhwIjoxNzcwMzQwMjAyLCJqdGkiOiI4YzJjZDhmOS1hMGFjLTQxMzItOWNmOS0yMjBjYjJlYTI4NjAifQ.RYu43gBxZVuawAIPFT5KFZd1OlOkH86DXBF0ATLyoUV1NnvrRO7oMPI_CJxiZg5t240pMh1oMZoPLlZJEko2PnJkMyIA1tChhTKCGhQe38WFf0fkt8tOG_ItRLs-QFJoEwJzwFLkejHpmKJcBNzWZKcY1_Niix6QwJ80VVOV2hWIWceOSTTy648iAtfMvcF0yLAOHzZ5JEsxiY6bGiX7TOrZ2Jk6AaGHOU2QQEpsjJ5kZi3wJJhXTfRG_q35rOh9YrlPv-w6xk081xmDyHmLn9wwE9hZzr4nag4ck5SgXfJdhGhq0i1MbDBvtu17HoKZBrzmlFCKtLttgWIWyqUfbA'; // Token ficticio
        // Almacenar el token en el almacenamiento local (localStorage)
        localStorage.setItem('token', token);
        localStorage.setItem('esta',true)
        // Redirigir al usuario a la página principal (o a donde desees)
        this.$router.push('/');
      } else {
        // Si las credenciales son inválidas, mostrar un mensaje de error
        alert('Credenciales inválidas. Por favor, inténtalo de nuevo.');
        console.log('Credenciales inválidas. Por favor, inténtalo de nuevo.');
      }
    }
  }
}
</script>
<style>
.login {
text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>