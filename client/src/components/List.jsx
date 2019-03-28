import React from 'react';
import PropTypes from 'prop-types';

const List = ({ list, onRemoveList }) => (
  <div>
    <div className="single-listItem" key={list.id}>
      <h4>{list.title}</h4>
      <p>{list.excerpt}</p>
      <button
        type="button"
        onClick={() => {
          onRemoveList(list.id);
        }}
      >
        Remove
      </button>
    </div>
  </div>
);

List.propTypes = { list: PropTypes.object, onRemoveList: PropTypes.func };
List.defaultProps = { list: {}, onRemoveList: () => {} };

export default List;
