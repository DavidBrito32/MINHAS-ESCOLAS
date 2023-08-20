//declare todo o componente formulário e seus inputs. Exporte o formulário.

import {ContainerForm, Flutuante, Botao, Input, Select} from '../Componentes/estiloDoFormulario';

const Formulario = ({pagamento, setPagamento,nome, alteraNome, cartao, setNumberCard,  validadde, setValidade, cvc, alteraCvc, LimparDados}) => {

    return (
    <ContainerForm>
        <Select value={pagamento} onChange={(e) => setPagamento(e.target.value)} width={"40%"}>
            <option>Crédito</option>
            <option>Débito</option>
        </Select> <Flutuante>*</Flutuante>
      <label>
        Nome: *
        <Input value={nome} onChange={(e) => alteraNome(e.target.value)} type="text" width={"100%"} placeholder='Nome e sobrenome'/>
      </label>
      <label>
        Numero do Cartão: *
        <Input type="text" value={cartao} onChange={(e) => setNumberCard(e.target.value)} width={"100%"} placeholder='Por favor Digite os numeros espaçadamente'/>
      </label>
      <label>
        Validade: *
      <Input type="text" value={validadde} onChange={(e) => setValidade(e.target.value)} placeholder='Mês / Ano'/>        
      </label>
      <label>
        CVC: *
      <Input type="number" value={cvc} onChange={(e) => alteraCvc(e.target.value)} placeholder='Esta no Verso'/>        
      </label>
        <Botao onClick={LimparDados}>
            Cadastrar Cartão
        </Botao>

    </ContainerForm>
  )
}

export default Formulario
