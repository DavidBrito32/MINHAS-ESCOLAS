import InfoUsuario from "./InfoUsuario";

const Card = (props) => {
  function reproduzVideo(nome) {
    alert(`O video esta sendo reproduzido para ${nome}`);
  }

  return (
    <>
      <div
        className="box-pagina-principal"
        onClick={() => reproduzVideo(props.nomeUser)}
      >
        <img className="imagem" src={props.img} alt="Titulo" />
        <h4>{props.titulo}</h4>
        <InfoUsuario />
      </div>
    </>
  );
};

export default Card;
