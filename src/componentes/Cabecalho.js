import { useEffect } from 'react';

export default function Cabecalho(props) {

  // Função do react que é executada sempre que o componente é carregando
  useEffect(() => {


  }, [])




  return (<>
    <header className="Cabecalho">

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="3000">
        <div class="carousel-inner">
          {Array.apply(0, Array(5)).map((x, index) => (<>
            {
              props?.carouselActive === String(index+1) ? (
                <div class={"carousel-item active"}>
                  <img src={process.env?.PUBLIC_URL + "/img/carousel/c-"+(index+1)+".jpeg"} class="d-block w-100" alt="Carousel imagem" />
                </div>) : (
                <div class={"carousel-item"}>
                  <img src={process.env?.PUBLIC_URL + "/img/carousel/c-"+(index+1)+".jpeg"} class="d-block w-100" alt="Carousel imagem" />
                </div>)
            }
          </>))}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon d-none" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon  d-none" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="fundoAzul">

        <div class="container-fluid">
          <a class="btn btn-default router mt-3" href={props?.btnVoltarLink} role="button">
            <img src={process.env?.PUBLIC_URL + "/img/btn/voltar.png"} alt="Botão voltar!" style={{ maxWidth: "8rem" }} />
          </a>

          <div class="text-center">
            <img src={process.env?.PUBLIC_URL + "/img/logo-prefeitura-fundobranco.png"} alt="Logo" style={{ maxWidth: "16rem", marginTop: "-11rem", position: "relative", zIndex: "1" }} />
          </div>

          {
            props.titulo && (<h1 className="text-white text-center m-0 pb-5">{props?.titulo}</h1>)
          }


        </div>

      </div>
    </header>
  </>);
}
