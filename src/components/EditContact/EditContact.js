import React from "react";
import axios from "axios";

class EditContact extends React.Component {
  state = {
    nameVal: "",
    lastNameVal: "",
    phoneVal: "",
    id:""
  };

  componentDidMount(){
    this.fetchData();
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.currentEditStatus !== this.props.currentEditStatus) {
  //     this.fetchData(nextProps.currentEditingId);
  //     console.log('sdfghjkl')
  //   }
  //   return nextProps !== this.props || nextState !== this.state;
  // }

  fetchData = async () => {
    if(this.props.currentEditingId===null)return
    const response = await axios.get("http://localhost:8000/list/"+this.props.currentEditingId);
    this.setState( { ...response.data } );
  };
  

  handleEditName = event => {
    this.setState({ nameVal: event.target.value })
  }

  handleEditLastName = event => {
    this.setState({ lastNameVal: event.target.value })
  }

  handleEditPhone = event => {
    this.setState({ phoneVal: event.target.value })
  }

  handleEditContact = async () => {
    if (!this.state.nameVal || !this.state.lastNameVal || !this.state.phoneVal || this.props.currentEditingId === null) return;

    const obj = {...this.state}
    await axios.patch("http://localhost:8000/list/"+this.props.currentEditingId, obj);

    const getResponse = await axios.get("http://localhost:8000/list/")
    // if (response.status >= 200 && response.status < 300) {
    //   this.props.onCancel(null);
    // }
    this.props.onChange(getResponse.data)
    const id = this.props.currentEditingId
    this.props.handleEditContact(id)
    
  };


  render() {
      return (
        <div>
          <input 
            onChange={this.handleEditName}
            value={this.state.nameVal}
            type="text" 
          />
          <input 
            onChange={this.handleEditLastName}
            value={this.state.lastNameVal}
            type="text" 
          />
          <input 
            onChange={this.handleEditPhone} 
            value={this.state.phoneVal}
            type="text" 
          />
          <button onClick={this.handleEditContact}>Save</button>
          <button onClick={this.props.handleEditContact}>Cancel</button>
        </div>
      );
  }
}

export default EditContact;
