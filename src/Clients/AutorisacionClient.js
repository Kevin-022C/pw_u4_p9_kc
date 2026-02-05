import axios from 'axios'

const baseURL = '/auth/token'

const obtenerToken = async (user, password) => {
    // Cambiado a GET porque el servidor devolvió 405 (Method Not Allowed) con POST.
    const data = await axios.get(baseURL, {
        params: {
            user: user,
            password: password
        }
    }).then(r => r.data);
    
    console.log("Respuesta completa del token:", data);
    
    // Si la respuesta es un objeto, intentamos extraer el token
    if (typeof data === 'object' && data !== null) {
        // Posibles nombres de propiedad para el token
        if (data.token) return data.token;
        if (data.access_token) return data.access_token;
        if (data.accessToken) return data.accessToken;
        // Si no encontramos una propiedad conocida, devolvemos el objeto entero (quizás es un string envuelto?)
        // O podríamos intentar convertirlo a string si es algo simple
    }
    
    return data;
}

export const obtenerTokenFachada = async (user, password) => {
    return await obtenerToken(user, password);
}
