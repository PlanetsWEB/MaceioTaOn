import { useEffect, useState } from 'react';
import $ from 'jquery';
import Inicio from './paginas/Inicio';
import Carregando from './componentes/Carregando';
import BoasVindas from './paginas/BoasVindas';
import RaioX from './paginas/RaioX';
import MaceioIo from './paginas/MaceioIo';
import Paticipa from './paginas/Paticipa';
import Video from './paginas/Video';

export default function App() {

  const [carregando, setCarregando] = useState(true);
  const [router, setRouter] = useState("BoasVindas");

  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {
    setCarregando(false);

    setInterval(() => {
      $("a.router").on("click", async (event) => {
        const botao = $(event.currentTarget);
        event.preventDefault();
        await setCarregando(true);
        await setRouter(botao.attr("href"));
        await setCarregando(false);
      })
    }, 500);
  }, [])


  return (<>
    {
      carregando ? (<>
        <Carregando></Carregando>
      </>) : (<>
        <div className="d-flex justify-content-center">
          <div className="App">

            {
              router === "BoasVindas" && (<BoasVindas />)
            }

            {
              router === "Inicio" && (<Inicio />)
            }

            {
              router === "RaioX" && (<RaioX />)
            }

            {
              router === "MaceioIo" && (<MaceioIo />)
            }

            {
              router === "Paticipa" && (<Paticipa />)
            }

            {
              router === "Video" && (<Video />)
            }
          </div>
        </div>
      </>
      )
    }

  </>);
}
