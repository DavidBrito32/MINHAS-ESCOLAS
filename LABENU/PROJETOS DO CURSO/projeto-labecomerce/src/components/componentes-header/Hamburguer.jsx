import './Hamburguer.scss'

const Hamburguer = (props) => {


  return (
    <div onClick={props.click} className={props.burguer ? "Burguer active" : "Burguer"}>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export default Hamburguer