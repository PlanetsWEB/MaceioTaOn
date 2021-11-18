import { useEffect, useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import Carregando from '../componentes/Carregando';
import Msg from '../componentes/Msg';
import Rodape from '../componentes/Rodape';

export default function Paticipa() {

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
            <div className="Paticipa">
              <Cabecalho btnVoltarLink="Inicio" titulo="Escolhas as prioridades para Maceió" carouselActive="1" />

              <div class="ratio ratio-16x9">
                <iframe src="http://www.participa.maceio.al.gov.br/participa-maceio/principal.faces" title="Site Maceió.io" frameborder="0" sandbox allowfullscreen></iframe>
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
