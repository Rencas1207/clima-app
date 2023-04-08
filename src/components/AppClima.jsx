import useClima from "../hooks/useClima";
import Formulario from "./Formulario";
import Loading from "./Loading";
import Result from "./Result";

export default function AppClima() {
   const { result, loading, noResult } = useClima();
   return (
      <>
         <main className="dos-columnas">
            <Formulario />
            {
               loading
                  ? <Loading />
                  : result?.name
                     ? <Result />
                     : <p>{noResult}</p>
            }

         </main>
      </>
   )
}
