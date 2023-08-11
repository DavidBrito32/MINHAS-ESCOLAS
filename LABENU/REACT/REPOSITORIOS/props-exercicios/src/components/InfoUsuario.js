import './InfoUsuario.css';

const InfoUsuario = () =>{

    const usuario = "David";

    return (
        <>
            <div className='container-usuario'>
                <img src="https://picsum.photos/50" alt="imagem" />
                <p>
                    Usuario: <strong>{usuario}</strong>
                </p>
            </div>
        </>
    );
}
export default InfoUsuario;