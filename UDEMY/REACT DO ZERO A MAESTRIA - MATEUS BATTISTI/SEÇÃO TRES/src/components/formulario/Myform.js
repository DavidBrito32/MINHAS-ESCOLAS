
import './Myform.scss';
const Myform = () => {
  return (
    <>
    
        <form>
            <div>
                <label htmlFor='name'>Nome:</label>
                <input type="text" name='name' placeholder='Digite seu nome:' />
            </div>
            <input type="submit" value='Enviar' />
        </form>
    
    </>
  )
}

export default Myform;