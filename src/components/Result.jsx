import React from 'react'
import useClima from '../hooks/useClima'

export default function Result() {
   const { result } = useClima();

   const { name, main } = result;

   // Grados Kelvin
   const kelvin = 273.15;

   return (
      <div className='contenedor clima'>
         <h2>El clima de {name} es: </h2>

         <p>
            {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
         </p>
         <div className='tem_min_max'>
            <p>
               Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
            </p>
            <p>
               Máx: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
            </p>
         </div>
      </div>
   )
}
