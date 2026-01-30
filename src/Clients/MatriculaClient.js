// traeme con axios
import axios from 'axios'
// get
const baseURL = '/matricula/api/v1.0/estudiantes'
const consultarTodos = async () => {
    const data = await axios.get(baseURL).then((res) => res.data)
    console.log(data)
    return data   
}
//get
const baseUrl1="/matricula/api/v1.0/estudiantes"
const consultarPorId = async (id) => {
    const data = await axios.get(`${baseUrl1}/${id}`).then((res) => res.data);
    console.log(data)
    return data
}
//post
const baseUrl2="/matricula/api/v1.0/estudiantes"
const guardar = async (estudiante) => {
    const data = await axios.post(baseUrl2, estudiante).then((res) => res.data);
    console.log(data)
    return data
}
//put
const actualizar = async (id,estudiante) => {
    const data = await axios.put(`${baseUrl2}/${id}`, estudiante).then((res) => res.data);
    console.log(data)
    return data
}
//patch
const actualizarParcial = async (id,estudiante) => {
    const data = await axios.patch(`${baseUrl2}/${id}`, estudiante).then((res) => res.data);
    console.log(data)
    return data
}
//delete
const eliminar = async (id) => {
    const data = await axios.delete(`${baseUrl2}/${id}`).then((res) => res.data);
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