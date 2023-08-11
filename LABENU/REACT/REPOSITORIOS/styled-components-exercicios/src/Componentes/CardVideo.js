import Autor from "./autor/Autor";
import { CardVideoTag } from "./styledComponents/Styles.styledComponents";


function CardVideo(props) {

  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <CardVideoTag onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
      <Autor profile={props.profile} user={props.user} />
    </CardVideoTag>
  );
}

export default CardVideo;
