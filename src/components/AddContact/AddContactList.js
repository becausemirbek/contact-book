import React from 'react';

import AddContact from './AddContact';
import List from '../List/List';
import EditContact from '../EditContact/EditContact'
import ShowContact from '../ShowContact/ShowContact';

class AddContactList extends React.Component {
  state = {
    data: [{}],
    currentEditingId: null,
    currentEditStatus: false,
    currentInfoId:null
  }

  handleAddContact = data => {
    this.setState({ data })
  }


  handleEditContact = async id => {
   this.setState({
     currentEditingId: id,
     currentEditStatus: !this.state.currentEditStatus
    })
  }

  handleInfoContact = id =>{
    this.setState({currentInfoId: id})
  }
  

  render() {
    return (
      <div>
        <AddContact 
          onChange={this.handleAddContact}
        />
        <List 
          handleInfoContact={this.handleInfoContact}
          handleEditContact={this.handleEditContact}
          data={this.state.data}
        />
        {this.state.currentEditStatus && 
          <EditContact
            currentEditingId={this.state.currentEditingId}
            onChange={this.handleAddContact}
            handleEditContact={this.handleEditContact}
            currentEditStatus={this.state.currentEditStatus}
          />
        }
        {this.state.currentInfoId !== null && 
          <ShowContact
            currentInfoId={this.state.currentInfoId}
          />
        }
      </div>
    );
  }
}

export default AddContactList;