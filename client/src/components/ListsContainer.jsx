/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';

class ListsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  componentDidMount = () => {
    this.loadLists;
  };

  get loadLists() {
    return axios
      .get('api/v1/lists.json')
      .then(response => {
        console.log(response);
        this.setState({
          lists: response.data,
        });
      })
      .catch(error => console.log(error));
  }

  addNewList = (title, excerpt) => {
    axios
      .post('/api/v1/lists', { list: { title, excerpt } })
      .then(response => {
        console.log(response);
        const lists = [...this.state.lists, response.data];
        this.setState({ lists });
      })
      .catch(error => {
        console.log(error);
      });
  };

  removeList = id => {
    axios.delete(`/api/v1/lists/${id}`).then(() => {
      const { lists } = this.state;
      const newlist = lists.filter(list => list.id !== id);
      this.setState({ lists: newlist });
    });
  };

  render() {
    const { lists } = this.state;
    return (
      <React.Fragment>
        <div className="lists-container">
          {lists.map(list => (
            <List list={list} key={list.id} onRemoveList={this.removeList} />
          ))}
        </div>

        <NewListForm onNewList={this.addNewList} />
      </React.Fragment>
    );
  }
}
export default ListsContainer;
