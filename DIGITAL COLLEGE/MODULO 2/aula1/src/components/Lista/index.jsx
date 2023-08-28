import './index.css'

const Lista = ({children, tituloLista}) => {
    return (
        <>
                <h2>{tituloLista}</h2>
                    <div className='cards'>
                        {children}
                    </div>
        </>
    );
};

export default Lista;