import styled from 'styled-components'

export const CarroContainer = styled.section`
  width: 200px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 1px 5px 20px yellow;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  ul {
    list-style: none;

      li{
        color: blue;

          strong{
            color: red;
          }
      }
  }
`
