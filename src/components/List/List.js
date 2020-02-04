import React, { Component } from "react";
import axios from "axios";

class List extends Component {
  state = {
    data: [{}]
  };
  componentDidMount() {
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data !== this.props.data || nextProps !== this.props) {
      nextState.data = nextProps.data;
      this.fetchData();
    }
    return nextProps.data !== this.props.data || nextState !== this.state;
  }

  fetchData = async () => {
    const response = await axios.get("http://localhost:8000/list");

    this.setState({ data: response.data });
  };

  handleDeleteContact = async id => {
    await axios.delete(`http://localhost:8000/list/${id}`);

    this.fetchData();
  };

  // handleEditContact = id => {
  //   this.props.handleEditContact(id);
  // };

  handleMoreContact = id => {
    this.props.handleInfoContact(id);
  };

  render() {
    return (
      <ul>
        {this.state.data.map(item => (
          <li key={item.id}>
            {item.nameVal} {item.lastNameVal} {item.phoneVal}
            <button onClick={() => this.props.handleEditContact(item.id)}>
              Edit
            </button>

            <button onClick={() => this.handleMoreContact(item.id)}>
              More
            </button>

            <button onClick={() => this.handleDeleteContact(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
