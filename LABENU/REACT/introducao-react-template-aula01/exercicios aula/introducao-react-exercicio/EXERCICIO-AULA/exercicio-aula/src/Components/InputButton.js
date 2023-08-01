import './InputButtonCss.css'

const InputButton = () => {
    return (
        <div className="Container">
            <input className="input" type="text" placeholder="Busca" id="campoDeBusca" />
            <button id="botaoDeBusca">Buscar</button>
        </div>
    );
}

export default InputButton;