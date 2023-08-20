import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer, Titulo, SubTitulo } from './styles'

export function Garagem({ nome, controle}){ 

  return (
      <>
          <Titulo>Garagem do<strong> {nome}</strong></Titulo>
            <GaragemContainer>
                <Botao onClick={alteraVeiculo}>Alterar Veiculos</Botao>
            </GaragemContainer>

      <Estacionamento>
        <SubTitulo>Carro do: <strong>{nome}</strong></SubTitulo>
        <Carro controle={controle} obj={carro}/>
      </Estacionamento>
      </>
  )

}
