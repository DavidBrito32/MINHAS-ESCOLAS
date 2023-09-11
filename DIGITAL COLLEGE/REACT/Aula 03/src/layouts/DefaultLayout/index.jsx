import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

import { HooksProvider } from '../../context/hooksProvider/index'
const DefaultLayout = () => {

  return (
    <>
        <Container>
                <h1>HEADER</h1>
                    <HooksProvider>
                        <Outlet />
                    </HooksProvider>
                <h1>FOOTER</h1>
        </Container>
    </>
  )
}

export default DefaultLayout