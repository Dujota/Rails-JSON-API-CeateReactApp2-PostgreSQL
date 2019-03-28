import React from 'react';
import PropTypes from 'prop-types';

const NewListForm = ({ onNewList }) => {
  let title;
  let excerpt;
  const submit = e => {
    e.preventDefault();
    onNewList(title.value, excerpt.value);
    title.value = '';
    excerpt.value = '';
    title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={input => (title = input)}
        type="text"
        placeholder="Title..."
        required
      />
      <input
        ref={input => (excerpt = input)}
        type="text"
        placeholder="Excerpt..."
        required
      />
      <button>Add List</button>
    </form>
  );
};

NewListForm.propTypes = {
  onNewList: PropTypes.func,
};

NewListForm.defaultProps = {
  onNewList: () => {},
};

export default NewListForm;
