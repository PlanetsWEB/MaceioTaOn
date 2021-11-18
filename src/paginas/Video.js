import { useEffect, useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import Carregando from '../componentes/Carregando';
import Msg from '../componentes/Msg';
import Rodape from '../componentes/Rodape';

export default function Video() {

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
            <div className="Video fundoAzul">
              <Cabecalho btnVoltarLink="Inicio" titulo="Saiba como a inovação está facilitando a vida do maceioense" carouselActive="4" />

              <div class="ratio ratio-16x9">
                {/* <div className="w-100 limite-video"> */}
                  <video className="w-100" autoPlay controls>
                    <source src={process.env?.PUBLIC_URL + "/video/PREFEITURA_VAMU_16x9.mp4"} type="video/mp4" />
                  </video>
                {/* </div> */}
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
