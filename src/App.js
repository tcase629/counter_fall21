import { Component } from 'react'
import Counter from './components/counter/Counter';

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = { val: 0 }
  // this.inc =  this.inc.bind
  // }
  // state = { val: 0, age: 54 }
  // old
  // inc() {

  // }

  // inc = () => {
  //   const { val } = this.state
  //   this.setState({ val: val + 1})
  // }

  // dec = () => {
  //   const { val } = this.state
  //   this.setState({ val: val - 1})
  // }

  render(){
    // const { val, age } = this.state
    return (
      <>
        {/* <h1>Counter</h1>
        <p>{val}</p>
        <p>{age}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button> */}
        <Counter name="red"/>
        <Counter name="blue" />
        <Counter name="pink" />
        <Counter name="green" />
      </>
    )
  }
}


export default App;