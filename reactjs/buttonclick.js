class Button extends React.Component{


// handleClick = () => {
//  this.setState((prevState) => ({

//       counter : prevState.counter + 1
//    }));
 
//  }; 

render() {
return (
   <button onClick ={this.props.onClickFunction}>
      "hello there"

  </button>
  
  
);
}



}
const Result = (props) => {
return (
<div>{props.counter}</div>);

};


const Result2 = (props) => {
return (
<div>{props.counter2}</div>);

};

class App extends React.Component {
state = { counter: 0 };
state2 = { counter2: 1 };

incrementCounter = () => {

 this.setState((prevState) => ({

      counter : prevState.counter + 1
   }));
 
 }; 



   render() {
   	return (
    <div>
      <Button onClickFunction = {this.incrementCounter}/>
      <Result counter = {this.state.counter}/>
       <Result2 hi = {this.state2.counter2}/>
    </div>
    );
   }
   
   
   



}
ReactDOM.render(<App />,mountNode);