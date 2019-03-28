/* eslint-disable no-unused-expressions */
import React, { PureComponent } from 'react';
import axios from 'axios';
import List from './List';
import NewListForm from './NewListForm';
import EditListForm from './EditListForm';

class ListsContainer extends PureComponent {
  state = {
    lists: [],
    editingListId: null,
  };

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

  editingList = id => {
    this.setState({ editingListId: id });
  };

  editList = (id, title, excerpt) => {
    axios
      .put(`/api/v1/lists/${id}`, {
        list: {
          title,
          excerpt,
        },
      })
      .then(response => {
        console.log(response);
        this.setState(() => ({
          editingListId: null,
        }));
      })
      .then(() => {
        this.loadLists;
      })
      .catch(error => console.log(error));
  };

  render() {
    const { lists, editingListId } = this.state;
    return (
      <React.Fragment>
        <div className="lists-container">
          {lists.map(list =>
            editingListId === list.id ? (
              <EditListForm
                list={list}
                key={list.id}
                editList={this.editList}
              />
            ) : (
              <List
                list={list}
                key={list.id}
                onRemoveList={this.removeList}
                editingList={this.editingList}
              />
            )
          )}
        </div>

        <NewListForm onNewList={this.addNewList} />
      </React.Fragment>
    );
  }
}
export default ListsContainer;
