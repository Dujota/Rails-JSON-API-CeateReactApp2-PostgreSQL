import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class EditListForm extends PureComponent {
  state = {
    id: 0,
    title: '',
    excerpt: '',
  };

  componentDidMount() {
    const { list } = this.props;
    const { id, title, excerpt } = list;
    this.setState({ id, title, excerpt });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('clicked');
    const { id, title, excerpt } = this.state;
    const { editList } = this.props;
    editList(id, title, excerpt);
  };

  render() {
    const { title, excerpt } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="excerpt"
          placeholder="Excerpt..."
          value={excerpt}
          onChange={this.handleChange}
        />

        <button type="submit">Update List</button>
      </form>
    );
  }
}

EditListForm.propTypes = {
  list: PropTypes.object,
  editList: PropTypes.func,
};

EditListForm.defaultProps = { list: {}, editList: () => {} };

export default EditListForm;
