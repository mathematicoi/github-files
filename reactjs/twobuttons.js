class Button extends React.Component{


// handleClick = () => {
//  this.setState((prevState) => ({

//       counter : prevState.counter + 1
//    }));
 
//  }; 

render() {
return (
   <button onClick ={this.props.onClickFunction}>
      incrementvalue={this.props.incrementvalue}
  

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
      <Button incrementvalue={1} onClickFunction = {this.incrementCounter} />
        <Button incrementvalue={2} onClickFunction = {this.incrementCounter} />

      <Result counter = {this.state.counter}/>
    </div>
    );
   }

}
ReactDOM.render(<App />,mountNode);

