import { useEffect, useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import Carregando from '../componentes/Carregando';
import Msg from '../componentes/Msg';
import Rodape from '../componentes/Rodape';

export default function RaioX() {

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
            <div className="RaioX">
              <Cabecalho btnVoltarLink="Inicio" titulo="Conheça o diagnóstico da cidade e as soluções propostas pela Prefeitura" />

              <div className="w-100 limite-video">
                <video className="w-100" autoPlay controls>
                  <source src={process.env?.PUBLIC_URL + "/video/RaioX.mp4"} type="video/mp4" />
                </video>
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
