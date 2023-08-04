import InfoUsuario from "./InfoUsuario";

const Card = () => {

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    const titulo = "Título do vídeo";
    return (
        <>
              <div className="box-pagina-principal" onClick={reproduzVideo}>
                 <img className="imagem" src="https://picsum.photos/400/400?a=1 " alt="" />
              <h4>{titulo}</h4>
              <InfoUsuario />
            </div>
        </>
    );
}

export default Card;