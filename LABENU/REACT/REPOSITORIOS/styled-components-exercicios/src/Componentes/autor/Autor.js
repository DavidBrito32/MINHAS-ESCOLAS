
import { Perfil } from '../styledComponents/Styles.styledComponents';


const Autor = ({profile, user}) => {
  return (
    <>
        <Perfil>
        <img src={profile} alt="Foto de perfil" />
        <a href={"#!"}>{user}</a>
        </Perfil>
    </>
  )
}

export default Autor;