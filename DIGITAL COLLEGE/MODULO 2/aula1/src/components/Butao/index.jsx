/* eslint-disable react/prop-types */

const Butao = ({titulo, cor, click}) => {
  return (
    <>
        <button onClick={click} style={{backgroundColor: cor, width: '100px', height: '40px'}}>{titulo}</button>
    </>
  );
}

export default Butao;
