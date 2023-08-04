import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
        <>
                <button onClick={myFunction}>Estou Aparecendo pelo componente filho</button>
        </>
  )
}

export default ExecuteFunction
