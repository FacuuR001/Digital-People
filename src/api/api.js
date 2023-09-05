import axios from "axios";
import { v4 as uuid } from 'uuid';


export const api = axios.create({ baseURL: "https://back-digital-people.vercel.app/personas", });

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
} 

export const obtenerPersonas = async (setData) => {
    try {
      const response = await axios.get('https://back-digital-people.vercel.app/personas');
      return setData(response.data);
    } catch (error) {
      console.error('Error al obtener personas:', error);
    }
  };


  export const crearPersona = async (nuevaPersona) => {
    try {
      const response = await axios.post('https://back-digital-people.vercel.app/personas', nuevaPersona);
      return response.data;
    } catch (error) {
      console.error('Error al crear la persona:', error);
      throw error;
    }
  };


export const eliminarPersona = async (id) => {
    try {
      await axios.delete(`https://back-digital-people.vercel.app/personas/${id}`);
    } catch (error) {
      alert('Error al eliminar la persona');
    }
  };
