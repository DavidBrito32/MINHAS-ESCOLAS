import styled from 'styled-components'


export const DivContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  border: 2px solid black;
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 400ms;

`

export const ListaDeTarefas = styled.ul`
  padding: 0;
  width: 90%;
`

export const Tarefa = styled.li`
  text-align: left;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  border-bottom: 2px solid black;
  margin-top: 10px;
  text-decoration: ${({ completa }) => (completa && 'line-through')};

    & box-icon{
      fill: ${(props) => (props.cor && 'green')};
      
    }


    & div{
      display: flex;
      justify-content: space-between;
      width: 70px;
      
      & box-icon{
        width: 30px;
        height: 30px;          
        
        &:nth-child(1){
          fill: ${(props) => (props.cor && 'green')};
        }

            &:hover{
              transform: scale(1.2);
              fill: red;
              cursor: pointer;
            }



        }
    }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`