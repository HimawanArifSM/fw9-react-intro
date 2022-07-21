import React from "react"
import {Col, Container} from "react-bootstrap"

const Series = ({name})=>{
  const [act, result]=React.useState(0)
  React.useEffect(()=>{
    console.log(act)
  },[act])
  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
    <section>
    <Col className="d-flex flex-row d-flex gap-3"><button disabled={act<1} onClick={()=>result(act-1)}>-</button>
    <h1>{act}</h1>
    <button onClick={()=>result(act+1)}>+</button></Col>
    </section>
    </Container>
  )
}

export default Series

// class Series extends React.Component{
//   render(){
//     return (
//       <>
//         <>{this.props.name}</>
//       </>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     return(
//       <>
//         <button onClick={()=>this.setState()}>-</button>
//         <Series name={(0)}></Series>
//         <button onClick={()=>this.setState()}>+</button>
//       </>
//     )
//   }
// }

// export default App

