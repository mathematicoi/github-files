function BoilingVerdict(props) {
  var min = 1;
   var max = 100;
   var rand =  min + (Math.random() * (max-min));
  
  if (props.celsius<rand) {
    return <p>too small.</p>;
  } else if(props.celsius>rand) {
      return <p>too big .</p>;

  } else {
  return <p>You are right .</p>;
    var rand =  min + (Math.random() * (max-min));
  }
  
  
}


function BoilingVerdict2(prop) {
  if (prop.whoitis ==="water") {
    return <p>success</p>;
  }
  return <p>Try again</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);

    this.state = {temperature: '',
                  name: ''
                 
                 };
      

  }
  
  

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  
  
   handleChange2(f) {
    this.setState({name: f.target.value});
  }


  render() {
    const temperature = this.state.temperature;
    let name = this.state.name;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} ></input>
        
        <input 
          value2={name}
          onChange={this.handleChange2} ></input>
        <BoilingVerdict
          celsius={parseFloat(temperature)} 
          />
        
        <BoilingVerdict2 
          whoitis = {(name)}
          />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
