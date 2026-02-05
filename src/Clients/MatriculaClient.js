// traeme con axios
import axios from 'axios'
import { obtenerTokenFachada } from './AutorisacionClient.js'

const baseURL = '/matricula/api/v1.0/estudiantes'

const getHeaders = async () => {
    const token = await obtenerTokenFachada('admin', 'adminpassword');
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

const consultarTodos = async () => {
    const config = await getHeaders();
    const data = await axios.get(baseURL, config).then((res) => res.data)
    console.log(data)
    return data   
}
//get
const baseUrl1="/matricula/api/v1.0/estudiantes"
const consultarPorId = async (id) => {
    const config = await getHeaders();
    const data = await axios.get(`${baseUrl1}/${id}`, config).then((res) => res.data);
    console.log(data)
    return data
}
//post
const baseUrlsave="/matricula/api/v1.0/estudiantes"
const guardar = async (estudiante) => {
    const config = await getHeaders();
    const data = await axios.post(baseUrlsave, estudiante, config).then((res) => res.data);
    console.log(data)
    return data
}
//put
const actualizar = async (id,estudiante) => {
    const config = await getHeaders();
    const data = await axios.put(`${baseUrl1}/${id}`, estudiante, config).then((res) => res.data);
    console.log(data)
    return data
}
//patch
const actualizarParcial = async (id,estudiante) => {
    const config = await getHeaders();
    const data = await axios.patch(`${baseUrl1}/${id}`, estudiante, config).then((res) => res.data);
    console.log(data)
    return data
}
//delete
const eliminar = async (id) => {
    const config = await getHeaders();
    const data = await axios.delete(`${baseUrl1}/${id}`, config).then((res) => res.data);
    console.log(data)
    return data
}
// crear una fachada y exportarla
export const actualizarFachada = async (id,estudiante) => {
   return await actualizar(id,estudiante)
}
export const guardarFachada = async (estudiante) => {
    return await guardar(estudiante)
}
export const consultarTodosFachada = async () => {
    return await consultarTodos()
}
//get
export const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id)
}
export const actualizarParcialFachada = async (id,estudiante) => {
   return await actualizarParcial(id,estudiante)
}
export const borrarFachada = async (id) => {
    return await eliminar(id)
}