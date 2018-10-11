
//making 2 buttons set to "off" and "on" independenlty using 2 handlestates.

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn2: true};
    this.state = {isToggleOn: false};
    

    

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
     this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  
  handleClick2() {
    this.setState(prevState => ({
      isToggleOn2: !prevState.isToggleOn2
    }));
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' :
       'OFF'}
      </button>
        
        
       <button onClick={this.handleClick2}>
        {this.state.isToggleOn2 ? 'ON' : 'OFF'}
      </button>
        </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
