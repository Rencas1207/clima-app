import { useState, createContext } from 'react'

const ClimaContext = createContext();

export const ClimaProvider = ({ children }) => {

   const [search, setSearch] = useState({
      city: '',
      country: ''
   })

   const datosBusqueda = (e) => {
      setSearch({
         ...search,
         [e.target.name]: e.target.value
      })
   }
   console.log(import.meta.env.VITE_API_KEY);

   const fetchClima = (datos) => {
      console.log(datos);
   }

   return (
      <ClimaContext.Provider
         value={{
            search,
            datosBusqueda,
            fetchClima
         }}
      >
         {children}
      </ClimaContext.Provider>
   )
}


export default ClimaContext;