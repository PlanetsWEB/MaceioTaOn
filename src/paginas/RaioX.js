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

              <div class="ratio ratio-16x9">
                <iframe src="https://raiox.maceio.al.gov.br/" title="Site RaioX de Maceió" frameborder="0" allowfullscreen></iframe>
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
