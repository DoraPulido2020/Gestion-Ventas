import axios from 'axios';

const clienteAxios = axios.create({
    
    baseURL : 'https://api-gestion-ventas.onrender.com/api/'
});

export default clienteAxios;