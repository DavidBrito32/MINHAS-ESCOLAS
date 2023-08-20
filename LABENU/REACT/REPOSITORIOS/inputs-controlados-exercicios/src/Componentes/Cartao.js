import { CVC, DesignDoCartao, FormaDePagamento, LogoLabenu, LogoMasterCard, Nome, NumeroDoCartao, Validade } from "./estiloDoCartao";



function Cartao(props) {
    return (
        <DesignDoCartao>

            <LogoLabenu
                alt="logo da labenu"
                src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/6418d88006d6c5b61efb9e69_Fogo-Cima.svg"
            />

            <NumeroDoCartao>
                {props.numero === "" ? "0000 0000 0000 0000" :  props.numero}
                
            </NumeroDoCartao>

            <Nome>
                {props.nome === "" ? "Seu nome" :  props.nome}
            </Nome>

            <CVC>
                cvc:{props.cvc === "" ? "123" :  props.cvc}
            </CVC>

            <FormaDePagamento> $ {props.pagamento === "" ? "Deb / Cred" :  props.pagamento}</FormaDePagamento>

            <Validade>
                validade: {props.validade === "" ? "01/2023" : props.validade}
            </Validade>

            <LogoMasterCard
                id="logo-master"
                alt="logo da master card"
                src="https://logospng.org/download/mastercard/logo-mastercard-2048.png"
            />

        </DesignDoCartao>
    );
}

export default Cartao;
