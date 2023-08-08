import InfoUsuario from "./InfoUsuario";

const Card = (props) => {

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    return (
        <>
              <div className="box-pagina-principal" onClick={reproduzVideo}>
                 <img className="imagem" src={props.img} alt="" />
              <h4>{props.titulo}</h4>
              <InfoUsuario />
            </div>
        </>
    );
}

export default Card;