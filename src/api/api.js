import axios from "axios";
import { v4 as uuid } from 'uuid';


export const api = axios.create({ baseURL: "http://localhost:5000", });

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
} 

export const obtenerPersonas = async (setData) => {
    try {
      const response = await axios.get('http://localhost:5000/personas');
      return setData(response.data);
    } catch (error) {
      console.error('Error al obtener personas:', error);
    }
  };


  export const crearPersona = async (nuevaPersona) => {
    try {
      const response = await axios.post('http://localhost:5000/personas', nuevaPersona);
      return response.data;
    } catch (error) {
      console.error('Error al crear la persona:', error);
      throw error;
    }
  };


export const eliminarPersona = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/personas/${id}`);
    } catch (error) {
      alert('Error al eliminar la persona');
    }
  };