import { useEffect, useState } from 'react';
import Carregando from '../componentes/Carregando';
import Msg from '../componentes/Msg';
import Rodape from '../componentes/Rodape';

export default function BoasVindas() {

  const [carregando, setCarregando] = useState(true);
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
            <div className="BoasVindas text-center">
              <div className="fundoAmarelo p-5">
                <h1 class="textoAzul">Seja<br/>bem-vindo ao</h1>
                <img src={process.env?.PUBLIC_URL + "/img/hastag.png"} alt="Hastag" class="mb-5 pb-5" style={{maxWidth:"90%"}} />
              </div>

              <div className="fundoAzul p-5">
                <img src={process.env?.PUBLIC_URL + "/img/logo-prefeitura-fundobranco.png"} alt="Logo" style={{ maxHeight: "18rem", marginTop: "-11rem", position: "relative", zIndex: "1" }} />
                <p class="text-white mb-5">Aqui você vai conhecer ações que apontam para o futuro da capital de todos os alagoanos. Vem com a gente!</p>

                <a class="btn btn-default router" href="Inicio" role="button">
                  <img src={process.env?.PUBLIC_URL + "/img/btn/bora-comecar.png"} alt="Botão bora começar!" style={{maxWidth:"90%"}}/>
                </a>

              </div>
              <Rodape/>
            </div>
          </>)
        }


      </>

      )
    }

  </>);
}
