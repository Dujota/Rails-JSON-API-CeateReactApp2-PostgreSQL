import React, { Component } from 'react';
import axios from 'axios';
import List from './List';

class ListsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount() {
    axios
      .get('api/v1/lists.json')
      .then(response => {
        console.log(response);
        this.setState({
          lists: response.data,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { lists } = this.state;
    return (
      <div className="lists-container">
        {lists.map(list => (
          <List list={list} key={list.id} />
        ))}
      </div>
    );
  }
}
export default ListsContainer;
