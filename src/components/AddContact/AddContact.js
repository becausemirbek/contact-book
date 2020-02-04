import React from 'react';
import axios from 'axios'

class AddContact extends React.Component {
  state = {
    nameVal: '',
    lastNameVal: '',
    phoneVal: '',

  }

  handleNameInput = event => {
    this.setState({ nameVal: event.target.value })
  }
  handleLastNameInput = event => {
    this.setState({ lastNameVal: event.target.value })
  }
  handlePhoneInput = event => {
    this.setState({ phoneVal: event.target.value })
  }

  handleAddContact = async () => {
    const nameVal = this.state.nameVal;
    const lastNameVal = this.state.lastNameVal;
    const phoneVal = this.state.phoneVal;
    if(!nameVal|| !lastNameVal || !phoneVal) return 
    
    const obj = {
      nameVal,
      lastNameVal,
      phoneVal
    }

    const response = await axios.post('http://localhost:8000/list', obj)

    if(response.status > 200 && response.status < 300) {
      const getResponse = await axios.get('http://localhost:8000/list')

    if(!this.props.onChange) return
    this.props.onChange(getResponse.data)

    this.setState({
      nameVal: "",
      lastNameVal: "",      
      phoneVal: "",
    })
      
    }
  }
  

  render() {
    return (
      <div className="add-contact">
        <input 
          onChange={this.handleNameInput}
          placeholder="Введите Имя"
          type="text"
          value={this.state.nameVal}
        />
        <input 
          onChange={this.handleLastNameInput}
          placeholder="Фамилию"
          type="text"
          value={this.state.lastNameVal}
        />
        <input 
          onChange={this.handlePhoneInput}
          placeholder="Введите Номер"
          type="text"
          value={this.state.phoneVal}
        />
        <button onClick={this.handleAddContact}>Add Contact</button>
      </div>
    );
  }
}

export default AddContact;
