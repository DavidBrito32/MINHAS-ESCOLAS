const Challenge = () => {

    let numero = 24;
    let numero2 = 23;

    const soma = () => {
        console.log(`O resultado da soma é: ${numero} + ${numero2} = ${numero + numero2}`);
    }

    return (
        <>
            <h1>bem vindo a função de soma: os numeros a serem somados são: {numero} e {numero2}</h1>

            <button onClick={soma}>Veja o resultado</button>

        </>
    );
}

export default Challenge;