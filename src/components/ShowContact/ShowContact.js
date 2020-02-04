import React from "react";
import axios from "axios";

class ShowContact extends React.Component {
  state = {
    data: {}
  };

  componentDidMount(){
    this.fetchData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props) {
      this.props = nextProps
      this.fetchData();
    }
    return nextProps.data !== this.props.data || nextState !== this.state;
  }

  fetchData = async () => {
    const response = await axios.get(`http://localhost:8000/list/${this.props.currentInfoId}`);
    this.setState({ data: response.data });
  };

  render() {
  return <div> Name: {this.state.data.nameVal} <br/> Lastname: {this.state.data.lastNameVal} <br/> Phone: {this.state.data.phoneVal}</div>;
  }
}

export default ShowContact;
