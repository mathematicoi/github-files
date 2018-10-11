//this file submits a textbox value and alerts the user of the input typed in

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    
    event.preventDefault();
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit }  >
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
      
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
