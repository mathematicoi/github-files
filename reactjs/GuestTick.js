class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: '',
      value:'',
      value2:'',
      
    };

    this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
            this.handleInputChange3 = this.handleInputChange3.bind(this);

    }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
    this.setState({
      [name]: value
    });
  }

  
  handleInputChange2(event) {
    this.setState({value: event.target.value});
  }
  
  handleInputChange3(event) {
    this.setState({value2: event.target.value});
  }
    
  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
              <input
           
            type="text"
            
            onChange={this.handleInputChange2} />      
          Name: 
          <input
           
            type="text"
            
            onChange={this.handleInputChange3} />
          Surname:
          
          <textarea value =  {"Welcome," + this.state.value + " " + this.state.value2}>
          </textarea>
                  
          <textarea value = {this.state.isGoing === true ? this.state.numberOfGuests  :"Please select 'is going' "}
           
           >  
          </textarea>
        </label>
      </form>
    );
  }
}

ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
);
