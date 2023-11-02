import axios from 'axios';

const clienteAxios = axios.create({
    
    baseURL : 'https://api-gestor-ventas.onrender.com/api/'
});

export default clienteAxios;