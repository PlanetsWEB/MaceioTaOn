import { useEffect, useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import Carregando from '../componentes/Carregando';
import Msg from '../componentes/Msg';
import Rodape from '../componentes/Rodape';

export default function Inicio() {

  const [carregando, setCarregando] = useState(true);
  // eslint-disable-next-line
  const [msg, setMsg] = useState(null);



  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {
    (async () => {

      await setCarregando(false);

    })()
  }, [])


  return (<>
    {
      carregando ? (<>
        <Carregando></Carregando>
      </>) : (<>
        {
          msg !== null ? (<>
            <Msg msg={msg}></Msg>
          </>) : (<>
            <div className="Inicio">
              <Cabecalho btnVoltarLink="BoasVindas" titulo="O que você quer?" carouselActive="1" />

              <div className="fundoAzul">

                <div className="botoes">

                  <a class="btn btn-default router" href="RaioX" role="button">
                    <img src={process.env?.PUBLIC_URL + "/img/btn/btn-1.png"} alt="Botão!" />
                  </a>

                  <a class="btn btn-default router" href="MaceioIo" role="button">
                    <img src={process.env?.PUBLIC_URL + "/img/btn/btn-2.png"} alt="Botão!" />
                  </a>

                  {/* <a class="btn btn-default router" href="Paticipa" role="button">
                    <img src={process.env?.PUBLIC_URL + "/img/btn/btn-3.png"} alt="Botão!" />
                  </a> */}

                  <a class="btn btn-default router" href="Video" role="button">
                    <img src={process.env?.PUBLIC_URL + "/img/btn/btn-4.png"} alt="Botão!" />
                  </a>

                </div>
              </div>

              <Rodape />
            </div>
          </>)
        }


      </>

      )
    }

  </>);
}
