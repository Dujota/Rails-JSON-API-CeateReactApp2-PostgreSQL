import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';

class ListsContainer extends Component {
  state = {
    lists: [],
  };

  componentDidMount = () => {
    this.loadLists();
  };

  loadLists = () =>
    axios
      .get('api/v1/lists.json')
      .then(response => {
        console.log(response);
        this.setState({
          lists: response.data,
        });
      })
      .catch(error => console.log(error));

  render() {
    const { lists } = this.state;
    return (
      <React.Fragment>
        <div className="lists-container">
          {lists.map(list => (
            <List list={list} key={list.id} />
          ))}
        </div>

        <NewListForm onNewList={this.addNewList} />
      </React.Fragment>
    );
  }
}
export default ListsContainer;
