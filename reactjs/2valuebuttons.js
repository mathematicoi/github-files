class Button extends React.Component{


// handleClick = () => {
//  this.setState((prevState) => ({

//       counter : prevState.counter + 1
//    }));
 
//  }; 

render() {
return (
   <button 
   onClick={()=>this.props.onClickFunction(this.props.incrementvalue)}>
   <div>
      {this.props.incrementvalue}
   
      
  </div>

  </button>
  
  
);
}
}






const Result = (props) => {
return (
<div>{props.counter}</div>);

};



class App extends React.Component {
state = { counter: 0 };

incrementCounter = (incrementvalue) => {

 this.setState((prevState) => ({

      counter : prevState.counter + incrementvalue
   }));
  
 }; 



   render() {
    return (
    <div>
      <Button incrementvalue={1} onClickFunction = {this.incrementCounter} />
        <Button incrementvalue={-1} onClickFunction = {this.incrementCounter} />

      <Result counter = {this.state.counter}/>
    </div>
    );
   }
}

ReactDOM.render(<App />,mountNode);