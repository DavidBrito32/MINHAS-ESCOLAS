const Eventos = () =>{

    const renderSomething = (x) => {
        if(x){
            return <h1>Olá, mundo!!! fui renderizado</h1>
        }else{
            return <h1>Olá, mundo!!! não fui renderizado :-(</h1>
        }
    }

    return(
        <>
        {renderSomething()};
        </>
    );
}

export default Eventos;