// traeme con axios
import axios from 'axios'
const baseURL = 'http://localhost:8086/matricula/api/v1.0/estudiantes'
const consultarTodos = async () => {
    const response = await axios.get(baseURL)
    return response.data
}
