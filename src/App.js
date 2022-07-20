import React from "react"
import {Col, Row, Container} from "react-bootstrap"

const Series = ({name})=>{
  const [act, result]=React.useState(0)
  React.useEffect(()=>{
    console.log(act)
  },[act])
  return (
    <Container>
    <Row className="text-align-center">
    <Col><button onClick={()=>result(act-1)}>-</button></Col>
    <Col>{act}</Col>
    <Col><button onClick={()=>result(act+1)}>+</button></Col>
    </Row>
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

