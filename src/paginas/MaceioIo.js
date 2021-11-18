import { useEffect, useState } from 'react';
import Cabecalho from '../componentes/Cabecalho';
import Carregando from '../componentes/Carregando';
import Msg from '../componentes/Msg';
import Rodape from '../componentes/Rodape';

export default function MaceioIo() {

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
            <div className="MaceioIo fundoAzul">
              <Cabecalho btnVoltarLink="Inicio" titulo="Acesse os dados da Prefeitura" />

              <div class="ratio ratio-16x9">
                <iframe src="https://maceio.io/" title="Site Maceió.io" frameborder="0" allowfullscreen></iframe>
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
