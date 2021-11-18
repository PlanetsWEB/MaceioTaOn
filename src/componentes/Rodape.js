import { useEffect } from 'react';

export default function Rodape(props) {

  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {


  }, [])




  return (<>
    <footer className="rodape">
      <div className="fundoAzul">
        <div className="container d-flex justify-content-center p-5">
          <img src={process.env?.PUBLIC_URL + "/img/logo-prefeitura-cidade-todos.png"} alt="Logo" style={{maxHeight: "15vw"}} />
        </div>
      </div>
    </footer>
  </>);
}
