import { useState } from "react";
import useClima from "../hooks/useClima"

export default function Formulario() {

   const [alerta, setAlerta] = useState('');
   const { search, datosBusqueda, fetchClima } = useClima();
   const { city, country } = search;

   const handleSubmit = (e) => {
      e.preventDefault();

      if (Object.values(search).includes('')) {
         setAlerta('Todos los campos son obligatorios');
         return;
      }

      setAlerta('');
      fetchClima(search);
   }

   return (
      <div className="contenedor">

         {alerta && <p>{alerta}</p>}
         <form onSubmit={handleSubmit}>
            <div className="campo">
               <label htmlFor="city">Ciudad</label>
               <input
                  type="text"
                  id="city"
                  name="city"
                  onChange={datosBusqueda}
                  value={city}
               />
            </div>
            <div className="campo">
               <label htmlFor="country">País</label>
               <select
                  id="country"
                  name="country"
                  onChange={datosBusqueda}
                  value={country}
               >
                  <option value="">Seleccione un país</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">México</option>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="PE">Perú</option>
               </select>
            </div>

            <input type="submit" value="Consultar clima" />
         </form>
      </div>
   )
}
