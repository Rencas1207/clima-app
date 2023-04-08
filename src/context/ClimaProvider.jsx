import axios from 'axios';
import { useState, createContext } from 'react'

const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {

   const [search, setSearch] = useState({
      city: '',
      country: ''
   })
   const [result, setResult] = useState({});

   const datosBusqueda = (e) => {
      setSearch({
         ...search,
         [e.target.name]: e.target.value
      })
   }

   const fetchClima = async (datos) => {
      try {
         const { city, country } = datos;

         const appId = import.meta.env.VITE_API_KEY;

         const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`;

         const { data } = await axios(url);

         const { lat, lon } = data[0];

         const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

         const { data: dataClima } = await axios(urlClima);
         setResult(dataClima);

      } catch (error) {
         console.log(error);
      }
   }

   return (
      <ClimaContext.Provider
         value={{
            search,
            datosBusqueda,
            fetchClima,
            result
         }}
      >
         {children}
      </ClimaContext.Provider>
   )
}


export default ClimaContext;