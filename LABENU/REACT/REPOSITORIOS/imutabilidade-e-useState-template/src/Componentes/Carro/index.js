import { CarroContainer } from './styles'

export function Carro({obj, controle}) {
  return (
        <>
          <CarroContainer>
              {controle ? <h2>{obj.modelo}</h2> : ""}

              {controle ? <ul>
              <li>Cor: <strong>{obj.cor}</strong></li>
              <li>Ano: <strong>{obj.ano}</strong></li>
              <li>Flex:<strong> {obj.flex ? 'Sim' : 'Não'}</strong></li>
              <li>Adicionado: <strong>{obj.adicionado}</strong></li>
              </ul> : <p>SEM CARROS DISPONIVEIS</p>}
    
          </CarroContainer>
        
        </>
  )
}
